/*
 * @Description: 分页组件
 * @Autor: cn
 * @Date: 2019-10-15 20:54:23
 * @LastEditors: cn
 * @LastEditTime: 2019-11-28 14:30:56
 */
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import style from '../../assets/global-style';
import PropTypes from 'prop-types';

const MAX_LENGTH = 10; //最大展示页号个数
const MAX_GROUP = 7; //省略号之前的页号个数
const PaginationContainer = styled.div`
      width:30.7692rem;
      display:flex;
      align-items:center;
      justify-content:space-around;
      margin :0 auto;
      .option{
          cursor: pointer;
          
          .iconfont{
              font-size:2rem;
              color:#888;
          }
          &.disable{
             cursor: default; 
            .iconfont{
              color:#ddd;
            }
              
          }
      }
      /* 缩略号样式 */
      .ellipsis{
        width:1.5385rem;
        height:1.5385rem;
        line-height:1.5385rem;
        font-size:0.9231rem;
        text-align:center;
      }
`
const PaginationItem = styled.div`
        width:1.5385rem;
        height:1.5385rem;
        line-height:1.5385rem;
        box-sizing:border-box;
        text-align:center;
        color:#666;
        font-size:0.9231rem;
        &:hover{
            font-weight:${props => props.className == 'active' ? '' : '600'};
            color:${props => props.className == 'active' ? '' : '#000'};
            background-color:${props => props.className == 'active' ? '' : '#eee'};
            border:${props => props.className == 'active' ? 'none' : '1px solid #ddd'};
            cursor: ${props => props.className == 'active' ? '' : 'pointer'};
        }
        &.active{
            color:${style["theme-color"]};
            text-decoration:underline;
        }
`



function Pagination(props) {
    const [currentPage, setCurrentPage] = useState(1);   //当前页
    const [flag, setFlag] = useState(1);   //初次渲染为1,切换分组时为2
    const [startPage, setStartPage] = useState(1); //开始的页号
    const { totalPages, handleSelectPage, initialPage } = props;
    //如果有传即需要强制到某页的时候。
    useEffect(() => {
        if (initialPage && initialPage > 0) {
            setCurrentPage(initialPage);
        }
    }, [initialPage])
    //动态渲染分页数量
    const renderPaginations = () => {
        let result = [];
        //第一次加载渲染
        if (flag == 1) {
            if (totalPages <= MAX_LENGTH) {
                for (let i = 1; i <= totalPages; i++) {
                    result.push(
                        <PaginationItem key={i} className={i == currentPage ? 'active' : ''} onClick={() => handleChange(i)}>
                            {i}
                        </PaginationItem>
                    )
                }
            } else {
                for (let i = 1; i <= MAX_LENGTH - 3; i++) {
                    result.push(
                        <PaginationItem key={i} className={i == currentPage ? 'active' : ''} onClick={() => handleChange(i)}>
                            {i}
                        </PaginationItem>
                    )
                }
                result.push(<div className="ellipsis">...</div>);
                for (let i = totalPages - 1; i <= totalPages; i++) {
                    result.push(
                        <PaginationItem key={i} className={i == currentPage ? 'active' : ''} onClick={() => handleChange(i)}>
                            {i}
                        </PaginationItem>
                    )
                }
            }
        } else if (flag == 2) {
            //如果当前开始页号与最大页号相差大于10的话
            if (totalPages - startPage >= MAX_LENGTH) {
                for (let i = startPage; i < startPage + MAX_GROUP; i++) {
                    result.push(
                        <PaginationItem key={i} className={i == currentPage ? 'active' : ''} onClick={() => handleChange(i)}>
                            {i}
                        </PaginationItem>
                    )
                }
                result.push(<div className="ellipsis">...</div>);
                for (let i = totalPages - 1; i <= totalPages; i++) {
                    result.push(
                        <PaginationItem key={i} className={i == currentPage ? 'active' : ''} onClick={() => handleChange(i)}>
                            {i}
                        </PaginationItem>
                    )
                }
            } else {
                // 表示已经到结尾了且数据范围小于10
                for (let i = startPage; i <= totalPages; i++) {
                    result.push(
                        <PaginationItem key={i} className={i == currentPage ? 'active' : ''} onClick={() => handleChange(i)}>
                            {i}
                        </PaginationItem>
                    )
                }

            }
        }

        return result;
    }
    //点击页号改变页数
    const handleChange = (index) => {
        //如果页数还是同一个的时候返回
        if (index == currentPage) return;
        setCurrentPage(index);
        handleSelectPage(index);
        if ((index == totalPages || index == totalPages - 1) && totalPages > MAX_LENGTH) {
            let endStartPage = totalPages - (totalPages % MAX_GROUP) + 1;
            //说明上一组跟下一组刚好可以凑够10个
            if (totalPages % MAX_GROUP <= 3) {
                endStartPage = totalPages - MAX_GROUP - totalPages % MAX_GROUP + 1;
            }
            setFlag(2);
            setStartPage(endStartPage);
            renderPaginations();
        }
    }
    //上一页
    const handlePrevious = () => {
        if (currentPage === 1) return;
        setCurrentPage(currentPage - 1);
        handleSelectPage(currentPage - 1);
        // 如果上一页是最大组数的倍数,退到上一组,开始页号等于当前页-最大组数+1,重新渲染分页组件
        // 减1是因为这时候setState 数据还没更新
        if ((currentPage - 1) % MAX_GROUP == 0) {
            setStartPage(currentPage - MAX_GROUP);
            setFlag(2);
            renderPaginations();
        }

    }
    //下一页
    const handleNext = () => {
        if (currentPage == totalPages) return;
        setCurrentPage(currentPage + 1);
        handleSelectPage(currentPage + 1);
        // 如果下一页是最大组数的倍数+1的话,展示下一组,开始的页号变成当前的页号,重新渲染分页组件
        // 加1是因为这时候setState 数据还没更新
        /* 
         *当总页数大于最大长度10的时候并且开始页数与总页数之间差距大于等于最大长度的时候取余1才生效
         * 第一次点击的时候此时的startPage为上一组的startpage
        */
        if (totalPages > MAX_LENGTH && (currentPage + 1) % MAX_GROUP == 1 && totalPages - startPage >= MAX_LENGTH) {
            setStartPage(currentPage + 1);
            setFlag(2);
            renderPaginations();
        }
    }
    //双击回首页
    const handleGoFirst = () => {
        setCurrentPage(1);
        handleSelectPage(1);
        setFlag(1);
        renderPaginations();

    }
    return (
        <PaginationContainer>
            <div className={`option ${currentPage == 1 ? 'disable' : ''}`}
                onDoubleClick={handleGoFirst}
                onClick={handlePrevious}
                title="单击上一页,双击首页"
            >
                <i className="iconfont icon-shangyiye"></i>
            </div>
            {renderPaginations()}
            <div className={`option ${currentPage == totalPages ? 'disable' : ''}`}
                onClick={handleNext}
                title="下一页"
            >
                <i className="iconfont icon-xiayiye"></i>
            </div>
        </PaginationContainer>
    )
}


Pagination.defaultProps = {
    totalPages: 100,
    initialPage:0,
    handleSelectPage: (page) => {
        console.log(page);
    }
}
Pagination.propType = {
    totalPages: PropTypes.number,
    initialPage:PropTypes.number,
    handleSelectPage: PropTypes.func
}

export default React.memo(Pagination)