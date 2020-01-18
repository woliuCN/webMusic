/*
 * @Description: 歌手详情页面action
 * @Autor: cn
 * @Date: 2019-11-02 21:36:12
 * @LastEditors: cn
 * @LastEditTime: 2019-11-04 21:30:41
 */
import {
        getSingerAlbumRequest,
        getSimiSingerRequest,
        getSingerDescRequest,
        getSingerMvRequest,
        getSingerIntroducRequest
        } from '../../../api/request';

export const actionsType = {
    CHANGE_SINGER_ALBUM:'CHANGE_SINGER_ALBUM',
    CHANGE_SINGER_ALBUM_SONGS:'CHANGE_SINGER_ALBUM_SONGS',
    CHANGE_SINGER_DESC:'CHANGE_SINGER_DESC',
    CHANGE_SINGER_MV:'CHANGE_SINGER_MV',
    CHANGE_SINGER_INTRO:'CHANGE_SINGER_INTRO',
    CHANGE_SIMI_SINGER:'CHANGE_SIMI_SINGER'
}


//歌手专辑 action
const changeSingerAlbum = (data)=>{
    return {
        type:actionsType.CHANGE_SINGER_ALBUM,
        data
    }
}

//歌手相似歌手 action
const changeSimiSinger = (data)=>{
    return {
        type:actionsType.CHANGE_SIMI_SINGER,
        data
    }
}

//歌手简介 action
const changeSingerDesc = (data)=>{
    return {
        type:actionsType.CHANGE_SINGER_DESC,
        data
    }
}

//歌手详情介绍 action
const changeSingerIntro = (data)=>{
    return {
        type:actionsType.CHANGE_SINGER_INTRO,
        data
    }
}

//歌手mv action
const changeSingerMv = (data)=>{
    return {
        type:actionsType.CHANGE_SINGER_MV,
        data
    }
}
//异步获取歌手简介的中间件函数
export const getSingerDesc = (id)=>{
    return (dispatch)=>{
        getSingerDescRequest(id).then((data)=>{
            dispatch(changeSingerDesc(data));
        })
    }
}
//异步获取歌手简介的中间件函数
export const getSimiSinger = (id)=>{
    return (dispatch)=>{
        getSimiSingerRequest(id).then((data)=>{
            dispatch(changeSingerDesc(data));
        })
    }
}
//异步获取歌手详情的中间件函数
export const getSingerIntro = (id)=>{
    return (dispatch)=>{
        getSingerIntroducRequest(id).then((data)=>{
            dispatch(changeSingerIntro(data.introduction));
        })
    }
}
//异步获取歌手mv的中间件函数
export const getSingerMv = (id)=>{
    return (dispatch)=>{
        getSingerMvRequest(id).then((data)=>{
            dispatch(changeSingerMv(data.mvs));
        })
    }
}

//异步获取歌手专辑的中间件函数
export const getSingerAlbum = (id)=>{
    return (dispatch)=>{
        getSingerAlbumRequest(id).then((data)=>{
            dispatch(changeSingerAlbum(data.hotAlbums));
        })
    }
}
