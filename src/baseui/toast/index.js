import React,{useImperativeHandle,useState} from 'react';
import styled ,{keyframes}from 'styled-components';
import {CSSTransition} from 'react-transition-group';
import style from '../../assets/global-style';
import PropTypes from  'prop-types';
// 单曲循环，循环播放这些东西的弹框提示
const toastFadeIn = keyframes`
  0%{
     opcity:0;
     transform: scale(0)
  }
  50%{
     opcity:0.5;
     transform: scale(0.5)
  }
  100%{
     opcity:1;
     transform: scale(1)
  }
`

const ToastContainer = styled.div`
     position:fixed;
     bottom:0;
     left:0;
     right:0;
     top:0;
     margin:auto;
     width:15.3846rem;
     height:9.2308rem;
     background: rgba(7, 17, 27, 0.5);
     z-index:999;
     &.drop-enter-active{
         animation:${toastFadeIn} 0.3s;
     };
     &.drop-exit-active{
        animation:${toastFadeIn} 0.3s reverse;
     };

     .text{
         display:flex;
         flex-direction:column;
         height: 100%;
         justify-content: center;
         text-align:center;
         padding:0.7692rem;
         color:#fff;
         font-size:1.2308rem;
         line-height: 2.3077rem;
         .iconfont{
            text-align:center;
            color:#fff;
            font-size:1.8462rem;
     }
     }
`

const Toast = React.forwardRef((props,ref)=>{
     const [show,setShow] = useState(false);
     const [timer,setTimer] = useState('');
     const {mode} = props
     //防抖
     useImperativeHandle(ref,()=>({
         show(){
             if(timer){
                clearTimeout(timer); 
             }
             setShow(true);
             setTimer(setTimeout(()=>{
                 setShow(false);
             },3000))
         }
     }));
    const renderText = ()=>{
        if(mode==0){
            return "已切换到单曲循环模式"
        }else if(mode==1){
            return "已切换到顺序播放模式"
        }else{
            return "已切换到随机播放模式"
        }
    }
    return (
        //退场的时候就卸载组件
       <CSSTransition in={show} classNames="drop" timeout={300} unmountOnExit >
           <ToastContainer>
             <div className="text">
              <i className="iconfont icon-xingzhuang"></i>
              <span> {renderText()}</span>
             </div>
           </ToastContainer>
       </CSSTransition>
    )
});

Toast.defaultProps={
    mode:0,
}
Toast.propTypes={
    mode:PropTypes.number,
}
export default React.memo(Toast);