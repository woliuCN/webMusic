/*
 * @Description: 
 * @Author: cn
 * @Date: 2019-10-01 15:39:14
 * @LastEditTime: 2019-10-29 21:31:13
 * @LastEditors: cn
 */
import styled from 'styled-components';



export const TopSelect = styled.div`
        width:100%;
        padding:0 3.8462rem 1.1538rem 3.8462rem;
        box-sizing:border-box;
 
`;

export const Line = styled.div`
       width:90%;
       margin:auto;
       height:1px;
       background:#ddd;
`
export const Content = styled.div`
       display:flex;
       align-items:center;
       flex-wrap:wrap;
       justify-content:space-between;
       padding:1.1538rem 4.6154rem;
       .singer-item{
         flex:0 0 auto;
         /* padding:10.42px; */
         box-sizing:border-box;
         margin-bottom:3.0769rem;
         .img-wrapper{
            cursor: pointer;     
            width:11.5385rem;
            height:11.5385rem;
            img{
                width:100%;
                height:100%;
            }     
         }
         .name{
              cursor: pointer;
              font-size:0.9231rem;  
              line-height:1.6923rem;   
         }
       }
       &::after{
          content:'';
          width:23.8462rem;
       } 
`;