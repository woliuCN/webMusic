/*
 * @Description: 评论列表组件
 * @Autor: cn
 * @Date: 2019-10-19 14:56:41
 * @LastEditors: cn
 * @LastEditTime: 2019-11-28 09:35:36
 */
import React, { useState } from 'react';
import styled from 'styled-components';
import style from '../../../assets/global-style';

const List = styled.div`
      width:100%;
      padding:1.1538rem 0;
      display:flex;
      align-items:flex-start;
      border-top:1px solid #eee;
      .avator{
          flex:0 0 3.8462rem;
          img{
              height:3.0769rem;
              height:3.0769rem;
              border-radius:50%;
          }
      };
      .main{
          flex:1;
          font-size:0.9231rem;
          color:#333;
          .user-content{
              line-height:1.2308rem;
              margin-bottom:0.7692rem;
              .nick-name{
                  color:${style["nick-name"]};
              }
          }
          .be-replied{
              line-height:1.2308rem;
              box-sizing:border-box;
              margin-bottom:0.7692rem;
              padding:0.6154rem;
              background:#f1f2f3;
              .nick-name{
                  color:${style["nick-name"]};
              }
          }
          .other{
              vertical-align:middle;
              color:#c4c4c4;
              .option{
                  float:right;
                  >span{
                      vertical-align:middle;
                      .iconfont {
                          font-size:1.3846rem;
                          vertical-align:middle;
                      }
                      span{
                          vertical-align:middle;
                      }
                  }
              }
          }  
      }
`
const Line = styled.div`
      display:inline-block;
      width:1px;
      height:0.9231rem;
      background:#c4c4c4;
      margin:0 0.7692rem;
      vertical-align:middle;
`

function CommentList(props) {
    const { comment } = props;
    return (
        <List>
            <div className="avator">
                <img src={comment.user.avatarUrl} alt="user"></img>
            </div>
            <div className="main">
                <div className="user-content">
                    <span className="nick-name">{comment.user.nickname}：</span>
                    <span className="comment-desc">{comment.content}</span>
                </div>
                {
                    comment.beReplied.length > 0 ? comment.beReplied.map((replied) => {
                        return <div className="be-replied" key={replied.beRepliedCommentId}>
                            <span className="nick-name">@{replied.user.nickname}：</span>
                            <span className="comment-desc">{replied.content}</span>
                        </div>
                    }) : null
                }

                <span className="other">
                    <span className="time">{new Date(comment.time).toLocaleString()}</span>
                    <span className="option">
                        <span>
                            <i className="iconfont icon-thumbup"></i>
                            <span>({comment.likedCount})</span>
                        </span>
                        <Line />
                        <span>
                            分享
                    </span>
                        <Line />
                        <span>
                            回复
                    </span>
                    </span>
                </span>
            </div>
        </List>
    )
}

export default React.memo(CommentList);