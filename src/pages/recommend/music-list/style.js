/*
 * @Description: 推荐页面最新音乐样式
 * @Author: cn
 * @Date: 2019-09-25 10:03:13
 * @LastEditTime: 2019-10-27 15:09:31
 * @LastEditors: cn
 */
import styled from 'styled-components';
export const ListWrapper = styled.div`
      width:100%;
      box-sizing:border-box;
      padding:0.7143rem 3.2857rem;
      margin-bottom:1.4286rem;
      .title{
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
        align-items:center;
        background:#fff;
    
`
export const ListLeft = styled.ul`
         flex:1;
         border: 0.0714rem solid #eee;
         li{
             display:flex;
             align-items:center;
             padding:0.7143rem;
             &:hover{
                 background:#eee;
             }
             .index{
                    margin-left:1.0714rem;
                    font-size:0.8571rem;
                    color:#888;
             }
             .music-wrapper{
                display:flex;
                align-items:center;
                .route{
                    position: relative;
                    left: 2.1429rem;
                    background: hsla(0, 1%, 7%, 0.52);
                    border-radius: 50%;
                    width: 1.4286rem;
                    height: 1.4286rem;
                    border: 0.05rem solid #e0e0e0;
                    cursor: pointer;
                    }
                .route:before{
                    content:"";
                    top:0.3571rem;
                    left:0.5914rem;
                    position:absolute;
                    width:0;
                    height:0;
                    border-width: 0.3571rem;
                    border-style: solid;
                    border-color: transparent transparent transparent #f2f3f4;
                }
                img{
                    width:3rem;
                    height:3rem;
                    cursor: pointer;
                }
                .desc{
                    margin-left:0.7143rem;
                    line-height:1.4286rem;
                    font-size:0.9286rem;
                    .singer{
                        font-size:0.8571rem;
                        color:#777;
                        .iconfont{
                            color:#ff551f;
                            font-size:1.5714rem;
                            vertical-align: middle;
                            margin-right:0.3571rem;
                        }
                    }
                }
             }
             &:nth-child(even){
                    background:#f2f3f4;
            }
        }

`
export const ListRight = styled.ul`
         flex:1;
         border: 0.0714rem solid #eee;
         li{
             display:flex;
             align-items:center;
             padding:0.7143rem;
             &:hover{
                 background:#eee;
             }
             .index{
                    margin-left:1.0714rem;
                    font-size:0.8571rem;
                    color:#888;
             }
             .music-wrapper{
                display:flex;
                align-items:center;
                .route{
                    position: relative;
                    left: 2.1429rem;
                    background: hsla(0, 1%, 7%, 0.52);
                    border-radius: 50%;
                    width: 1.4286rem;
                    height: 1.4286rem;
                    border: 0.05rem solid #e0e0e0;
                    cursor: pointer;
                    }
                .route:before{
                    content:"";
                    top:0.3571rem;
                    left:0.5914rem;
                    position:absolute;
                    width:0;
                    height:0;
                    border-width: 0.3571rem;
                    border-style: solid;
                    border-color: transparent transparent transparent #f2f3f4;
                }
                img{
                    width:3rem;
                    height:3rem;
                    cursor: pointer;
                }
                .desc{
                    margin-left:0.7143rem;
                    line-height:1.4286rem;
                    font-size:0.9286rem;
                    .singer{
                        font-size:0.8571rem;
                        color:#777;
                        .iconfont{
                            color:#ff551f;
                            font-size:1.5714rem;
                            vertical-align: middle;
                            margin-right:0.3571rem;
                        }
                    }
                }
             }
             &:nth-child(even){
                    background:#f2f3f4;
            }   
         }

`