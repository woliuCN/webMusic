/*
 * @Description: 歌单样式
 * @Author: CN
 * @Date: 2019-10-12 11:16:45
 * @LastEditTime: 2019-11-28 09:50:09
 * @LastEditors: cn
 */
import styled from 'styled-components';


export const Content = styled.div`
       width:100%;
       box-sizing:border-box;
`


export const CategoryList  = styled.div`
       padding:0 3.8462rem 0 3.8462rem;

`

export const AllCategory = styled.div`
       /* width:80px; */
      position:relative;
     .option{
        max-width:6.3846rem;
        display:inline-block;
        box-sizing:border-box;
        border-radius:0.2308rem;
        text-align:center;
        padding:0.4615rem 0.3077rem;
        background:#fff;
        border:1px solid #ddd;
        cursor: pointer;
        span,.iconfont{
            vertical-align:middle;
            font-size:0.9231rem;
        }
        &:hover{
            background:#f1f2f3;
        }
     }
     .decorate{
          position:absolute;
          content:'';
          width:1.0769rem;
          height:1.0769rem;
          background:#fff;
          border-top:0.0769rem solid #eee;
          border-left:0.0769rem solid #eee;
          transform:rotateZ(45deg);
          top:2.3077rem;
          left:2.3077rem;
          
      }
      
`
export const Menu = styled.div`
      width:42.3077rem;
      height:30.7692rem;
      background:#fff;
      position:absolute;
      margin-top:0.7692rem;
      border-radius:0.2308rem;
      box-shadow:0.3846rem 0.3846rem 0.7692rem #eee;
      overflow:hidden;
      z-index:999;
      .title{
          padding:1.3846rem;
          border-bottom:1px solid #eee;
      }
      .list-wrapper{
            padding:0.7692rem 0 6.1538rem 0;
            .all{
            padding:0.7692rem;
            text-align:center;
            margin:0.6154rem 1.2308rem;
            border:1px solid #eee;
            cursor: pointer;
        }
      }
      .active{
          border:1px solid #7dd0a8 !important;
      }


`
export const MenuItem = styled.div`
       display:flex;
       align-items:flex-start;
       justify-content:space-between;
       margin:0.6154rem 1.2308rem;
       .category{
           flex:0 0 4.6154rem;
           padding:0.3077rem 0.4615rem 0 0 ;
           color:#7dd0a8;
           .iconfont{
               font-size:2rem;
               vertical-align:middle;
               margin-right:0.4615rem;
           }
           span{
               font-size:1.0769rem;
               vertical-align:middle;
               font-weight:500;
           }
       }
       .list{
           flex:1;
           border:1px solid #eee;
           border-bottom:none;
           border-right:none;
           span{
            width:6.9231rem;
            display:inline-block;
            padding:0.7692rem;
            text-align:center;
            box-sizing:border-box;
            font-size:0.9231rem;
            color:#666;
            border-right:1px solid #eee;
            border-bottom:1px solid #eee;
            cursor: pointer;
           }
           
       }
`


export const HotCategory = styled.div`
        margin:10px 0;
        font-size:1rem;
        .tags{
            padding: 0rem 1.3846rem;
            display: inline-block;
            font-size: 0.9231rem;
            text-align: center;
            color: #666;
            cursor: pointer;
        }
        .line{
                display: inline-block;
                width: 0.0769rem;
                vertical-align: middle;
                height: 0.9231rem;
                background:#ccc;
        }
`