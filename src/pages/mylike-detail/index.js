/*
 * @Description: 我喜欢的页面，因为跟歌单一样，所以直接引用了 方法跟名称没改。
 * @Author: cn
 * @Date: 2019-10-03 14:32:13
 * @LastEditTime: 2019-12-08 10:37:52
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
function MyLikeDeatils(props) {
    const { total, loading, currentPage, currentPageDispatch } = props;
    const { playlist_desc, getPlayListDescDispatch } = props; //歌单详情
    const { hot_comment, getHotCommentDispatch } = props; //热门评论
    const { comment, getCommentDispatch } = props //最新评论
    const { playing } = props;
    const { match } = props;
    var userdesc = sessionStorage.getItem('userDesc')?JSON.parse(sessionStorage.getItem('userDesc')):'';
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
                Object.keys(playlist_desc).length > 0 &&userdesc!==''?
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
                        </div>
                        <div className="count">
                            <div>歌曲数 |  {playlist_desc.trackCount}</div>
                            <div>播放数 |  {formatCount(playlist_desc.playCount)}</div>
                        </div>
                    </Header> : 
                    <Header>
                        <div className="img-wrapper">
                            <img src="../../../background.jpg" alt="封面"></img>
                        </div>
                        <div className="desc">
                            <div className="title">
                                <span>歌单</span>
                                <span>我喜欢的音乐</span>
                            </div>
                            <div className="user">
                                <img src="../../../background.jpg" alt="creator"></img>
                                <span>未登录</span>
                                <span>{new Date().toLocaleDateString()}创建</span>
                            </div>
                            <div className="option">
                                <div>
                                    <i className="iconfont icon-bofang"></i>
                                    <span>播放全部 ＋</span>
                                </div>
                                <div>
                                    <i className="iconfont icon-xihuan"></i>
                                    <span>收藏(0)</span>
                                </div>
                                <div>
                                    <i className="iconfont icon-fenxiang"></i>
                                    <span>分享(0)</span>
                                </div>
                            </div>
                        </div>
                        <div className="count">
                            <div>歌曲数 |  0</div>
                            <div>播放数 |  0</div>
                        </div>
                    </Header> 
            }
            <Tab defaultSelect="歌曲列表">
                <TabPanel label="歌曲列表">
                    {Object.keys(playlist_desc).length > 0 &&userdesc!==''?
                        <SongTable songs={playlist_desc.tracks} islike ={true}/>
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
        total: state.myLike.toJS().total,
        currentPage: state.myLike.toJS().currentPage,
        playlist_desc: state.myLike.toJS().playlist_desc,
        hot_comment: state.myLike.toJS().hot_comment,
        comment: state.myLike.toJS().comment,
        loading: state.myLike.toJS().loading,
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
export default connect(mapStateToProps, mapDispatchToProps)(React.memo(MyLikeDeatils))
