/*
 * @Description: mv页面
 * @Autor: cn
 * @Date: 2019-10-14 21:17:55
 * @LastEditors: cn
 * @LastEditTime: 2019-11-28 09:59:12
 */
import React, { useEffect } from 'react';
import Comment from '../../components/comment';
import { Container, Left, Right, RecommendMV } from './style';
import { connect } from 'react-redux';
import { action } from './store';
import {changePlay} from '../../pages/player/store/action';
import {formatCount,formatTime,combineArtist} from '../../api/utils';
function MV(props) {
    const { mvDetails, url,relateMV, getMvDescDispatch } = props;
    const {currentPage,total,currentPageDispatch} = props;//分页相关
    const { hot_comment, getHotCommentDispatch } = props; //热门评论
    const { comment, getCommentDispatch } = props //最新评论
    const { playDispatch} = props; //播放mv的时候需要停止播放音乐
    const { match ,history} = props;

    //切换mv的时候触发
    useEffect(() => {
        let id = match.params.id;
        getMvDescDispatch(id);
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
        playDispatch();
    }
    //渲染相关推荐视频 
    const renderRecommendMv = () => {
        return relateMV.map((mv,i)=>{
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
    return (
        <Container>
            {
                Object.keys(mvDetails).length>0?
                <Left>
                <div className="title">
                    <i className="iconfont icon-previewleft" onClick={()=>history.goBack()}></i>
                    <i className="iconfont icon-MV"></i>
                    <div>
                        <span className="name">{mvDetails.name}</span>
                        <span className="artist">{combineArtist(mvDetails.artists)}</span>
                    </div>
                </div>
                <div className="mv-container">
                    <video
                        style={{width:'50rem',height:'28.1rem'}}
                        // width="640" height="360"
                        autoPlay="autoPlay"
                        controls="controls"
                        src={url}
                        poster={mvDetails.cover}
                    >
                    </video>
                </div>
                <div className="options">
                    <div><i className="iconfont icon-thumbup"></i><span>赞({mvDetails.likeCount})</span></div>
                    <div><i className="iconfont icon-jiaru-"></i><span>收藏({mvDetails.subCount})</span></div>
                    <div><i className="iconfont icon-fenxiang"></i><span>分享({mvDetails.shareCount})</span></div>
                    <div><i className="iconfont icon-xiazai"></i><span>下载mv</span></div>
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
                Object.keys(mvDetails).length>0?
                <Right>
                        <h1>MV介绍</h1>
                        <div className="info">
                            <div className="public-time">发布时间: {mvDetails.publishTime}</div>
                            <div className="play-count">播放次数: {formatCount(mvDetails.playCount)}次</div>
                        </div>
                        <div className="brief-desc">
                            {mvDetails.briefDesc}
                        </div>
                        <div className="desc">
                            简介：{mvDetails.desc}
                        </div>
                        <div className="tag">
                            标签:
                            <span>MV</span>
                        </div>
                        <h1>相关推荐</h1>
                        {relateMV.length>0?renderRecommendMv():null}
                    </Right> : null

           }
           
        </Container>
    )
}

const mapStateToProps = (state) => {
    return {
        mvDetails: state.mv.toJS().mvDetails,
        url: state.mv.toJS().url,
        relateMV: state.mv.toJS().relateMV,
        total: state.mv.toJS().total,
        currentPage: state.mv.toJS().currentPage,
        hot_comment: state.mv.toJS().hot_comment,
        comment: state.mv.toJS().comment,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        getMvDescDispatch: (id) => {
            dispatch(action.getMvDesc(id))
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
        playDispatch:()=>{
            dispatch(changePlay(false))
        }
    }

}
export default connect(mapStateToProps,mapDispatchToProps)(React.memo(MV)) 