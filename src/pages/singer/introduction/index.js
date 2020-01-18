/*
 * @Description: 歌手详情
 * @Autor: cn
 * @Date: 2019-11-02 15:12:01
 * @LastEditors: cn
 * @LastEditTime: 2019-11-28 09:56:43
 */
import React from 'react';
import styled from 'styled-components';
import style from '../../../assets/global-style';
import {formatStr} from '../../../api/utils';
const IntruductionContainer = styled.div`
    padding:2.3077rem;
    font-size:1.0769rem;
    color:${style["text-color"]};
`
const Item = styled.div`
    margin-bottom:1.5385rem;
    .title{
        font-weight:700;
        line-height:200%;

    }   
    p{
        text-indent:2em;
        line-height:300%;
        font-size:1rem;
    }
`

function Intruduction (props){
    const {introduction} = props;
    const renderIntroductionItem = ()=>{
        return introduction.map((item,i)=>{
            return <Item key={"intro"+i}>
                <div className="title">{item.ti}</div>
                {formatStr(item.txt).map((txt,i)=>{
                    return <p key={item.ti+i}>{txt}</p>
                })}
            </Item> 
        })
    }
    return (
        <IntruductionContainer>
            {renderIntroductionItem()}
        </IntruductionContainer>
    )
}

export default React.memo(Intruduction)