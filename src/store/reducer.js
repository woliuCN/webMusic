/*
 * @Description: reducer
 * @Autor: cn
 * @Date: 2019-10-26 15:06:18
 * @LastEditors: cn
 * @LastEditTime: 2019-11-24 11:15:59
 */
import {reducer as globalReducer} from '../pages/home/store';
import {reducer as recommendReducer} from '../pages/recommend/store';
import {reducer as playlistReducer} from '../pages/playlist/store';
import {reducer as singesrReducer} from '../pages/singers/store';
import {reducer as newSongsReducer} from '../pages/new-music/store';
import {reducer as playListDetailsReducer} from '../pages/playList-detail/store';
import {reducer as myLikeReducer} from '../pages/mylike-detail/store';
import {reducer as albumDetailsReducer} from '../pages/album-detail/store';
import {reducer as singerReducer} from '../pages/singer/store';
import {reducer as MvReducer} from '../pages/mv/store';
import {reducer as MvsReducer} from '../pages/mvs/store';
import {reducer as videoReducer} from '../pages/video/store';
import {reducer as playerReducer} from '../pages/player/store';
import {reducer as searchReducer} from '../pages/search/store';
import {reducer as rankReducer} from '../pages/rank/store';
import {combineReducers} from 'redux';

const reducer = combineReducers({
      global:globalReducer,
      recommend:recommendReducer,
      playlist:playlistReducer ,
      singers:singesrReducer ,
      newSongs:newSongsReducer,
      playListDetails:playListDetailsReducer,
      albumDetails:albumDetailsReducer,
      singer:singerReducer,
      mv:MvReducer,
      mvs:MvsReducer,
      video:videoReducer,
      player:playerReducer,
      search:searchReducer,
      rank:rankReducer,
      myLike:myLikeReducer
})
export default reducer;