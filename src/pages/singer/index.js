/*
 * @Description: 歌手详情
 * @Author: cn
 * @Date: 2019-10-04 13:53:46
 * @LastEditTime: 2019-11-24 12:23:48
 * @LastEditors: cn
 */
import React, { useEffect } from 'react';
import SongList from './song-list';
import Intruduction from './introduction';
import SingerMv from './mv/';
import {Tab,TabPanel} from '../../components/tabs';
import {SingerWrapper,Header} from './style';
import {connect} from 'react-redux';
import {action} from './store';
function Singer (props){
   const {singer_desc,getSingerDescDispatch} = props; //简介
   const {singer_intro,getSingerIntroDispatch} = props; //详情
   const {singer_album,getSingerAlbumDispatch} = props //专辑大概
   const {singer_mv,getSingerMvsDispatch} = props //mv
   const {playing} = props;
   const {match} = props;

   useEffect(()=>{
       let id = match.params.id;
       getSingerDescDispatch(id);
       getSingerIntroDispatch(id);
       getSingerAlbumDispatch(id); 
       getSingerMvsDispatch(id);
   },[match.params.id])

   const renderAllAlbums = ()=>{
       return singer_album.map((album,i)=>{
           return <SongList album={album} />
       })
   }
   return (
       <SingerWrapper playing={playing}>
           {
               Object.keys(singer_desc).length > 0
                   ? <Header>
                       <div className="img-wrapper">
                           <img src={singer_desc.artist.img1v1Url} alt='singer'></img>
                       </div>
                       <div className="desc">
                           <div className="name">
                               <span>歌手</span>
                               <span>{singer_desc.artist.name}</span>
                           </div>
                           <div className="alias">
                               {singer_desc.artist.alias[0]}
                            </div>
                           <div className="count">
                               <i className="iconfont icon-yinle"></i>
                               <span>单曲数:</span>
                               <span>{singer_desc.artist.musicSize}</span>
                           </div>
                           <div className="count">
                               <i className="iconfont icon-album"></i>
                               <span>专辑数:</span>
                               <span>{singer_desc.artist.albumSize}</span>
                           </div>
                           <div className="count">
                               <i className="iconfont icon-shexiangji"></i>
                               <span>MV数:</span>
                               <span>{singer_desc.artist.mvSize}</span>
                           </div>
                       </div>
                       <div className="option">
                           <i className="iconfont icon-xihuan"></i>
                           <span>收藏</span>
                       </div>
                   </Header>
                   : null
           }
            
            <Tab defaultSelect="专辑">
                <TabPanel label="专辑">
                   {
                      Object.keys(singer_desc).length > 0? 
                      <SongList hotSongs={singer_desc.hotSongs}/>
                      :null
                   }
                   {
                       singer_album.length>0?
                       renderAllAlbums()
                       :null
                   } 
                   
                </TabPanel>
                <TabPanel label="MV">
                    {
                        singer_mv.length>0
                        ?<SingerMv mvLists={singer_mv}/>
                        :null
                    }
                </TabPanel>
                <TabPanel label="歌手详情">
                    {
                        singer_intro.length>0
                        ?<Intruduction introduction={singer_intro}/>
                        :null
                    }
                    
                </TabPanel>
                <TabPanel label="相似歌手">
                    相似歌手需要登陆,暂时没写
                </TabPanel>
            </Tab>
       </SingerWrapper>
   )
}

const mapStateToProps = (state)=>{
    return {
        singer_desc :state.singer.toJS().singer_desc,
        singer_intro :state.singer.toJS().singer_intro,
        singer_album :state.singer.toJS().singer_album,
        singer_mv: state.singer.toJS().singer_mv,
        playing: state.player.toJS().play,  //是否播放

    }
}
const mapDispacthToProps = (dispatch)=>{
    return{
        getSingerDescDispatch: (id)=>{
            dispatch(action.getSingerDesc(id))
        },
        getSingerIntroDispatch:(id)=>{
            dispatch(action.getSingerIntro(id))
        },
        getSingerAlbumDispatch:(id)=>{
            dispatch(action.getSingerAlbum(id))
        },
        getSingerMvsDispatch:(id)=>{
            dispatch(action.getSingerMv(id))
        }
    }
}

export default connect(mapStateToProps,mapDispacthToProps)(React.memo(Singer))