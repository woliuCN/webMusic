/*
 * @Description: 工具函数
 * @Autor: cn
 * @Date: 2019-10-13 21:11:05
 * @LastEditors: cn
 * @LastEditTime: 2019-11-06 20:46:23
 */
//秒取整
export const formatTime = (time,flag)=>{
    if(flag){
        time = time |0;
        let min = time /60 |0;
        let second = (time%60).toString().padStart(2,'0'); //不足两位的时候补零
        return `${min}:${second}`
    }else{
        time = time/1000 |0;
        let min = time /60 |0;
        let second = (time%60).toString().padStart(2,'0'); //不足两位的时候补零
        if(min<10){
            min ='0'+min;
        }
        return `${min}:${second}`  
    }
}

//数字转换
export const formatCount = (count)=>{
       if(count<100000){
           return count
       }else{
           return Math.floor(count/10000)+'万';
       } 
}

//格式化歌手详情段落
export const formatStr = (str)=>{
    return str.split("\n");
}

/*
  防抖函数
*/
let timeout;
export const debounce= function (func, wait) {
     //延迟执行函数
      const later = (args) => setTimeout(() => {
        //延迟函数执行完毕，清空定时器。
        timeout = null
        //延迟执行的情况下，函数会在延迟函数中执行。
        //使用到之前缓存的参数和上下文
        func.apply(this, args);
        
      }, wait);
      let debounced = function (...params) {
        if(!timeout) {
           timeout = later(params); 
        }
          /* 如果触发函数的时候，定时器存在，则表示还没到规定的时间又触发了这个函数，则清除定时器，重新计算
          定时器里面的要执行的逻辑函数一直执行不了，直到用户没有触发这个函数后，定时器自己会触发自己的回调函数
          */
          else {
          clearTimeout(timeout);
          timeout = later(params);
        }
      }
    return debounced;
  };



  //拼接歌手
  export const combineArtist = (artist)=>{
    let str = '';
    if(artist.length==1){
        return artist[0].name;
    }
    else{
        for(let i =0;i<artist.length;i++){
            if(i == artist.length-1){
                str+=artist[i].name;
            }else{
                str+=artist[i].name+'/'
            }
        }
    }

    return str;
}