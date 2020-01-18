/*
 * @Description: 
 * @Author: cn
 * @Date: 2019-10-05 14:24:55
 * @LastEditTime: 2019-11-28 09:55:55
 * @LastEditors: cn
 */
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import style from '../../../assets/global-style';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { formatTime } from '../../../api/utils';
import { getSingerAlbumSongsRequest } from '../../../api/request';
import { connect } from 'react-redux';
import { action } from '../../player/store';
import { changeIsLike } from '../../../pages/home/store';
const Container = styled.div`
      padding:2.3077rem;
      display:flex;
      align-items:flex-start;
      .img-wrapper{
         flex:0 0 15.3846rem;
         height:15.3846rem;
         img{
             width:11.5385rem;
             height:11.5385rem;
         }
         .mask{
            position:absolute;
            background:url("../../singer/tempsnip.png") no-repeat;
            width: 7.6923rem;
            height: 11.5385rem;
            background-position: 0 0.7692rem;  
         }
         .time{
             font-size:0.9231rem;
             line-height:1.8462rem;
             color:#6a6a6a;
         }
      }
      .song-list{
          flex:1;
          .title{
           font-size:0.9231rem;
           margin-bottom:0.7692rem;
          }
          .foot{
            font-size:1rem;
            color:#aaa;
            line-height:2rem;
            cursor: pointer;
          }
      }
`
const List = styled.div`
      width:100%;
      box-sizing:border-box;
      border:0.0769rem solid #dadada;
    
`
const ListItem = styled.div`
      display:flex;
      height:2.3077rem;
      align-items:center;
      >span:nth-child(1){
          flex:0 0 3.0769rem;
          font-size:0.9231rem;
          text-align:center;
          color:#888;
      }
      >span:nth-child(2){
          flex:0 0 3.8462rem;
          .iconfont{
                color:#888;
                font-size:1.2308rem;
                vertical-align:middle;
                margin-right:0.7692rem;
            }
      }
      >span:nth-child(3){
          flex:1;
          font-size:0.9231rem;
          margin-left:0.4615rem;
          >span{
            vertical-align: middle;
          }
         .icon-sq{
            color:#ff551f;
            font-size:1.8462rem;
            margin: 0 0.6154rem;
            vertical-align: middle;
        
         }
         .icon-mv{
            color:${style["theme-color"]};
            font-size:1.5385rem;
            vertical-align: middle;
            cursor: pointer;
         }
      }
      >span:nth-child(4){
          flex:0 0 4.6154rem;
          font-size:0.9231rem;
          text-align:left;
          color:#888;
      }
      &:nth-child(even){
        background:#fafafa;
      }
      &:hover{
        background:#eee;
      }
     

`


function SongList(props) {
    const { imgUrl, hotSongs, album } = props;
    const [showAll, setShowAll] = useState(false);
    const [songList, setSongList] = useState(); //专辑歌曲
    const { changeSongsIndexDispatch, getCurrentSongDispatch, changeIsPlayDispatch } = props;
    const { playLists, changePlayListsDispatch } = props;
    const { changeIsLikeDispatch } = props;
    const { history } = props;
    //点击歌曲
    const setIndex = (songs, index) => {
        changePlayListsDispatch(songs);
        changeSongsIndexDispatch(index);
        changeIsPlayDispatch(true);
        getCurrentSongDispatch(songs[index].id);
        changeIsLikeDispatch(false);

    }
    const handleMvClick = (e, id) => {
        e.stopPropagation();
        changeIsPlayDispatch(false);
        history.push(`/mv/${id}`)
    }
    useEffect(() => {
        let id = album.id;
        getSingerAlbumSongsRequest(id).then((data) => {
            let result = [];
            data && data.songs.map((song, i) => {
                result.push(
                    <ListItem key={song.name + i} onClick={() => setIndex(data.songs, i)}>
                        <span>{(i + 1) >= 10 ? i + 1 : `0${i + 1}`}</span>
                        <span><i className="iconfont icon-xihuan"></i><i className="iconfont icon-xiazai"></i></span>
                        <span>
                            <span>{song.name}</span>
                            {song.privilege.st == 0 ? <i className="iconfont icon-sq"></i> : null}
                            {song.mv ? <i className="iconfont icon-mv" onClick={(e) => { handleMvClick(e, song.mv) }} ></i> : null}
                        </span>
                        <span>{formatTime(song.dt)}</span>
                    </ListItem>
                )
            })
            setSongList(<List>{result}</List>)
        })
    }, [album.id])
    const renderList = () => {
        //如果是推荐五十首的话
        if (hotSongs.length > 0) {
            if (showAll) {
                return <List>
                    {
                        hotSongs.map((song, i) => {
                            return (
                                <ListItem key={'hotSong' + i} onClick={() => setIndex(hotSongs, i)}>
                                    <span>{(i + 1) >= 10 ? i + 1 : `0${i + 1}`}</span>
                                    <span><i className="iconfont icon-xihuan"></i><i className="iconfont icon-xiazai"></i></span>
                                    <span>
                                        <span>{song.name}</span>
                                        {song.privilege.st == 0 ? <i className="iconfont icon-sq"></i> : null}
                                        {song.mv ? <i className="iconfont icon-mv" onClick={(e) => { handleMvClick(e, song.mv) }} ></i> : null}
                                    </span>
                                    <span>{formatTime(song.dt)}</span>
                                </ListItem>
                            )
                        })
                    }
                </List>
            } else {
                let result = [];
                for (let i = 0; i < 10; i++) {
                    let song = hotSongs[i];
                    result.push(
                        <ListItem key={'shortHotSong' + i} onClick={() => setIndex(hotSongs, i)}>
                            <span>{(i + 1) >= 10 ? i + 1 : `0${i + 1}`}</span>
                            <span><i className="iconfont icon-xihuan"></i><i className="iconfont icon-xiazai"></i></span>
                            <span>
                                <span>{song.name}</span>
                                {song.privilege.st == 0 ? <i className="iconfont icon-sq"></i> : null}
                                {song.mv ? <i className="iconfont icon-mv" onClick={(e) => { handleMvClick(e, song.mv) }}></i> : null}
                            </span>
                            <span>{formatTime(song.dt)}</span>
                        </ListItem>
                    )
                }

                return <List>{result}</List>;
            }
        }
    }
    return (
        <Container>
            <div className="img-wrapper">
                <img src={hotSongs.length > 0 ? imgUrl : album.picUrl}></img>
                <span className="mask"></span>
                <p className="time">{Object.keys(album).length > 0 ? new Date(album.publishTime).toLocaleDateString() : null}</p>
            </div>
            <div className="song-list">
                <div className="title">{Object.keys(album).length === 0 ? '热门50首' : album.name}</div>
                {hotSongs.length > 0 ? renderList() : songList}
                <div
                    className="foot"
                    style={{ display: hotSongs.length > 0 ? 'block' : 'none' }}
                    onClick={() => setShowAll(!showAll)}
                >查看全部50首></div>
            </div>
        </Container>
    )

}

SongList.defaultProps = {
    imgUrl: '../../singer/top.png',
    hotSongs: [],
    album: {}
}
SongList.propType = {
    imgUrl: PropTypes.string,
    hotSongs: PropTypes.array,
    album: PropTypes.object
}
//redux 状态映射到props
const mapStateToProps = (state) => {
    return {
        currentIndex: state.player.toJS().currentIndex,
        playLists: state.player.toJS().playLists,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        changeSongsIndexDispatch: (index) => {
            dispatch(action.changeSongIndex(index));
        },
        changePlayListsDispatch: (data) => {
            dispatch(action.changePlayLists(data));
        },
        getCurrentSongDispatch: (id) => {
            dispatch(action.getCurrentSong(id));
            dispatch(action.getSongLyric(id))
        },
        changeIsPlayDispatch: (data) => {
            dispatch(action.changePlay(data))
        },
        changeIsLikeDispatch:(data)=>{
            dispatch(changeIsLike(data))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(React.memo(SongList))) 