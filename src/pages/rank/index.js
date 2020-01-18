/*
 * @Description: 
 * @Author: cn
 * @Date: 2019-10-02 16:48:20
 * @LastEditTime: 2019-12-07 21:56:58
 * @LastEditors: cn
 */
import React, { useEffect } from 'react';
import Loading from '../../baseui/loading';
import { Container, OfficalWrapper, OfficalItem, GlobalWrapper, GlobalItem } from './style';
import { connect } from 'react-redux';
import { changeLoading, getRankGlobalList, getOfficalList ,getSingerRankList} from './store';
import { formatCount ,combineArtist} from '../../api/utils';
import { action as playActions } from '../../pages/player/store';
import {changeIsLike} from '../../pages/home/store'


//排行榜列表找出第一个没有歌单的排行榜的索引,作为官方榜与全球版的分割
const filterIndex = (rankList) => {
    for (let i = 0; i < rankList.length - 1; i++) {
        if (rankList[i].tracks.length && !rankList[i + 1].tracks.length) {
            return i + 1;
        }
    }
}
function Rank(props) {
    const { globalRankList, getRankGlobalListDispatch } = props;
    const { officalRankList,getRankOfficalListDispatch } = props;
    const { singerRankList,getSingerRankListDispatch} = props;
    const { changeSongsIndexDispatch, getCurrentSongDispatch, changeIsPlayDispatch ,changePlayListsDispatch} = props;
    const { changeIsLikeDispatch } = props;
    const { history ,loading} = props;
    useEffect(() => {
        if (!globalRankList.length) {
            getRankGlobalListDispatch()
        }
        if(!officalRankList.length){
            getRankOfficalListDispatch()
        }
        if(!singerRankList.length){
            getSingerRankListDispatch()
        }
    }, [])
    //点击歌曲
      const setIndex = (songs, index) => {
        changePlayListsDispatch(songs);
        changeSongsIndexDispatch(index);
        changeIsPlayDispatch(true);
        getCurrentSongDispatch(songs[index].id);
        changeIsLikeDispatch(false);
    }
    //官方榜
    const renderOfficalRanks = () => {
        if(officalRankList.length==0)return;
        return (
            <OfficalWrapper>
                {
                   officalRankList.map((item,i)=>{
                    let playlist = item.playlist;
                    let tracks = playlist.tracks.slice(0,8);
                    return <OfficalItem key={i}>
                                <div className="img-wrapper">
                                    <div className="decorate"></div>
                                    <div className="update-time">{new Date(playlist.trackUpdateTime).toLocaleDateString()}更新</div>
                                    <img src={`../../rank/${i+1}.png`} alt=""></img>
                                </div>
                                <ul>
                                    {
                                        tracks.map((track,index)=>{
                                            return  <li key={track.id} onClick={()=>setIndex(playlist.tracks,index)}>
                                                        <span className="index" style={{color:index<=2?'red':'#666'}}>{index + 1}</span>
                                                        <span className="song-name">{track.name}</span>
                                                        <span className="singer">{combineArtist(track.ar)}</span>
                                                    </li>
                                        })
                                    }
                                    <li onClick={()=>history.push(`/recommend/${playlist.id}`)}>
                                        <div>查看全部></div>
                                    </li>
                                </ul>
                            </OfficalItem>
                   }) 
                }
                 {
                    Object.keys(singerRankList).length>0?
                        <OfficalItem key="5">
                            <div className="img-wrapper">
                                <div className="decorate"></div>
                                <div className="update-time">{new Date(singerRankList.updateTime).toLocaleDateString()}更新</div>
                                <img src="../../rank/5.png" ></img>
                            </div>
                            <ul>
                                {
                                 singerRankList.artists.slice(0,8).map((artist,index)=>{
                                    return  <li key={artist.id} onClick={()=>history.push(`/singers/${artist.id}`)}>
                                                <span className="index" style={{color:index<=2?'red':'#666'}}>{index + 1}</span>
                                                <span className="song-name">{artist.name}</span>
                                            </li>
                                 })   
                                }
                               
                                <li onClick={()=>history.push("/singers")}> 
                                    <div>查看全部></div>
                                </li>
                            </ul>
                        </OfficalItem>
                :null
                }
                
            </OfficalWrapper>
        )
    }

    //全球榜
    const renderGlobalRanks = (globalList) => {
        return <GlobalWrapper>
            {
                globalList.map((item, i) => {
                    return <GlobalItem key={'global' + i} onClick={() => history.push(`/recommend/${item.id}`)}>
                        <div className="img-wrapper">
                            <div className="decorate"></div>
                            <img src={item.coverImgUrl} alt="rank" ></img>
                            <div className="play_count">
                                <i className="iconfont icon-icon-test"></i>
                                <span>{formatCount(item.playCount)}</span>
                            </div>
                        </div>
                        <div className="desc">
                            {item.name}
                        </div>
                    </GlobalItem>
                })
            }

        </GlobalWrapper>
    }
    let globalStartIndex = filterIndex(globalRankList);
    let globalList = globalRankList.slice(globalStartIndex);
    return (
        <Container>
            <div className="title">官方榜</div>
            {renderOfficalRanks()}
            <div className="title">全球榜</div>
            {renderGlobalRanks(globalList)}
            {loading ?<Loading/>:null}
        </Container>
    )
}
//redux 状态映射到props
const mapStateToProps = (state) => {
    return {
        globalRankList: state.rank.toJS().globalRankList,
        officalRankList: state.rank.toJS().officalRankList,
        singerRankList:state.rank.toJS().singerRankList,
        loading: state.rank.toJS().loading,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        getRankGlobalListDispatch: () => {
            dispatch(getRankGlobalList())
        },
        getRankOfficalListDispatch: () => {
            dispatch(changeLoading(true))
            dispatch(getOfficalList())
        },
        getSingerRankListDispatch: () => {
            dispatch(getSingerRankList())
        },
        changeSongsIndexDispatch: (index) => {
            dispatch(playActions.changeSongIndex(index));
        },
        changePlayListsDispatch: (data) => {
            dispatch(playActions.changePlayLists(data));
        },
        getCurrentSongDispatch: (id) => {
            dispatch(playActions.getCurrentSong(id));
            dispatch(playActions.getSongLyric(id))
        },
        changeIsPlayDispatch: (data) => {
            dispatch(playActions.changePlay(data))
        },
        changeIsLikeDispatch:(data)=>{
            dispatch(changeIsLike(data))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(React.memo(Rank)) 