/*
 * @Description: 列表样式
 * @Author: cn
 * @Date: 2019-09-23 14:31:04
 * @LastEditTime: 2019-11-28 10:20:47
 * @LastEditors: cn
 */
import styled from 'styled-components';



export const ListWrapper = styled.div`
      width:100%;
      box-sizing:border-box;
      padding:0.7143rem 3.2857rem;
      .title{
          font-size:1.2857rem;
          height:3.4286rem;
          line-height:3.4286rem;
          border-bottom:0.0714rem solid #ddd;
          span{
              font-size:0.9231rem;
              float:right;
              color:#666;
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

`

export const ListItem = styled.div`
         width:20%;
         cursor: pointer;
         .img-wrapper{
             position:relative;
             margin:0 0.7143rem;
             /* height:0;
             padding-bottom:100%; */
            img{
                width:100%;
                border-radius:0.2143rem;
            };
            .decorate{
                position:absolute;
                top:0;
                width:100%;
                height:1.7143rem;
                border-radius:0.2143rem;
                /* background: linear-gradient(to right,hsla(0, 0%, 81%, 0.1) ,hsla(0, 7%, 21%, 0.3)); */
                background:linear-gradient(to right,hsla(0, 26%, 97%, 0) ,hsla(0, 0%, 2%, 0.52));
                /* background: linear-gradient(left,hsla(0, 0%, 43%, 0.52),hsla(0, 0%, 100%, 0.07)); */
            };
            .play_count{
                position:absolute;
                font-size:0.8571rem;
                top:0.4286rem;
                right:0.5714rem;
                color:#f2f3f4;
                .iconfont{
                    margin-right:0.2857rem;
                    font-size:0.8571rem;
              
                }
            }
            .decorate-user{
                position:absolute;
                bottom:0;
                left:0;
                right:0;
                height:2rem;
                background: linear-gradient(hsla(0, 0%, 43%, 0.21),hsla(0, 3%, 8%, 0.22))
            }
            .creator{
                position:absolute;
                left:0.4615rem;
                bottom:0.4615rem;
                color:#fff;
                font-size:0.9231rem;
                .iconfont{
                    font-size:0.9231rem;
                    margin:0 0.3077rem;
                }
            }
         }
         .desc{
             padding:0.5714rem;
             height:60px;
             font-size:0.9286rem;
             line-height:1.2857rem;
         }
`