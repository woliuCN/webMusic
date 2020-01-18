/*
 * @Description: 
 * @Autor: cn
 * @Date: 2019-11-22 14:30:11
 * @LastEditors: cn
 * @LastEditTime: 2019-11-28 10:12:30
 */
import React from 'react';
import styled, { keyframes } from 'styled-components';
import style from '../../assets/global-style';

const loading = keyframes`
   0%,100%{
     transform: scale(0.0);  
   };
   50%{
     transform: scale(1.0);  
   }
`
const LoadingWrapper = styled.div`
 >div{
        position:absolute;
        top:0;
        left:0;
        right:0;
        bottom:0;
        margin:auto;
        width:4.6154rem;
        height:4.6154rem;
        border-radius:50%;
        opacity:.6;
        background:${style["theme-color"]};
        animation:${loading} 1.4s  ease-in infinite;
  }
  /* 第二个动画开始时间设置为负数，能让两个不重叠的发生 */
  >div:nth-child(2){
      animation-delay:-0.8s
  }
`
function Loading() {
  return (
    <LoadingWrapper>
      <div></div>
      <div></div>
    </LoadingWrapper>
  )
}
export default React.memo(Loading)