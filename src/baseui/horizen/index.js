/*
 * @Description: 水平列表
 * @Author: cn
 * @Date: 2019-10-01 20:19:30
 * @LastEditTime: 2019-11-11 21:25:22
 * @LastEditors: cn
 */
import React from 'react';
import styled from 'styled-components';
import  PropTypes  from 'prop-types';


const List = styled.div`
      display:flex;
      align-items:center;
      flex-wrap:wrap;
      height:3.0769rem;
      line-height:1.6923rem;
      margin-bottom:${props=>props.flag? 0:'1.0769rem'};
      font-size:0.9231rem;
      color:#666666;
      .title{
          flex: 0 0 auto;
          padding:0.1538rem 0.3077rem;
      }
`
const ListItem = styled.span`
      flex: 0 0 auto;
      display:flex;
      align-items:center;
      >span:nth-child(1){
          padding:0rem 0.3846rem;
          margin: 0 0.9231rem;
          cursor: pointer;
          &.active{
             background:#8f9096;
             color:#fff;
             border-radius:0.2308rem;
          }
      }

`
const Line = styled.span`
      width:0.0769rem;
      height:0.9231rem;
      background:#ccc;
`

function Horizen (props){

    const {title,defaultSelect,list,handleChange,flag} = props;
    return (
        <List flag={flag}>
            <span className="title">{title} :</span>
            {
                list.map((item)=>{
                    return(
                      <ListItem key={item.key} onClick={()=>handleChange(item.key)}>
                        <span className={defaultSelect==item.key? 'active':''}>{item.name}</span>  
                        <Line/>
                      </ListItem>
                    )
                })
            }
        </List>
    )

}

Horizen.defaultProps = {
    list:[],
    defaultSelect:'',
    title:'',
    flag:false,
    handleChange:()=>{}
}
Horizen.propTypes = {
    list:PropTypes.array,
    defaultSelect:PropTypes.string,
    title:PropTypes.string,
    handleChange:PropTypes.func,
    flag:PropTypes.bool
}
export default React.memo(Horizen)