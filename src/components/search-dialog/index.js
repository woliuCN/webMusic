/*
 * @Description: 搜索提示框
 * @Autor: cn
 * @Date: 2019-10-20 21:13:02
 * @LastEditors: cn
 * @LastEditTime: 2019-11-28 10:08:22
 */
import React ,{useImperativeHandle,forwardRef, useRef, useState}from 'react';
import styled from 'styled-components';
import style from '../../assets/global-style';
const Dialog = styled.div`
      position:fixed;
      top:3.5714rem;
      left:23rem;
      width:30.7692rem;
      background:#fafafa;
      box-shadow:5px 5px 10px #eee;
      z-index:999;
      >div{
        overflow:auto;
        height:100%;
        width:100%;
        ${style["scroll"]};

      }
      &::before{
        position:absolute;
        z-index:-1;
        content:'';
        width:${props=>props.show?'1.0769rem':0};
        height:${props=>props.show?'1.0769rem':0};
        background:#fafafa;
        border-top:1px solid #eee;
        border-left:1px solid #eee;
        transform:rotateZ(45deg);
        top: -0.5rem;
        left: 2rem;
      }

`
function SearchDialog (props,ref){
    const  [show,setShow] = useState(false);
    const  dialogRef = useRef();
    useImperativeHandle(ref,()=>({
        show:()=>{dialogRef.current.style.height='30.7692rem';setShow(true)},
        hidden:()=>{dialogRef.current.style.height='0';setShow(false)}
    }))
    return (
        <Dialog ref={dialogRef} show={show}>
           <div>
             {props.children}
            </div> 
        </Dialog>
    )
}

export default React.memo(forwardRef(SearchDialog))