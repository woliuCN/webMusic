/*
 * @Description: 歌单/专辑详情页
 * @Author: cn
 * @Date: 2019-10-03 14:32:13
 * @LastEditTime: 2019-11-24 10:29:32
 * @LastEditors: cn
 */
import React, { useEffect } from 'react';
import { Header, PlayListDeatil } from './style';
import { Tab, TabPanel } from '../../components/tabs';
import SongTable from '../../components/song-table';
import Comment from '../../components/comment';
import Loading from '../../baseui/loading';
import { connect } from 'react-redux';
import { action } from './store';
import { formatCount } from '../../api/utils';
function PlayListDeatils(props) {
    const { total, loading, currentPage, currentPageDispatch } = props;
    const { playlist_desc, getPlayListDescDispatch } = props; //歌单详情
    const { hot_comment, getHotCommentDispatch } = props; //热门评论
    const { comment, getCommentDispatch } = props //最新评论
    const { playing } = props;
    const { match } = props;

    //切换歌单的时候重新渲染
    useEffect(() => {
        let id = match.params.id;
        getPlayListDescDispatch(id);
        getHotCommentDispatch(id);
        getCommentDispatch(id);
    }, [match.params.id])

    //查询下一页评论的时候
    useEffect(() => {
        let id = match.params.id;
        getCommentDispatch(id);
    }, [currentPage])
    const renderTags = (tags) => {
        return tags.map((tag, i) => {
            if (i == tags.length - 1) {
                return <span key={tag}><a href="#">{tag}</a></span>
            } else {
                return <span key={tag}><a href="#">{tag}</a> /  </span>
            }
        })
    }
    return (
        <PlayListDeatil playing={playing}>
            {
                Object.keys(playlist_desc).length > 0 ?
                    <Header>
                        <div className="img-wrapper">
                            <img src={playlist_desc.coverImgUrl} alt="封面"></img>
                        </div>
                        <div className="desc">
                            <div className="title">
                                <span>歌单</span>
                                <span>{playlist_desc.name}</span>
                            </div>
                            <div className="user">
                                <img src={playlist_desc.creator.avatarUrl} alt="creator"></img>
                                <span>{playlist_desc.creator.nickname}</span>
                                <span>{new Date(playlist_desc.createTime).toLocaleDateString()}创建</span>
                            </div>
                            <div className="option">
                                <div>
                                    <i className="iconfont icon-bofang"></i>
                                    <span>播放全部 ＋</span>
                                </div>
                                <div>
                                    <i className="iconfont icon-xihuan"></i>
                                    <span>收藏({playlist_desc.subscribedCount})</span>
                                </div>
                                <div>
                                    <i className="iconfont icon-fenxiang"></i>
                                    <span>分享({playlist_desc.shareCount})</span>
                                </div>
                            </div>
                            <div className="tags">
                                标签：{renderTags(playlist_desc.tags)}
                            </div>
                            <div className="introduce" title={playlist_desc.description}>
                                简介：{playlist_desc.description}
                            </div>
                        </div>
                        <div className="count">
                            <div>歌曲数 |  {playlist_desc.trackCount}</div>
                            <div>播放数 |  {formatCount(playlist_desc.playCount)}</div>
                        </div>
                    </Header> : null
            }
            <Tab defaultSelect="歌曲列表">
                <TabPanel label="歌曲列表">
                    {Object.keys(playlist_desc).length > 0 ?
                        <SongTable songs={playlist_desc.tracks} />
                        : null
                    }

                </TabPanel>
                <TabPanel label={`评论(${total})`}>
                    <div style={{ padding: '0 30px' }}>
                        <Comment
                            title=''
                            total={total}
                            hotComments={hot_comment}
                            newComments={comment}
                            currentPageChange={currentPageDispatch}
                        />
                    </div>
                </TabPanel>
            </Tab>
            {loading ? <Loading /> : null}
        </PlayListDeatil>
    )
}
//redux 状态映射到props
const mapStateToProps = (state) => {
    return {
        total: state.playListDetails.toJS().total,
        currentPage: state.playListDetails.toJS().currentPage,
        playlist_desc: state.playListDetails.toJS().playlist_desc,
        hot_comment: state.playListDetails.toJS().hot_comment,
        comment: state.playListDetails.toJS().comment,
        loading: state.playListDetails.toJS().loading,
        playing: state.player.toJS().play,  //是否在播放

    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        getPlayListDescDispatch: (id) => {
            dispatch(action.changeLoading(true))
            dispatch(action.getPlayListDetails(id))
        },
        getHotCommentDispatch: (id) => {
            dispatch(action.getHotComment(id))
        },
        getCommentDispatch: (id) => {
            dispatch(action.changeLoading(true))
            dispatch(action.getComment(id))
        },
        currentPageDispatch: (currentPage) => {
            dispatch(action.changePage(currentPage))
        },
    }

}
export default connect(mapStateToProps, mapDispatchToProps)(React.memo(PlayListDeatils))
