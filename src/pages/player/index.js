/*
 * @Description: 播放器
 * @Author: cn
 * @Date: 2019-09-25 16:14:50
 * @LastEditTime: 2019-12-07 21:47:57
 * @LastEditors: cn
 */
import React, { useRef, useState, useEffect } from 'react';
import animations from 'create-keyframe-animation';
import Progress from '../../baseui/progress-bar';
import InlineLyric from '../../components/inline-lyric';
import Comment from '../../components/comment';
import SimilarSong from './similar-songs';
import Toast from '../../baseui/toast';
import { CSSTransition } from 'react-transition-group';
import { Container, TopDesc, NormalPlayer, Content, StylusContent, StylusTop, Footer } from './style';
import { connect } from 'react-redux';
import { action } from './store';
import { formatTime } from '../../api/utils';
import { withRouter } from 'react-router-dom';

/**
 * @description:计算偏移量跟缩放量实现复杂动画 
 * @param : {null}
 * @return: {x,y,scale}
 */
const _getPosAndScale = () => {
    // 左下角缩略图的宽度
    const targetWith = 41;
    //左下角缩略图中心的x位置
    const paddingLeft = 28.25;
    //左下角缩略图中心的位置y
    const paddingBottom = 78;
    //大图距离顶部的位置
    const paddingTop = 48;
    //大图的半径
    const width = window.innerWidth;
    //两个图中心的x距离
    const x = -(width / 2 - paddingLeft);
    //两个图中心的y距离
    const y = window.innerHeight - 49 - paddingTop - paddingBottom;
    //缩放比例
    const scale = targetWith / width;
    return {
        x,
        y,
        scale
    }
}


function Player(props) {

    const [full, setFull] = useState(false);
    const miniRef = useRef();
    const normalRef = useRef();
    const contentRef = useRef();
    const stylusRef = useRef();
    const audioRef = useRef();
    const toastRef = useRef();
    const [currentTime, setCurrentTime] = useState(0);//自动播放的时间
    const [resetTime, setResetTime] = useState(0);//手动设置的位置的时间
    const [songLength, setSongLength] = useState(0);
    const [toastMode, setToastMode] = useState(0); //切换模式
    const [currentSongId, setCurrentSongId] = useState('');
    const { history } = props;
    const { islike } = props; //是否是我喜欢的
    const { handleChangeShow } = props; //外发歌词
    const { playing, getIsPlayDispatch } = props; //是否播放
    const { playLists, currentIndex, changeSongsIndexDispatch } = props; //播放列表，当前下标
    const { currentSong, getCurrentSongDispatch, lyric } = props;  //当前歌曲 歌词
    const { mode, getModeDispatch } = props;  //当前模式
    const { hot_comment, getHotCommentDispatch } = props; //热门评论
    const { comment, getCommentDispatch } = props //最新评论
    const { total, currentPage, currentPageDispatch } = props; //分页
    const { similar_song, getSimilarSongDispatch } = props; //相似音乐
    let percent = isNaN(currentTime / songLength) ? 0 : (currentTime / songLength);
    useEffect(() => {
        if (currentIndex == -1 || !playLists.length || !playLists[currentIndex]) return;
        //获取当前播放的歌曲,之所以要加判断的原因是当切换新的播放列表的时候，会重新执行一次，当播放的时候是不能重新开始的   
        //   if(!playing||!(currentSongId==currentSong.id)){
        if (currentSongId !== currentSong.id) {
            let current = playLists[currentIndex];

            audioRef.current.src = `https://music.163.com/song/media/outer/url?id=${current.id}.mp3`;
            let playPromise = audioRef.current.play();
            if (playPromise !== undefined) {
                playPromise
                    .then(() => {
                        console.log("audio played auto");
                    })
                    .catch(() => {
                        console.log("playback prevented");
                    });
            }


            setSongLength(currentSong.dt / 1000 | 0);
            setCurrentSongId(currentSong.id);
        }

    }, [currentIndex, playLists]);

    useEffect(() => {
        //回溯之前的状态  
        try {
            audioRef.current.currentTime = currentTime;
            playing ? audioRef.current.play() : audioRef.current.pause();
        } catch (error) {
            console.log(error);
        }


    }, [playing])
    //切换歌曲的时候重新渲染
    useEffect(() => {
        let id = currentSong.id;
        getHotCommentDispatch(id);
        getCommentDispatch(id);
        getSimilarSongDispatch(id);
    }, [currentSong.id])

    //查询下一页评论的时候
    useEffect(() => {
        let id = currentSong.id;
        getCommentDispatch(id);
    }, [currentPage])


    //单曲循环
    const handleLoop = () => {
        audioRef.current.currentTime = 0;
        audioRef.current.play();
    }
    //顺序播放
    const handleOrder = (status) => {
        let newIndex = 0;
        //如果是下一首
        if (status) {
            //如果是最后一首
            if (currentIndex == (playLists.length - 1)) {
                newIndex = 0;
            } else {
                newIndex = currentIndex + 1;
            }
            /* 当前模式是顺序播放的话，就改变播放的下标，不是立即改变的，所以获取新歌曲的时候需要用到的是下一个的下标*/
            changeSongsIndexDispatch(newIndex);
            getCurrentSongDispatch(playLists[newIndex].id)
        } else {
            //如果是上一首且是第一首   
            if (currentIndex == 0) {
                newIndex = playLists.length - 1;
            } else {
                newIndex = currentIndex - 1;
            }
            changeSongsIndexDispatch(newIndex);
            getCurrentSongDispatch(playLists[newIndex].id)
        }

    }
    //随机播放
    const handleRandom = () => {
        let newIndex = 0;
        newIndex = Math.floor(Math.random() * playLists.length);
        changeSongsIndexDispatch(newIndex);
        getCurrentSongDispatch(playLists[newIndex].id)
    }

    //暂停
    const handlePause = (e) => {
        e.stopPropagation();
        // stylusRef.current.style.transform = "rotateZ(-45deg)";
        getIsPlayDispatch(false);
    }
    //开始
    const handleStart = (e) => {
        e.stopPropagation();
        // stylusRef.current.style.transform = "rotateZ(-5deg)";
        getIsPlayDispatch(true);
    }
    //上一曲
    const handlePre = () => {
        if (mode == 0) {
            handleLoop();
        }
        else if (mode == 1) {
            handleOrder();
        } else {
            handleRandom();
        }
    }
    //下一曲
    const handleNext = () => {
        if (mode == 0) {
            handleLoop();
        }
        else if (mode == 1) {
            handleOrder(true);
        } else {
            handleRandom();
        }
    }

    //播放结束
    const handleEnd = () => {
        if (mode == 0) {
            handleLoop();
        }
        else if (mode == 1) {
            handleOrder(true);
        } else {
            handleRandom();
        }
    }
    //播放进度改变事件
    const updateTime = (e) => {
        let currentTime = e.target.currentTime
        setCurrentTime(currentTime);
    }
    //播放错误
    const handleErr = () => {
        alert("该歌曲是付费的喔")
    }

    //进度跳条改变
    const handlePercentChange = (current) => {
        audioRef.current.currentTime = current * songLength;
        setResetTime(current * songLength);
    }

    //渲染播放模式
    const renderMode = () => {
        if (mode == 0) {
            return <i className="iconfont icon-danquxunhuan" onClick={() => handleChangeMode(1)}></i>
        } else if (mode == 1) {
            return <i className="iconfont icon-shunxu" onClick={() => handleChangeMode(2)}></i>
        } else {
            return <i className="iconfont icon-suiji" onClick={() => handleChangeMode(0)}></i>
        }
    }
    //切换模式
    const handleChangeMode = (mode) => {
        getModeDispatch(mode)
        setToastMode(mode)
        toastRef.current.show();
    }


    const miniPlayer = () => {
        if (Object.keys(currentSong).length <= 0) return;
        return (
            <div>
                <CSSTransition
                    in={!full}
                    classNames="mini"
                    timeout={300}
                    onEnter={() => miniRef.current.style.display = 'flex'}
                    onExited={() => miniRef.current.style.display = 'none'}
                >
                    <TopDesc ref={miniRef}>
                        <div className="img">
                            <i className="iconfont icon-fangda" onClick={() => setFull(true)}></i>
                            <img src={currentSong.al.picUrl} alt={currentSong.ar[0].name} ></img>
                        </div>
                        <div className="desc">
                            <div className="song">{currentSong.name}</div>
                            <div className="singer">{currentSong.ar[0].name}</div>
                        </div>
                        <div className="option">
                            {
                                islike ? <i className="iconfont icon-aixin" />
                                : <i className="iconfont icon-xihuan " />
                            }
                            {/* <i className="iconfont icon-aixin" /> */}
                            <i className="iconfont icon-share"></i>
                        </div>
                    </TopDesc>
                </CSSTransition>
                <Container>
                    <div className="options">
                        <div className="left"><i className="iconfont icon-shangyiqu" onClick={handlePre}></i></div>
                        <div className="middle">
                            {
                                playing ?
                                    <i className="iconfont icon-zanting" onClick={e => handlePause(e)}></i>
                                    :
                                    <i className="iconfont icon-play" onClick={e => handleStart(e)}></i>

                            }
                        </div>
                        <div className="right"><i className="iconfont icon-xiayiqu" onClick={handleNext} ></i></div>
                    </div>
                    <div className="progress-wrapper">
                        <div className="start-time">{formatTime(currentTime, 1)}</div>
                        <div className="progress">
                            <Progress percentChange={handlePercentChange} percent={percent} />
                        </div>
                        <div className="end-time">{formatTime(songLength, 1)}</div>
                    </div>
                    <div className="other-options">
                        {renderMode()}
                        <i className="iconfont icon-ci" onClick={handleChangeShow}></i>
                        <i className="iconfont icon-pajian_gequliebiao_"></i>
                    </div>
                </Container>
            </div>
        )
    }


    //动画加入状态
    const beforeEnter = () => {
        normalRef.current.style.display = 'block';
        let { x, y, scale } = _getPosAndScale();
        let animation = {
            0: {
                transform: `translate3d(${x}px,${y}px,0) scale(${scale})`
            },
            60: {
                transform: `translate3d(0, 0, 0) scale(1.1)`
            },
            100: {
                transform: `translate3d(0, 0, 0) scale(1)`
            }
        };
        animations.registerAnimation({
            name: 'enter',
            animation,
            presets: {
                duration: 400,
                easing: 'linear'
            }
        });
        animations.runAnimation(contentRef.current, 'enter');
    }

    //进入动画后函数
    const afterEnter = () => {
        stylusRef.current.style.display = 'block';
        animations.unregisterAnimation('enter');
    }
    // 离开前动画函数
    const beforeExit = () => {
        stylusRef.current.style.display = 'none';
        let { x, y, scale } = _getPosAndScale();
        let animation = {
            0: {
                transform: `translate3d(0, 0, 0) scale(1)`
            },
            60: {
                transform: `translate3d(0, 0, 0) scale(1.1)`
            },
            100: {
                transform: `translate3d(${x}px,${y}px,0) scale(${scale})`
            }
        };
        animations.registerAnimation({
            name: 'leave',
            animation,
            presets: {
                duration: 400,
                easing: 'linear'
            }
        });
        animations.runAnimation(contentRef.current, 'leave');
    }

    //离开后动画函数
    const afterExit = () => {
        animations.unregisterAnimation('leave');
        normalRef.current.style.display = 'none';

    }
    const normalPlayer = () => {
        if (Object.keys(currentSong).length <= 0) return
        return (
            <CSSTransition
                in={full}
                classNames="normal"
                timeout={300}
                mountOnEnter
                onEnter={beforeEnter}
                onEntered={afterEnter}
                onExit={beforeExit}
                onExited={afterExit}
            >
                <NormalPlayer ref={normalRef}>
                    <div className="filter"></div>
                    <div className="background">
                        <img src={currentSong.al.picUrl} alt={currentSong.ar[0].name} width="100%" height="100%"></img>
                    </div>
                    <Content ref={contentRef} playing={playing}>
                        <StylusTop></StylusTop>
                        <StylusContent ref={stylusRef} style={{transform:playing?'rotateZ(-5deg)':'rotateZ(-45deg)'}}>
                            <div className="stylus_1"></div>
                            <div className="stylus_2"></div>
                            <div className="stylus_3">
                                <span></span>
                            </div>
                            <div className="stylus_4"></div>
                            <div className="stylus_5">
                                <span></span>
                                <span></span>
                            </div>
                        </StylusContent>
                        <div className="cd-wrapper">
                            <div className="cd-wrapper1">
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                                <div className="cd-wrapper2">
                                    <img src={currentSong.al.picUrl} alt={currentSong.ar[0].name}></img>
                                </div>
                            </div>
                            <div className="options">
                                <div><i className="iconfont icon-xihuan"></i><span>喜欢</span></div>
                                <div><i className="iconfont icon-jiaru-"></i><span>收藏</span></div>
                                <div><i className="iconfont icon-xiazai"></i><span>下载</span></div>
                                <div><i className="iconfont icon-fenxiang"></i><span>分享</span></div>
                            </div>
                        </div>

                        <div className="song-desc">
                            <div className="title">
                                <div>
                                    <span >{currentSong.name}</span>
                                    {
                                        currentSong.mv > 0 ? <span onClick={() => history.push(`/mv/${currentSong.mv}`)}>MV</span>
                                            : null
                                    }
                                    <span>极高音质</span>
                                </div>
                                <div>
                                    <div><span>专辑：</span><span>{currentSong.al.name}</span></div>
                                    <div><span>歌手：</span><span>{currentSong.ar[0].name}</span></div>
                                    <div><span>来源：</span><span>我喜欢的</span></div>
                                </div>
                            </div>
                            <div className="lyric">
                                {
                                    lyric.length > 0 ?
                                        <InlineLyric lyrics={lyric} currentTime={currentTime} resetTime={resetTime} />
                                        : null
                                }
                            </div>
                        </div>
                        <div className="option" onClick={() => setFull(false)}>
                            <i className="iconfont icon-suoxiao"></i>
                        </div>
                    </Content>
                    <Footer>
                        <div className="comment-container">
                            <Comment
                                total={total}
                                hotComments={hot_comment}
                                newComments={comment}
                                currentPageChange={currentPageDispatch}
                            />
                        </div>
                        <div className="recommend-container">
                            {
                                similar_song.length > 0 ? <SimilarSong similarSong={similar_song} />
                                    : null
                            }
                        </div>
                    </Footer>
                </NormalPlayer>
            </CSSTransition>
        )
    }


    return (
        <div>
            {miniPlayer()}
            {normalPlayer()}
            {/* 第一个事件是在播放结束的时候触发，第二个是更新播放进度，第三个是播放出现错误的时候 */}
            <audio
                ref={audioRef}
                onEnded={handleEnd}
                onTimeUpdate={updateTime}
                onError={handleErr}

            >
            </audio>
            <Toast ref={toastRef} mode={toastMode}></Toast>
        </div>
    )
}


//redux 状态映射到props
const mapStateToProps = (state) => {
    return {
        playLists: state.player.toJS().playLists,  //当前播放列表
        currentIndex: state.player.toJS().currentIndex, //当前播放歌曲在列表的下标
        currentSong: state.player.toJS().currentSong, //当前播放歌曲
        playing: state.player.toJS().play,  //是否播放
        lyric: state.player.toJS().lyric,  //歌词
        mode: state.player.toJS().mode,  //模式
        similar_song: state.player.toJS().similar_song, //相似音乐
        total: state.player.toJS().total,
        currentPage: state.player.toJS().currentPage,
        hot_comment: state.player.toJS().hot_comment,
        comment: state.player.toJS().comment,
        islike: state.global.toJS().islike
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        getCurrentSongDispatch: (id) => {
            dispatch(action.getCurrentSong(id));
            dispatch(action.getSongLyric(id))
        },
        changeSongsIndexDispatch: (index) => {
            dispatch(action.changeSongIndex(index));
        },
        getIsPlayDispatch: (data) => {
            dispatch(action.changePlay(data))
        },
        getModeDispatch: (mode) => {
            dispatch(action.changeMode(mode))
        },
        getHotCommentDispatch: (id) => {
            dispatch(action.getHotComment(id))
        },
        getCommentDispatch: (id) => {
            dispatch(action.getComment(id))
        },
        getSimilarSongDispatch: (id) => {
            dispatch(action.getSimilarSong(id))
        },
        currentPageDispatch: (currentPage) => {
            dispatch(action.changePage(currentPage))
        },
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(React.memo(Player)))