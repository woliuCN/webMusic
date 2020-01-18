/*
 * @Description: 
 * @Autor: cn
 * @Date: 2019-11-07 22:00:41
 * @LastEditors: cn
 * @LastEditTime: 2019-11-07 22:09:01
 */
import { actionsType } from './action';
import { fromJS } from 'immutable';

const initialState = fromJS({
    videoDetails: {},
    url: '',
    relateVideo: [],
    currentPage: 1,
    total: 0,
    hot_comment: [],
    comment: []
})

export default (state = initialState, action) => {
    switch (action.type) {
        case actionsType.CHANGE_VIDEO_DETAIL:
            return state.set('videoDetails', action.data)
        case actionsType.CHANGE_VIDEO_URL:
            return state.set('url', action.data)
        case actionsType.CHANGE_RELATE_VIDEO:
            return state.set('relateVideo', action.data)
        case actionsType.CHANGE_PAGE:
            return state.set('currentPage', action.data)
        case actionsType.CHANGE_TOTAL:
            return state.set('total', action.data)
        case actionsType.CHANGE_HOTCOMMENT:
            return state.set('hot_comment', action.data)
        case actionsType.CHANGE_COMMENT:
            return state.set('comment', action.data)
        default:
            return state
    }
}