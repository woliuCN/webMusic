/*
 * @Description: 
 * @Autor: cn
 * @Date: 2019-11-16 15:44:30
 * @LastEditors: cn
 * @LastEditTime: 2019-11-25 20:59:32
 */
import {getSearchHotDetailRequest,getAllSearchRequest,getSuggestSearchRequest} from '../../../api/request';
import {searchType} from '../../../api/config';
export const actionsType = {
    CHANGE_PAGE_SEARCH:'CHANGE_PAGE_SEARCH',
    CHANGE_TOTAL_SEARCH:'CHANGE_TOTAL_SEARCH',
    CHANGE_TYPE:'CHANGE_TYPE',
    CHANGE_OFFSET:'CHANGE_OFFSET',
    CHANGE_HOTSEARCH_LIST:'CHANGE_HOTSEARCH_LIST',
    CHANGE_SEARCH_SUGGEST:'CHANGE_SEARCH_SUGGEST',
    CHANGE_ALL_SEARCH:'CHANGE_ALL_SEARCH'
}

//改变搜索类型
export const changeType = (data)=>{
    return {
        type:actionsType.CHANGE_TYPE,
        data
    }
}

//改变页数action 
export const changePage = (data)=>{
    return { 
        type:actionsType.CHANGE_PAGE_SEARCH,
        data
    }
}
//改变总数action 
const changeTotal = (data)=>{
    return { 
        type:actionsType.CHANGE_TOTAL_SEARCH,
        data
    }
}
const changeHotSearchList = (data)=>{
    return {
        type:actionsType.CHANGE_HOTSEARCH_LIST,
        data
    }
}

export const getSearchHotList = ()=>{
    return (dispatch)=>{
        getSearchHotDetailRequest().then((data)=>{
            dispatch(changeHotSearchList(data.data))
        })
    }
}

//搜索简略列表
const changeSearchSuggest = (data)=>{
    return {
        type:actionsType.CHANGE_SEARCH_SUGGEST,
        data
    }
}

export const getSearchSuggestList = (keywords)=>{
    return (dispatch)=>{
        getSuggestSearchRequest(keywords).then(data=>{
            dispatch(changeSearchSuggest(data.result))
        })
    }
}

//获取搜索详细列表
const changeAllSearchList = (data)=>{
    return{
        type:actionsType.CHANGE_ALL_SEARCH,
        data
    }
}

export const getAllSearchList = (keywords,limit)=>{
    return (dispatch,getstate)=>{
        let currentPage = getstate().search.toJS().currentPage-1; 
        let type = getstate().search.toJS().type;
        let countName = searchType[type].countName;
        getAllSearchRequest(keywords,type,currentPage,limit)
        .then(data=>{
            dispatch(changeAllSearchList(data.result));
            dispatch(changeTotal(data.result[countName]))
        })  
    }
}