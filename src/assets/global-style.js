/*
 * @Description: 主题色
 * @Author: cn
 * @Date: 2019-09-22 13:58:38
 * @LastEditTime: 2019-11-28 10:10:48
 * @LastEditors: cn
 */

const extendClick = () => {
    return `
      position: relative;
      &:before{
        content: '';
        position: absolute;
        top: -10px; bottom: -10px; left: -10px; right: -10px;
      };
    `
  }
  
  const noWrap = () => {
    return `
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
    `
  }
  const scroll =()=>{
    return `
      ::-webkit-scrollbar{
              width:0.3846rem;
      }
      
      ::-webkit-scrollbar-track{
              background-color:#f1f2f3;
              border-radius:0.3846rem; 
      }

      ::-webkit-scrollbar-thumb{
              background-color:#ccc;
              border-radius:0.3846rem;
      }
    `
  }
  
  export default {
    // 'theme-color': '#d44439',
    'theme-color': 'rgba(93, 194, 136, 1)',
    'theme-color-shadow': 'rgba(212, 68, 57, .5)',
    'font-color-light': '#f1f1f1',
    'font-color-desc': '#2E3030',
    'font-color-desc-v2': '#bba8a8',//略淡
    'font-size-ss': '10px',
    'font-size-s': '12px',
    'font-size-m': '14px',
    'font-size-l': '16px',
    'font-size-ll': '18px',
    "border-color": '#e4e4e4',
    'background-color': '#f2f3f4',
    'background-color-shadow': 'rgba(0, 0, 0, 0.3)',
    'highlight-background-color': '#fff',
    "lyric-color":'#d7fdb4fc',
    "nick-name":'#0c73c2',
    "text-color":'#333',
    "hover-color":'#eee',
    extendClick,
    noWrap,
    scroll
  }
  