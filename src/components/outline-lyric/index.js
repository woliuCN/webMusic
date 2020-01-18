/*
 * @Description: 外放歌词
 * @Autor: cn
 * @Date: 2019-10-13 22:07:22
 * @LastEditors: cn
 * @LastEditTime: 2019-11-28 14:11:06
 */
import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import style from '../../assets/global-style';
import { connect } from 'react-redux';
const Container = styled.div`
      display:${(props) => props.isShow ? 'block' : 'none'};
      position: fixed;
      bottom:0.7692rem;
      /* 这里不能使用margin auto,鼠标移动事件会出bug,只能用百分比了 */
      left:50%;
      right:50%;
      transform:translateX(-50%);
      width:46.1538rem;
      height:7.6923rem;
      background: hsla(0, 1%, 7%, 0.22);
      font-family:"微软雅黑";
      z-index:99999;
      .options{
          display:flex;
          align-items:center;
          justify-content:space-between;
          margin:0.7692rem auto;
          margin-bottom:1.5385rem;
          width:23.0769rem;
          color:#f2f2f2;
          .iconfont{
            font-size:1.1538rem;
          }
      }
      .lyric{
          font-size:2.3077rem;
          text-align:center;
          color:${style["lyric-color"]};
      }
`



function OutLineLyric(props) {
    const { isShow } = props;
    const { currentLyric } = props;
    const lyricRef = useRef();
    /*
    * x : 拖拽的点的x坐标
    * y : 拖拽的点的y坐标
    * left : 歌词块的左偏移量
    * right : 歌词块的右偏移量
    * isStart : 是否已经开始拖拽
    */
    const [position, setPosition] = useState({
        x: 0,
        y: 0,
        left: 0,
        top: 0,
        isStart: false
    })


    //歌词块按下的时候
    const handleMouseDown = (e) => {
        let x = e.clientX;
        let y = e.clientY;
        let left = lyricRef.current.offsetLeft;
        let top = lyricRef.current.offsetTop;
        let isStart = true;
        setPosition({
            x,
            y,
            left,
            top,
            isStart
        });
        lyricRef.current.style.cursor = 'move';
    }
    //歌词块移动
    const handleMouseMove = (e) => {
        if (position.isStart == false) {
            return;
        }
        let newX = e.clientX;
        let newY = e.clientY;
        //计算最后的 left top 距离
        let newLeft = newX - (position.x - position.left);
        let newTop = newY - (position.y - position.top);
        lyricRef.current.style.left = newLeft + 'px';
        lyricRef.current.style.top = newTop + 'px';

    }
    //歌词块松手
    const handleMouseUp = (e) => {
        setPosition({
            x: position.x,
            y: position.y,
            left: position.left,
            top: position.top,
            isStart: false
        })
        lyricRef.current.style.cursor = 'default';

    }
    return (
        <Container
            ref={lyricRef}
            isShow={isShow}
            onMouseUp={handleMouseUp}
            onMouseMove={handleMouseMove}
            onMouseDown={handleMouseDown}
        >
            <div className="options">
                <i className="iconfont icon-yinle"></i>
                <i className="iconfont icon-shangyiqu"></i>
                <i className="iconfont icon-play"></i>
                <i className="iconfont icon-xiayiqu"></i>
                <i className="iconfont icon-set"></i>
                <i className="iconfont icon-close"></i>
            </div>
            <p className="lyric">
                {currentLyric}
            </p>
        </Container>
    )
}
//redux 状态映射到props
const mapStateToProps = (state) => {
    return {
        currentLyric: state.player.toJS().currentLyric,

    }
}

export default connect(mapStateToProps)(React.memo(OutLineLyric))