import { fromJS } from 'immutable';
import { getLoginStatusRequest,} from '../../../api/request';
const actionTypes = {
    CHANGE_ISLIKE:'CHANGE_ISLIKE',
    CHANGE_LOGIN_STATUS:'CHANGE_LOGIN_STATUS',
    CHANGE_USRE_DESC:'CHANGE_USRE_DESC'

}

//改变是否是登录状态
export const changeLoginStatus = (data)=>{
    return{
        type:actionTypes.CHANGE_LOGIN_STATUS,
        data
    }
}
//是否是我喜欢播放
export const changeIsLike = (data)=>{
    return{
        type:actionTypes.CHANGE_ISLIKE,
        data
    }
}

//用户信息
export const changeUserDesc = (data)=>{
    return{
        type:actionTypes.CHANGE_USRE_DESC,
        data
    }
}


//reudcer
const initialState = fromJS({
    islike:false,
    loginStatus:false,
    userDesc:{}

})



const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.CHANGE_LOGIN_STATUS:
            return state.set('loginStatus', action.data)
        case actionTypes.CHANGE_ISLIKE:
            return state.set('islike', action.data)
        case actionTypes.CHANGE_USRE_DESC:
            return state.set('userDesc', action.data)
        default:
            return state
    }

}
export {
    reducer,
    actionTypes
}

