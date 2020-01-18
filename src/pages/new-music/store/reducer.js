/*
 * @Description: 
 * @Autor: cn
 * @Date: 2019-10-29 21:45:16
 * @LastEditors: cn
 * @LastEditTime: 2019-10-29 21:53:51
 */
import { actionsType } from './action';
import { fromJS } from 'immutable';

const initialState = fromJS({
    newSongsList: [],
    loading: false
})

export default (state = initialState, action) => {
    switch (action.type) {
        case actionsType.CHANGE_NEWSONGS:
            return state.set('newSongsList', action.data)
        case actionsType.CHANGE_LOADING:
            return state.set('loading', action.data)
        default:
            return state
    }
}