/*
 * @Description: 
 * @Author: cn
 * @Date: 2019-09-25 21:31:21
 * @LastEditTime: 2019-11-10 20:57:53
 * @LastEditors: cn
 */
import styled from 'styled-components';

export const Content = styled.div`
        position:fixed;
        width:85%;
        right:0;
        top:3.8462rem;
        bottom:${props=>props.playing?'3.8462rem':0};
        overflow-y:auto;
        background:#fafafa;
        /* 
         * 自定义滚动条
        */
        /* 整个滚动条宽度 */
        ::-webkit-scrollbar{
                width:0.3846rem;
        }
        /* 轨道 */
        ::-webkit-scrollbar-track{
                background-color:#f1f2f3;
                border-radius:0.3846rem; 
        }
        /* 滑块 */
        ::-webkit-scrollbar-thumb{
                background-color:#ccc;
                border-radius:0.3846rem;
        }
        
`