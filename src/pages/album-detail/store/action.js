/*
 * @Description: 歌单详情action
 * @Autor: cn
 * @Date: 2019-10-30 20:59:13
 * @LastEditors: cn
 * @LastEditTime: 2019-11-24 11:17:37
 */
import {getAlbumDetailsRequest,getAlbumCommentRequest,getAlbumDetailDynamicRequest} from '../../../api/request';

export const actionsType = {
    CHANGE_PAGE:'CHANGE_PAGE',
    CHANGE_TOTAL:'CHANGE_TOTAL',
    CHANGE_ALBUM_DETAILS:'CHANGE_ALBUM_DETAILS',
    CHANGE_HOTCOMMENT:'CHANGE_HOTCOMMENT',
    CHANGE_COMMENT:'CHANGE_COMNENT',
    CHANGE_DYNAMIC:'CHANGE_DYNAMIC'
}

//改变页数action 
export const changePage = (data)=>{
    return { 
        type:actionsType.CHANGE_PAGE,
        data
    }
}
//改变总数action 
const changeTotal = (data)=>{
    return { 
        type:actionsType.CHANGE_TOTAL,
        data
    }
}

//改变专辑详情action
const changeAlbumDetails = (data)=>{
    return { 
        type:actionsType.CHANGE_ALBUM_DETAILS,
        data
    }
}

const changeAlbumDynamic = (data)=>{
    return { 
        type:actionsType.CHANGE_DYNAMIC,
        data
    }
}

//改变专辑热门评论action
const changeHotComment = (data)=>{
    return { 
        type:actionsType.CHANGE_HOTCOMMENT,
        data
    }
}

//改变专辑最新评论action
const changeComment = (data)=>{
    return { 
        type:actionsType.CHANGE_COMMENT,
        data
    }
}

export const getAlbumDetails = (id)=>{
    return (dispatch)=>{
        getAlbumDetailsRequest(id).then(data=>{
            dispatch(changeAlbumDetails(data))
        })
        .catch(()=>{
            console.log("获取专辑详情出错");
        })
    }
}
export const getAlbumDynamic = (id)=>{
    return (dispatch)=>{
        getAlbumDetailDynamicRequest(id).then(data=>{
            dispatch(changeAlbumDynamic(data))
        })
        .catch(()=>{
            console.log("获取歌单动态信息出错");
        })
    }
}
export const getHotComment = (id)=>{
    return (dispatch)=>{
        getAlbumCommentRequest(id,0).then(data=>{
            dispatch(changeHotComment(data.hotComments))
        })
        .catch(()=>{
            console.log("获取热门评论出错");
        })
    }
}
export const getComment = (id)=>{
    return (dispatch,getstate)=>{
        let currentPage = getstate().albumDetails.toJS().currentPage;         
        getAlbumCommentRequest(id,currentPage-1).then(data=>{
            dispatch(changeTotal(data.total))
            dispatch(changeComment(data.comments))
        })
        .catch(()=>{
            console.log("获取评论出错");
        })
    }
}