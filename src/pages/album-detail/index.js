/*
 * @Description: 歌单/专辑详情页
 * @Author: cn
 * @Date: 2019-10-03 14:32:13
 * @LastEditTime: 2019-11-24 12:19:44
 * @LastEditors: cn
 */
import React, { useEffect } from 'react';
import { Header, AlbumDeatil,DescriptionContainer,Item} from './style';
import { Tab, TabPanel } from '../../components/tabs';
import SongTable from '../../components/song-table';
import Comment from '../../components/comment';
import { connect } from 'react-redux';
import { action } from './store';
import {formatStr} from '../../api/utils';
function AlbumDeatils(props) {
    const { total, currentPage, currentPageDispatch } = props;
    const { album_desc, getAlbumDescDispatch } = props; //专辑详情
    const { album_dynamic,getAlbumDynamicDispatch} = props;
    const { hot_comment, getHotCommentDispatch } = props; //热门评论
    const { comment, getCommentDispatch } = props //最新评论
    const { playing } = props;
    const { match } = props;

    //切换歌单的时候重新渲染
    useEffect(() => {
        let id = match.params.id;
        getAlbumDescDispatch(id);
        getAlbumDynamicDispatch(id);
        getHotCommentDispatch(id);
        getCommentDispatch(id);
    }, [match.params.id])

    //查询下一页评论的时候
    useEffect(() => {
        let id = match.params.id;
        getCommentDispatch(id);
    }, [currentPage])

    const renderDescriptionItem = (description)=>{
        return <Item>
                <div className="title">专辑介绍</div>
                {formatStr(description).map((txt,i)=>{
                    return <p key={i}>{txt}</p>
                })}
            </Item> 
    }
    return (
        <AlbumDeatil playing={playing}>
            {
                Object.keys(album_desc).length > 0 ?
                    <Header>
                        <div className="img-wrapper">
                            <img src={album_desc.album.picUrl} alt="封面"></img>
                            <span className="mask"></span>
                        </div>
                        <div className="desc">
                            <div className="title">
                                <span>专辑</span>
                                <span>{album_desc.album.name}</span>
                            </div>
                            <div className="option">
                                <div>
                                    <i className="iconfont icon-bofang"></i>
                                    <span>播放全部 ＋</span>
                                </div>
                                <div>
                                    <i className="iconfont icon-xihuan"></i>
                                    <span>收藏({Object.keys(album_dynamic).length > 0 ?album_dynamic.subCount:null})</span>
                                </div>
                                <div>
                                    <i className="iconfont icon-fenxiang"></i>
                                    <span>分享({Object.keys(album_dynamic).length > 0 ?album_dynamic.shareCount:null})</span>
                                </div>
                            </div>
                            <div className="singer">
                                歌手：{album_desc.album.artists[0].name}
                            </div>
                            <div className="time">
                                时间：{new Date(album_desc.album.publishTime).toLocaleDateString()}
                            </div>
                        </div>
                    </Header> : null
            }
            <Tab defaultSelect="歌曲列表">
                <TabPanel label="歌曲列表">
                    {Object.keys(album_desc).length > 0 ?
                        <SongTable songs={album_desc.songs} />
                        : null
                    }

                </TabPanel>
                <TabPanel label={`评论(${total})`}>
                    <div style={{ padding: '0 30px' }}>
                        <Comment
                            title=''
                            total={total}
                            hotComments={hot_comment}
                            newComments={comment}
                            currentPageChange={currentPageDispatch}
                        />
                    </div>
                </TabPanel>
                <TabPanel label="专辑详情">
                {Object.keys(album_desc).length > 0 ?
                    <DescriptionContainer>
                        {renderDescriptionItem(album_desc.album.description)}
                    </DescriptionContainer>
                    :null
                }
                </TabPanel>
            </Tab>
        </AlbumDeatil>
    )
}
//redux 状态映射到props
const mapStateToProps = (state) => {
    return {
        total: state.albumDetails.toJS().total,
        currentPage: state.albumDetails.toJS().currentPage,
        album_desc: state.albumDetails.toJS().album_desc,
        album_dynamic:state.albumDetails.toJS().album_dynamic,
        hot_comment: state.albumDetails.toJS().hot_comment,
        comment: state.albumDetails.toJS().comment,
        playing: state.player.toJS().play,  //是否在播放

    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        getAlbumDescDispatch: (id) => {
            dispatch(action.getAlbumDetails(id))
        },
        getAlbumDynamicDispatch: (id) => {
            dispatch(action.getAlbumDynamic(id))
        },
        getHotCommentDispatch: (id) => {
            dispatch(action.getHotComment(id))
        },
        getCommentDispatch: (id) => {
            dispatch(action.getComment(id))
        },
        currentPageDispatch: (currentPage) => {
            dispatch(action.changePage(currentPage))
        },
    }

}
export default connect(mapStateToProps, mapDispatchToProps)(React.memo(AlbumDeatils))
