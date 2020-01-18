/*
 * @Description: 
 * @Autor: cn
 * @Date: 2019-11-05 21:12:24
 * @LastEditors: cn
 * @LastEditTime: 2019-11-25 22:06:07
 */
import { actionsType } from './action';
import { fromJS } from 'immutable';

const initialState = fromJS({
    mvDetails: {},
    url: '',
    relateMV: [],
    currentPage: 1,
    total: 0,
    hot_comment: [],
    comment: []
})

export default (state = initialState, action) => {
    switch (action.type) {
        case actionsType.CHANGE_MV_DETAIL:
            return state.set('mvDetails', action.data)
        case actionsType.CHANGE_MV_URL:
            return state.set('url', action.data)
        case actionsType.CHANGE_RELATE_MV:
            return state.set('relateMV', action.data)
        case actionsType.CHANGE_PAGE_MV:
            return state.set('currentPage', action.data)
        case actionsType.CHANGE_TOTAL_MV:
            return state.set('total', action.data)
        case actionsType.CHANGE_HOTCOMMENT_MV:
            return state.set('hot_comment', action.data)
        case actionsType.CHANGE_COMMENT_MV:
            return state.set('comment', action.data)
        default:
            return state
    }
}