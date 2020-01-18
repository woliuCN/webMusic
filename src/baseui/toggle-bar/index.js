/*
 * @Description:顶部切换栏 
 * @Author: cn
 * @Date: 2019-09-26 09:21:20
 * @LastEditTime: 2019-10-02 15:45:01
 * @LastEditors: cn
 */
import React from 'react';
import styled from 'styled-components';
import style from '../../assets/global-style';
import {NavLink} from 'react-router-dom';
const Container = styled.div`
    width:96%;
    margin: 0 auto 1.4286rem  auto;
    border-bottom:0.0714rem solid #ddd;
    text-align:center;
    .menu{
        display:inline-block;
        height:3rem;
        line-height:3rem;
        font-size:1.0714rem;
        margin:0 1.7857rem;
        cursor:pointer;
        color:#666666;
        &:hover{
            color:#55b559d9;
        }
        &.active{
            color:#55b559d9;
            border-bottom:0.1429rem solid ${style["theme-color"]};
        }
    }
    
`


function ToggleBar (props){
   
    return (
        <Container>
           <NavLink to="/recommend" activeClassName="active" className="menu">个性推荐</NavLink>
           <NavLink to="/music" activeClassName="active" className="menu">歌单</NavLink>
           <NavLink to="/rank" activeClassName="active"  className="menu">排行榜</NavLink>
           <NavLink to="/singers" activeClassName="active" className="menu">歌手</NavLink>
           <NavLink to="/newmusic" activeClassName="active" className="menu">最新音乐</NavLink>
        </Container>
    )
}


export default React.memo(ToggleBar)