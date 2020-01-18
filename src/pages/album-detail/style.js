/*
 * @Description: 
 * @Author: cn
 * @Date: 2019-10-03 14:32:19
 * @LastEditTime: 2019-11-28 10:02:07
 * @LastEditors: cn
 */
import styled from 'styled-components';
import style from '../../assets/global-style';
export const AlbumDeatil = styled.div`
       position:fixed;
       left:15%;
       right:0;
       top:3.8462rem;
       /* bottom:3.8462rem; */
       bottom:${props=>props.playing?'3.8462rem':0};
       z-index:99;
       overflow-y:auto;
       background:#fff;
       ${style['scroll']}

`

export const Header = styled.div`
        display:flex;
        padding:2.3077rem;
        align-items:flex-start;
        .img-wrapper{
            flex:0 0 18.4615rem;
            img{
                width:15.3846rem;
                height:15.3846rem;
            }
            .mask{
                position: absolute;
                background: url(../../singer/tempsnip.png) no-repeat;
                width: 7.6923rem;
                height: 15.3846rem;
                background-size: 3.0769rem;
                background-position: 0 0.7692rem;
            }
        }
        .desc{
           flex:1;
           margin-left:2.3077rem;
           .title{
               >span:nth-child(1){
                   padding: 0.1538rem 0.3077rem;
                   color: #e03f40;
                   background: #e03f40;
                   color:#fff;
                   border-radius:0.1538rem;
                   vertical-align:middle;
               }
               >span:nth-child(2){
                   font-size:1.5385rem;
                   margin-left:0.3846rem;
                   color:#333;
                   font-weight:500;
                   vertical-align:middle;
               }
           }
           .user{
               margin:1.2308rem 0;
               img{
                   width:2.4615rem;
                   height:2.4615rem;
                   border-radius:50%;
                   vertical-align:middle;
               }
               >span:nth-child(2){
                   font-size:1.0769rem;
                   vertical-align:middle;
                   color:#666; 
                   margin:0 0.7692rem;
               }
               >span:nth-child(3){
                   font-size:0.9231rem;
                   color:#888; 
                   vertical-align:middle;
               }
           }
           .option{
               display:flex;
               align-items:center;
               margin:1.2308rem 0;
               >div{
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
               >div:nth-child(1){
                   background:#3bba7d;
                   border:none;
                   color:#fff;
               }
           }
           .singer{
               font-size:0.9231rem;
           }
           .time{
               margin:1.2308rem 0 0.7692rem 0;
               font-size:0.9231rem;
               line-height:1.5385rem;
           }
        }

`


export const DescriptionContainer = styled.div`
    padding:2.3077rem;
    font-size:1.0769rem;
    color:${style["text-color"]};
`
export const Item = styled.div`
    margin-bottom:1.5385rem;
    .title{
        font-weight:700;
        line-height:200%;

    }   
    p{
        text-indent:2em;
        line-height:200%;
        font-size:1rem;
    }
`