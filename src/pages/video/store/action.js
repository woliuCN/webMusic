
import {getVideoCommentRequest,getVideoUrlRequest,getVideoDetailRequest,getRelatedVideoRequest} from '../../../api/request';
export const actionsType = {
    CHANGE_VIDEO_DETAIL:'CHANGE_VIDEO_DETAIL',
    CHANGE_VIDEO_URL:'CHANGE_VIDEO_URL',
    CHANGE_RELATE_VIDEO:'CHANGE_RELATE_VIDEO',
    CHANGE_PAGE:'CHANGE_PAGE',
    CHANGE_TOTAL:'CHANGE_TOTAL',
    CHANGE_HOTCOMMENT:'CHANGE_HOTCOMMENT',
    CHANGE_COMMENT:'CHANGE_COMNENT'

}

//video-detail action
const changeVideoDetail = (data)=>{
    return{
        type : actionsType.CHANGE_VIDEO_DETAIL,
        data
    }
}
//video-url action
const changeVideoUrl = (data)=>{
    return{
        type : actionsType.CHANGE_VIDEO_URL,
        data
    }
}
//video-relate action
const changeRelateVideo = (data)=>{
    return{
        type : actionsType.CHANGE_RELATE_VIDEO,
        data
    }
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

//改变歌单热门评论action
const changeHotComment = (data)=>{
    return { 
        type:actionsType.CHANGE_HOTCOMMENT,
        data
    }
}

//改变歌单热门评论action
const changeComment = (data)=>{
    return { 
        type:actionsType.CHANGE_COMMENT,
        data
    }
}
export const getVideoDesc = (id)=>{
    return (dispatch)=>{
        getVideoDetailRequest(id).then((data)=>{
            dispatch(changeVideoDetail(data.data))
        })
        .catch(()=>{
            console.log("获取video信息失败");
        });
        getVideoUrlRequest(id).then((data)=>{
            dispatch(changeVideoUrl(data.urls[0].url))
        })
        .catch(()=>{
            console.log("获取videoUrl失败");
        });
        getRelatedVideoRequest(id).then((data)=>{
            dispatch(changeRelateVideo(data.data))
        })
        .catch(()=>{
            console.log("获取相关推荐video失败");
        });
    }

}
export const getHotComment = (id)=>{
    return (dispatch)=>{
        getVideoCommentRequest(id,0).then(data=>{
            dispatch(changeHotComment(data.hotComments))
        })
        .catch(()=>{
            console.log("获取热门评论出错");
        })
    }
}
export const getComment = (id)=>{
    return (dispatch,getstate)=>{
        let currentPage = getstate().mv.toJS().currentPage;         
        getVideoCommentRequest(id,currentPage-1).then(data=>{
            dispatch(changeTotal(data.total))
            dispatch(changeComment(data.comments))
        })
        .catch(()=>{
            console.log("获取评论出错");
        })
    }
}