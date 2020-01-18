/*
 * @Description: 
 * @Autor: cn
 * @Date: 2019-11-02 21:35:55
 * @LastEditors: cn
 * @LastEditTime: 2019-11-03 22:35:55
 */
import { actionsType } from './action';
import { fromJS } from 'immutable';

const initialState = fromJS({
    singer_album: [],
    singer_desc: {},
    singer_intro: [],
    singer_mv: []
})


export default (state = initialState, action) => {
    switch (action.type) {
        case actionsType.CHANGE_SINGER_ALBUM:
            return state.set('singer_album', action.data);
        case actionsType.CHANGE_SINGER_DESC:
            return state.set('singer_desc', action.data);
        case actionsType.CHANGE_SINGER_INTRO:
            return state.set('singer_intro', action.data);
        case actionsType.CHANGE_SINGER_MV:
            return state.set('singer_mv', action.data);

        default:
            return state;
    }
}