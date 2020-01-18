/*
 * @Description: 推荐页面
 * @Author: cn
 * @Date: 2019-09-23 14:13:30
 * @LastEditTime: 2019-11-23 10:45:11
 * @LastEditors: cn
 */
import React, { useEffect } from 'react';
// import { renderRoutes } from 'react-router-config';
import Slide from '../../baseui/slide';
import List from '../../components/list';
import MusicList from './music-list/index';
import MvList from '../../components/mv-list';
import Loading from '../../baseui/loading';
import { Container } from './style';
import { connect } from 'react-redux';
import { actions } from './store';


function Recommend(props) {
  const { loading } = props;
  const { banners, getBannersDispatch } = props;    //轮播图
  const { recAlbums, getRecAlbumsDispatch } = props;   //推荐榜单
  const { recMvs, getRecMvsDispatch } = props; //推荐MV
  const { recNewMusic, getRecNewMuiscDispatch } = props; //最新音乐
  useEffect(() => {
    if (!banners.length) {
      getBannersDispatch();
    };
    if (!recAlbums.length) {
      getRecAlbumsDispatch();
    };
    if (!recMvs.length) {
      getRecMvsDispatch();
    };
    if (!recNewMusic.length) {
      getRecNewMuiscDispatch();
    }

  }, [banners, recAlbums, recMvs, recNewMusic])
  return (
    <Container>
      <Slide banners={banners} />
      <List title="推荐歌单" Albumlist={recAlbums} />
      <MusicList musicList={recNewMusic} />
      <MvList haveTitle={true} width="32" mvLists={recMvs} />
      {/* {renderRoutes(route.routes)} */}
      {loading?<Loading/>:null}
    </Container>
  )
}




//redux 状态映射到props
const mapStateToProps = (state) => {
  return {
    banners: state.recommend.toJS().banners,
    recAlbums: state.recommend.toJS().recAlbums,
    recMvs: state.recommend.toJS().recMvs,
    recNewMusic: state.recommend.toJS().recNewMusic,
    loading:state.recommend.toJS().loading,
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    getBannersDispatch: () => {
      dispatch(actions.getBanners())
    },
    getRecAlbumsDispatch: () => {
      dispatch(actions.changeLoading(true))
      dispatch(actions.getRecAlbum())
    },
    getRecNewMuiscDispatch: () => {
      dispatch(actions.getRecNewMusic())
    },
    getRecMvsDispatch: () => {
      dispatch(actions.getRecMv())
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(React.memo(Recommend));