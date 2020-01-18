/*
 * @Description: newSongs action
 * @Autor: cn
 * @Date: 2019-10-29 21:44:56
 * @LastEditors: cn
 * @LastEditTime: 2019-10-29 21:50:38
 */
import {getNewSongsRequest} from '../../../api/request';

export const actionsType = {
    CHANGE_NEWSONGS:'CHANGE_NEWSONGS',
    CHANGE_LOADING:'CHANGE_LOADING'
}

//loading 改变action
export const changeLoading = (data)=>{
    return {
        type:actionsType.CHANGE_LOADING,
        data
    }
}

//最新歌曲改变action
const changeNewSongs = (data)=>{
    return {
        type:actionsType.CHANGE_NEWSONGS,
        data
    }
}
//异步获取最新音乐的中间件函数
export const getNewSongs = (type)=>{
    return (dispatch)=>{
        getNewSongsRequest(type).then(data=>{
          dispatch(changeNewSongs(data.data))
          dispatch(changeLoading(false))
        })
        .catch(()=>{
            console.log("获取最新音乐出错");
        })
    }
}