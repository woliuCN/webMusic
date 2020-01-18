/*
 * @Description: 
 * @Author: cn
 * @Date: 2019-09-25 21:31:17
 * @LastEditTime: 2019-12-08 14:57:30
 * @LastEditors: cn
 */
import React ,{useState}from 'react';
import Header from '../../baseui/header';
import Aside from '../../components/aside';
import Player from '../player';
import ToggleBar from '../../baseui/toggle-bar';
import OutLineLyric from '../../components/outline-lyric';
import MV from '../../pages/mv';
import Video from '../../pages/video';
import {Content} from './style';
import {Route} from 'react-router-dom';
import {renderRoutes} from 'react-router-config';
import {connect} from 'react-redux';

function Home (props){
    const [show,setShow] = useState(false);
    const {route,playing}  =  props;    
    const handleChangeShow = ()=>{
        setShow(!show)
    }
    return (
        <div>
            <Header/>
            <Aside/>
            <Content playing={playing}>
                <ToggleBar/>  
                {renderRoutes(route.routes)}
            </Content>
            <Player handleChangeShow = {handleChangeShow}/>
            <OutLineLyric isShow = {show}/>
            <Route path="/mv/:id" component={MV}></Route>
            <Route path="/video/:id" component={Video}></Route>
        </div>
    )

}
//redux 状态映射到props
const mapStateToProps = (state) => {
    return {
        playing: state.player.toJS().play,  //是否播放

    }
}
export default  connect(mapStateToProps)(React.memo(Home))