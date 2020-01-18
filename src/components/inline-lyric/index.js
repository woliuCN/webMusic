/*
 * @Description: 内联歌词
 * @Author: cn
 * @Date: 2019-09-29 15:45:00
 * @LastEditTime: 2019-12-01 14:33:50
 * @LastEditors: cn
 */
import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import style from '../../assets/global-style';
import { connect } from 'react-redux';
import { action } from '../../pages/player/store';
const Lyrics = styled.ul`
     /* padding:8px; */
     height:25rem;
     overflow-y:scroll;
     ${style["scroll"]};
     /* border-right:0.1429rem solid #777; */
     li{
        font-size:1.0769rem;
        line-height:2.3077rem;
        color:#2b2a29;
        &.active{
            color:#fff;
        }
     }
`;


function Inlinelyrics(props) {
    const { lyrics, currentTime, resetTime } = props //轮播图数组
    const { changeCurrentLyricDispatch } = props;
    const offset = 30; //歌词行高
    const C_pos = 5; //基准线
    const [lineNo, setLineNo] = useState(0); //当前行
    const ulRef = useRef();
    const lineHegiht = () => {
        let lis = ulRef.current.querySelectorAll("li");
        if (lineNo > 0) {
            lis[lineNo - 1].removeAttribute('class');
            lis[lineNo - 1].style.opacity = 0.8;
        }
        lis[lineNo].className = "active";
        changeCurrentLyricDispatch(lyrics[lineNo].t);
        if (lineNo > C_pos) {
            let scrollHight = 0;
            ulRef.current.scrollTop = Number(scrollHight + (lineNo - C_pos) * offset);
        }
    }
    useEffect(() => {
        //如果是0的话就重置 ,不然可能会保存上一次的效果
        if (currentTime == 0) {
            let lis = ulRef.current.querySelectorAll("li");
            lis.forEach(li => {
                li.removeAttribute('class');
                li.style.opacity = 1;
            })
            ulRef.current.scrollTop = 0;
            setLineNo(0);
        }

        if (typeof (lyrics[lineNo]) != "undefined" && lyrics[lineNo].m + 1 <= currentTime) {
            lineHegiht();
            setLineNo(lineNo + 1);
        }
    }, [currentTime])

    useEffect(() => {
        let lis = ulRef.current.querySelectorAll("li");
        //回拉到开始
        if (resetTime == 0) {
            lis.forEach(li => {
                li.removeAttribute('class');
                li.style.opacity = 1;
            })
            ulRef.current.scrollTop = 0;
            setLineNo(0);
        }
        //回拉不是到开始
        if (resetTime !== 0) {
            let number = 0;
            lis.forEach(li => {
                if (li.dataset.m <= resetTime) {
                    li.removeAttribute('class');
                    li.style.opacity = 0.6;
                    number++;
                } else {
                    li.removeAttribute('class');
                    li.style.opacity = 1;
                }
            })
            if (number > C_pos) {
                let scrollHight = 0;
                ulRef.current.scrollTop = Number(scrollHight + (number - C_pos) * offset);
            } else {
                ulRef.current.scrollTop = 0;
            }
            setLineNo(number);
        }
    }, [resetTime])

    const renderlyrics = () => {
        return lyrics.map((lyric, i) => {
            return <li key={'lyric' + i} data-m={lyric.m}>
                {lyric.t}
            </li>
        })

    }
    return (
        <Lyrics ref={ulRef} >
            {renderlyrics()}
        </Lyrics>

    )

}
//redux 状态映射到props
const mapStateToProps = (state) => {
    return {}
}
const mapDispatchToProps = (dispatch) => {
    return {
        changeCurrentLyricDispatch: (lyric) => {
            dispatch(action.changeCurrentLyric(lyric));
        },
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(React.memo(Inlinelyrics))