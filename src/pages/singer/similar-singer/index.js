/*
 * @Description: 相似歌手，需要登陆先暂时缓缓
 * @Autor: cn
 * @Date: 2019-11-04 21:18:29
 * @LastEditors: cn
 * @LastEditTime: 2019-11-04 21:31:03
 */
import React from 'react';
import styled from 'styled-components';


const List = styled.div`
    width:100%;
    padding:20px;
    box-sizing:border-box;
`
const ListItem = styled.div`

`

function SimilarSinger(props) {
    const {similarSingerLists} = props;
    const renderList = ()=>{
        return  similarSingerLists.map((mv,index)=>{
                return(
                    <ListItem key={index}>
                        <div className="img-wrapper">
                            <img src={} alt='相似歌手'></img>
                        </div>
                        <div className="name">{}</div>
                    </ListItem>
                )
            })
              
            
    }
    return (
            <List>
                {renderList()}
            </List>
    )
}

export default React.memo(SingerMv)