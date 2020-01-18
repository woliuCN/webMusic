/*
 * @Description: 最新音乐
 * @Autor: cn
 * @Date: 2019-10-13 15:15:38
 * @LastEditors: cn
 * @LastEditTime: 2019-11-23 17:12:21
 */
import React, { useState, useEffect } from 'react';
import Loading from '../../baseui/loading';
import { Container, Toggle, Menu, List, ListItem } from './style';
import { newMusicExpress } from '../../api/config';
import { formatTime } from '../../api/utils';
import { action } from './store';
import { action as playActions } from '../../pages/player/store';
import {changeIsLike} from '../../pages/home/store'
import { connect } from 'react-redux';

function NewMusic(props) {

    const { newSongsList, getNewSongsDispatch } = props;
    const [type, setType] = useState('');
    const { history } = props;
    const { changeSongsIndexDispatch, getCurrentSongDispatch, changeIsPlayDispatch } = props;
    const { changePlayListsDispatch } = props;
    const { changeIsLikeDispatch } = props;
    const {loading} = props;
    useEffect(() => {
        getNewSongsDispatch(type);
    }, [type])

    //渲染菜单
    const renderMenu = () => {
        return newMusicExpress.map((item) => {
            return <span
                key={item.type}
                className={item.type == type ? 'active' : ''}
                onClick={() => setType(item.type)}
            >{item.label}</span>
        })
    }
    //点击歌曲
    const setIndex = (songs, index) => {
        changePlayListsDispatch(songs);
        changeSongsIndexDispatch(index);
        changeIsPlayDispatch(true);
        getCurrentSongDispatch(songs[index].id);
        changeIsLikeDispatch(false);
    }
    //渲染歌曲列表
    const renderMusicList = () => {
        return newSongsList.map((list, index) => {
            return (
                <ListItem key={list.id} onClick={() => setIndex(newSongsList, index)}>
                    <div className="index">{(index + 1) >= 10 ? index + 1 : `0${index + 1}`}</div>
                    <div className="img-wrapper">
                        <div className="route"><i className="iconfont icon-play"></i></div>
                        <img src={list.album.picUrl} alt=''></img>
                    </div>
                    <div className="song-name">
                        <span>{list.name}</span>
                        {list.alias.length > 0 ? <span className="alias">({list.alias[0]})</span> : null}
                        {list.album.status == 0 ? <i className="iconfont icon-sq"></i> : null}
                        {list.mvid ? <i className="iconfont icon-mv" onClick={(e) => { e.stopPropagation(); changeIsPlayDispatch(false); history.push(`/mv/${list.mvid}`) }}></i> : null}
                    </div>
                    <div className="singer">
                        {list.artists[0].name}
                    </div>
                    <div className="album-name">
                        <span>{list.album.name}</span>
                        {list.album.length > 0 ? <span className="alias">({list.album[0]})</span> : null}
                    </div>
                    <div className="play-time">
                        {formatTime(list.duration, 0)}
                    </div>
                </ListItem>
            )
        })
    }
    return (
        <Container>
            <Toggle>
                <div>新歌速递</div>
                <div>新碟上架</div>
            </Toggle>
            <Menu>
                {renderMenu()}
            </Menu>
            <List>
                {renderMusicList()}
            </List>
            {loading ?<Loading/>:null}
        </Container>
    )
}

const mapStateToProps = (state) => {
    return {
        newSongsList: state.newSongs.toJS().newSongsList,
        loading : state.newSongs.toJS().loading,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        getNewSongsDispatch: (type) => {
            dispatch(action.changeLoading(true))
            dispatch(action.getNewSongs(type))
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
export default connect(mapStateToProps, mapDispatchToProps)(React.memo(NewMusic))