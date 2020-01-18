/*
 * @Description: 头部
 * @Author: cn
 * @Date: 2019-09-22 14:05:15
 * @LastEditTime: 2019-12-08 10:48:01
 * @LastEditors: cn
 */
import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import style from '../../assets/global-style';
import SearchDialog from '../../components/search-dialog';
import LoinDialog from '../../components/login';
import { CSSTransition } from 'react-transition-group';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { action } from '../../pages/search/store';
import { action as PlayerAction } from '../../pages/player/store';
import { changeLoginStatus } from '../../pages/home/store';
import { debounce } from '../../api/utils';
import { loginLogOutRequest } from '../../api/request';
const Container = styled.div`
      position:fixed;
      top:0;
      width:100%;
      z-index:100;
      height:3.5714rem;
      background:${style["theme-color"]};
      display:flex;
      align-items:center;
      color:#f2f3f4;
      .title{
          flex: 0 0 14.2857rem;
          margin: 0 0 0 2.1429rem;
          .iconfont{
            font-size: 1.4286rem;
            vertical-align: middle;
            color: #5dc288;
            padding: 0.4286rem;
            border-radius: 50%;
            background: #f2f3f4;
          }
          .name{
            vertical-align: middle;
            font-size:1.1429rem;
            margin-left:0.7143rem;
          }
      }
      .btn{
        flex: 0 0 3.8462rem;
        display: flex;
        height:1.5385rem;
        align-items: center;
        justify-content: space-around;
        border: 1px solid rgba(0,0,0,.15);
        border-radius: 0.2308rem;
        margin-right:2.3077rem;
        .iconfont{
          font-size:1.3846rem;
          cursor: pointer;
        } 
        span{
          display:inline-block;
          width:1px;
          height: 100%;
          background: rgba(0,0,0,.15);
        }
      }
      .search{
          flex:1;
          position: relative;
          input{
            cursor: text;
            width: 14.2857rem;
            height: 1.7714rem;
            display: inline-block;
            border:none;
            border-radius: 1.4286rem;
            font-size: 0.9286rem;
            line-height: 2.2857rem;
            padding: 0 1.1429rem;
            outline: none;
            background:rgba(38, 145, 99, 1);
            color:rgba(201, 227, 216, 1);
            &::placeholder{
             color:rgba(201, 227, 216, 1);
             font-size:0.8571rem;
            }
          }
          .iconfont{
            position: absolute;
            top: 0.4881rem;
            font-size: 1rem;
            left: 14.6429rem;
            cursor: pointer;
          }
      }
      .option{
         flex:0 0 22rem;
         display:flex;
         align-items:center;
         .login{
           width:8.5714rem;
           cursor:pointer;
           img{
             width:2.1429rem;
             height:2.1429rem;
             border-radius:50%;
             vertical-align:middle;
             margin-right:0.7143rem; 
           }
           span{
            vertical-align:middle;
            color:#eee;
            font-size:0.8571rem;
           }
         }
         .set{
           cursor: pointer;
           .iconfont{
             font-size:1.4286rem;
             vertical-align:middle;
             margin-right:0.4286rem; 
           }
           span{
            vertical-align:middle;
            color:#eee;
            font-size:0.8571rem;
           }
         }
         .quit{
           flex:0 0 6.1538rem;
           color:rgba(0,0,0,1);
           cursor: pointer;
           .iconfont{
             font-size:1.3846rem;
             vertical-align:middle;
             margin-right:0.4rem; 
           }
           span{
            vertical-align:middle;
            font-size:0.9231rem;
           }
         }
      }
      .show-enter{
            transform:translateY(-100%);
            opacity:0;
        }
      .show-enter-active{
            transform:translateY(0);
            opacity:1;
            transition:all 0.3s linear;
        }
      .show-exit{
            transform:translateY(0);
            opacity:1;
        }
      .show-exit-active{
            transform:translateY(-100%);
            opacity:0;
            transition:all 0.3s linear;
        }
`;
const HotSearchList = styled.div`
      width:100%;
      box-sizing:border-box;
      color:${style["text-color"]};

      h1{
        height:3.0769rem;
        padding:0 1.5385rem;
        line-height:3.0769rem;
      }
`
const HotSearchItem = styled.div`
      width:100%;
      height:3.8462rem;
      display:flex;
      align-items:center;
      cursor: pointer;
      &:hover{
        background:#eee;
      }
      .index{
        flex:0 0 3.8462rem;
        font-size:1.1538rem;
        text-align:center;
        color:${props => props.index > 3 ? '#666' : '#ff3d3d'};
      }
      .list-item{
        flex:1;
        .header{
          .search-word{
            font-size:0.8462rem;
            font-weight:${props => props.index > 3 ? ' ' : '700'};
          }
          .score{
            padding:0 0.7692rem;
            font-size:0.9231rem;
            vertical-align:bottom;
            color:#ccc;
          }
          .red{
            color: red;
            font-weight: 600;
            font-size: 0.7692rem;
            font-style: italic;
          }
          .green{
            color: ${style["theme-color"]};
            font-weight: 600;
            font-size: 0.7692rem;
            font-style: italic;
          }
        }
        .content{
          font-size:0.9231rem;
          color:#999;
          padding:0.3846rem 0;
        }
      }

`
const SearchList = styled.div`
      width:100%;
      box-sizing:border-box;
      color:${style["text-color"]};
      h1{
        height:2.3077rem;
        padding:0 0.7692rem;
        line-height:2.3077rem;
        font-size:0.9231rem;
        .iconfont,span{
          vertical-align:middle;
          margin-right:0.6154rem;
        }
        .iconfont{
          font-size:1.2308rem;
        }
        background:#f2f3f4;
      }
      h2{
        height:3.0769rem;
        padding:0 0.7692rem;
        line-height:3.0769rem;
        span{
          color:#0c73c2;
        }
      }
`
const SearchItem = styled.div`
        height:2.3077rem;
        padding:0 2.3077rem;
        line-height:2.3077rem;
        width:100%;
        font-size:0.8462rem;
        box-sizing:border-box;
        ${style["noWrap"]};
        .keywords{
          color:#0c73c2;
        }
        :hover{
          background:#e1e2e3;
          cursor: pointer;
        }
`


function Header(props) {
  const [showDialog, setShowDialog] = useState(false);
  const [query, setQuery] = useState('');
  const [isQuery, setIsQuery] = useState(false);
  const [isShowLoginDialog, setIsShowLoginDialog] = useState(false);
  const { hotSearchList, getSearchHotListDispatch } = props; //热搜榜
  const { suggestSearchList, getSearchSuggestListDispatch } = props; // 搜索列表dialog
  const { changeSongsIndexDispatch, getCurrentSongDispatch, changeIsPlayDispatch, changePlayListsDispatch } = props; //播放
  const { history } = props;
  const dialogRef = useRef();
  const [loginStatus,setLoginStatus] = useState(false);
  const REG = /[`~!@#$^&*()=|{}':;',\\\[\]\.<>\/?~！@#￥……&*（）——|{}【】'；：""'。，、？\s]/g; //特殊字符
  var userDesc = sessionStorage.getItem('userDesc')?JSON.parse(sessionStorage.getItem('userDesc')):{};

  useEffect(() => {
    if (!hotSearchList.length) {
      getSearchHotListDispatch();
    }
  }, [hotSearchList])

  //监听session变化
  useEffect(()=>{
    var loginstatus = sessionStorage.getItem('loginStatus') || "false";
    var bool = loginstatus == "false"?false:true;
    setLoginStatus(bool);
  },[sessionStorage.getItem('loginStatus')])

  //防抖处理
  useEffect(() => {
    debounce(handleQuery, 1000)(query);
  }, [query]);

  //input 事件
  const handleChange = (e) => {
    setQuery(e.target.value)
  }

  //查询
  const handleQuery = (keywords) => {
    if (keywords !== '') {
      if (REG.test(keywords)) {
        return
      }
      setIsQuery(true);
      getSearchSuggestListDispatch(keywords);
    } else {
      setIsQuery(false);
    }
  }
  //热搜列表图标
  const IconfontType = (iconType) => {
    switch (iconType) {
      case 1:
        return <span className="red">HOT</span>
      case 2:
        return <span className="green">NEW</span>
      default:
        break;
    }
  }
  //点击歌曲
  const setIndex = (index, songs) => {
    changePlayListsDispatch(songs);
    changeSongsIndexDispatch(index);
    changeIsPlayDispatch(true);
    getCurrentSongDispatch(songs[index].id);
  }
  //点击搜索
  const handleSearch = () => {
    if (query === '') { return; }
    setShowDialog(false);
    history.push(`/search/${query}`);

  }
  //返回
  const handleGoback = () => {
    if (history.location.pathname == "/recommend") {
      return;
    }
    else {
      history.goBack()
    }
  }
  //前进
  const handleGo = () => {
    history.goForward()
  }
  //回车
  const handleKeyDown = (e) => {
    if (e.keyCode == 13) {
      handleSearch();
    }
  }

  //退出登录
  const handleQuit = ()=>{
    var result= window.confirm('确定要退出登录么?');
    if(result){
      setLoginStatus(false);
      sessionStorage.setItem('userDesc','');
      sessionStorage.setItem('loginStatus',false);
      alert('退出成功!');
      loginLogOutRequest();
    }else{
      return ;
    }
  }
  //渲染热搜榜
  const renderHotSearch = () => {
    return <HotSearchList>
      <h1>热搜榜</h1>
      {hotSearchList &&
        hotSearchList.map((item, index) => {
          return <HotSearchItem
            index={index + 1}
            key={'hotSearch' + index}
            onMouseDown={
              () => {
                setQuery(item.searchWord);
                setShowDialog(false);
                history.push(`/search/${item.searchWord}`);
              }
            }
          >
            <div className="index">{index + 1}</div>
            <div className="list-item">
              <div className="header">
                <span className="search-word">{item.searchWord}</span>
                <span className="score">{item.score}}</span>
                {IconfontType(item.iconType)}
              </div>
              <div className="content">
                {item.content}
              </div>
            </div>
          </HotSearchItem>

        })
      }
    </HotSearchList>
  }
  //渲染搜索列表
  const renderSearchList = () => {
    if (Object.keys(suggestSearchList).length <= 0) {
      return;
    }
    let albums = suggestSearchList.albums || [];  //专辑
    let artists = suggestSearchList.artists || []; //歌手
    let songs = suggestSearchList.songs || [];   //歌曲
    let mvs = suggestSearchList.mvs || [];  // 视频
    let playlists = suggestSearchList.playlists || []; // 歌单
    return <SearchList>
      <h2>搜索"<span>{query}</span>"相关结果></h2>
      <h1><i className="iconfont icon-music"></i><span>单曲</span></h1>
      {
        songs.length > 0 && songs.map((song, i) => {
          return (
            <SearchItem key={'song' + i} onMouseDown={() => setIndex(i, songs)} ><span className="keywords">{song.name}</span>- {song.artists[0].name}</SearchItem>
          )
        })
      }
      <h1><i className="iconfont icon-user"></i><span>歌手</span> </h1>
      {
        artists.length > 0 && artists.map((artist, i) => {
          return (
            <SearchItem key={'artist' + i}
              onMouseDown={() => { history.push(`/singers/${artist.id}`) }}
            >
              {artist.name}
            </SearchItem>
          )
        })
      }

      <h1><i className="iconfont icon-mv"></i><span>视频</span> </h1>
      {
        mvs.length > 0 && mvs.map((mv, i) => {
          return (
            <SearchItem key={'mv' + i}
              onMouseDown={(e) => { e.stopPropagation(); changeIsPlayDispatch(false); history.push(`/mv/${mv.id}`) }}
            >
              <span className="keywords">{mv.name}</span>- {mv.artistName}
            </SearchItem>
          )
        })
      }

      <h1><i className="iconfont icon-album"></i><span>专辑</span> </h1>
      {
        albums.length > 0 && albums.map((album, i) => {
          return (
            <SearchItem key={'album' + i}><span className="keywords">{album.name}</span>- {album.artist.name}</SearchItem>
          )
        })
      }
      <h1><i className="iconfont icon-gedan"></i><span>歌单</span> </h1>
      {
        playlists.length > 0 && playlists.map((playlist, i) => {
          return (
            <SearchItem key={'playlist' + i}
              onMouseDown={() => { history.push(`/recommend/${playlist.id}`); }}
            >
              {playlist.name}
            </SearchItem>
          )
        })
      }

    </SearchList>
  }


  return (
    <Container>
      <div className="title">
        <i className="iconfont icon-music1"></i>
        <span className="name">好听音乐</span>
      </div>
      <div className="btn">
        <i className="iconfont icon-previewleft"
          style={{ color: history.location.pathname == "/recommend" ? 'rgb(170, 220, 196)' : '' }}
          onClick={handleGoback}></i>
        <span></span>
        <i className="iconfont icon-previewright"
          onClick={handleGo}></i>
      </div>
      <div className="search">
        <input placeholder="搜索音乐,歌手,视频,电台"
          value={query} onChange={handleChange}
          onFocus={() => { setShowDialog(true) }}
          onBlur={() => setShowDialog(false)}
          onKeyDown={handleKeyDown}
        ></input>
        <i className="iconfont icon-search" onClick={handleSearch}></i>
      </div>
      <CSSTransition
        classNames="show"
        in={showDialog}
        timeout={300}
        onEnter={() => dialogRef.current.show()}
        onExited={() => dialogRef.current.hidden()}
        unmountOnExit
      >
        <SearchDialog ref={dialogRef} >
          {isQuery ? renderSearchList() : renderHotSearch()}
        </SearchDialog>
      </CSSTransition>
      <div className="option">
        <div className="login">
          <img src={!loginStatus ? "../../../bg.jpg" :userDesc.details.avatarUrl}></img>
          {
            !loginStatus?<span onClick={() => { setIsShowLoginDialog(true) }}>未登录</span>
            : <span>{userDesc.details.nickname}</span>
          }
        </div>
        {
            loginStatus
              ? <div className="quit" onClick={handleQuit}><i className="iconfont icon-tuichu"/><span>退出</span></div>
              : null
        }
        <div className="set">
          <i className="iconfont icon-set-line"></i>
          <span>设置</span>
        </div>
      </div>
      <LoinDialog isShow={isShowLoginDialog} handleChangeLoginDialogStatus={(status) => setIsShowLoginDialog(status)} />
    </Container>
  )
}

const mapStateToProps = (state) => {
  return {
    hotSearchList: state.search.toJS().hotSearchList,
    suggestSearchList: state.search.toJS().suggestSearchList,
    // loginStatus: state.global.toJS().loginStatus,
    // userDesc:state.global.toJS().userDesc,
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    getSearchHotListDispatch: () => {
      dispatch(action.getSearchHotList());
    },
    getSearchSuggestListDispatch: (keywords) => {
      dispatch(action.getSearchSuggestList(keywords))
    },
    // 播放
    changeSongsIndexDispatch: (index) => {
      dispatch(PlayerAction.changeSongIndex(index));
    },
    changePlayListsDispatch: (data) => {
      dispatch(PlayerAction.changePlayLists(data));
    },
    getCurrentSongDispatch: (id) => {
      dispatch(PlayerAction.getCurrentSong(id));
      dispatch(PlayerAction.getSongLyric(id))
    },
    changeIsPlayDispatch: (data) => {
      dispatch(PlayerAction.changePlay(data))
    },

  }
}
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(React.memo(Header))) 