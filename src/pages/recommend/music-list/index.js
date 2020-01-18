/*
 * @Description: 推荐页面最新音乐列表
 * @Author: cn
 * @Date: 2019-09-25 10:03:05
 * @LastEditTime: 2019-11-15 09:21:53
 * @LastEditors: cn
 */
import React from 'react';
import {withRouter} from 'react-router-dom';
import {ListWrapper,List,ListLeft,ListRight} from './style';
import {connect} from 'react-redux';
import {action} from '../../player/store';
import { changeIsLike } from '../../../pages/home/store';
function MusicList (props){

   const {musicList,history} = props;
   const {changeSongsIndexDispatch,getCurrentSongDispatch,changeIsPlayDispatch} = props;
   const {playLists,changePlayListsDispatch} = props;
   const { changeIsLikeDispatch } = props;
   //点击歌曲
   const setIndex = (index) => {
      changePlayListsDispatch(musicList);
      changeSongsIndexDispatch(index);
      changeIsPlayDispatch(true);
      getCurrentSongDispatch(musicList[index].id);
      changeIsLikeDispatch(false);
  }
   const renderList = (flag)=>{
        let res = [];
        let minIndex = 0;
        let maxIndex = 5;
        if(flag){
            minIndex = 5;
            maxIndex = 10;
        }
         for (let index = minIndex; index <maxIndex; index++) {
                res.push(<li key={index} onClick={()=>setIndex(index)}>
                      <div className="index">{(index+1)>=10?index+1:`0${index+1}`}</div>
                      <div className="music-wrapper">
                         <div className="route"></div>
                         <img src={musicList[index].song.album.picUrl} alt="最新音乐" width="60" height="60"></img>
                         <div className="desc">
                            <div className="name">{musicList[index].song.name}</div>
                            <div className="singer">
                             {musicList[index].song.album.status==0?<i className="iconfont icon-sq"></i>:null}
                             <span>{musicList[index].song.artists[0].name}</span>   
                            </div>
                         </div>
                      </div>
                  </li>
                )
         }
         return res;       
    
   } 
   return (
       <ListWrapper>
           <h1 className="title">最新音乐 <span onClick={()=>history.push('/newmusic')}>更多></span></h1>
           <List>
               <ListLeft>
                  {musicList.length&&renderList(0)}
               </ListLeft>
               <ListRight>
                  {musicList.length&&renderList(1)}
               </ListRight>
           </List>
       </ListWrapper>
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
export default connect(mapStateToProps,mapDispatchToProps)(withRouter(React.memo(MusicList))) 