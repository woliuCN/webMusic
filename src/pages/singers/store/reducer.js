/*
 * @Description: singer reducer
 * @Autor: cn
 * @Date: 2019-10-29 20:47:09
 * @LastEditors: cn
 * @LastEditTime: 2019-10-29 21:12:26
 */
import { actionsType } from './action';
import { fromJS } from 'immutable';

const initialState = fromJS({
    cat: '',
    alpha: '',
    singerList: [],
    loading: false
});

export default (state = initialState, action) => {
    switch (action.type) {
        case actionsType.CHANGE_CATEGORY:
            return state.set('cat', action.data);
        case actionsType.CHANGE_ALPHA:
            return state.set('alpha', action.data);
        case actionsType.CHANGE_SINGERS:
            return state.set('singerList', action.data);
        case actionsType.CHANGE_LOADING:
            return state.set('loading', action.data);
        default:
            return state
    }
}
