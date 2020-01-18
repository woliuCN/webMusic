/*
 * @Description: 
 * @Autor: cn
 * @Date: 2019-11-16 15:44:52
 * @LastEditors: cn
 * @LastEditTime: 2019-11-25 21:00:54
 */

import { actionsType } from './action';
import { fromJS } from 'immutable';

const initialState = fromJS({
    currentPage: 1,
    total: 0,
    type:1, //默认为单曲
    hotSearchList: [],
    suggestSearchList: {},
    allSearchList: {}

})


export default (state = initialState, action) => {
    switch (action.type) {
        case actionsType.CHANGE_TYPE:
            return state.set('type', action.data)    
        case actionsType.CHANGE_PAGE_SEARCH:
            return state.set('currentPage', action.data)
        case actionsType.CHANGE_TOTAL_SEARCH:
            return state.set('total', action.data)
        case actionsType.CHANGE_HOTSEARCH_LIST:
            return state.set('hotSearchList', action.data)
        case actionsType.CHANGE_SEARCH_SUGGEST:
            return state.set('suggestSearchList', action.data)
        case actionsType.CHANGE_ALL_SEARCH:
            return state.set('allSearchList', action.data)
        default:
            return state;
    }

}