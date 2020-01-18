/*
 * @Description: 推荐页面相关action
 * @Autor: cn
 * @Date: 2019-10-26 15:12:28
 * @LastEditors: cn
 * @LastEditTime: 2019-10-27 14:23:03
 */
import {getBannerImgRequest,getRecommendAlbumRequest,getRecommendMvRequest,getRecommendNewMusicRequest} from '../../../api/request';

export const actionsType = {
    CHANGE_BANNER : 'CHANGE_BANNER',
    CHANGE_RECALBUM: 'CHANGE_RECALBUM',
    CHANGE_RECMV: 'CHANGE_RECMV',
    CHANGE_RECNEWMUSIC:'CHANGE_RECNEWMUSIC',
    CHANGE_LOADING:'CHANGE_LOADING'
}

//loading 改变action
export const changeLoading = (data)=>{
    return {
        type:actionsType.CHANGE_LOADING,
        data
    }
}
//轮播图改变action
const changeBanners = (data)=>{
    return {
        type:actionsType.CHANGE_BANNER,
        data
    }
}
//异步获取轮播图的中间件函数
export const getBanners = ()=>{
    return (dispatch)=>{
        getBannerImgRequest().then(data=>{
            dispatch(changeBanners(data.banners))
        })
        .catch(()=>{
            console.log("轮播出错");
        })
    }
}

//推荐歌单改变action
const changeRecAlbum = (data)=>{
    return {
        type:actionsType.CHANGE_RECALBUM,
        data
    }
}
//异步获取推荐歌单的中间件函数
export const getRecAlbum = ()=>{
    return (dispatch)=>{
        getRecommendAlbumRequest().then(data=>{
            dispatch(changeRecAlbum(data.result))
            dispatch(changeLoading(false))
        })
        .catch(()=>{
            console.log("获取推荐榜单出错");
        })
    }
}

//推荐mv改变action
const changeRecMv = (data)=>{
    return {
        type:actionsType.CHANGE_RECMV,
        data
    }
}
//异步获取推荐mv的中间件函数
export const getRecMv = ()=>{
    return (dispatch)=>{
        getRecommendMvRequest().then(data=>{
            let mvs = [];
            for(let i =0;i<3;i++){
                mvs.push(data.result[i])
            }
            dispatch(changeRecMv(mvs))
        })
        .catch(()=>{
            console.log("获取推荐mv出错");
        })
    }
}


//最新音乐改变action
const changeRecNewMusic = (data)=>{
    return {
        type:actionsType.CHANGE_RECNEWMUSIC,
        data
    }
}

//异步获取最新音乐的中间件函数
export const getRecNewMusic = ()=>{
    return (dispatch)=>{
        getRecommendNewMusicRequest().then(data=>{
          dispatch(changeRecNewMusic(data.result))
        })
        .catch(()=>{
            console.log("获取最新音乐出错");
        })
    }
}