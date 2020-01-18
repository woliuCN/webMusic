/*
 * @Description: 侧边栏组件
 * @Author: cn
 * @Date: 2019-09-25 22:03:27
 * @LastEditTime: 2019-12-08 15:01:19
 * @LastEditors: cn
 */
import React, { useState } from 'react';
import {withRouter} from 'react-router-dom';
import styled from 'styled-components';
import style from '../../assets/global-style';

const AsideContainer = styled.div`
        position:fixed;
        width:15%;
        padding: 0.1429rem 0 1.1429rem  0;
        box-sizing:border-box;
        left:0;
        top:3.5714rem;
        bottom:0;
        border-right: 0.0714rem solid #ddd;
        .title{
             font-size:1rem;
             line-height:2.5714rem;
             color:#555;
             margin-left:0.5714rem;   
        }
        .classify{
                padding-left:1.4286rem;
                font-size:0.8571rem;
                line-height:2.1429rem;
                cursor: pointer;
                color:#444;
                &.active{
                        background: #ece9e9f0;
                        border-left:0.2143rem solid ${style["theme-color"]};
                }   
                .iconfont{
                        display:inline-block;
                        font-size:1.4286rem;
                        vertical-align:middle;
                        color:#666;
                     
                }
                span{
                        display:inline-block;
                        vertical-align:middle;
                        margin-left:0.7143rem;
                 }
        }
`

function Aside(props) {
        const {history} = props;
        var islike = window.location.hash.includes("/mylike");
        var userDesc = sessionStorage.getItem('userDesc')?JSON.parse(sessionStorage.getItem('userDesc')):'';
        const handleRecommend = ()=>{
                history.push('/recommend');
        }
        const handleMyLike = ()=>{
                let timeout = setTimeout(() => {
                if(userDesc&&userDesc.playList){
                        history.push(`/mylike/${userDesc.playList[0].id}`);
                        clearTimeout(timeout);
                 }else{
                        history.push(`/mylike/0`);
                }                          
                }, 0);

            
        }

        return (
                <AsideContainer>
                        <div className="title">推荐</div>
                        <div className={`classify ${!islike?'active':''}`}
                         onClick={handleRecommend}
                        ><i className="iconfont icon-yinle"></i><span>发现音乐</span></div>
                        <div className="classify"><i className="iconfont icon-shipin"></i><span>视频</span></div>
                        <div className="classify"><i className="iconfont icon-pengyou"></i><span>朋友</span></div>
                        <div className="title">我的音乐</div>
                        <div className="classify"><i className="iconfont icon-bendiyinle"></i><span>本地音乐</span></div>
                        <div className="classify"><i className="iconfont icon-xiazai"></i><span>下载管理</span></div>
                        <div className="title">创建的歌单</div>
                        <div className={`classify ${islike?'active':''}`}
                        onClick={handleMyLike}
                        ><i className="iconfont icon-xihuan"></i><span>我喜欢的音乐</span></div>
                </AsideContainer>
        )
}

export default withRouter(React.memo(Aside))