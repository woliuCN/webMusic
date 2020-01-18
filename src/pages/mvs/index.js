/*
 * @Description: mv更多展示列表
 * @Autor: cn
 * @Date: 2019-11-11 20:52:28
 * @LastEditors: cn
 * @LastEditTime: 2019-11-25 10:30:03
 */
import React ,{useEffect}from 'react';
import { MvWrapper, TopSelect, Line } from './style';
import MVList from '../../components/mv-list';
import Pagination from '../../components/pagination';
import Horizen from '../../baseui/horizen';
import { Area, Type, Order } from '../../api/config';
import { connect } from 'react-redux';
import { action } from './store';
function MVS(props) {
    const {area,getAreaDispatch} = props;
    const {type,getTypeDispatch} = props;
    const {order,getOrderDispatch} = props;
    const {MvList,getMvListDispatch} = props;
    const {currentPage,total,currentPageDispatch} = props;
    //改变地区
    const handleAreaChange = (area) => {
        getAreaDispatch(area)
    }
    //改变类型
    const handleTypeChange = (type) => {
        getTypeDispatch(type)
    }
    //改变排序
    const handleOrderChange = (order) => {
        getOrderDispatch(order)
    }
    useEffect(()=>{        
        getMvListDispatch();
    },[area,type,order,currentPage])
    return (
        <MvWrapper>
            <h1>全部MV</h1>
            <Line />
            <TopSelect>
                <Horizen defaultSelect={area} list={Area} title="地区" flag={true} handleChange={handleAreaChange} />
                <Horizen defaultSelect={type} list={Type} title="类型" flag={true} handleChange={handleTypeChange} />
                <Horizen defaultSelect={order} list={Order} title="排序" flag={true} handleChange={handleOrderChange} />
            </TopSelect>
            <Line />
            {
                MvList.length>0?<MVList mvLists={MvList} haveTitle={false} width="32"/>:null

            }
            <Pagination  totalPages={Math.ceil(total/100)} handleSelectPage={(currentPage)=>currentPageDispatch(currentPage-1)}/>
        </MvWrapper>

    )
}
//redux 状态映射到props
const mapStateToProps = (state) => {
    return {
        area: state.mvs.toJS().area,
        type: state.mvs.toJS().type,
        order: state.mvs.toJS().order,
        MvList: state.mvs.toJS().MvList,
        total: state.mvs.toJS().total,
        currentPage: state.mvs.toJS().currentPage
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        getAreaDispatch: (area) => {
            dispatch(action.changeArea(area))
        },
        getTypeDispatch: (type) => {
            dispatch(action.changeType(type))
        },
        getOrderDispatch: (order) => {
            dispatch(action.changeOrder(order))
        },
        getMvListDispatch: () => {
            dispatch(action.getMvList())
        },
        currentPageDispatch: (currentPage) => {
            dispatch(action.changePage(currentPage))
        },
    }

}
export default connect(mapStateToProps, mapDispatchToProps)(React.memo(MVS))