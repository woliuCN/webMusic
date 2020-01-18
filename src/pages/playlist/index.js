/*
 * @Description: 歌单列表页
 * @Author: cn
 * @Date: 2019-10-12 11:16:38
 * @LastEditTime: 2019-11-24 10:03:12
 * @LastEditors: cn
 */
import React, { useState, useEffect } from 'react';
import Scroll from '../../baseui/scroll';
import Loading from '../../baseui/loading';
import List from '../../components/list';
import Pagination from '../../components/pagination';
import { PlayListCategory, PlayListHotCategory } from '../../api/config';
import { Content, CategoryList, AllCategory, HotCategory, Menu, MenuItem } from './style';
import { connect } from 'react-redux';
import { action } from './store';


function PlayList(props) {

    const { cat, getCatDispatch } = props; //改变标签
    const { playList, getPlayListDispatch } = props; //改变歌单列表
    const { total, currentPage, currentPageDispatch } = props;
    const [show, setShow] = useState(false);  //是否展示菜单列表
    const { loading } = props;

    useEffect(() => {
        getPlayListDispatch();
    }, [cat, currentPage])

    const renderMenu = () => {
        let result = [];
        let categories = PlayListCategory.categories;
        for (let key in categories) {
            result.push(
                <MenuItem key={'category' + key}>
                    <div className="category">
                        <i className={`iconfont icon-cat${key}`}></i>
                        <span>{categories[key]}</span>
                    </div>
                    {renderCategoryList(key)}
                </MenuItem>
            )
        }
        return result;

    }


    //菜单列表
    const renderCategoryList = (key) => {
        let list = PlayListCategory.sub.filter(item => {
            return item.category == key;
        })
        return <div className="list">
            {list.map((item) => {
                return <span
                    className={`${cat == item.name ? 'active' : ''}`}
                    key={item.name}
                    onClick={() => getCatDispatch(item.name)}
                >{item.name}</span>
            })}
        </div>
    }
    //热门列表
    const renderHotCategory = () => {
        let result = [];
        result.push(
            <span className="title">热门标签:</span>
        );
        PlayListHotCategory.tags.map((item) => {
            result.push(
                <>
                    <span className="tags" key={item.name} onClick={() => getCatDispatch(item.name)}>{item.name}</span>
                    <span className="line"></span>
                </>
            )
        })
        return result;

    }
    return (
        <Content onClick={() => { setShow(false) }}>
            <CategoryList>
                <AllCategory>
                    <div className="option" onClick={(e) => { e.stopPropagation(); setShow(!show) }}><span>{cat == '' ? '全部歌单' : cat}</span><i className="iconfont icon-arrow_down"></i></div>
                    <div className="decorate" style={{ display: show ? 'block' : 'none' }}></div>
                    <Menu style={{ display: show ? 'block' : 'none' }} onClick={(e) => { e.stopPropagation() }}>
                        <div className="title">添加标签</div>
                        <Scroll>
                            <div className="list-wrapper">
                                <div className={`all ${cat == '' ? 'active' : ''}`} onClick={() => getCatDispatch('')}>全部歌单</div>
                                {renderMenu()}
                            </div>

                        </Scroll>
                    </Menu>
                </AllCategory>
                <HotCategory>
                    {renderHotCategory()}
                </HotCategory>
            </CategoryList>
            <List Albumlist={playList} />
            <Pagination totalPages={Math.ceil(total / 100)} handleSelectPage={(currentPage) => currentPageDispatch(currentPage - 1)} />
            {loading ? <Loading /> : null}
        </Content>
    )
}
//redux 状态映射到props
const mapStateToProps = (state) => {
    return {
        cat: state.playlist.toJS().cat,
        playList: state.playlist.toJS().playList,
        total: state.playlist.toJS().total,
        currentPage: state.playlist.toJS().currentPage,
        loading: state.playlist.toJS().loading
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        getCatDispatch: (newCat) => {
            dispatch(action.changeCat(newCat))
        },
        getPlayListDispatch: () => {
            dispatch(action.changeLoading(true))
            dispatch(action.getPlayList())
        },
        currentPageDispatch: (currentPage) => {
            dispatch(action.changePage(currentPage))
        },
    }

}
export default connect(mapStateToProps, mapDispatchToProps)(React.memo(PlayList))