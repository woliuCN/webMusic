/*
 * @Description: 
 * @Autor: cn
 * @Date: 2019-10-13 15:15:48
 * @LastEditors: cn
 * @LastEditTime: 2019-11-28 22:14:21
 */
import styled from 'styled-components';
import style from '../../assets/global-style';

export const Container = styled.div`
      width:100%;
      box-sizing:border-box;
      padding:0.7692rem 2.3077rem;
`;

export const Toggle = styled.div`
     text-align:center;
    >div{
          display:inline-block;
          padding:0.4615rem 1.5385rem;
          color:#fff;
          font-size:0.9231rem;
          border:1px solid #eee;

      }
      >div:nth-child(1){
          border-bottom-left-radius:3px;
          border-top-left-radius:3px;
          border-right:none;
          background:#888;

      }
      >div:nth-child(2){
          border-bottom-right-radius:3px;
          border-top-right-radius:3px;
          border-left:none;
          color:#666;
      }
`;

export const Menu = styled.div`
      width:100%;
      border-bottom:1px solid #eee;
      >span{
        display:inline-block;
        margin:0 0.7692rem;
        padding:0.7692rem 0;
        text-align:center;
        color:#666;
        cursor: pointer;
        &.active{
            border-bottom:0.1538rem solid #aaa;
            color:#000;
        }
      }
      >span:nth-child(1){
          margin-left:0
      }

`
export const List = styled.ul`
    width:100%;
    border:1px solid #eee;
    margin:0.7692rem 0;
`
export const ListItem =styled.li`
    display:flex;
    align-items:center;
    height:4.6154rem;
    .index{
        flex:0 0 2.3077rem;
        font-size:0.9231rem;
        color:#888;
        text-align:center;
    }
    .img-wrapper{
         flex:0 0 3.6923rem;
         margin:0 0.7692rem;
         position: relative;
         cursor: pointer;
         img{
             width:3.6923rem;
         }
         .route{
            position:absolute; 
            background: hsla(0, 1%, 7%, 0.52);
            width: 1.8462rem;
            height: 1.8462rem;
            border-radius: 50%;
            transform: translate(-50%, -50%);
            left: 50%;
            top: 50%;
            border:0.0769rem solid #eee;
            .iconfont{
                font-size:0.9231rem;
                color:#fff;
                position:absolute; 
                transform: translate(-35%, -45%);
                left: 50%;
                top: 50%;

            }
         }
        
    }
    .song-name{
        flex:0 0 26.9231rem;
        font-size:0.9231rem;
        >span{
            display:inline-block;
            vertical-align:middle;
        }
        >span:nth-child(1){
            max-width:11.5385rem;
            white-space:nowrap; /*不换行*/
            overflow:hidden; /*溢出隐藏*/
            text-overflow:ellipsis;/*使用省略号代替*/
        }
        .alias{
                color:#888;
                margin:0 0.3077rem;
                max-width:15.3846rem;
                white-space:nowrap; /*不换行*/
                overflow:hidden; /*溢出隐藏*/
                text-overflow:ellipsis;/*使用省略号代替*/
        }
        .icon-sq{
            color:#ff551f;
            font-size:1.6923rem;
            display:inline-block;
            vertical-align:middle;
            margin:0.0769rem 0 0 0.3077rem;
        }
        .icon-mv{
            font-size:1.3846rem;
            display:inline-block;
            vertical-align:middle;
            color:${style["theme-color"]};
            margin-left:0.3077rem;
            cursor: pointer;
        }
    }
    .singer{
        flex:0 0 12.3077rem;
        max-width:12.3077rem;
        font-size:0.9231rem;
        white-space:nowrap; /*不换行*/
        overflow:hidden; /*溢出隐藏*/
        text-overflow:ellipsis;/*使用省略号代替*/
    }
    .album-name{
        flex:0 0 26.9231rem;
        font-size:0.9231rem;
        >span{
            display:inline-block;
            vertical-align:middle;
        }
        .alias{
                color:#888;
                margin:0 0.3077rem;
                max-width:15.3846rem;
                white-space:nowrap; /*不换行*/
                overflow:hidden; /*溢出隐藏*/
                text-overflow:ellipsis;/*使用省略号代替*/
        }
    }
    .play-time{
        flex:1;
        text-align:center;
        font-size:0.9231rem;
        color:#888;
    }

    &:nth-child(odd){
        background:#f5f5f5;
    }
    &:hover{
        background:#eee!important;

    }
`