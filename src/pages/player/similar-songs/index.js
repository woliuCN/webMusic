import React from 'react';
import styled from 'styled-components';
import style from '../../../assets/global-style';
import { connect } from 'react-redux';
import {action} from '../store/index';
const ListWrapper = styled.div`
        width:100%;
        font-size:0.9231rem;
        color:#666;
        .public-title{
        border-bottom:0.0769rem solid #eee;
        padding-bottom:0.7692rem;
        h1{
            font-size:1.3846rem;
            display:inline-block;
            margin-right:0.7692rem;
            color:#222;
        }
    }
`
const List = styled.ul`
         li{
             display:flex;
             align-items:center;
             padding:0.7143rem;
             &:hover{
                 background:#eee;
             }
             .index{
                    font-size:0.8571rem;
                    color:#888;
             }
             .music-wrapper{
                display:flex;
                align-items:center;
                .route{
                    position: relative;
                    left: 2.1429rem;
                    background: hsla(0, 1%, 7%, 0.52);
                    border-radius: 50%;
                    width: 1.4286rem;
                    height: 1.4286rem;
                    border: 0.05rem solid #e0e0e0;
                    cursor: pointer;
                    }
                .route:before{
                    content:"";
                    top:0.3571rem;
                    left:0.5914rem;
                    position:absolute;
                    width:0;
                    height:0;
                    border-width: 0.3571rem;
                    border-style: solid;
                    border-color: transparent transparent transparent #f2f3f4;
                }
                img{
                    width:3rem;
                    height:3rem;
                    cursor: pointer;
                }
                .desc{
                    margin-left:0.7143rem;
                    line-height:1.4286rem;
                    font-size:0.9286rem;
                    .name{
                        max-width:9.2308rem;
                        ${style["noWrap"]}
                    }
                    .singer{
                        font-size:0.8571rem;
                        color:#777;
                        .iconfont{
                            color:#ff551f;
                            font-size:1.5714rem;
                            vertical-align: middle;
                            margin-right:0.3571rem;
                        }
                    }
                }
             }
        }

`

function SimilarSong(props) {
    const { similarSong } = props;
    const { changeSongsIndexDispatch, getCurrentSongDispatch, changeIsPlayDispatch ,changePlayListsDispatch} = props;
    
    //点击歌曲
    const setIndex = (songs, index) => {
        changePlayListsDispatch(songs);
        changeSongsIndexDispatch(index);
        changeIsPlayDispatch(true);
        getCurrentSongDispatch(songs[index].id);

    }
    const renderList = () => {
        return similarSong.map((song, index) => {
            return (<li key={index} onClick={() => setIndex(similarSong, index)}>
                <div className="index">{(index + 1) >= 10 ? index + 1 : `0${index + 1}`}</div>
                <div className="music-wrapper">
                    <div className="route"></div>
                    <img src={song.album.picUrl} alt="相似歌曲" width="60" height="60"></img>
                    <div className="desc">
                        <div className="name">{song.name}</div>
                        <div className="singer">
                            <span>{song.artists[0].name}</span>
                        </div>
                    </div>
                </div>
            </li>
            )
        })

    }
    return (
        <ListWrapper>
            <div className="public-title">
                <h1>相似歌曲</h1>
            </div>
            <List>
                {renderList()}
            </List>
        </ListWrapper>
    )
}
const mapStateToProps = (state) => {
    return {
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
        }
    }

}
export default connect(mapStateToProps, mapDispatchToProps)(React.memo(SimilarSong))