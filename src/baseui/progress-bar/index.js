/*
 * @Description: 进度条
 * @Author: cn
 * @Date: 2019-09-25 14:37:31
 * @LastEditTime: 2019-11-28 14:17:22
 * @LastEditors: cn
 */


import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import style from '../../assets/global-style';
import PropTypes from 'prop-types';

const ProgressBarWrapper = styled.div`
     height:2.1429rem;
     .bar-inner{
       height:0.2143rem;
       position:relative;
       top:1rem;
       background: rgba(0, 0, 0, .3);
       cursor:pointer;
       .progress{
         position:absolute;
         background:${style["theme-color"]};
         height:100%;
         cursor:pointer;
       }
       .progress-btn-wrapper{
         position:absolute;
         top:-0.9286rem;
         left:0.8571rem;
         left:-0.5rem;
         height:2.1429rem;
         width:2.1429rem;
         .progress-btn{
          position:relative;
          top:0.5714rem;
          left:0.3571rem; 
          width: 0.4286rem;
          height: 0.4286rem;
          border: 0.2857rem solid ${style["border-color"]};
          border-radius: 50%;
          background: ${style["theme-color"]};
          cursor:pointer;
         }
       }
     }

`

//按钮的宽度
const progressBtnWidth = 16;

function ProgressBar(props) {
  const progressBarRef = useRef();
  const progressRef = useRef();
  const progressBtnRef = useRef();
  const [touch, setTouch] = useState({});
  //音乐播放的百分比
  const { percent, percentChange } = props;

  useEffect(() => {
    //当用户不在拖动进度条的时候
    if (percent >= 0 && percent <= 1 && !touch.initial) {
      //计算不同手机用户的那个红色播放条可走的长度
      const barWidth = progressBarRef.current.clientWidth - progressBtnWidth;
      //最终要移动的红色播放条的宽度
      const moveWidth = percent * barWidth;
      progressRef.current.style.width = `${moveWidth}px`;
      progressBtnRef.current.style.transform = `translateX(${moveWidth}px)`;
    }
  }, [percent])

  /* 拖动的时候的位移计算方法 */
  const _offset = (moveWidth) => {
    progressRef.current.style.width = `${moveWidth}px`;
    progressBtnRef.current.style.transform = `translateX(${moveWidth}px)`;
  }

  /* 点击事件,真实移动长度moveWidth = 点击的时候距离页面的x距离-灰色条距离左边的长度 */
  const progressClick = (e) => {
    const rect = progressBarRef.current.getBoundingClientRect();
    const moveWidth = e.pageX - rect.left;
    _offset(moveWidth);
    _changePercent();
  }


  /* 进度条拖动开始 */
  const progressTouchStart = (e) => {
    const startTouch = {};
    startTouch.initial = true;
    startTouch.startX = e.pageX; //获取拖动的初始位置
    startTouch.left = progressRef.current.clientWidth; //获取当前进度条长度
    setTouch(startTouch);
  }
  /* 进度条拖动过程 */
  const progressTouchMove = (e) => {
    e.stopPropagation();
    if (!touch.initial) return //点击了就松手了,就直接返回
    const moveX = e.pageX - touch.startX; //计算移动距离
    //计算不同用户的那个绿色播放条可走的长度
    const barWidth = progressBarRef.current.clientWidth - progressBtnWidth;
    //当拖动到开始跟结束的情况兼容
    const moveWidth = Math.min((Math.max(0, moveX + touch.left)), barWidth)
    _offset(moveWidth);
  }
  /* 进度条拖动结束 */
  const progressTouchEnd = () => {
    //深拷贝一个新对象
    const endTouch = JSON.parse(JSON.stringify(touch));
    endTouch.initial = false;
    setTouch(endTouch);
    _changePercent();
  }
  /* 滑动 点击的时候回调给音乐播放器的百分比计算函数 */
  const _changePercent = () => {
    //实际长度
    const barWidth = progressBarRef.current.clientWidth - progressBtnWidth;
    //当前百分比=进度条长度/实际长度
    const curPercent = progressRef.current.clientWidth / barWidth;
    percentChange(curPercent);
  }
  return (
    /* 
     灰色进度条
     绿色进度条
     进度条按钮
    */
    <ProgressBarWrapper>
      <div className="bar-inner" ref={progressBarRef} onClick={progressClick}>
        <div className="progress" ref={progressRef} ></div>
        <div className="progress-btn-wrapper"
          ref={progressBtnRef}
          onMouseDown={progressTouchStart}
          onMouseMove={progressTouchMove}
          onMouseUp={progressTouchEnd}
        >
          <div className="progress-btn"></div>
        </div>
      </div>
    </ProgressBarWrapper>
  )
}

ProgressBar.defaultProps = {
  percent: 0.2,
  percentChange: (curPercent) => { console.log("当前百分比" + curPercent); }
}

ProgressBar.propTypes = {
  percent: PropTypes.number,
  percentChange: PropTypes.func
}
export default React.memo(ProgressBar)