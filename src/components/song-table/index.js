/*
 * @Description: 歌曲表单->榜单详情页+搜索结果页
 * @Autor: cn
 * @Date: 2019-10-23 11:07:46
 * @LastEditors: cn
 * @LastEditTime: 2019-12-07 21:14:44
 */
import React from 'react';
import styled from 'styled-components';
import style from '../../assets/global-style';
import { formatTime } from '../../api/utils';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { action } from '../../pages/player/store';
import { changeIsLike} from '../../pages/home/store';
const List = styled.table`
       width:100%;
       color:${style["text-color"]};
       table-layout:fixed;
       /* 设置为fixed的话，设置宽度才有效 */
       th{
           padding:0.6154rem;
           margin: 0.7692rem 0;
           font-size:0.9231rem;
           .iconfont{
            color:#888;
            padding:0 0.3077rem;
            font-size:1.2308rem;
            vertical-align:middle;

           }
           .icon-sq{
            color:#ff551f;
            font-size:1.6923rem;
            margin: 0 0.4615rem;

            };
            .icon-mv{
            font-size:1.3846rem;
            display:inline-block;
            color:${style["theme-color"]};
            cursor: pointer;
            }
            .icon-aixin{
                color:#e03f40;
            }
       }
       tr>th:nth-child(1),tr>th:nth-child(6){
            color:#888;
       }
       thead>tr>th{
          color:#777;
          font-size:0.9231rem;
          border-right:0.0769rem solid #ddd;
          border-bottom:0.0769rem solid #ddd;
       }
       tbody>tr:hover{
           background:#eee !important;
       }
       tbody>tr{
            height:2.9231rem;
            >th{
                box-sizing:border-box;
            }
            &:nth-child(even){
                background:#f9f9f9;
            }
            &.play{
                background:#dddddde0;
            >th{
                color:black;   
            }
           }
           >th:nth-child(3){
            >span{
                display:inline-block;
                max-width:19.2308rem;
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
                vertical-align: middle;
            }   
           }
           >th:nth-child(4){
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
           }
          >th:nth-child(5){
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
           }
          
       }
      
`
const Heat = styled.div`
       width:80%;
       height:0.3846rem;
       border-radius:0.3846rem;
       background:#eee; 
       .percent{
        width:${props => props.percent * 100 + '%'};
        height:0.3846rem;
        border-radius:0.3846rem;
        background:#aaa; 
        }

`
function SongTable(props) {
    const { changeSongsIndexDispatch, getCurrentSongDispatch, changeIsPlayDispatch } = props;
    const { playLists, changePlayListsDispatch } = props;
    const { changeIsLikeDispatch } = props;
    const { songs ,flag ,islike} = props;
    const { history } = props;
    const returnHeat = (percent) => {
        return <Heat percent={percent}>
            <div className="percent"></div>
        </Heat>
    }
    //点击歌曲
    const setIndex = (index) => {
        changePlayListsDispatch(songs);
        changeSongsIndexDispatch(index);
        changeIsPlayDispatch(true);
        getCurrentSongDispatch(songs[index].id);
        islike?changeIsLikeDispatch(true):changeIsLikeDispatch(false);

    }
    return (
        <List>
            <thead>
                <tr>
                    <th width="20"></th>
                    <th width="30">操作</th>
                    <th width="300" align="left">音乐标题</th>
                    <th width="150" align="left">歌手</th>
                    <th width="150" align="left">专辑</th>
                    <th width="100" align="left">时长</th>
                    {/* <th width="100px" align="left">热度</th> */}
                </tr>
            </thead>
            <tbody>
                {
                    songs.map((song, index) => {
                        if (flag) {
                            return (
                                <tr key={index} onClick={() => setIndex(index)}>
                                    <th align="right">{(index + 1) >= 10 ? index + 1 : `0${index + 1}`}</th>
                                    <th align="center">
                                        {
                                           islike?<i className="iconfont icon-aixin"/>
                                           :<i className="iconfont icon-xihuan "/>
                                        }
                                        <i className="iconfont icon-xiazai"></i>
                                    </th>
                                    <th align="left">
                                        <span>{song.name}</span>
                                        {song.status == 0 ? <i className="iconfont icon-sq"></i> : null}
                                        {song.mvid ? <i className="iconfont icon-mv" onClick={(e) => { e.stopPropagation(); changeIsPlayDispatch(false); history.push(`/mv/${song.mvid}`); }}></i> : null}
                                    </th>
                                    <th align="left">
                                        {song.artists[0].name}
                                    </th>
                                    <th align="left">{song.album.name}</th>
                                    <th align="left">{formatTime(song.duration)}</th>
                                </tr>
                            )
                        }
                        else {
                            return (
                                <tr key={index} onClick={() => setIndex(index)}>
                                    <th align="right">{(index + 1) >= 10 ? index + 1 : `0${index + 1}`}</th>
                                    <th align="center">
                                        {
                                           islike?<i className="iconfont icon-aixin"/>
                                           :<i className="iconfont icon-xihuan "/>
                                        }
                                        <i className="iconfont icon-xiazai"></i>
                                    </th>
                                    <th align="left">
                                        <span>{song.name}</span>
                                        {((song.privilege && song.privilege.st === 0) || song.st === 0) ? <i className="iconfont icon-sq"></i> : null}
                                        {song.mv ? <i className="iconfont icon-mv" onClick={(e) => { e.stopPropagation(); changeIsPlayDispatch(false); history.push(`/mv/${song.mv}`); }}></i> : null}
                                    </th>
                                    <th align="left">
                                        {song.ar[0].name}
                                    </th>
                                    <th align="left">{song.al.name}</th>
                                    <th align="left">{formatTime(song.dt)}</th>
                                </tr>
                            )
                        }
                    })
                }

            </tbody>
        </List>
    )
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
/* withRouter 作用是让不是通过路由跳转的组件拥有history,match...方法 */
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(React.memo(SongTable)))
