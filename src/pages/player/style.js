/*
 * @Description: 底部播放器样式
 * @Author: cn
 * @Date: 2019-09-25 16:15:02
 * @LastEditTime: 2019-12-07 21:18:49
 * @LastEditors: cn
 */
import styled from 'styled-components';
import style from '../../assets/global-style';
import {keyframes} from 'styled-components';




//mini 播放器样式
export const Container = styled.div`
         position:fixed;
         bottom:0;
         width:100%;
         height:3.5714rem;
         background:#fafafa;
         display:flex;
         align-items:center;
         border-top:0.0714rem solid #ddd;
         .options{
             flex:0 0 15rem;
             display:flex;
             box-sizing:border-box;
             padding:0 0.7143rem 0 2.1429rem;    
             align-items:center;
             .left,.right{
                width:2.1429rem;
                height:2.1429rem;
                background:${style["theme-color"]};
                border-radius:50%;
                position:relative;
                .iconfont{
                    color:#f2f3f4;
                    position:absolute;
                    font-size: 0.8571rem;
                    top: 0.7143rem;
                    left: 0.6786rem;
                    cursor: pointer;
                }
             }
             .middle{
                width:2.5714rem;
                height:2.5714rem;
                background:${style["theme-color"]};
                border-radius:50%;
                margin:0 1.7143rem;
                position:relative;
                .iconfont{
                    color:#f2f3f4;
                    position:absolute;
                    font-size: 1.2143rem;
                    top: 0.7143rem;
                    left: 0.9286rem;
                    cursor: pointer;
                    &.icon-zanting{
                        left:0.6923rem;
                    }
                }

             }
         }
         .progress-wrapper{
             flex:1;
             display:flex;
             align-items:center;
             .progress{
                 flex:1;
             }
             .start-time,.end-time{
                 flex:0 0 3.5714rem;
                 font-size:0.8571rem;
                 margin-left:0.5714rem;
             }
         }
         .other-options{
             flex:0 0 10.7143rem;
             display:flex;
             align-items:center;
             .iconfont{
                 font-size:1.4286rem;
                 padding:0 0.7143rem;
                 color:#777;
                 cursor: pointer;
             }
             .icon-pajian_gequliebiao_{
                 font-size:1.8571rem;
                 
             }
         }

`;


export const TopDesc = styled.div`
        position: fixed;
        bottom: 3.5714rem;
        left: 0;
        width: 15%;
        box-sizing:border-box;
        padding:0.5714rem;
        display:flex;
        align-items:center;
        border-top:0.0714rem solid #ddd;
        .img{
            width:3rem;
            height:3rem;
            position:relative;
            cursor: pointer;
            &:hover{
                .iconfont{
                    display:block;
                }
            }
            .iconfont{
                position: absolute;
                text-align:center;
                line-height:3rem;
                width:3rem;
                height:3rem;
                display:none;
                color: #dedade;
                font-size: 1.8571rem;
                top: 0;
                left: 0rem;
                background: rgba(7, 17, 27, 0.5);
                transition:all 0.2s linear;
              
            }
            img{
                width:100%;
                border-radius:0.1429rem;
            } 
        }
        .desc{
            font-size:0.8571rem;
            line-height:1.4286rem;
            margin-left:0.7143rem;
            .singer{
                color:#777;
                width:5.3846rem;
                ${style["noWrap"]}
            }
            .song{
                width:5.3846rem;
                ${style["noWrap"]}
            }
        }
        .option{
            display:flex;
            align-items:center;
            flex-direction:column;
            margin-left: 3.4286rem;
            .iconfont{
               font-size: 1.2rem;
               &.icon-share{
                    margin-top: 0.3rem;
                    font-size: 1rem;
               }
               &.icon-aixin{
                  color:#e03f40;
               }
            }
        }
        &.mini-enter{
            transform:translateX(100%);
            opacity:0;
        }
        &.mini-enter-active{
            transform:translateX(0);
            opacity:1;
            transition:all 0.3s linear;
        }
        &.mini-exit{
            transform:translateX(0);
            opacity:1;
        }
        &.mini-exit-active{
            transform:translateX(100%);
            opacity:0;
            transition:all 0.3s linear;
        }
`


const CdColor ='rgba(29, 29, 34,0.7);'
const roate = keyframes`
      0%{
      transform: rotate(0);
        }
        100%{
            transform:rotate(360deg);
        }
`;
export const NormalPlayer = styled.div`
        position:fixed;
        top:3.5714rem;
        bottom:3.5714rem;
        width:100%;
        background:#fff;
        overflow:auto;
        ${style["scroll"]}
        z-index:99;
        .background{
            position:absolute;
            width:90%;
            /* height:70%; */
            height:34rem;
            top:0;
            left:0;
            right:0;
            opacity:0.7;
            z-index:-1;
            filter:blur(1.4286rem);
            img{
                border-radius:20%;
            }
         }
        .filter{
            position:absolute;
            top:0;
            left:0;
            right:0;
            height:34rem;
            /* bottom:26%; */
            filter:blur(1.1429rem);
            background:radial-gradient(circle,rgba(80, 80, 78, 0.1),rgba(198, 195, 196, 0.8),rgba(255, 255, 255, 0.9));
        }
        &.normal-enter{
            .option{
                transform:translateY(-200%);
                opacity:0;
            }
         
        }
        &.normal-enter-active{
            .option{
                transform:translateY(0);
                opacity:1;
                transition:all 0.3s linear;
            }
        }
        &.normal-exit{
            .option{
                transform:translateY(0);
                opacity:1;
            }
        }
        &.normal-exit-active{
            .option{
                transform:translateY(-200%);
                opacity:0;
                transition:all 0.3s linear;
            }
        }
`

export const Content = styled.div`
        width:100%;
        /* height:70%; */
        height:34rem;
        display:flex;
        /* align-items:center; */
        /* overflow:auto; */
        .cd-wrapper{
                flex: 0 0 24rem;
                margin-left:18rem;
                margin-top:3rem;
                display:flex;
                flex-direction:column;
                .cd-wrapper1{
                    /* flex:1; */
                    position:relative;
                    width:24.6154rem;
                    height:24.6154rem;
                    box-sizing:border-box;
                    border-radius:50%;
                    border:0.7692rem solid rgba(182, 181, 183, .7);
                    animation: ${roate} 16s linear infinite;
                    animation-iteration-count:${props=>props.playing?'infinite':0};
                    >div:nth-child(1){	
                        top:0.1538rem;
                        left:0.1538rem;
                        position: absolute;
                        box-sizing: border-box;
                        width:22.6923rem;
                        height:22.6923rem;
                        border: 0.1538rem solid #333;
                        border-radius: 50%;

                    }
                    >div:nth-child(2){
                        top:0.5385rem;
                        left:0.5385rem;
                        position: absolute;
                        box-sizing: border-box;
                        width:21.9231rem;
                        height:21.9231rem;
                        border: 0.1538rem solid #333;
                        border-radius: 50%;
                    }
                    >div:nth-child(3){
                        top:0.9231rem;
                        left:0.9231rem;
                        position: absolute;
                        box-sizing: border-box;
                        width:21.1538rem;
                        height:21.1538rem;
                        border: 0.1538rem solid #333;
                        border-radius: 50%;
                    }
                    >div:nth-child(4){
                        top:1.3077rem;
                        left:1.3077rem;
                        position: absolute;
                        box-sizing: border-box;
                        width:20.3846rem;
                        height:20.3846rem;
                        border: 0.1538rem solid #333;
                        border-radius: 50%;
                    }
                    >div:nth-child(5){
                        top:1.6923rem;
                        left:1.6923rem;
                        position: absolute;
                        box-sizing: border-box;
                        width:19.6154rem;
                        height:19.6154rem;
                        border: 0.1538rem solid #333;
                        border-radius: 50%;
                    }
                    >div:nth-child(6){
                        top:2.0769rem;
                        left:2.0769rem;
                        position: absolute;
                        box-sizing: border-box;
                        width:18.8462rem;
                        height:18.8462rem;
                        border: 0.1538rem solid #333;
                        border-radius: 50%;
                    }
                
                    >div:nth-child(7){
                        top:2.4615rem;
                        left:2.4615rem;
                        position: absolute;
                        box-sizing: border-box;
                        width:18.0769rem;
                        height:18.0769rem;
                        border: 0.1538rem solid #333;
                        border-radius: 50%;
                    }
                    >div:nth-child(8){
                        top:2.8462rem;
                        left:2.8462rem;
                        position: absolute;
                        box-sizing: border-box;
                        width:17.3077rem;
                        height:17.3077rem;
                        border: 0.1538rem solid #333;
                        border-radius: 50%;
                    }
                    >div:nth-child(9){
                        top:3.2308rem;
                        left:3.2308rem;
                        position: absolute;
                        box-sizing: border-box;
                        width:16.5385rem;
                        height:16.5385rem;
                        border: 0.1538rem solid #333;
                        border-radius: 50%;
                    }
                    .cd-wrapper2{			
                        width:23.0769rem;
                        height:23.0769rem;
                        box-sizing:border-box;
                        border-radius:50%;
                        border:3.6923rem solid rgba(37, 37, 40, 1);
                        img{
                            width:100%;
                            box-sizing:border-box;
                            border:0.6154rem solid rgba(31, 31, 31, 1);
                            border-radius:50%;
                        }
                    }
                }
                .options{
                    z-index:200;
                    flex:0 0 4.6154rem;
                    display:flex;
                    align-items:center;
                    justify-content:center;
                    margin-top:0.7692rem;
                    div{
                        background:#f2f3f4;
                        border:0.0769rem solid #999;
                        border-radius:0.3846rem;
                        font-size:0.9231rem;
                        padding:0.3077rem 0.5385rem;
                        margin-right:0.9231rem;
                        width:3.8462rem;
                        span{
                          vertical-align:middle;
                          margin-left:0.3077rem;
                        }
                        .iconfont{
                          font-size:1.2308rem;
                          vertical-align:middle;
                        }
                    }
                }
            }
      
        .song-desc{
            display:flex;
            flex-direction: column;
            /* flex:0 0 28.5714rem; */
            flex:0 0 auto;
            max-width:30rem;
            padding:0.7143rem;
            /* padding-top:2rem; */
            margin-left:8rem;
            margin-top:2rem;
            box-sizing:border-box;
            .title{
                z-index: 99;
                >div:nth-child(1){
                    >span:nth-child(1){
                        font-size:1.5rem;
                        display: inline-block;
                        vertical-align: middle;
                        color:#111;
                        max-width: 300px;
                        ${style["noWrap"]}
                    }
                    /* >span:nth-child(2){
                        vertical-align:middle;
                        display: inline-block;
                        margin-left:0.5714rem;
                        .iconfont{
                            color:red;
                            font-size:2rem;
                        }
                    } */
                    >span:nth-child(2),>span:nth-child(3){
                        vertical-align:bottom;
                        display: inline-block;
                        color:red;
                        font-size:0.7692rem;
                        padding:1px;
                        border:1px solid red;
                        cursor: pointer;
                        margin-left:0.3077rem;
                    }
                }
                >div:nth-child(2){
                  display:flex;
                  >div{
                      padding:1rem 0.85rem 0.7143rem  0;
                      width:8.4615rem;
                      font-size:1rem;
                      ${style["noWrap"]}
                      >span:nth-child(2){
                          color:#2f5ea6;
                      }
                  }  
                }
            }
            .lyric{
                height:26rem;
                z-index:88;
                overflow:hidden;
            }
        }

        .option{
            top: 12%;
            right: 14%;
            position: fixed;
            z-index:2;
            z-index:100;
            cursor: pointer;
            .iconfont{
                background: #f2f3f4;
                font-size: 1.5385rem;
                padding: 0.3077rem 0.7692rem;
                border-radius:0.2308rem;
            }
        }

`
export const StylusTop = styled.div`
        /* top:-9px;
        left:382px; */
        top: -0.8rem;
        left: 30rem;
        width: 1.5385rem;
        position: absolute;
        height: 1.5385rem;
        box-sizing: border-box;
        border: 0.5385rem solid #fff;
        border-radius: 50%;
        background:#aaa;
        z-index: 100;

`
export const StylusContent = styled.div`
        position:relative;
        z-index:99;
        /* top:-219px;
        left:420px; */
        /* top:-3%;
        left:33%; */
        top: -1rem;
        left: 32.6rem;
        transform-origin: -1.3846rem 0.6154rem;
        transform: rotateZ(-5deg);
        transition:all 0.5s linear;
     
        .stylus_2{
            width: 0.5385rem;
            background: #fff;
            border-bottom-left-radius: 0.4615rem;
            height: 6.9231rem;
            position: absolute;
            top: 0.1538rem;
            transform: rotate(-20deg);
            transform-origin: top;
            left: -2.6154rem;
           
        }
        .stylus_3{
            width: 0.5385rem;
            background: #fff;
            height: 3.0769rem;
            position: absolute;
            border-top-left-radius: 0.4615rem;
            top: 6.1538rem;
            left: -0.5385rem;
            transform-origin: top;
            transform: rotateZ(-45deg);
            text-align:center;
            span{
                display:inline-block;
                width: 0.1538rem;
                height: 0.9231rem;
                border-radius:0.3077rem;
                background: black;
                margin: auto;
                margin-top: 2.8462rem;
            }
        }
        .stylus_4{
            position: absolute;
            top: 8.3077rem;
            left: 1.4615rem;
            width: 0.9231rem;
            height: 1.6923rem;
            background: #fff;
            border-top-left-radius: 0.1538rem;
            border-top-right-radius: 0.1538rem;
            transform-origin: top;
            transform: rotateZ(-45deg);
        }
        .stylus_5{
            width: 1.5385rem;
            height: 1.2308rem;
            display:flex;
            justify-content:space-around;
            align-items:center;
            background: #fff;
            border-radius: 0.2308rem;
            transform-origin: top;
            transform: rotateZ(-45deg);
            position: absolute;
            top: 9.4615rem;
            left: 2.3846rem;
            span{
              width:0.0769rem;
              height:80%;
              background:#999;
            }
        }

`
export const Footer = styled.div`
    width:100%;
    padding:4.6154rem 13.8462rem;
    box-sizing:border-box;
    .comment-container{
        width:60%;
        display:inline-block;
        vertical-align:top;
    }
    .recommend-container{
        margin-left:10%;
        width:30%;
        display:inline-block;
        vertical-align:top;

    }
`