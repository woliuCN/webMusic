/*
 * @Description: mv 列表
 * @Autor: cn
 * @Date: 2019-10-09 20:38:01
 * @LastEditors: cn
 * @LastEditTime: 2019-11-15 09:14:06
 */
import React from 'react';
import {formatTime,formatCount} from '../../api/utils';
import {ListWrapper,List,ListItem } from './style';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import {action} from '../../pages/player/store';

function MvList(props) {
    const {width,haveTitle,mvLists} = props;
    const {history,getIsPlayDispatch} = props;
    const renderList = ()=>{
        return  mvLists.map((mv,index)=>{
                return(
                    <ListItem key={index} width={width} onClick={(e)=>{ e.stopPropagation();getIsPlayDispatch(false);history.push(`/mv/${mv.id}`)}}>
                        <div className="img-wrapper">
                            <div className="decorate"></div>
                            <img src={mv.picUrl||mv.cover} alt="推荐mv"></img>
                            <div className="play_count">
                                <i className="iconfont icon-shexiangji"></i>
                                <span>{formatCount(mv.playCount)}</span>
                            </div>
                            <div className="play-time">
                                {formatTime(mv.duration,false)}
                      </div>
                        </div>
                        <div className="desc">
                            <div >{mv.name}</div>
                            <div className="singer">{mv.artistName}</div>
                        </div>
                    </ListItem>
                )
            })
              
            
    }
    return (
        <ListWrapper haveTitle={haveTitle}>
            <h1 className="title">推荐MV <span onClick={()=>history.push('/mv')}>更多></span></h1>
            <List>
                {renderList()}
            </List>
        </ListWrapper>
    )
}

//redux 状态映射到props
const mapStateToProps = (state) => {
    return {
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        getIsPlayDispatch: (data) => {
            dispatch(action.changePlay(data))
        },
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(withRouter(React.memo(MvList))) 