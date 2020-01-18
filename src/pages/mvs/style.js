/*
 * @Description: 
 * @Autor: cn
 * @Date: 2019-11-11 20:52:47
 * @LastEditors: cn
 * @LastEditTime: 2019-11-11 21:32:58
 */
import styled from 'styled-components';
import style from '../../assets/global-style';

export const MvWrapper = styled.div`
       position:fixed;
       left:15%;
       right:0;
       top:50px;
       bottom:50px;
       /* bottom:${props=>props.playing?'50px':0}; */
       z-index:99;
       overflow-y:auto;
       background:#fff;
       ${style["scroll"]};
       h1{
          font-size:18px;
          height:50px;
          line-height:50px;  
          padding:0 3%;
          color:${style["text-color"]};   
       }


`
export const TopSelect = styled.div`
        width:100%;
        padding:10px 50px;
        box-sizing:border-box;
 
`;
export const Line = styled.div`
       width:94%;
       margin:auto;
       height:1px;
       background:#ddd;
`