/*
 * @Description: 
 * @Author: cn
 * @Date: 2019-10-04 13:53:53
 * @LastEditTime: 2019-11-10 20:52:31
 * @LastEditors: cn
 */
import styled from 'styled-components';
export const SingerWrapper = styled.div`
       position:fixed;
       left:15%;
       right:0;
       top:3.8462rem;
       /* bottom:3.8462rem; */
       bottom:${props=>props.playing?'3.8462rem':0};
       z-index:99;
       overflow-y:auto;
       background:#fff;
        /* 
         * 自定义滚动条
        */
        /* 整个滚动条宽度 */
        ::-webkit-scrollbar{
                width:0.3846rem;
        }
        /* 轨道 */
        ::-webkit-scrollbar-track{
                background-color:#f1f2f3;
                border-radius:0.3846rem; 
        }
        /* 滑块 */
        ::-webkit-scrollbar-thumb{
                background-color:#ccc;
                border-radius:0.3846rem;
        }

`

export const Header = styled.div`
        display:flex;
        padding:2.3077rem;
        align-items:flex-start;
        .img-wrapper{
            flex:0 0 15.3846rem;
            img{
                width:15.3846rem;
                height:15.3846rem;
            }
        }
        .desc{
           flex:1;
           margin-left:2.3077rem;
           .name{
               >span:nth-child(1){
                   padding:0.1538rem 0.3077rem;
                   background:#e03f40;
                   color:#fff;
                   border-radius:0.2308rem;
                   vertical-align:middle;
                   margin-right:0.3077rem;
               }
               >span:nth-child(2){
                   font-size:1.6923rem;
                   color:#6a6a6a;
                   font-weight:500;
                   vertical-align:middle;
               }
           }
           .alias{
               height:3.0769rem;
               width:6.1538rem;
               text-align:center; 
               line-height:3.0769rem;
               font-size:0.9231rem;
           }
           .count{
               height:2rem;
               line-height:2rem;
               .iconfont{
                   font-size:1.3846rem;
                   vertical-align:middle;
               }
                >span:nth-child(2){
                    font-size:0.9231rem;
                    vertical-align:middle;
                    color:#6a6a6a;
                    margin:0 0.4615rem;
                }
                >span:nth-child(3){
                    font-size:0.9231rem;
                    vertical-align:middle;
                    color:#777;
                }
           }
        }
        .option{
            flex:0 0 3.8462rem;
            padding:0.3846rem 0.7692rem;
                   margin-right:0.7692rem;
                   background:#fff;
                   border:0.0769rem solid #ddd;
                   border-radius:0.3077rem;
                   .iconfont{
                       font-size:1.2308rem;
                       vertical-align:middle;
                       margin-right:0.2308rem;
                   }
                   span{
                       font-size:0.9231rem;
                       vertical-align:middle;
                   }
        }
`
export const Tabs =styled.div`
       width:100%;
       border-bottom:0.0769rem solid #ddd;
       >div{
           display:inline-block;
           cursor: pointer;
           padding: 0 0.7692rem 0 3.8462rem;
           >span{
            display: inline-block;
            padding: 0.6154rem;
            &.active{
                color:#3bba7d;
                border-bottom: 0.2308rem solid #3bba7d;
            }
           }
       }
      
`