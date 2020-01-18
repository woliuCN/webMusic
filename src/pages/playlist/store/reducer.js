/*
 * @Description:歌单页面reducer
 * @Autor: cn
 * @Date: 2019-10-27 15:34:52
 * @LastEditors: cn
 * @LastEditTime: 2019-11-25 20:41:19
 */
import { actionsType } from './action';
import { fromJS } from 'immutable';

const initialState = fromJS({
    cat: '',
    playList: [],
    currentPage: 0,
    total: 0,
    loading: false
})

export default (state = initialState, action) => {
    switch (action.type) {
        case actionsType.CHANGE_CAT:
            return state.set('cat', action.data)
        case actionsType.CHANGE_PLAYLIST:
            return state.set('playList', action.data)
        case actionsType.CHANGE_PAGE_PLAYLIST:
            return state.set('currentPage', action.data)
        case actionsType.CHANGE_TOTAL_PLAYLIST:
            return state.set('total', action.data)
        case actionsType.CHANGE_LOADING:
            return state.set('loading', action.data)
        default:
            return state
    }
}