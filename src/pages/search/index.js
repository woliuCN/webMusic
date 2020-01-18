/*
 * @Description: 搜索回显页面
 * @Autor: cn
 * @Date: 2019-10-23 10:41:09
 * @LastEditors: cn
 * @LastEditTime: 2019-11-24 11:14:22
 */
import React, { useState, useEffect, useRef } from 'react';
import { Tab, TabPanel } from '../../components/tabs';
import Pagination from '../../components/pagination';
import SongTable from '../../components/song-table';
import MvList from '../../components/mv-list';
import { SearchContainer, AlbumList, SingerList, UserList, SongSheet } from './style';
import { action } from './store';
import { connect } from 'react-redux';
import { searchType } from '../../api/config';

function Search(props) {
    const [title, setTitle] = useState('首单曲');
    const { currentPage, total, currentPageDispatch, type, changeTypeDispatch } = props;
    const { allSearchList, getAllSearchListDispatch } = props;
    const { match, history } = props;
    const { playing } = props;
    const TabRef = useRef();
    let keyWords = match.params.keywords;
    //如果是重新搜索的话,就得初始化所有的，包括当前tab是单曲，分页是1开始
    useEffect(() => {
        changeTypeDispatch(1);
        currentPageDispatch(1);
        TabRef.current.resetSelect();
        getAllSearchListDispatch(keyWords, 100);
    }, [match.params.keywords])

    //如果只是改变tab的话
    useEffect(() => {
        let limit = searchType[type].limit;
        currentPageDispatch(1);
        getAllSearchListDispatch(keyWords, limit);
    }, [type])

    //如果是改变分页的话
    useEffect(() => {
        let limit = searchType[type].limit;
        getAllSearchListDispatch(keyWords, limit);
    }, [currentPage])

    const retValue = (label) => {
        switch (label) {
            case "单曲":
                setTitle("首单曲");
                changeTypeDispatch(1);
                break;
            case "歌手":
                setTitle("位歌手");
                changeTypeDispatch(100);
                break;
            case "专辑":
                setTitle("张专辑");
                changeTypeDispatch(10);
                break;
            case "视频":
                setTitle("个视频");
                changeTypeDispatch(1004);
                break;
            case "歌单":
                setTitle("个歌单");
                changeTypeDispatch(1000);
                break
            case "用户":
                setTitle("位用户");
                changeTypeDispatch(1002);
                break;
            default:
                break;
        }
    }

    //搜索专辑列表
    const renderAlbumList = (albums) => {
        return <AlbumList>
            {
                albums.map((album, i) => {
                    return <li key={"album" + i} onClick={()=>history.push(`/album/${album.id}`)}>
                        <div className="img-wrapper">
                            <img src={album.picUrl}></img>
                            <span className="mask"></span>
                        </div>
                        <div className="ablum-name">{album.name}</div>
                        <div className="singer-name">{album.artist.name}</div>
                    </li>
                })
            }

        </AlbumList>
    }
    //歌手列表
    const renderSingerList = (artists) => {
        return <SingerList >
            {artists.map((artist, i) => {
                return <li key={"searchSinger" + i} onClick={() => history.push(`/singers/${artist.id}`)}>
                    <div className="img-wrapper">
                        <img src={artist.img1v1Url} alt={artist.name}></img>
                    </div>
                    <div className="info">
                        <span>{artist.name}</span>
                        {
                            artist.transNames ? <span className="alias">({artist.transNames[0]})</span> : null
                        }
                        <i className="iconfont icon-yonghu"></i>
                    </div>
                </li>
            })
            }
        </SingerList>
    }

    //歌单列表
    const renderSongSheet = (playlists) => {
        return <SongSheet>
            {
                playlists.map((playlist, i) => {
                    return <li key={"playlist" + i} onClick={() => history.push(`/recommend/${playlist.id}`)}>
                        <div className="img-wrapper">
                            <img src={playlist.coverImgUrl} alt=''></img>
                        </div>
                        <div className="info">
                            {playlist.name}
                        </div>
                        <div className="song-count">{playlist.trackCount}首</div>
                        <div className="creator">by {playlist.creator.nickname}</div>
                    </li>
                })
            }

        </SongSheet>
    }

    //用户列表
    const renderUserList = (userprofiles) => {
        return <UserList>
            {
                userprofiles.map((userprofile, i) => {
                    return <li>
                        <div className="img-wrapper">
                            <img src={userprofile.avatarUrl}></img>
                        </div>
                        <div className="user-name">
                            <span>{userprofile.nickname}</span>
                            <i className="iconfont icon-nv"></i>
                        </div>
                        <div className="desc">{userprofile.signature}</div>
                    </li>
                })
            }
        </UserList>
    }

    return (
        <SearchContainer playing={playing}>
            <p>搜索<span>"{keyWords}"</span>,找到<span>{total}{title}</span></p>
            <Tab ref={TabRef} defaultSelect="单曲" onChangeTabPanel={(label) => retValue(label)}>
                <TabPanel label="单曲" >
                    {allSearchList.songs && allSearchList.songs.length > 0 && type == 1 ? <SongTable flag={true} songs={allSearchList.songs} /> : null}
                    <div style={{ display: total > 100 ? 'block' : 'none' }}>
                        <Pagination initialPage={currentPage} totalPages={Math.ceil(total / 100)} handleSelectPage={currentPageDispatch} />
                    </div>
                </TabPanel>
                <TabPanel label="歌手">
                    {allSearchList.artists && allSearchList.artists.length > 0 && type == 100 ? renderSingerList(allSearchList.artists) : null}
                    <div style={{ display: total > 20 ? 'block' : 'none' }}>
                        <Pagination initialPage={currentPage} totalPages={Math.ceil(total / 20)} handleSelectPage={currentPageDispatch} />
                    </div>
                </TabPanel>
                <TabPanel label="专辑">
                    {allSearchList.albums && allSearchList.albums.length > 0 && type == 10 ? renderAlbumList(allSearchList.albums) : null}
                    <div style={{ display: total > 30 ? 'block' : 'none' }}>
                        <Pagination initialPage={currentPage} totalPages={Math.ceil(total / 30)} handleSelectPage={currentPageDispatch} />
                    </div>
                </TabPanel>
                <TabPanel label="视频">
                    {allSearchList.mvs && allSearchList.mvs.length > 0 && type == 1004 ? <MvList haveTitle={false} width="17" mvLists={allSearchList.mvs} /> : null}
                    <div style={{ display: total > 100 ? 'block' : 'none' }}>
                        <Pagination initialPage={currentPage} totalPages={Math.ceil(total / 100)} handleSelectPage={currentPageDispatch} />
                    </div>
                </TabPanel>
                <TabPanel label="歌单">
                    {allSearchList.playlists && allSearchList.playlists.length > 0 && type == 1000 ? renderSongSheet(allSearchList.playlists) : null}
                    <div style={{ display: total > 30 ? 'block' : 'none' }}>
                        <Pagination initialPage={currentPage} totalPages={Math.ceil(total / 30)} handleSelectPage={currentPageDispatch} />
                    </div>
                </TabPanel>
                <TabPanel label="用户">
                    {allSearchList.userprofiles && allSearchList.userprofiles.length > 0 && type == 1002 ? renderUserList(allSearchList.userprofiles) : null}
                    <div style={{ display: total > 30 ? 'block' : 'none' }}>
                        <Pagination initialPage={currentPage} totalPages={Math.ceil(total / 30)} handleSelectPage={currentPageDispatch} />
                    </div>
                </TabPanel>
            </Tab>
        </SearchContainer>
    )
}

const mapStateToProps = (state) => {
    return {
        currentPage: state.search.toJS().currentPage,
        total: state.search.toJS().total,
        allSearchList: state.search.toJS().allSearchList,
        type: state.search.toJS().type,
        playing: state.player.toJS().play,  //是否在播放
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        getAllSearchListDispatch: (title, limit) => {
            dispatch(action.getAllSearchList(title, limit));
        },
        currentPageDispatch: (currentPage) => {
            dispatch(action.changePage(currentPage))
        },
        changeTypeDispatch: (type) => {
            dispatch(action.changeType(type))
        }

    }
}
export default connect(mapStateToProps, mapDispatchToProps)(React.memo(Search)) 