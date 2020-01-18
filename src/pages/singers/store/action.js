/*
 * @Description: singers页面 action
 * @Autor: cn
 * @Date: 2019-10-29 20:47:02
 * @LastEditors: cn
 * @LastEditTime: 2019-10-29 21:01:17
 */
import {getHotSingersRequest,getSingersRequest} from '../../../api/request';

export const actionsType = {
       CHANGE_CATEGORY:'CHANGE_CATEGORY',
       CHANGE_ALPHA:'CHANGE_ALPHA',
       CHANGE_SINGERS:'CHANGE_SINGERS',
       CHANGE_LOADING:'CHANGE_LOADING'
 
}

//loading 改变action
export const changeLoading = (data)=>{
    return {
        type:actionsType.CHANGE_LOADING,
        data
    }
}
//改变分类
export const changeCategory = (data)=>{
    return {
        type:actionsType.CHANGE_CATEGORY,
        data
    }
}
//改变字母
export const changeAlpha = (data)=>{
    return{
        type:actionsType.CHANGE_ALPHA,
        data
    }
}

//改变歌手列表
const changeSingers = (data)=>{
    return {
        type:actionsType.CHANGE_SINGERS,
        data
    }
}
//异步获取歌手列表的中间件函数
export const getHotSingers = ()=>{
    return (dispatch)=>{
        getHotSingersRequest().then(data=>{
            dispatch(changeSingers(data.artists))
            dispatch(changeLoading(false))
        })
        .catch(()=>{
            console.log("获取热门歌手列表出错");
        })
    }
}
export const getSingers = ()=>{
    return (dispatch,getstate)=>{
        let cat = getstate().singers.toJS().cat;
        let alpha = getstate().singers.toJS().alpha;
        getSingersRequest(cat,alpha).then(data=>{
            dispatch(changeSingers(data.artists))
            dispatch(changeLoading(false))
        })
        .catch(()=>{
            console.log("获取歌手列表出错");
        })
    }
}