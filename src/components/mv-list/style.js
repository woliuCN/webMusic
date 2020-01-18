/*
 * @Description: mv 列表样式
 * @Author: cn
 * @Date: 2019-09-25 09:06:28
 * @LastEditTime: 2019-11-28 09:37:38
 * @LastEditors: cn
 */
import styled from 'styled-components';
export const ListWrapper = styled.div`
      width:100%;
      box-sizing:border-box;
      padding:0.7143rem 3.2857rem;
      .title{
          display:${props=>props.haveTitle?'block':'none'};
          font-size:1.2857rem;
          height:3.4286rem;
          line-height:3.4286rem;
          border-bottom:0.0714rem solid #ddd;
          span{
              font-size:0.9231rem;
              color:#666;
              float:right;
              cursor: pointer;
          }
      }
`
export const List = styled.div`
        width:100%;
        box-sizing:border-box;
        padding:0.7143rem 0;
        display:flex;
        flex-wrap:wrap;
        align-items:center;
        justify-content:space-between;
        /* &::after{
            content:'';
            width:30%;
        } */
        
`


export const ListItem = styled.div`
         width:${props=>props.width+'%'};
         box-sizing:border-box;
         cursor: pointer;
         .img-wrapper{
             position:relative;
            img{
                width:100%;
                border-radius:1px;
            };
            .decorate{
                position:absolute;
                top:0;
                width:100%;
                height:1.7143rem;
                border-radius:0.3571rem;
                background:linear-gradient(to right,hsla(0, 26%, 97%, 0) ,hsla(0, 0%, 2%, 0.52));
                /* background:linear-gradient(to right,hsla(0,0%,81%,0.1) ,hsla(0, 1%, 33%, 0.32)); */
                /* background: linear-gradient(left,hsla(0, 0%, 43%, 0.52),hsla(0, 0%, 100%, 0.07)); */
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
             font-size:0.9286rem;
             line-height:1.2857rem;
             >div:nth-child(1){
                 overflow:hidden;
                 text-overflow:ellipsis;
                 white-space: nowrap;
                }
             .singer{
               font-size:0.8571rem;
               color:#999;
             }
         }
`