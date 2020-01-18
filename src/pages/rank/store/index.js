/*
 * @Description: 
 * @Autor: cn
 * @Date: 2019-11-23 15:12:13
 * @LastEditors: cn
 * @LastEditTime: 2019-11-23 17:04:58
 */
import { fromJS } from 'immutable';
import { getRankGlobalListRequest, getOfficalListRequest, getSingerRankListRequest } from '../../../api/request';
const rankArry = [3, 0, 2, 1];
const actionTypes = {
    CHANGE_GLOBAL_RANkLLIST: 'CHANGE_GLOBAL_RANLLIST',
    CHANGE_OFFICAL_RANKLIST: 'CHANGE_OFFICAL_RANKLIST',
    CHANGE_SINGER_RANKLIST: 'CHANGE_SINGER_RANKLIST',
    CHANGELOADING: 'CHANGELOADING'
}

const changeGlobalRankList = (data) => {
    return {
        type: actionTypes.CHANGE_GLOBAL_RANkLLIST,
        data
    }
}
const changeOfficalList = (data) => {
    return {
        type: actionTypes.CHANGE_OFFICAL_RANKLIST,
        data
    }
}
const changeSingerRankList = (data) => {
    return {
        type: actionTypes.CHANGE_SINGER_RANKLIST,
        data
    }
}
export const changeLoading = (data) => {
    return {
        type: actionTypes.CHANGELOADING,
        data
    }
}
//获取全球排行榜
export const getRankGlobalList = () => {
    return (dispatch) => {
        getRankGlobalListRequest().then(data => {
            dispatch(changeGlobalRankList(data.list))
        })
    }
}
//获取官方排行榜
export const getOfficalList = () => {
    return (dispatch) => {
        let promises = rankArry.map(function (id) {
            return getOfficalListRequest(id);
        });
        Promise.all(promises).then(data => {
            dispatch(changeOfficalList(data))
            dispatch(changeLoading(false))
        })
    }
}
//获取歌手排行榜
export const getSingerRankList = () => {
    return (dispatch) => {
        getSingerRankListRequest().then(data => {
            dispatch(changeSingerRankList(data.list))
        })
    }
}
//reudcer
const initialState = fromJS({
    globalRankList: [],
    officalRankList: [],
    singerRankList: {},
    loding: false
})

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.CHANGE_GLOBAL_RANkLLIST:
            return state.set('globalRankList', action.data)
        case actionTypes.CHANGE_OFFICAL_RANKLIST:
            return state.set('officalRankList', action.data)
        case actionTypes.CHANGELOADING:
            return state.set('loding', action.data)
        case actionTypes.CHANGE_SINGER_RANKLIST:
            return state.set('singerRankList', action.data)
        default:
            return state
    }

}
export {
    reducer,
    actionTypes
}

