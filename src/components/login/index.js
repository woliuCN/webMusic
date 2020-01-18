import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { changeLoginStatus ,changeUserDesc} from '../../pages/home/store';
import { getLoginStatusRequest,getUserPlayListRequest} from '../../api/request';
const Container = styled.div`
      display:${(props) => props.isShow ? 'block' : 'none'};
      position: fixed;
      box-shadow:0.3846rem 0.3846rem 0.7692rem #eee;
      /* 这里不能使用margin auto,鼠标移动事件会出bug,只能用百分比了 */
      left:50%;
      right:50%;
      bottom:50%;
      top:50%;
      transform:translate3d(-50%,-50%,0);
      width:30.7692rem;
      height:38.4615rem;
      background:#fafafa;
      font-family:"微软雅黑";
      box-sizing:border-box;
      padding:0 3.8462rem 3.8462rem 3.8462rem;
      z-index:9999;
      color:#999;
      .background{
            height: 9.2308rem;
            margin-top: 1.5385rem;
            background-image:url(../../login.png);
            background-size: cover;
            background-repeat: no-repeat;

      }
      .phone{
         display:flex;
         height:3.0769rem;
         border-radius:0.2308rem;
         border:0.0769rem solid #ccc;
         background:#fff;
         border-bottom:none;
         border-bottom-left-radius:0;
         border-bottom-right-radius:0;
         >span{
            flex:0 0 6.1538rem;
            display:flex;
            align-items:center;
            border-right:0.0769rem solid #ccc;
            font-size:0.9231rem;
            .iconfont{
                flex:0 0 3.0769rem;
                text-align:center;
                font-size:1.5385rem;
            }
            }
            >input{
                width:100%;
                padding: 0 0.9231rem;
                &::placeholder{
                    font-size:1rem;            
                }
            }
        }
        .password{
            display:flex;
            align-items:center;
            height:3.0769rem;
            border-radius:0.2308rem;
            border:0.0769rem solid #ccc;
            background:#fff;
            border-top-left-radius:0;
            border-top-right-radius:0;
            .iconfont{
                flex:0 0 3.0769rem;
                font-size:1.5385rem;
                text-align:center;
            }
            >input{
                width:100%;
                &::placeholder{
                    font-size:1rem;            
                }
            }
        }
        .login{
            width:100%;
            margin:3.0769rem 0;
            padding:0.7692rem;
            border-radius:0.4615rem;
            background:#ea4848;
            color:#fff;
            border:none;
            font-size:1.2308rem;
            cursor: pointer;
        }
        .options{
            width:100%;
            display:flex;
            align-items:center;
            justify-content:space-around;
            .iconfont{
                font-size:1.8462rem;
                border-radius:50%;
                border:0.0769rem solid #ccc;
                padding:0.4615rem;
            }
            .icon-weixin{
                color:#67b633;
            }
            .icon-qq{
                font-size:1.6923rem;
                color:#34a0df;
            }
            .icon-weibo{
                color:#ea4848;
            }
        }
        .footer{
            display:flex;
            margin:3.0769rem 0;
            align-items:flex-start;
            font-size:1rem;
            input{
                width:1rem;
                height:1rem;
                margin:0;
                margin-right:0.2308rem;
                margin-top:0.2308rem;
            }
            p{
                line-height:1.3077rem;
            }
        }
        .close{
            position:absolute;
            top:1.5385rem;
            right:1.5385rem;
            color:#bbb;
            font-size:1.2308rem;
            cursor: pointer;
        }   
`



function LoinDialog(props) {
    const { isShow,handleChangeLoginDialogStatus} = props;
    const loginDialogRef = useRef();
    const [phone,setPhone] = useState('');
    const [password,setPassword] = useState('');
    const [isChecked,setIsChecked] = useState(false);
    /*
    * x : 拖拽的点的x坐标
    * y : 拖拽的点的y坐标
    * left : 登录框的左偏移量
    * right : 登录框的右偏移量
    * isStart : 是否已经开始拖拽
    */
    const [position, setPosition] = useState({
        x: 0,
        y: 0,
        left: 0,
        top: 0,
        isStart: false
    })


    //登录框按下的时候
    const handleMouseDown = (e) => {
        let x = e.clientX;
        let y = e.clientY;
        let left = loginDialogRef.current.offsetLeft;
        let top = loginDialogRef.current.offsetTop;
        let isStart = true;
        setPosition({
            x,
            y,
            left,
            top,
            isStart
        });
        loginDialogRef.current.style.cursor = 'move';
    }
    //登录框移动
    const handleMouseMove = (e) => {
        if (position.isStart == false) {
            return;
        }
        let newX = e.clientX;
        let newY = e.clientY;
        //计算最后的 left top 距离
        let newLeft = newX - (position.x - position.left);
        let newTop = newY - (position.y - position.top);
        loginDialogRef.current.style.left = newLeft + 'px';
        loginDialogRef.current.style.top = newTop + 'px';

    }
    //登录框松手
    const handleMouseUp = (e) => {
        setPosition({
            x: position.x,
            y: position.y,
            left: position.left,
            top: position.top,
            isStart: false
        })
        loginDialogRef.current.style.cursor = 'default';

    }
    //勾选协议
    const handleCheckeChange = (e)=>{
        setIsChecked(e.target.checked);
    }
    const handlePhoneChange = (e)=>{
        setPhone(e.target.value);
    }
    const handlePasswordChange = (e)=>{
        setPassword(e.target.value);
    }
    //登录
    const handleLogin = ()=>{
        if(!isChecked){
            alert("请先勾选相关协议!");
            return ;
        }
        if(phone==''||password==''){
            alert("输入手机号或密码");
            return ;
        }
        getLoginStatusRequest(phone,password)
        .then((data)=>{
            let userDesc ={};
            if(data.code==200){
                let userId = data.profile.userId;
                getUserPlayListRequest(userId)
                .then((res)=>{
                    userDesc.userId = userId;
                    userDesc.details = data.profile;
                    userDesc.playList = res.playlist;
                    sessionStorage.setItem('loginStatus',true);
                    sessionStorage.setItem('userDesc',JSON.stringify(userDesc));
                    handleChangeLoginDialogStatus(false);
                })
            }
        })
        .catch(()=>{
            alert("密码错误或者账号不存在");
        })
        
    }
    return (
        <Container
            ref={loginDialogRef}
            isShow={isShow}
            onMouseUp={handleMouseUp}
            onMouseMove={handleMouseMove}
            onMouseDown={handleMouseDown}
        >
           <div className="close" onClick={()=>handleChangeLoginDialogStatus(false)}><i className="iconfont icon-close"></i></div>
           <div className="background"></div>
           <div className="phone">
            <span><i className="iconfont icon-phone"></i><span>+86</span></span>
            <input type="text" placeholder="请输入手机号" onChange={handlePhoneChange}/>
           </div>
           <div className="password">
               <i className="iconfont icon-lock"></i>
               <input type="password"  placeholder="请输入密码" onChange={handlePasswordChange}/>
           </div>
           <button className="login" onClick={handleLogin}>登 录</button>
           <div className="options">
                <i className="iconfont icon-weixin"></i>
               <i className="iconfont icon-qq"></i>
               <i className="iconfont icon-weibo"></i>
           </div>
           <div className="footer">
                <input type="checkbox" onChange={handleCheckeChange}/>
                <p>
                    <span>同意</span>
                    <a>《服务条款》</a>
                    <a>《隐私政策》</a>
                    <a>《未成年人政策》</a>
                </p>
           </div>
        </Container>
    )
}
//redux 状态映射到props
const mapStateToProps = (state) => {
    return {
        loginStatus: state.global.toJS().loginStatus,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
      //登录状态
      changeLoginStatusDispatch: (status) => {
        dispatch(changeLoginStatus(status));
      },
      changeUserDescDispatch:(userDesc)=>{
        dispatch(changeUserDesc(userDesc))
      }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(React.memo(LoinDialog))