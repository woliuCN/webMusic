/*
 * @Description: 
 * @Author: cn
 * @Date: 2019-10-02 16:48:29
 * @LastEditTime: 2019-12-01 14:36:09
 * @LastEditors: cn
 */
import styled from 'styled-components';


//官方榜
export const OfficalWrapper = styled.div`
       width:100%;
       margin-bottom:2.3077rem;

`
export const OfficalItem = styled.div`
        width:33.3%;
        display:inline-block;
        box-sizing:border-box;
        padding:0.7692rem;
        .img-wrapper{
            position: relative;
            width:100%;
            img{
               width:100%;
               height:100%;
            }
            .decorate{
                position:absolute;
                right: 1.5385rem;
                top: 1.2308rem;
                height:3.0769rem;
                width:3.0769rem;
                border-radius:50%;
                border:1px solid #fff;
            }
            .decorate::after{
                position: absolute;
                content:'';
                right: 0.2308rem;
                top: 0.7692rem;
                border-width: 0.7692rem;
                border-style:solid;
                border-color:transparent transparent transparent #fff;
            }
            .update-time{
                position:absolute;
                font-size:0.9231rem;
                color: #ddd;
                top: 3.2308rem;
                left: 5.8462rem;
            }
        }
        ul{
            border:1px solid #eee;
            border-top:none;
            li{
                height:1.5385rem;
                display:flex;
                align-items:center;
                padding:0.3846rem 0.7692rem;
                .index{
                    flex: 0 0 2.3077rem;
                    font-size:1.2308rem;
                    color:#666666;
                }
                .song-name{
                    font-size:0.9231rem;
                    font-weight:500;
                    flex:1;
                }
                .singer{
                    font-size:0.9231rem;
                    flex:0 0 4.6154rem;
                    text-align:right;
                    color:#999;
                    white-space:nowrap; /*不换行*/
                    overflow:hidden; /*溢出隐藏*/
                    text-overflow:ellipsis;/*使用省略号代替*/
                }
               &:nth-child(odd){
                   background:#f1f2f3;
               }
               &:hover{
                   background:#eee;
               }
               &:last-child{
                   padding:10px;
                   cursor: pointer;
                   div{
                    width: 100%;
                    text-align: right;
                    color:#999;
                   }
               }
            }

            
        } 

`
export const Container = styled.div`
        width : 100%;
        box-sizing: border-box;
        padding:0.7692rem 3.8462rem;
        .title{
            font-size:1.3077rem;
            color:#666666;
            line-height:3.0769rem;
            border-bottom:1px solid #ddd;
        }

`


//全球榜
export const GlobalWrapper = styled.div`
        width:100%;
        display:flex;
        box-sizing:border-box;
        padding:0.7143rem 0;
        align-items:center;
        justify-content:space-between;
        flex-wrap:wrap;

`
export const GlobalItem = styled.div`
         /* padding:10px 0; */
         /* flex:0 0 auto; */
         /* flex:1 1 16%; */
        width:16%;
        box-sizing: border-box;
        padding: 0 0.3846rem;
        margin-bottom:2rem;
        cursor: pointer;
        .img-wrapper{
            position: relative;
            /* width:150px; */
            width:100%;
            height:12.3077rem;
            img{
                width:100%;
                height:100%;
            }
            .decorate{
                position:absolute;
                top:0;
                width:100%;
                height:1.7143rem;
                border-radius:0.2143rem;
                background: linear-gradient(to right,hsla(0, 0%, 81%, 0.1) ,hsla(0, 7%, 21%, 0.3));
            }
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
        }
        .desc{
            font-size:1rem;
            line-height:2.1538rem;
        }
`