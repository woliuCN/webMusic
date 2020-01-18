/*
 * @Description: 歌单详情action
 * @Autor: cn
 * @Date: 2019-10-30 20:59:13
 * @LastEditors: cn
 * @LastEditTime: 2019-11-24 10:21:11
 */
import {getPlayListDetailsRequest,getPlayListCommentRequest} from '../../../api/request';

export const actionsType = {
    CHANGE_PAGE_PLAYLISTDE:'CHANGE_PAGE_PLAYLISTDE',
    CHANGE_TOTAL_PLAYLISTDE:'CHANGE_TOTAL_PLAYLISTDE',
    CHANGE_PLAYLIST_DETAILS:'CHANGE_PLAYLIST_DETAILS',
    CHANGE_HOTCOMMENT_PLAYLISTDE:'CHANGE_HOTCOMMENT_PLAYLISTDE',
    CHANGE_COMMENT_PLAYLISTDE:'CHANGE_COMMENT_PLAYLISTDE',
    CHANGE_LOADING:'CHANGE_LOADING'
}
//loading 改变action
export const changeLoading = (data)=>{
    return {
        type:actionsType.CHANGE_LOADING,
        data
    }
}

//改变页数action 
export const changePage = (data)=>{
    return { 
        type:actionsType.CHANGE_PAGE_PLAYLISTDE,
        data
    }
}
//改变总数action 
const changeTotal = (data)=>{
    return { 
        type:actionsType.CHANGE_TOTAL_PLAYLISTDE,
        data
    }
}

//改变歌单详情action
const changePlayListDetails = (data)=>{
    return { 
        type:actionsType.CHANGE_PLAYLIST_DETAILS,
        data
    }
}
//改变歌单热门评论action
const changeHotComment = (data)=>{
    return { 
        type:actionsType.CHANGE_HOTCOMMENT_PLAYLISTDE,
        data
    }
}

//改变歌单最新评论action
const changeComment = (data)=>{
    return { 
        type:actionsType.CHANGE_COMMENT_PLAYLISTDE,
        data
    }
}

export const getPlayListDetails = (id)=>{
    return (dispatch)=>{
        getPlayListDetailsRequest(id).then(data=>{
            dispatch(changePlayListDetails(data.playlist))
            dispatch(changeLoading(false))
        })
        .catch(()=>{
            console.log("获取歌单详情出错");
        })
    }
}
export const getHotComment = (id)=>{
    return (dispatch)=>{
        getPlayListCommentRequest(id,0).then(data=>{
            dispatch(changeHotComment(data.hotComments))
        })
        .catch(()=>{
            console.log("获取热门评论出错");
        })
    }
}
export const getComment = (id)=>{
    return (dispatch,getstate)=>{
        let currentPage = getstate().playListDetails.toJS().currentPage;         
        getPlayListCommentRequest(id,currentPage-1).then(data=>{
            dispatch(changeTotal(data.total))
            dispatch(changeComment(data.comments))
            dispatch(changeLoading(false))
        })
        .catch(()=>{
            console.log("获取评论出错");
        })
    }
}