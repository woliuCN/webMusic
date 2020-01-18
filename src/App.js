/*
 * @Description: 入口组件
 * @Author: cn
 * @Date: 2019-09-22 13:52:53
 * @LastEditTime: 2019-11-27 10:01:53
 * @LastEditors: cn
 */
import React from 'react';
import {GlobalStyle} from './style';
import {HashRouter} from 'react-router-dom';
import {renderRoutes} from 'react-router-config';
import {routers} from './routers/index';
import {Provider} from 'react-redux';
import store from './store';
function App() {
  return (
    <Provider store={store}>
      <HashRouter >
        <GlobalStyle/>
        {renderRoutes(routers)}
      </HashRouter>
    </Provider>
  );
}

export default App;
