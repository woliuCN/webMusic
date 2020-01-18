/*
 * @Description: 滑动容器
 * @Author: cn
 * @Date: 2019-09-30 20:13:50
 * @LastEditTime: 2019-11-02 14:46:39
 * @LastEditors: cn
 */
import React, { useState, useEffect, useRef ,useImperativeHandle} from 'react';
import styled from 'styled-components';
import BScroll from "better-scroll";
import PropTypes from 'prop-types';
const ScrollContainer = styled.div`
      width:100%;
      height:100%;
      overflow:hidden;

`
const Scroll = React.forwardRef((props, ref) => {

    const [bScroll, setBScroll] = useState() //存取BS对象
    const scrollContainerRef = useRef();
    /* 
     滚动方向
     是否触发点击事件
     是否刷新重新计算高度
     是否开启回弹动画
    */
    const { direction, click, refresh, bounceTop, bounceBottom } = props;

    /* 
      滚动回调        
     */
    const { onScroll } = props

    useEffect(() => {
  
        if (bScroll) return; //防止每次重新渲染的时候重复定义 
        const scroll = new BScroll(scrollContainerRef.current, {
            scrollX: direction === 'horizontal',
            scrollY: direction === 'vertical',
            probeType: 3,
            click: click,
            bounce: {
                top: bounceTop,
                bottom: bounceBottom
            },
            scrollbar: {
                fade: true,
                interactive: false 
            }
        });
        setBScroll(scroll);
        //监听滑动事件
        if(onScroll){
            scroll.on('scroll',(pos)=>{
              onScroll(pos);
            })
        }
        //如果需要刷新重新计算高度的话
        if(refresh){
            scroll.refresh();
        }
        return ()=>{
            scroll.off('scroll');
            setBScroll(null);
        }
     
    }, [props.children]);
    //应该是在删除的时候调用这个引用的方法
    useImperativeHandle(ref,()=>({
        refresh:()=>{
              if(bScroll){
               bScroll.refresh();
               bScroll.scrollTo(0,0);
            }
        } 
    }));
    
    return (

        <ScrollContainer ref={scrollContainerRef}> 
                <div>
                    {props.children} 
                </div>
        </ScrollContainer>

    )
})

Scroll.defaultProps={
    direction:'vertical',
    click:true,
    refresh:true,
    bounceTop:true,
    bounceBottom:true,
    onScroll:()=>{}
}
Scroll.propType={
    direction:PropTypes.oneOf(['vertical','horizental']),
    click:PropTypes.bool,
    refresh:PropTypes.bool,
    bounceTop:PropTypes.bool,
    bounceBottom:PropTypes.bool,
    onScroll:PropTypes.func
}

export default React.memo(Scroll);