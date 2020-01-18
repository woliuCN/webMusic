/*
 * @Description:mv style 
 * @Autor: cn
 * @Date: 2019-10-14 21:18:03
 * @LastEditors: cn
 * @LastEditTime: 2019-11-28 22:06:56
 */
import styled from 'styled-components';
import style from '../../assets/global-style';

export const Container = styled.div`
       position:fixed;
       top:3.4615rem;
       left:0;
       right:0;
       bottom:0;
       padding:1.5385rem 9.2308rem;
       background:#fafafa;
       overflow:auto;
       ${style["scroll"]}
       z-index:99;

`
export const Left = styled.div`
    display:inline-block;
    width:65%;
    .title{
       display:flex;
       align-items:center;
       height:3.0769rem;
       .iconfont{
           font-size:2rem;
           margin-right:0.7692rem;
       }
       .icon-MV{
           font-size:2.7692rem;
           color:#ff551f;
        }
        .icon-previewleft{
            cursor: pointer;
        }
        >div{
            max-width: 45rem;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            .name{
                font-size:1.3846rem;
                margin-right:0.3846rem;
            }
            .artist{
                font-size:0.9231rem;
                color:#666;
                /* max-width:26.9231rem;
                margin-top:0.3077rem; */
             }
        }
    }
    .mv-container{
        margin-left:0.6154rem;
    }
    .options{
        display:flex;
        align-items:center;
        margin:0.7692rem 0;
        margin-left:0.6154rem;

        >div{
            background:#fff;
            border:1px solid #ddd;
            border-radius:0.3077rem;
            padding:0.3077rem 0.4615rem;
            margin-right:0.7692rem;
            cursor: pointer;
            .iconfont{
                color:#888;
                vertical-align:middle;
                margin-right:0.3077rem;
            }
            span{
                vertical-align:middle;
                font-size:0.9231rem;
                color:#333;
            }
        }
    }
    .comment-list{
      padding: 3.0769rem 2rem 0 0.6154rem;
    }
`

export const Right = styled.div`
      display:inline-block;
      width:35%;
      box-sizing:border-box;
      font-size:0.9231rem;
      vertical-align:top;
      h1{
          height:3.0769rem;
          line-height:3.0769rem;
          font-size:1.2308rem;
          border-bottom:1px solid #ccc;  
      }
      .info{
          display:flex;
          align-items:center;
          justify-content:space-between;
          color:#888;
          margin:0.7692rem 0;
      }
      .brief-desc,.desc,.tag{
          color:#666;
          line-height:1.3846rem;
      }
      .tag{
          margin-top:2.3077rem;  
          margin-bottom:2.3077rem;
          span{
              color:#0072ff;
              font-size:0.7692rem;
              padding:0 0.4615rem;
          }
      }

`

export const RecommendMV = styled.div`
    display:flex;
    align-items:center;
    height:8.4615rem;
    .img-wrapper{
        position:relative;
        cursor: pointer;
        flex:0 0 13.8462rem;
        img{
            width:12.3077rem;
            height:6.9231rem;
        }
        .decorate{
            position:absolute;
            top:0;
            width:12.3077rem;
            height:1.7143rem;
            border-radius:0.3571rem;
            background: linear-gradient(to right,hsla(0, 0%, 81%, 0.1) ,hsla(0, 7%, 21%, 0.3));
        };
        .count{
            position:absolute;
            right:2.3077rem;
            top:0.3846rem;
            color:#fff;
            .iconfont,span{
                vertical-align:middle;
                margin-left:0.3077rem;
            }
            .iconfont{
                font-size:1.2308rem;
            }
        }
    }
    .info{
        flex:1;
        font-size:0.9231rem;
        display:flex;
        flex-direction:column;
        align-items:flex-start;
        .title{
            line-height:1.3846rem;
            color:#333;
            width:100%;
            overflow:hidden;
            /* 设置为弹性盒子 */
            display:-webkit-box;
            /* 弹性盒子的对齐方式 */
            -webkit-box-orient:vertical;
            /* 限制行数 */
            -webkit-line-clamp:2; 
            word-break:break-all;
        }
        .duration{
            height:1.5385rem;
            line-height:1.5385rem;
        }
    }


`