/*
 * @Description: 歌单页面action
 * @Autor: cn
 * @Date: 2019-10-27 15:34:38
 * @LastEditors: cn
 * @LastEditTime: 2019-10-27 16:20:54
 */
import {getPlayListRequest} from '../../../api/request';
export const actionsType = {
        CHANGE_CAT :'CHANGE_CAT',
        CHANGE_PLAYLIST:'CHANGE_PLAYLIST',
        CHANGE_PAGE_PLAYLIST:'CHANGE_PAGE_PLAYLIST',
        CHANGE_TOTAL_PLAYLIST:'CHANGE_TOTAL_PLAYLIST',
        CHANGE_LOADING:'CHANGE_LOADING'
}
//loading 改变action
export const changeLoading = (data)=>{
    return {
        type:actionsType.CHANGE_LOADING,
        data
    }
}
//改变分类action
export const changeCat = (data)=>{
       return { 
           type:actionsType.CHANGE_CAT,
           data
       }
}
//改变页数action 
export const changePage = (data)=>{
        return { 
            type:actionsType.CHANGE_PAGE_PLAYLIST,
            data
        }
}
//改变总数action 
const changeTotal = (data)=>{
    return { 
        type:actionsType.CHANGE_TOTAL_PLAYLIST,
        data
    }
}
//改变歌单列表action
 const changePlayList = (data)=>{
        return{
           type:actionsType.CHANGE_PLAYLIST,
           data
        }
}

//异步获取歌单列表的中间件函数
export const getPlayList = ()=>{
    return (dispatch,getstate)=>{
        let cat = getstate().playlist.toJS().cat;
        let currentPage = getstate().playlist.toJS().currentPage;         
        getPlayListRequest(cat,currentPage).then(data=>{
            dispatch(changeTotal(data.total))
            dispatch(changePlayList(data.playlists))
            dispatch(changeLoading(false))
        })
        .catch(()=>{
            console.log("获取歌单出错");
        })
    }
}
