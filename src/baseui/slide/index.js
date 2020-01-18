/*
 * @Description: slide 基础组件
 * @Author: cn
 * @Date: 2019-09-22 21:20:06
 * @LastEditTime: 2019-10-26 15:33:39
 * @LastEditors: cn
 */
import React,{useEffect,useState}from 'react';
import styled from 'styled-components';
import style from '../../assets/global-style';
import Swiper from 'swiper';
import 'swiper/css/swiper.css';
const SwiperContainer = styled.div`
   width:100%;
  .swiper-container{
    width: 92%;
    height: 14.2857rem;
    margin: auto;
    border-radius: 0.2857rem;
    .swiper-pagination-bullet{
      width: 1.5714rem;
      height: 0.1429rem;
      border-radius: 0; 
    }
    .swiper-pagination-bullet-active{
      background: ${style["theme-color"]};
    };
    --swiper-theme-color: #ff6600;/* 设置 Swiper风格 */
    --swiper-navigation-color: #eee;/* 单独设置按钮颜色 */
    --swiper-navigation-size: 1.4286rem;/* 设置按钮大小 */
  
  }
`

function Slide (props){
    const [swiper,setSwiper] = useState('');
    const {banners} = props;
    useEffect(()=>{
      if(!swiper&&banners.length){   
      let newSwiper = new Swiper('.swiper-container',{
        loop: true,
        autoplay:true,
        direction: 'horizontal',
        pagination: {
            el: '.swiper-pagination',
        },
        navigation:{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        effect : 'coverflow',
        slidesPerView: 2,
        centeredSlides: true,
        coverflowEffect: {
          rotate: 0,
          stretch: 0,
          depth: 60,
          modifier: 2,
          slideShadows : true
        },
      });
      setSwiper(newSwiper);
    }
    },[banners.length,swiper])
  
    return (
        <SwiperContainer>
            <div className="swiper-container">
                <div className="swiper-wrapper">
                  {
                    banners.map((item,index)=>{
                        return  <div className="swiper-slide" key={index}>
                            <img src={item.imageUrl} width="100%" height="100%" alt="推荐" />                    </div>
                    })
                  }
                </div>
                <div className="swiper-pagination"></div>
                <div className="swiper-button-prev"></div>
                <div className="swiper-button-next"></div>
            </div>
       </SwiperContainer>    
    )

}

export default React.memo(Slide);