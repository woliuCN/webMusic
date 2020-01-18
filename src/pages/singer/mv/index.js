/*
 * @Description: 歌手详情的mv列表
 * @Autor: cn
 * @Date: 2019-11-04 20:55:18
 * @LastEditors: cn
 * @LastEditTime: 2019-11-15 09:33:41
 */
import React from 'react';
import {formatTime,formatCount} from '../../../api/utils';
import styled from 'styled-components';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import {action} from '../../player/store';
const List = styled.div`
    width:100%;
    padding:1.5385rem;
    box-sizing:border-box;
`
const ListItem = styled.div`
    width:20%;
    display:inline-block;
    box-sizing:border-box;
    padding:0 1.5385rem 0.7692rem 1.5385rem;
    cursor: pointer;
         .img-wrapper{
             position:relative;
            img{
                width:100%;
            };
            .decorate{
                position:absolute;
                top:0;
                width:100%;
                height:1.7143rem;
                border-radius:0.3571rem;
                background:linear-gradient(to right,hsla(0, 26%, 97%, 0) ,hsla(0, 0%, 2%, 0.52));
            };
            .play_count{
                position:absolute;
                font-size:0.8571rem;
                top:0.4286rem;
                right:0.5714rem;
                color:#f2f3f4;
                .iconfont{
                    font-size:1.1429rem;
                    margin-right:0.5714rem;
                    vertical-align:middle;
                }
                span{
                    vertical-align:middle;
                }
            }
            .play-time{
                position:absolute;
                font-size:0.9231rem;
                color:#fff;
                left:0.4615rem;
                bottom:0.4615rem;
            }
         }
         .desc{
             padding:0.5714rem;
             margin-bottom:2.1429rem;
             font-size:1rem;
             line-height:1.2857rem;
             >div:nth-child(1){
                 overflow:hidden;
                 text-overflow:ellipsis;
                 white-space: nowrap;
                }
         }

`


function SingerMv(props) {
    const {mvLists,changeIsPlayDispatch} = props;
    const {history} = props;
    const renderList = ()=>{
        return  mvLists.map((mv,index)=>{
                return(
                    <ListItem key={index} onClick={(e)=>{e.stopPropagation();changeIsPlayDispatch(false);history.push(`/mv/${mv.id}`)}}>
                        <div className="img-wrapper">
                            <div className="decorate"></div>
                            <img src={mv.imgurl16v9} alt="歌手mv"></img>
                            <div className="play_count">
                                <i className="iconfont icon-shexiangji"></i>
                                <span>{formatCount(mv.playCount)}</span>
                            </div>
                            <div className="play-time">
                                {formatTime(mv.duration,false)}
                            </div>
                        </div>
                        <div className="desc">
                            <div>{mv.name}</div>
                        </div>
                    </ListItem>
                )
            })
              
            
    }
    return (
            <List>
                {renderList()}
            </List>
    )
}
//redux 状态映射到props
const mapStateToProps = (state) => {
    return {
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        changeIsPlayDispatch: (data) => {
            dispatch(action.changePlay(data))
        },
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(withRouter(React.memo(SingerMv))) 