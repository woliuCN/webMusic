/*
 * @Description: 推荐歌单列表
 * @Author: cn
 * @Date: 2019-09-23 14:30:56
 * @LastEditTime: 2019-10-27 16:28:19
 * @LastEditors: cn
 */
import React from 'react';
import PropTypes from 'prop-types';
import {ListWrapper,List,ListItem} from './style';
import { withRouter } from 'react-router-dom';

function Lists(props){
  const {title,Albumlist} = props;
  const {history} =props;
  const renderList = ()=>{
      
      return Albumlist.map((album, index) => {
          return (
              <ListItem key={index} onClick={()=>history.push(`/recommend/${album.id}`)}>
                  <div className="img-wrapper">
                      <div className="decorate"></div>
                      <img src={album.picUrl?album.picUrl:album.coverImgUrl} alt="推荐歌单"></img>
                      <div className="play_count">
                          <i className="iconfont icon-icon-test"></i>
                          <span>{Math.floor(album.playCount/10000)}万</span>
                      </div>
                      <div className="decorate-user" style={{display:album.creator?'block':'none'}}></div>
                      <div className="creator" style={{display:album.creator?'block':'none'}}>
                          <i className="iconfont icon-user"></i>
                          <span>{album.creator&&album.creator.nickname}</span>
                      </div>
                  </div>
                  <div className="desc">
                        {album.name}
                </div>
              </ListItem>
          )
      })
      
  }  

  return(
        <ListWrapper>
            <h1 className="title" style={{display: title ? 'block':'none'}}>
                 {title}
                 <span onClick={()=>history.push(`/music`)}>更多></span>
            </h1>
            <List>
                {renderList()}
            </List>
        </ListWrapper>
  )  
}
Lists.defaultProps = {
      title:'',
      Albumlist:[]
}
Lists.propType = {
      title:PropTypes.string,
      Albumlist:PropTypes.array
}

/* withRouter 作用是让不是通过路由跳转的组件拥有history,match...方法 */
export default withRouter(React.memo(Lists));