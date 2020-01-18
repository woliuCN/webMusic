/*
 * @Description: 
 * @Autor: cn
 * @Date: 2019-11-11 21:44:09
 * @LastEditors: cn
 * @LastEditTime: 2019-11-25 22:03:29
 */
import { getMvAllRequest } from '../../../api/request';

export const actionsType = {
    CHANGE_AREA: 'CHANGE_AREA',
    CHANGE_TYPE: 'CHANGE_TYPE',
    CHANGE_ORDER: 'CHANGE_ORDER',
    CHANGE_MVLIST: 'CHANGE_MVLIST',
    CHANGE_PAGE: 'CHANGE_PAGE',
    CHANGE_TOTAL: 'CHANGE_TOTAL'
}
//改变页数action 
export const changePage = (data) => {
    return {
        type: actionsType.CHANGE_PAGE,
        data
    }
}
//改变总数action 
const changeTotal = (data) => {
    return {
        type: actionsType.CHANGE_TOTAL,
        data
    }
}
const changeMVlist = (data)=>{
    return {
        type: actionsType.CHANGE_MVLIST,
        data
    }
}
export const changeArea = (data) => {
    return {
        type: actionsType.CHANGE_AREA,
        data
    }
}
export const changeType = (data) => {
    return {
        type: actionsType.CHANGE_TYPE,
        data
    }
}
export const changeOrder = (data) => {
    return {
        type: actionsType.CHANGE_ORDER,
        data
    }
}

//异步获取MV列表的中间件函数
export const getMvList = ()=>{
    return (dispatch,getstate)=>{
        let area = getstate().mvs.toJS().area;
        let type = getstate().mvs.toJS().type;
        let order = getstate().mvs.toJS().order;
        let currentPage = getstate().mvs.toJS().currentPage;         
        getMvAllRequest(area,type,order,currentPage).then(data=>{
            dispatch(changeTotal(data.count))
            dispatch(changeMVlist(data.data))
        })
        .catch(()=>{
            console.log("获取mv列表出错");
        })
    }
}