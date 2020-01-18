
import React, { useEffect } from 'react';
import Comment from '../../components/comment';
import { Container, Left, Right, RecommendMV } from './style';
import { connect } from 'react-redux';
import { action } from './store';
import {formatCount,formatTime} from '../../api/utils';
function Video(props) {
    const { videoDetails, url,relateVideo, getVideoDescDispatch } = props;
    const {currentPage,total,currentPageDispatch} = props;//分页相关
    const { hot_comment, getHotCommentDispatch } = props; //热门评论
    const { comment, getCommentDispatch } = props //最新评论
    const { match ,history} = props;

    //切换mv的时候触发
    useEffect(() => {
        let id = match.params.id;
        getVideoDescDispatch(id);
        getHotCommentDispatch(id);
        getCommentDispatch(id);
    }, [match.params.id])

    //查询下一页评论的时候
    useEffect(()=>{
        let id = match.params.id;
        getCommentDispatch(id);
    },[currentPage])

    const cutVideo = (id)=>{
        let reg = /[a-zA-Z]/g;
        if(reg.test(id)){
            history.push(`/video/${id}`);
        }else{
            history.push(`/mv/${id}`);
        }
    }
    //渲染相关推荐视频 
    const renderRecommendVideo = () => {
        return relateVideo.map((mv,i)=>{
            return <RecommendMV key={"mv"+i} onClick={()=>cutVideo(mv.vid)}>
            <div className="img-wrapper">
                <div className="decorate"></div>
                <img src={mv.coverUrl} alt=''></img>
                <div className="count">
                    <i className="iconfont icon-shipin"></i>
                    <span>{formatCount(mv.playTime)}</span>
                </div>
            </div>
            <div className="info">
                <div className="title">{mv.title}</div>
                <div className="duration">{formatTime(mv.durationms)}</div>
                <div className="creator">by {mv.creator[0].userName}</div>
            </div>
        </RecommendMV>
        })
        
    }
    //拼接标签
    const combineTags = (tag)=>{
        let str = '';
        if(tag.length==1){
            return tag[0].name;
        }
        else{
            for(let i =0;i<tag.length;i++){
                if(i == tag.length-1){
                    str+=tag[i].name;
                }else{
                    str+=tag[i].name+'/'
                }
            }
        }

        return str;
    }
    return (
        <Container>
            {
                Object.keys(videoDetails).length>0?
                <Left>
                <div className="title">
                    <i className="iconfont icon-previewleft" onClick={()=>history.goBack()}></i>
                    {/* <i className="iconfont icon-MV"></i> */}
                    <div>
                        <span className="name">{videoDetails.title}</span>
                        <span className="artist">{videoDetails.creator.nickname}</span>
                    </div>
                </div>
                <div className="mv-container">
                    <video
                        width="640" height="360"
                        autoPlay="autoPlay"
                        controls="controls"
                        src={url}
                        poster={videoDetails.coverUrl}
                    >
                    </video>
                </div>
                <div className="options">
                    <div><i className="iconfont icon-thumbup"></i><span>赞({videoDetails.praisedCount})</span></div>
                    <div><i className="iconfont icon-jiaru-"></i><span>收藏({videoDetails.subscribeCount})</span></div>
                    <div><i className="iconfont icon-fenxiang"></i><span>分享({videoDetails.shareCount})</span></div>
                    {/* <div><i className="iconfont icon-xiazai"></i><span>下载mv</span></div> */}
                </div>
                <div className="comment-list">
                    <Comment 
                        title='评论'
                        total={total} 
                        hotComments={hot_comment}
                        newComments={comment}
                        currentPageChange={currentPageDispatch}
                    />
                </div>
            </Left>:null
            }
           {
                Object.keys(videoDetails).length>0?
                <Right>
                        <h1>视频介绍</h1>
                        <div className="info">
                            <div className="public-time">发布时间: {new Date(videoDetails.publishTime).toLocaleDateString()}</div>
                            <div className="play-count">播放次数: {formatCount(videoDetails.playTime)}次</div>
                        </div>
                        <div className="brief-desc">
                            {videoDetails.briefDesc}
                        </div>
                        <div className="desc">
                            简介：{videoDetails.description}
                        </div>
                        <div className="tag">
                            标签:
                            {combineTags(videoDetails.videoGroup)}
                        </div>
                        <h1>相关推荐</h1>
                        {relateVideo.length>0?renderRecommendVideo():null}
                    </Right> : null

           }
           
        </Container>
    )
}

const mapStateToProps = (state) => {
    return {
        videoDetails: state.video.toJS().videoDetails,
        url: state.video.toJS().url,
        relateVideo: state.video.toJS().relateVideo,
        total: state.video.toJS().total,
        currentPage: state.video.toJS().currentPage,
        hot_comment: state.video.toJS().hot_comment,
        comment: state.video.toJS().comment,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        getVideoDescDispatch: (id) => {
            dispatch(action.getVideoDesc(id))
        },
        getHotCommentDispatch: (id) => {
            dispatch(action.getHotComment(id))
        },
        getCommentDispatch: (id) => {
            dispatch(action.getComment(id))
        },
        currentPageDispatch: (currentPage) => {
            dispatch(action.changePage(currentPage))
        },
    }

}
export default connect(mapStateToProps,mapDispatchToProps)(React.memo(Video)) 