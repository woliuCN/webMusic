/*
 * @Description: 
 * @Autor: cn
 * @Date: 2019-11-11 21:44:25
 * @LastEditors: cn
 * @LastEditTime: 2019-11-11 22:04:27
 */
import { actionsType } from './action';
import { fromJS } from 'immutable';

const initialState = fromJS({
    area: '全部',
    type: '全部',
    order: '上升最快',
    MvList: [],
    currentPage: 0,
    total: 0
})

export default (state = initialState, action) => {
    switch (action.type) {
        case actionsType.CHANGE_AREA:
            return state.set('area', action.data)
        case actionsType.CHANGE_TYPE:
            return state.set('type', action.data)
        case actionsType.CHANGE_ORDER:
            return state.set('order', action.data)
        case actionsType.CHANGE_MVLIST:
            return state.set('MvList', action.data)
        case actionsType.CHANGE_PAGE:
            return state.set('currentPage', action.data)
        case actionsType.CHANGE_TOTAL:
            return state.set('total', action.data)
        default:
            return state
    }
}