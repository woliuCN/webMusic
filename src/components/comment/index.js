/*
 * @Description: 评论组件
 * @Autor: cn
 * @Date: 2019-10-17 11:20:13
 * @LastEditors: cn
 * @LastEditTime: 2019-11-06 15:20:36
 */
import React from 'react';
import CommentList from './comment-list';
import styled from 'styled-components';
import style from '../../assets/global-style';
import PropTypes from 'prop-types';
import Pagination from '../pagination';

const Header = styled.div`
      width:100%;
      font-size:0.9231rem;
      color:#666;
      .public-title{
        border-bottom:1px solid #eee;
        padding-bottom:0.7692rem;
        h1{
          font-size:1.3846rem;
          display:inline-block;
          margin-right:0.7692rem;
          color:#222;
        }
      }
`
const PublicComment = styled.div`
      width:100%;
      box-sizing:border-box;
      padding:0.7692rem;
      margin:1.5385rem 0 ;
      border:0.9231rem solid #f1f2f3;
      background:#fff;
      display:flex;
      align-items:center;
      justify-content:space-between;
      div{
          font-size:1rem;
          .iconfont {
            font-size:1.2308rem;
            margin-right:0.7692rem;
            &.icon-smiling{
              font-size:1.5385rem;
            }
          }
          &:nth-child(2){
             span{
               font-size:1.5385rem;
             } 
          }
      }
`
const Main = styled.div`
      width:100%;
      color:${style["text-color"]};
      .comment-title{
        font-size:0.9231rem;
        line-height:2.3077rem;
        height:2.3077rem;
      }
      .footer{
         font-size:1.0769rem;
         text-align:center;
         margin:1.5385rem 0;
      }

`

function Comment (props){
   const {title} = props;
   const {total} = props; //总数
   const {currentPageChange} = props;
   const {hotComments,newComments} = props;
   //渲染精彩评论列表
   const renderHotComment = ()=>{
       return  hotComments.map((comment,i)=>
          <CommentList key={"hot"+i} comment={comment}/>
        )   
    
   }
   const renderNewComment = ()=>{
     return newComments.map((comment, i) =>
       <CommentList key={"new" + i} comment={comment} />
     )   
   }
   return(
        <div>
          <Header>
            <div className="public-title" style={{display:title==''?'none':'block'}}>
              <h1>{title}</h1>
              <span>(已有{total}评论)</span>
            </div>
            <PublicComment>
              <div>
                <i className="iconfont icon-pinglun"></i>
                <span>发表评论</span>
              </div>
              <div>
                <i className="iconfont icon-smiling"></i>
                <span>@</span>
              </div>

            </PublicComment>
          </Header>
          <Main>
            <div className="comment-title" style={{display:hotComments.length>0?'block':'none'}}>精彩评论</div>
            { hotComments.length>0 && renderHotComment()}
            <div className="footer" style={{display:hotComments.length>0?'block':'none',cursor:"pointer"}}>查看更多精彩评论></div>
            <div className="comment-title">最新评论({total})</div>
             { newComments.length>0 && renderNewComment()}
             <div className="footer" style={{display:total>50?'block':'none'}}> 
                <Pagination totalPages={Math.ceil(total/50)} handleSelectPage={currentPageChange}/>
             </div>
          </Main>
        </div>
   )
}

Comment.defaultProps = {
      title:'听友评论',
      total:0,
      hotComments:[],
      newComments:[],
      currentPageChange:()=>{}
}
Comment.propType = {
      title:PropTypes.string,
      total:PropTypes.number,
      hotComments:PropTypes.array,
      newComments:PropTypes.array,
      currentPageChange:PropTypes.func
}

export default React.memo(Comment)