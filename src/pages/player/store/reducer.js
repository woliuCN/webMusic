/*
 * @Description: 
 * @Autor: cn
 * @Date: 2019-11-09 16:13:05
 * @LastEditors: cn
 * @LastEditTime: 2019-11-25 15:16:35
 */

import { actionsType } from './action';
import { fromJS } from 'immutable';

const initialState = fromJS({
    currentIndex: -1,
    playLists: [],
    currentSong: {},
    play: false,
    lyric: [],
    mode: 0,
    currentPage: 1,
    total: 0,
    hot_comment: [],
    comment: [],
    similar_song: [],
    currentLyric: ''
})


export default (state = initialState, action) => {
    switch (action.type) {
        case actionsType.CHANGE_SONGINDEX:
            return state.set('currentIndex', action.data)
        case actionsType.CHANGE_PLAYLISTS:
            return state.set('playLists', action.data)
        case actionsType.CHANGE_CURRENTSONG:
            return state.set('currentSong', action.data)
        case actionsType.CHANGE_PLAY:
            return state.set('play', action.data)
        case actionsType.CHANGE_LYRIC:
            return state.set('lyric', action.data)
        case actionsType.CHANGE_MODE:
            return state.set('mode', action.data)
        case actionsType.CHANGE_PAGE_PLAYER:
            return state.set('currentPage', action.data)
        case actionsType.CHANGE_TOTAL_PLAYER:
            return state.set('total', action.data)
        case actionsType.CHANGE_HOTCOMMENT_PLAYER:
            return state.set('hot_comment', action.data)
        case actionsType.CHANGE_COMMENT_PLAYER:
            return state.set('comment', action.data)
        case actionsType.CHANGE_SIMILAR_SONG:
            return state.set('similar_song', action.data)
        case actionsType.CHANGE_CURRENT_LYRIC:
            return state.set('currentLyric', action.data)
        default:
            return state;
    }

}