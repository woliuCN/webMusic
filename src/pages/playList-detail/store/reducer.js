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
    playlist_desc: {},
    hot_comment: [],
    comment: [],
    loading: false
})
export default (state = initialState, action) => {
    switch (action.type) {
        case actionsType.CHANGE_PAGE_PLAYLISTDE:
            return state.set('currentPage', action.data)
        case actionsType.CHANGE_TOTAL_PLAYLISTDE:
            return state.set('total', action.data)
        case actionsType.CHANGE_PLAYLIST_DETAILS:
            return state.set('playlist_desc', action.data)
        case actionsType.CHANGE_HOTCOMMENT_PLAYLISTDE:
            return state.set('hot_comment', action.data)
        case actionsType.CHANGE_COMMENT_PLAYLISTDE:
            return state.set('comment', action.data)
        case actionsType.CHANGE_LOADING:
            return state.set('loading', action.data)
        default:
            return state
    }
}