import { getSongDetailRequest, getSonglycRequest, getSimiSongRequest, getSongCommentRequest } from '../../../api/request';
export const actionsType = {
    CHANGE_SONGINDEX: 'CHANGE_SONGINDEX',
    CHANGE_PLAYLISTS: 'CHANGE_PLAYLISTS',
    CHANGE_CURRENTSONG: 'CHANGE_CURRENTSONG',
    CHANGE_PLAY: 'CHANGE_PLAY',
    CHANGE_LYRIC: 'CHANGE_LYRIC',
    CHANGE_MODE: 'CHANGE_MODE',
    CHANGE_SIMI_SONG: 'CHANGE_SIMI_SONG',
    CHANGE_HOTCOMMENT_PLAYER:'CHANGE_HOTCOMMENT_PLAYER',
    CHANGE_COMMENT_PLAYER:'CHANGE_COMMENT_PLAYER',
    CHANGE_PAGE_PLAYER:'CHANGE_PAGE_PLAYER',
    CHANGE_TOTAL_PLAYER:'CHANGE_TOTAL_PLAYER',
    CHANGE_SIMILAR_SONG:'CHANGE_SIMILAR_SONG',
    CHANGE_CURRENT_LYRIC:'CHANGE_CURRENT_LYRIC'
}

// 获取当前播放的列表的下标，由此寻找播放列表的歌曲，获取其id,进而获取播放地址
export const changeSongIndex = (data) => {
    return {
        type: actionsType.CHANGE_SONGINDEX,
        data
    }
}
// 获取播放列表
export const changePlayLists = (data) => {
    return {
        type: actionsType.CHANGE_PLAYLISTS,
        data
    }
}
//获取播放歌曲详情
const changeCurrentSong = (data) => {
    return {
        type: actionsType.CHANGE_CURRENTSONG,
        data
    }
}
//是否是播放
export const changePlay = (data) => {
    return {
        type: actionsType.CHANGE_PLAY,
        data
    }
}


//获取歌曲详情
export const getCurrentSong = (id) => {
    return (dispatch) => {
        getSongDetailRequest(id).then(data => {
            dispatch(changeCurrentSong(data.songs[0]))
        })
    }
}

//获取歌词
const changeSongLyric = (data) => {
    return {
        type: actionsType.CHANGE_LYRIC,
        data
    }
}
function formatTime(args) {
    let m = parseInt(args.slice(0, 2));
    let s = parseInt(args.slice(3, 7));
    let now = m * 60 + s;
    return now
}

// 获取歌词
export const getSongLyric = (id) => {
    return (dispatch) => {
        getSonglycRequest(id).then(data => {
            if(typeof(data.lrc)==='undefined'){
                dispatch(changeSongLyric([{m:'0',t:'纯音乐请欣赏.....'}]))
            }else{
                let lrc = data.lrc;
                let lyric = lrc.lyric;
                let newLyric = [];
                lyric.split('\n').map((item) => {
                    if (item == '') return;
                    item = item.split(']');
                    if (!(item[1] == '')) {
                        newLyric.push({
                            m: formatTime(item[0].slice(1)),
                            t: item[1]
                        })
                    }
                })
                dispatch(changeSongLyric(newLyric))
            }
            
        })
    }
}

//改变播放模式
export const changeMode = (data) => {
    return {
        type: actionsType.CHANGE_MODE,
        data
    }
} 


//改变页数action 
export const changePage = (data)=>{
    return { 
        type:actionsType.CHANGE_PAGE_PLAYER,
        data
    }
}
//改变总数action 
const changeTotal = (data)=>{
    return { 
        type:actionsType.CHANGE_TOTAL_PLAYER,
        data
    }
}
//改变歌曲热门评论action
const changeHotComment = (data)=>{
    return { 
        type:actionsType.CHANGE_HOTCOMMENT_PLAYER,
        data
    }
}

//改变歌曲最新评论action
const changeComment = (data)=>{
    return { 
        type:actionsType.CHANGE_COMMENT_PLAYER,
        data
    }
}
export const getHotComment = (id)=>{
    return (dispatch)=>{
        getSongCommentRequest(id,0).then(data=>{
            dispatch(changeHotComment(data.hotComments))
        })
        .catch(()=>{
            console.log("获取热门评论出错");
        })
    }
}
export const getComment = (id)=>{
    return (dispatch,getstate)=>{
        let currentPage = getstate().player.toJS().currentPage;         
        getSongCommentRequest(id,currentPage-1).then(data=>{
            dispatch(changeTotal(data.total))
            dispatch(changeComment(data.comments))
        })
        .catch(()=>{
            console.log("获取评论出错");
        })
    }
}

const changeSimilarSong = (data)=>{
    return{
         type :actionsType.CHANGE_SIMILAR_SONG,
         data
    }
}
export const getSimilarSong = (id)=>{
    return (dispatch)=>{
        getSimiSongRequest(id).then(data=>{
            dispatch(changeSimilarSong(data.songs))
        })
        .catch(()=>{
            console.log("获取相似音乐出错");
        })
    }
}

//当前歌词
export const changeCurrentLyric = (data)=>{
    return {
         type:actionsType.CHANGE_CURRENT_LYRIC,
         data
    }
}