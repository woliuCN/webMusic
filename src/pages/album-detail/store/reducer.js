/*
 * @Description: 
 * @Autor: cn
 * @Date: 2019-10-30 20:59:22
 * @LastEditors: cn
 * @LastEditTime: 2019-10-30 21:25:39
 */
import { actionsType } from './action';
import { fromJS } from 'immutable';

const initialState = fromJS({
    currentPage: 1,
    total: 0,
    album_desc: {},
    album_dynamic: {},
    hot_comment: [],
    comment: []
})
export default (state = initialState, action) => {
    switch (action.type) {
        case actionsType.CHANGE_PAGE:
            return state.set('currentPage', action.data)
        case actionsType.CHANGE_TOTAL:
            return state.set('total', action.data)
        case actionsType.CHANGE_ALBUM_DETAILS:
            return state.set('album_desc', action.data)
        case actionsType.CHANGE_DYNAMIC:
            return state.set('album_dynamic', action.data)
        case actionsType.CHANGE_HOTCOMMENT:
            return state.set('hot_comment', action.data)
        case actionsType.CHANGE_COMMENT:
            return state.set('comment', action.data)
        default:
            return state
    }
}