/*
 * @Description: 歌手列表
 * @Author: cn
 * @Date: 2019-10-01 15:39:08
 * @LastEditTime: 2019-11-27 09:59:44
 * @LastEditors: cn
 */
import React, { useState, useEffect } from 'react';
import Horizen from '../../baseui/horizen';
import Loading from '../../baseui/loading';
import { categoryTypes, alphaTypes } from '../../api/config';
import { TopSelect, Line, Content } from './style';
import { connect } from 'react-redux';
import { action } from './store';

function Singers(props) {

  const { cat, getCatDispatch } = props; //分类
  const { alpha, getAlphaDispatch } = props //首字母
  const { singerList, getHotSingersDispatch, getSingersDispatch } = props;
  const { loading } = props;
  const { history } = props;
  useEffect(() => {
    if (cat === '' && alpha ==='') {
      getHotSingersDispatch();
    } else {
      getSingersDispatch();
    }
  }, [cat, alpha])

  //改变分类  
  const handleCategoryChange = (keyWorld) => {
    getCatDispatch(keyWorld);
  }
  //筛选字母
  const handleAlphaChange = (keyWorld) => {
    getAlphaDispatch(keyWorld);
  }
  const renderSingers = () => {
    return singerList.map((singer, i) => {
      return (
        <div className="singer-item" key={i} onClick={() => history.push(`/singers/${singer.id}`)}>
          <div className="img-wrapper">
            <img src={singer.img1v1Url} alt='singer'></img>
          </div>
          <div className="name">{singer.name}</div>
        </div>
      )
    })

  }
  return (
    <div>
      <TopSelect>
        <Horizen defaultSelect={cat} title="分类" list={categoryTypes} handleChange={handleCategoryChange}></Horizen>
        <Horizen defaultSelect={alpha} title="筛选" list={alphaTypes} handleChange={handleAlphaChange}></Horizen>
      </TopSelect>
      <Line></Line>
      <Content>
        {renderSingers()}
      </Content>
      {loading ? <Loading /> : null}
    </div>
  )
}


//redux 状态映射到props
const mapStateToProps = (state) => {
  return {
    cat: state.singers.toJS().cat,
    alpha: state.singers.toJS().alpha,
    singerList: state.singers.toJS().singerList,
    loading: state.singers.toJS().loading,

  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    getCatDispatch: (cat) => {
      dispatch(action.changeCategory(cat))
    },
    getAlphaDispatch: (alpha) => {
      dispatch(action.changeAlpha(alpha))
    },
    getHotSingersDispatch: () => {
      dispatch(action.changeLoading(true))
      dispatch(action.getHotSingers());
    },
    getSingersDispatch: () => {
      dispatch(action.changeLoading(true))
      dispatch(action.getSingers())
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(React.memo(Singers))