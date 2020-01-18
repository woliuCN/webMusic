/*
 * @Description: 请求数据
 * @Autor: cn
 * @Date: 2019-10-26 15:10:13
 * @LastEditors: cn
 * @LastEditTime: 2019-11-20 21:25:44
 */
import { axiosInstance } from './config';

//获取推荐页面轮播图数据
export const getBannerImgRequest = () => {
    return axiosInstance.get('/banner');
}

//获取推荐页面推荐歌单数据
export const getRecommendAlbumRequest = () => {
    return axiosInstance.get('/personalized?limit=10');
}

//获取推荐页面推荐mv数据
export const getRecommendMvRequest = () => {
    return axiosInstance.get('/personalized/mv');
}

//获取推荐页面推荐最新音乐数据
export const getRecommendNewMusicRequest = () => {
    return axiosInstance.get('personalized/newsong');
}

/*-------------------------------------------------*/

//获取歌单页面数据
export const getPlayListRequest = (cat, currentPage) => {
    return axiosInstance.get(`top/playlist?offset=${currentPage * 100}&limit=100&cat=${cat}`);
}

/*-------------------------------------------------歌手页面*/
//获取热门歌手数据
export const getHotSingersRequest = () => {
    return axiosInstance.get("top/artists?limit=100");
}

//根据分类及首字母获取歌手数据
export const getSingersRequest = (cat, alpha) => {
    return axiosInstance.get(`artist/list?cat=${cat}&limit=100&initial=${alpha}`)
}


/*-------------------------------------------------*/

//获取最新歌曲
export const getNewSongsRequest = (type) => {
    return axiosInstance.get(`top/song?type=${type}`)
}


/*-------------------------------------------------歌单详情*/

//获取歌单详情
export const getPlayListDetailsRequest = (id) => {
    return axiosInstance.get(`playlist/detail?id=${id}`)
}
//获取歌单评论
export const getPlayListCommentRequest = (id, currentPage) => {
    return axiosInstance.get(`comment/playlist?id=${id}&limit=50&offset=${currentPage * 50}`);
}


/*-------------------------------------------------专辑详情*/

//获取专辑详情
export const getAlbumDetailsRequest = (id) => {
    return axiosInstance.get(`/album?id=${id}`)
}
//获取专辑动态信息
export const getAlbumDetailDynamicRequest = (id) => {
    return axiosInstance.get(`/album/detail/dynamic?id=${id}`)
}
//获取专辑评论
export const getAlbumCommentRequest = (id, currentPage) => {
    return axiosInstance.get(`/comment/album?id=${id}&limit=50&offset=${currentPage * 50}`);

}

/*-------------------------------------------------歌手详情*/
//获取歌手详情->热门歌曲+信息
export const getSingerDescRequest = (id) => {
    return axiosInstance.get(`artists?id=${id}`);
}

//获取歌手详情介绍
export const getSingerIntroducRequest = (id) => {
    return axiosInstance.get(`artist/desc?id=${id}`);
}

//获取歌手mv
export const getSingerMvRequest = (id) => {
    return axiosInstance.get(`artist/mv?id=${id}&limit=999`);
}

//获取歌手专辑
export const getSingerAlbumRequest = (id) => {
    return axiosInstance.get(`/artist/album?id=${id}&limit=999`);
}
//获取歌手专辑歌曲
export const getSingerAlbumSongsRequest = (id) => {
    return axiosInstance.get(`album?id=${id}`);
}
//获取歌手相似歌手
export const getSimiSingerRequest = (id) => {
    return axiosInstance.get(`/simi/artist?id=${id}`);
}



/*-------------------------------------------------mv页面*/

export const getMvAllRequest = (area,type,order,currentPage)=>{
    return axiosInstance.get(`mv/all?area=${area}&type=${type}&order=${order}&limit=90&offset=${currentPage * 90}`);
}






/*-------------------------------------------------mv详情*/

//获取mv大体数据
export const getMvDetailRequest = (id) => {
    return axiosInstance.get(`mv/detail?mvid=${id}`);
}
//获取mv 播放地址
export const getMvUrlRequest = (id) => {
    return axiosInstance.get(`mv/url?id=${id}`);
}
//获取mv 相关推荐
export const getRelatedMvRequest = (id) => {
    return axiosInstance.get(`related/allvideo?id=${id}`);
}
//获取mv 评论
export const getMvCommentRequest = (id, currentPage) => {
    return axiosInstance.get(`comment/mv?id=${id}&limit=50&offset=${currentPage * 50}`);
}

/*-------------------------------------------------video详情*/

//获取video大体数据
export const getVideoDetailRequest = (id) => {
    return axiosInstance.get(`video/detail?id=${id}`);
}
//获取video播放地址
export const getVideoUrlRequest = (id) => {
    return axiosInstance.get(`video/url?id=${id}`);
}
//获取video相关推荐
export const getRelatedVideoRequest = (id) => {
    return axiosInstance.get(`related/allvideo?id=${id}`);
}
//获取video评论
export const getVideoCommentRequest = (id, currentPage) => {
    return axiosInstance.get(`comment/video?id=${id}&limit=50&offset=${currentPage * 50}`);
}






/*-------------------------------------------------歌曲详情*/
//获取歌曲详情
export const getSongDetailRequest = (id) => {
    return axiosInstance.get(`/song/detail?ids=${id}`)
}

//获取歌词
export const getSonglycRequest = (id) => {
    return axiosInstance.get(`/lyric?id=${id}`)
}

//获取歌曲相似歌曲
export const getSimiSongRequest = (id) => {
    return axiosInstance.get(`/simi/song?id=${id}`);
}
//获取最近听当前歌曲的用户
export const getSimiUserRequest = (id) => {
    return axiosInstance.get(`/simi/user?id=${id}`);
}

//获取歌曲评论
export const getSongCommentRequest = (id, currentPage) => {
    return axiosInstance.get(`comment/music?id=${id}&limit=50&offset=${currentPage * 50}`);
}


/*-------------------------------------------------搜索*/

export  const getSearchHotDetailRequest = ()=>{
    return axiosInstance.get('/search/hot/detail');
}

//获取关键词的搜索建议列表，即歌手信息，歌单信息，歌手等大概内容
export const getSuggestSearchRequest = (keywords)=>{
    return axiosInstance.get(`/search/suggest?keywords=${keywords}`)
}
//获取搜索关键词的歌曲、专辑、歌手、mv等详细信息
export const getAllSearchRequest = (keywords,type,currentPage,limit)=>{
    return axiosInstance.get(`/search?keywords=${keywords}&type=${type}&limit=${limit}&offset=${currentPage * limit}`)
}



/*-------------------------------------------------排行榜*/
//获取全球排行榜数据
export const getRankGlobalListRequest = ()=>{
    return axiosInstance.get('/toplist/detail')
}
//获取官方排行榜数据
export const getOfficalListRequest = (id)=>{
    return axiosInstance.get(`top/list?idx=${id}`)
}
//获取歌手排行榜
export const getSingerRankListRequest = (id)=>{
    return axiosInstance.get("toplist/artist")
}



/*-------------------------------------------------登录*/
//获取登录状态
export const getLoginStatusRequest = (phone,password)=>{
    return axiosInstance.get(`login/cellphone?phone=${phone}&password=${password}`)
}
//退出登录
export const loginLogOutRequest = ()=>{
     axiosInstance.get('/logout');
}

//获取用户歌单
export const getUserPlayListRequest =(uid)=>{
    return axiosInstance.get(`user/playlist?uid=${uid}`);
}
