/*
 * @Description: 推荐页面reducer
 * @Autor: cn
 * @Date: 2019-10-26 15:12:38
 * @LastEditors: cn
 * @LastEditTime: 2019-11-23 11:06:36
 */
import { actionsType } from './action';
import { fromJS } from 'immutable';

const initialState = fromJS({
    banners: [],
    recAlbums: [],
    recNewMusic: [],
    recMvs: [],
    loading: false
})

export default (state = initialState, action) => {
    switch (action.type) {
        case actionsType.CHANGE_BANNER:
            return state.set('banners', action.data)
        case actionsType.CHANGE_RECALBUM:
            return state.set('recAlbums', action.data)
        case actionsType.CHANGE_RECNEWMUSIC:
            return state.set('recNewMusic', action.data)
        case actionsType.CHANGE_RECMV:
            return state.set('recMvs', action.data)
        case actionsType.CHANGE_LOADING:
            return state.set('loading', action.data)
        default:
            return state
    }
}