/*
 * @Description: mv action
 * @Autor: cn
 * @Date: 2019-11-05 21:12:17
 * @LastEditors: cn
 * @LastEditTime: 2019-11-06 20:44:11
 */
import {getMvDetailRequest,getMvUrlRequest,getRelatedMvRequest,getMvCommentRequest} from '../../../api/request';


export const actionsType = {
    CHANGE_MV_DETAIL:'CHANGE_MV_DETAIL',
    CHANGE_MV_URL:'CHANGE_MV_URL',
    CHANGE_RELATE_MV:'CHANGE_RELATE_MV',
    CHANGE_PAGE_MV:'CHANGE_PAGE_MV',
    CHANGE_TOTAL_MV:'CHANGE_TOTAL_MV',
    CHANGE_HOTCOMMENT_MV:'CHANGE_HOTCOMMENT_MV',
    CHANGE_COMMENT_MV:'CHANGE_COMNENT'

}

//mv-detail action
const changeMvDetail = (data)=>{
    return{
        type : actionsType.CHANGE_MV_DETAIL,
        data
    }
}
//mv-url action
const changeMvUrl = (data)=>{
    return{
        type : actionsType.CHANGE_MV_URL,
        data
    }
}
//mv-relate action
const changeRelateMv = (data)=>{
    return{
        type : actionsType.CHANGE_RELATE_MV,
        data
    }
}
//改变页数action 
export const changePage = (data)=>{
    return { 
        type:actionsType.CHANGE_PAGE_MV,
        data
    }
}
//改变总数action 
const changeTotal = (data)=>{
    return { 
        type:actionsType.CHANGE_TOTAL_MV,
        data
    }
}

//改变歌单热门评论action
const changeHotComment = (data)=>{
    return { 
        type:actionsType.CHANGE_HOTCOMMENT_MV,
        data
    }
}

//改变歌单热门评论action
const changeComment = (data)=>{
    return { 
        type:actionsType.CHANGE_COMMENT_MV,
        data
    }
}
export const getMvDesc = (id)=>{
    return (dispatch)=>{
        getMvDetailRequest(id).then((data)=>{
            dispatch(changeMvDetail(data.data))
        })
        .catch(()=>{
            console.log("获取mv信息失败");
        });
        getMvUrlRequest(id).then((data)=>{
            dispatch(changeMvUrl(data.data.url))
        })
        .catch(()=>{
            console.log("获取mvUrl失败");
        });
        getRelatedMvRequest(id).then((data)=>{
            dispatch(changeRelateMv(data.data))
        })
        .catch(()=>{
            console.log("获取相关推荐mv失败");
        });
    }

}
export const getHotComment = (id)=>{
    return (dispatch)=>{
        getMvCommentRequest(id,0).then(data=>{
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
        getMvCommentRequest(id,currentPage-1).then(data=>{
            dispatch(changeTotal(data.total))
            dispatch(changeComment(data.comments))
        })
        .catch(()=>{
            console.log("获取评论出错");
        })
    }
}