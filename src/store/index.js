/*
 * @Description: store
 * @Autor: cn
 * @Date: 2019-10-26 15:06:25
 * @LastEditors: cn
 * @LastEditTime: 2019-10-26 15:06:43
 */
import reducer from './reducer';
import {createStore,applyMiddleware,compose} from 'redux';
import thunk from 'redux-thunk';
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer,composeEnhancers(applyMiddleware(thunk)));

export default store