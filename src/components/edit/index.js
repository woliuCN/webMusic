/*
 * @Description: 评论框
 * @Autor: cn
 * @Date: 2019-12-08 11:23:43
 * @LastEditors: cn
 * @LastEditTime: 2019-12-08 14:37:49
 */
import React, { useEffect,useRef,useState } from 'react';
import E from 'wangeditor';
import styled from 'styled-components';
const Container = styled.div`
      /* display:${(props) => props.isShow ? 'block' : 'none'}; */
      position: fixed;
      box-shadow:0.3846rem 0.3846rem 0.7692rem #eee;
      /* 这里不能使用margin auto,鼠标移动事件会出bug,只能用百分比了 */
      left:50%;
      right:50%;
      bottom:50%;
      top:50%;
      transform:translate3d(-50%,-50%,0);
      width:30.7692rem;
      height:38.4615rem;
      background:#fafafa;
      font-family:"微软雅黑";
      box-sizing:border-box;
      padding:0 3.8462rem 3.8462rem 3.8462rem;
      z-index:9999;
      color:#999; 
`



function Edit (props){
    const { isShow } = props;
    const editDialogRef = useRef();

    /*
    * x : 拖拽的点的x坐标
    * y : 拖拽的点的y坐标
    * left : 评论框的左偏移量
    * right : 评论框的右偏移量
    * isStart : 是否已经开始拖拽
    */
    const [position, setPosition] = useState({
        x: 0,
        y: 0,
        left: 0,
        top: 0,
        isStart: false
    })


    //评论框按下的时候
    const handleMouseDown = (e) => {
        let x = e.clientX;
        let y = e.clientY;
        let left = editDialogRef.current.offsetLeft;
        let top = editDialogRef.current.offsetTop;
        let isStart = true;
        setPosition({
            x,
            y,
            left,
            top,
            isStart
        });
        editDialogRef.current.style.cursor = 'move';
    }
    //评论框移动
    const handleMouseMove = (e) => {
        if (position.isStart == false) {
            return;
        }
        let newX = e.clientX;
        let newY = e.clientY;
        //计算最后的 left top 距离
        let newLeft = newX - (position.x - position.left);
        let newTop = newY - (position.y - position.top);
        editDialogRef.current.style.left = newLeft + 'px';
        editDialogRef.current.style.top = newTop + 'px';

    }
    //评论框松手
    const handleMouseUp = (e) => {
        setPosition({
            x: position.x,
            y: position.y,
            left: position.left,
            top: position.top,
            isStart: false
        })
        editDialogRef.current.style.cursor = 'default';

    }
    useEffect(()=>{
        var editor = new E('#editor');
        editor.customConfig.menus = [
            'emoticon'
        ];
        editor.create()
    },[])
    return (
        <Container
        ref={editDialogRef}
        isShow={isShow}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
        onMouseDown={handleMouseDown}
        >
        <div id="editor">

        </div>
        </Container>
    )
}

export default Edit