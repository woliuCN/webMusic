/*
 * @Description: 相关配置文件
 * @Author: cn
 * @Date: 2019-10-01 15:35:19
 * @LastEditTime: 2019-11-20 21:49:56
 * @LastEditors: cn
 */

import axios from 'axios';

export const baseUrl = 'http://106.15.205.33:3000';

//创建axios实例,初始化配置
const axiosInstance = axios.create({
  baseURL: baseUrl
});
//设置响应拦截器
axiosInstance.interceptors.response.use(
  res => res.data,
  err => console.log(err + "网络错误")
)
export { axiosInstance }
//歌手种类
export const categoryTypes = [
  {
    name: "全部",
    key: ""
  },
  {
    name: "华语男",
    key: "1001"
  },
  {
    name: "华语女",
    key: "1002"
  },
  {
    name: "华语组合",
    key: "1003"
  },
  {
    name: "欧美男",
    key: "2001"
  },
  {
    name: "欧美女",
    key: "2002"
  },
  {
    name: "欧美组合",
    key: "2003"
  },
  {
    name: "日本男",
    key: "6001"
  },
  {
    name: "日本女",
    key: "6002"
  },
  {
    name: "日本组合",
    key: "6003"
  },
  {
    name: "韩国男",
    key: "7001"
  },
  {
    name: "韩国女",
    key: "7002"
  },
  {
    name: "韩国组合",
    key: "7003"
  },
  {
    name: "其他男歌手",
    key: "4001"
  },
  {
    name: "其他女歌手",
    key: "4002"
  },
  {
    name: "其他组合",
    key: "4003"
  },
];

//歌手首字母
export const alphaTypes = [
  { key: "", name: "热门" },
  { key: "A", name: "A" },
  { key: "B", name: "B" },
  { key: "C", name: "C" },
  { key: "D", name: "D" },
  { key: "E", name: "E" },
  { key: "F", name: "F" },
  { key: "G", name: "G" },
  { key: "H", name: "H" },
  { key: "I", name: "I" },
  { key: "J", name: "J" },
  { key: "K", name: "K" },
  { key: "L", name: "L" },
  { key: "M", name: "M" },
  { key: "N", name: "N" },
  { key: "O", name: "O" },
  { key: "P", name: "P" },
  { key: "Q", name: "Q" },
  { key: "R", name: "R" },
  { key: "S", name: "S" },
  { key: "T", name: "T" },
  { key: "U", name: "U" },
  { key: "V", name: "V" },
  { key: "W", name: "W" },
  { key: "X", name: "X" },
  { key: "Y", name: "Y" },
  { key: "Z", name: "Z" }
];




//歌单分类
export const PlayListCategory =
{
  "all": {
    "name": "全部歌单",
    "resourceCount": 1000,
    "imgId": 0,
    "imgUrl": null,
    "type": 0,
    "category": 4,
    "resourceType": 0,
    "hot": false,
    "activity": false
  },
  "sub": [
    {
      "name": "流行",
      "resourceCount": 1000,
      "imgId": 0,
      "imgUrl": null,
      "type": 0,
      "category": 1,
      "resourceType": 0,
      "hot": true,
      "activity": false
    },
    {
      "name": "影视原声",
      "resourceCount": 1000,
      "imgId": 0,
      "imgUrl": null,
      "type": 0,
      "category": 4,
      "resourceType": 0,
      "hot": true,
      "activity": false
    },
    {
      "name": "华语",
      "resourceCount": 946,
      "imgId": 0,
      "imgUrl": null,
      "type": 0,
      "category": 0,
      "resourceType": 0,
      "hot": true,
      "activity": false
    },
    {
      "name": "清晨",
      "resourceCount": 1000,
      "imgId": 0,
      "imgUrl": null,
      "type": 1,
      "category": 2,
      "resourceType": 0,
      "hot": false,
      "activity": false
    },
    {
      "name": "怀旧",
      "resourceCount": 1000,
      "imgId": 0,
      "imgUrl": null,
      "type": 0,
      "category": 3,
      "resourceType": 0,
      "hot": true,
      "activity": false
    },
    {
      "name": "摇滚",
      "resourceCount": 1000,
      "imgId": 0,
      "imgUrl": null,
      "type": 0,
      "category": 1,
      "resourceType": 0,
      "hot": true,
      "activity": false
    },
    {
      "name": "夜晚",
      "resourceCount": 1000,
      "imgId": 0,
      "imgUrl": null,
      "type": 0,
      "category": 2,
      "resourceType": 0,
      "hot": true,
      "activity": false
    },
    {
      "name": "清新",
      "resourceCount": 1000,
      "imgId": 0,
      "imgUrl": null,
      "type": 0,
      "category": 3,
      "resourceType": 0,
      "hot": true,
      "activity": false
    },
    {
      "name": "ACG",
      "resourceCount": 1000,
      "imgId": 0,
      "imgUrl": null,
      "type": 0,
      "category": 4,
      "resourceType": 0,
      "hot": true,
      "activity": false
    },
    {
      "name": "欧美",
      "resourceCount": 1000,
      "imgId": 0,
      "imgUrl": null,
      "type": 1,
      "category": 0,
      "resourceType": 0,
      "hot": false,
      "activity": false
    },
    {
      "name": "儿童",
      "resourceCount": 1000,
      "imgId": 0,
      "imgUrl": null,
      "type": 1,
      "category": 4,
      "resourceType": 0,
      "hot": false,
      "activity": false
    },
    {
      "name": "学习",
      "resourceCount": 1000,
      "imgId": 0,
      "imgUrl": null,
      "type": 0,
      "category": 2,
      "resourceType": 0,
      "hot": true,
      "activity": false
    },
    {
      "name": "民谣",
      "resourceCount": 876,
      "imgId": 0,
      "imgUrl": null,
      "type": 0,
      "category": 1,
      "resourceType": 0,
      "hot": true,
      "activity": false
    },
    {
      "name": "浪漫",
      "resourceCount": 1000,
      "imgId": 0,
      "imgUrl": null,
      "type": 1,
      "category": 3,
      "resourceType": 0,
      "hot": false,
      "activity": false
    },
    {
      "name": "日语",
      "resourceCount": 1000,
      "imgId": 0,
      "imgUrl": null,
      "type": 1,
      "category": 0,
      "resourceType": 0,
      "hot": false,
      "activity": false
    },
    {
      "name": "工作",
      "resourceCount": 1000,
      "imgId": 0,
      "imgUrl": null,
      "type": 1,
      "category": 2,
      "resourceType": 0,
      "hot": false,
      "activity": false
    },
    {
      "name": "电子",
      "resourceCount": 1000,
      "imgId": 0,
      "imgUrl": null,
      "type": 0,
      "category": 1,
      "resourceType": 0,
      "hot": true,
      "activity": false
    },
    {
      "name": "校园",
      "resourceCount": 1000,
      "imgId": 0,
      "imgUrl": null,
      "type": 1,
      "category": 4,
      "resourceType": 0,
      "hot": false,
      "activity": false
    },
    {
      "name": "韩语",
      "resourceCount": 1000,
      "imgId": 0,
      "imgUrl": null,
      "type": 1,
      "category": 0,
      "resourceType": 0,
      "hot": false,
      "activity": false
    },
    {
      "name": "午休",
      "resourceCount": 1000,
      "imgId": 0,
      "imgUrl": null,
      "type": 1,
      "category": 2,
      "resourceType": 0,
      "hot": false,
      "activity": false
    },
    {
      "name": "游戏",
      "resourceCount": 1000,
      "imgId": 0,
      "imgUrl": null,
      "type": 1,
      "category": 4,
      "resourceType": 0,
      "hot": false,
      "activity": false
    },
    {
      "name": "伤感",
      "resourceCount": 1000,
      "imgId": 0,
      "imgUrl": null,
      "type": 1,
      "category": 3,
      "resourceType": 0,
      "hot": false,
      "activity": false
    },
    {
      "name": "舞曲",
      "resourceCount": 1000,
      "imgId": 0,
      "imgUrl": null,
      "type": 1,
      "category": 1,
      "resourceType": 0,
      "hot": false,
      "activity": false
    },
    {
      "name": "粤语",
      "resourceCount": 632,
      "imgId": 0,
      "imgUrl": null,
      "type": 1,
      "category": 0,
      "resourceType": 0,
      "hot": false,
      "activity": false
    },
    {
      "name": "下午茶",
      "resourceCount": 1000,
      "imgId": 0,
      "imgUrl": null,
      "type": 1,
      "category": 2,
      "resourceType": 0,
      "hot": false,
      "activity": false
    },
    {
      "name": "70后",
      "resourceCount": 1000,
      "imgId": 0,
      "imgUrl": null,
      "type": 1,
      "category": 4,
      "resourceType": 0,
      "hot": false,
      "activity": false
    },
    {
      "name": "说唱",
      "resourceCount": 1000,
      "imgId": 0,
      "imgUrl": null,
      "type": 1,
      "category": 1,
      "resourceType": 0,
      "hot": false,
      "activity": false
    },
    {
      "name": "治愈",
      "resourceCount": 1000,
      "imgId": 0,
      "imgUrl": null,
      "type": 0,
      "category": 3,
      "resourceType": 0,
      "hot": true,
      "activity": false
    },
    {
      "name": "轻音乐",
      "resourceCount": 1000,
      "imgId": 0,
      "imgUrl": null,
      "type": 0,
      "category": 1,
      "resourceType": 0,
      "hot": true,
      "activity": false
    },
    {
      "name": "80后",
      "resourceCount": 1000,
      "imgId": 0,
      "imgUrl": null,
      "type": 1,
      "category": 4,
      "resourceType": 0,
      "hot": false,
      "activity": false
    },
    {
      "name": "放松",
      "resourceCount": 1000,
      "imgId": 0,
      "imgUrl": null,
      "type": 1,
      "category": 3,
      "resourceType": 0,
      "hot": false,
      "activity": false
    },
    {
      "name": "地铁",
      "resourceCount": 1000,
      "imgId": 0,
      "imgUrl": null,
      "type": 1,
      "category": 2,
      "resourceType": 0,
      "hot": false,
      "activity": false
    },
    {
      "name": "爵士",
      "resourceCount": 1000,
      "imgId": 0,
      "imgUrl": null,
      "type": 1,
      "category": 1,
      "resourceType": 0,
      "hot": false,
      "activity": false
    },
    {
      "name": "90后",
      "resourceCount": 1000,
      "imgId": 0,
      "imgUrl": null,
      "type": 1,
      "category": 4,
      "resourceType": 0,
      "hot": false,
      "activity": false
    },
    {
      "name": "驾车",
      "resourceCount": 1000,
      "imgId": 0,
      "imgUrl": null,
      "type": 1,
      "category": 2,
      "resourceType": 0,
      "hot": false,
      "activity": false
    },
    {
      "name": "孤独",
      "resourceCount": 1000,
      "imgId": 0,
      "imgUrl": null,
      "type": 1,
      "category": 3,
      "resourceType": 0,
      "hot": false,
      "activity": false
    },
    {
      "name": "感动",
      "resourceCount": 1000,
      "imgId": 0,
      "imgUrl": null,
      "type": 1,
      "category": 3,
      "resourceType": 0,
      "hot": false,
      "activity": false
    },
    {
      "name": "运动",
      "resourceCount": 1000,
      "imgId": 0,
      "imgUrl": null,
      "type": 0,
      "category": 2,
      "resourceType": 0,
      "hot": true,
      "activity": false
    },
    {
      "name": "网络歌曲",
      "resourceCount": 1000,
      "imgId": 0,
      "imgUrl": null,
      "type": 1,
      "category": 4,
      "resourceType": 0,
      "hot": false,
      "activity": false
    },
    {
      "name": "乡村",
      "resourceCount": 1000,
      "imgId": 0,
      "imgUrl": null,
      "type": 1,
      "category": 1,
      "resourceType": 0,
      "hot": false,
      "activity": false
    },
    {
      "name": "兴奋",
      "resourceCount": 1000,
      "imgId": 0,
      "imgUrl": null,
      "type": 1,
      "category": 3,
      "resourceType": 0,
      "hot": false,
      "activity": false
    },
    {
      "name": "KTV",
      "resourceCount": 1000,
      "imgId": 0,
      "imgUrl": null,
      "type": 1,
      "category": 4,
      "resourceType": 0,
      "hot": false,
      "activity": false
    },
    {
      "name": "旅行",
      "resourceCount": 1000,
      "imgId": 0,
      "imgUrl": null,
      "type": 1,
      "category": 2,
      "resourceType": 0,
      "hot": false,
      "activity": false
    },
    {
      "name": "R&B/Soul",
      "resourceCount": 1000,
      "imgId": 0,
      "imgUrl": null,
      "type": 1,
      "category": 1,
      "resourceType": 0,
      "hot": false,
      "activity": false
    },
    {
      "name": "古典",
      "resourceCount": 1000,
      "imgId": 0,
      "imgUrl": null,
      "type": 1,
      "category": 1,
      "resourceType": 0,
      "hot": false,
      "activity": false
    },
    {
      "name": "快乐",
      "resourceCount": 1000,
      "imgId": 0,
      "imgUrl": null,
      "type": 1,
      "category": 3,
      "resourceType": 0,
      "hot": false,
      "activity": false
    },
    {
      "name": "散步",
      "resourceCount": 1000,
      "imgId": 0,
      "imgUrl": null,
      "type": 1,
      "category": 2,
      "resourceType": 0,
      "hot": false,
      "activity": false
    },
    {
      "name": "经典",
      "resourceCount": 1000,
      "imgId": 0,
      "imgUrl": null,
      "type": 1,
      "category": 4,
      "resourceType": 0,
      "hot": false,
      "activity": false
    },
    {
      "name": "翻唱",
      "resourceCount": 1000,
      "imgId": 0,
      "imgUrl": null,
      "type": 1,
      "category": 4,
      "resourceType": 0,
      "hot": false,
      "activity": false
    },
    {
      "name": "安静",
      "resourceCount": 1000,
      "imgId": 0,
      "imgUrl": null,
      "type": 1,
      "category": 3,
      "resourceType": 0,
      "hot": false,
      "activity": false
    },
    {
      "name": "民族",
      "resourceCount": 1000,
      "imgId": 0,
      "imgUrl": null,
      "type": 1,
      "category": 1,
      "resourceType": 0,
      "hot": false,
      "activity": false
    },
    {
      "name": "酒吧",
      "resourceCount": 1000,
      "imgId": 0,
      "imgUrl": null,
      "type": 1,
      "category": 2,
      "resourceType": 0,
      "hot": false,
      "activity": false
    },
    {
      "name": "思念",
      "resourceCount": 1000,
      "imgId": 0,
      "imgUrl": null,
      "type": 1,
      "category": 3,
      "resourceType": 0,
      "hot": false,
      "activity": false
    },
    {
      "name": "吉他",
      "resourceCount": 1000,
      "imgId": 0,
      "imgUrl": null,
      "type": 1,
      "category": 4,
      "resourceType": 0,
      "hot": false,
      "activity": false
    },
    {
      "name": "英伦",
      "resourceCount": 1000,
      "imgId": 0,
      "imgUrl": null,
      "type": 1,
      "category": 1,
      "resourceType": 0,
      "hot": false,
      "activity": false
    },
    {
      "name": "金属",
      "resourceCount": 1000,
      "imgId": 0,
      "imgUrl": null,
      "type": 1,
      "category": 1,
      "resourceType": 0,
      "hot": false,
      "activity": false
    },
    {
      "name": "钢琴",
      "resourceCount": 1000,
      "imgId": 0,
      "imgUrl": null,
      "type": 1,
      "category": 4,
      "resourceType": 0,
      "hot": false,
      "activity": false
    },
    {
      "name": "朋克",
      "resourceCount": 1000,
      "imgId": 0,
      "imgUrl": null,
      "type": 1,
      "category": 1,
      "resourceType": 0,
      "hot": false,
      "activity": false
    },
    {
      "name": "器乐",
      "resourceCount": 1000,
      "imgId": 0,
      "imgUrl": null,
      "type": 1,
      "category": 4,
      "resourceType": 0,
      "hot": false,
      "activity": false
    },
    {
      "name": "榜单",
      "resourceCount": 1000,
      "imgId": 0,
      "imgUrl": null,
      "type": 1,
      "category": 4,
      "resourceType": 0,
      "hot": false,
      "activity": false
    },
    {
      "name": "蓝调",
      "resourceCount": 1000,
      "imgId": 0,
      "imgUrl": null,
      "type": 1,
      "category": 1,
      "resourceType": 0,
      "hot": false,
      "activity": false
    },
    {
      "name": "雷鬼",
      "resourceCount": 1000,
      "imgId": 0,
      "imgUrl": null,
      "type": 1,
      "category": 1,
      "resourceType": 0,
      "hot": false,
      "activity": false
    },
    {
      "name": "00后",
      "resourceCount": 1000,
      "imgId": 0,
      "imgUrl": null,
      "type": 1,
      "category": 4,
      "resourceType": 0,
      "hot": false,
      "activity": false
    },
    {
      "name": "世界音乐",
      "resourceCount": 1000,
      "imgId": 0,
      "imgUrl": null,
      "type": 1,
      "category": 1,
      "resourceType": 0,
      "hot": false,
      "activity": false
    },
    {
      "name": "拉丁",
      "resourceCount": 1000,
      "imgId": 0,
      "imgUrl": null,
      "type": 1,
      "category": 1,
      "resourceType": 0,
      "hot": false,
      "activity": false
    },
    {
      "name": "New Age",
      "resourceCount": 1000,
      "imgId": 0,
      "imgUrl": null,
      "type": 1,
      "category": 1,
      "resourceType": 0,
      "hot": false,
      "activity": false
    },
    {
      "name": "古风",
      "resourceCount": 892,
      "imgId": 0,
      "imgUrl": null,
      "type": 1,
      "category": 1,
      "resourceType": 0,
      "hot": false,
      "activity": false
    },
    {
      "name": "后摇",
      "resourceCount": 1000,
      "imgId": 0,
      "imgUrl": null,
      "type": 1,
      "category": 1,
      "resourceType": 0,
      "hot": false,
      "activity": false
    },
    {
      "name": "Bossa Nova",
      "resourceCount": 1000,
      "imgId": 0,
      "imgUrl": null,
      "type": 1,
      "category": 1,
      "resourceType": 0,
      "hot": false,
      "activity": false
    }
  ],
  "categories": {
    "0": "语种",
    "1": "风格",
    "2": "场景",
    "3": "情感",
    "4": "主题"
  },
  "code": 200
}


export const PlayListHotCategory = {
  "tags": [
    {
      "playlistTag": {
        "id": 5001,
        "name": "华语",
        "category": 0,
        "usedCount": 5447359,
        "type": 0,
        "position": 1,
        "createTime": 1378707544870,
        "highQuality": 1,
        "highQualityPos": 1,
        "officialPos": 1
      },
      "activity": false,
      "position": 1,
      "category": 0,
      "hot": true,
      "usedCount": 5447359,
      "createTime": 1378707544870,
      "name": "华语",
      "id": 5001,
      "type": 1
    },
    {
      "playlistTag": {
        "id": 1,
        "name": "流行",
        "category": 1,
        "usedCount": 4838576,
        "type": 0,
        "position": 2,
        "createTime": 1378707567870,
        "highQuality": 1,
        "highQualityPos": 10,
        "officialPos": 1
      },
      "activity": false,
      "position": 2,
      "category": 1,
      "hot": true,
      "usedCount": 4838576,
      "createTime": 1378707567870,
      "name": "流行",
      "id": 1,
      "type": 1
    },
    {
      "playlistTag": {
        "id": 2,
        "name": "摇滚",
        "category": 1,
        "usedCount": 2244009,
        "type": 0,
        "position": 3,
        "createTime": 1378707568870,
        "highQuality": 1,
        "highQualityPos": 11,
        "officialPos": 2
      },
      "activity": false,
      "position": 3,
      "category": 1,
      "hot": true,
      "usedCount": 2244009,
      "createTime": 1378707568870,
      "name": "摇滚",
      "id": 2,
      "type": 1
    },
    {
      "playlistTag": {
        "id": 1001,
        "name": "民谣",
        "category": 1,
        "usedCount": 2424043,
        "type": 0,
        "position": 4,
        "createTime": 1378707569870,
        "highQuality": 1,
        "highQualityPos": 14,
        "officialPos": 3
      },
      "activity": false,
      "position": 4,
      "category": 1,
      "hot": true,
      "usedCount": 2424043,
      "createTime": 1378707569870,
      "name": "民谣",
      "id": 1001,
      "type": 1
    },
    {
      "playlistTag": {
        "id": 2004,
        "name": "电子",
        "category": 1,
        "usedCount": 3113547,
        "type": 0,
        "position": 5,
        "createTime": 1378707570870,
        "highQuality": 1,
        "highQualityPos": 16,
        "officialPos": 4
      },
      "activity": false,
      "position": 5,
      "category": 1,
      "hot": true,
      "usedCount": 3113547,
      "createTime": 1378707570870,
      "name": "电子",
      "id": 2004,
      "type": 1
    },
    {
      "playlistTag": {
        "id": 2008,
        "name": "轻音乐",
        "category": 1,
        "usedCount": 2622714,
        "type": 0,
        "position": 6,
        "createTime": 1378707572870,
        "highQuality": 1,
        "highQualityPos": 15,
        "officialPos": 7
      },
      "activity": false,
      "position": 6,
      "category": 1,
      "hot": true,
      "usedCount": 2622714,
      "createTime": 1378707572870,
      "name": "轻音乐",
      "id": 2008,
      "type": 1
    },
    {
      "playlistTag": {
        "id": 9001,
        "name": "影视原声",
        "category": 4,
        "usedCount": 1858094,
        "type": 0,
        "position": 7,
        "createTime": 1378707598870,
        "highQuality": 1,
        "highQualityPos": 9,
        "officialPos": 1
      },
      "activity": false,
      "position": 7,
      "category": 4,
      "hot": true,
      "usedCount": 1858094,
      "createTime": 1378707598870,
      "name": "影视原声",
      "id": 9001,
      "type": 1
    },
    {
      "playlistTag": {
        "id": 11002,
        "name": "ACG",
        "category": 4,
        "usedCount": 1993833,
        "type": 0,
        "position": 8,
        "createTime": 1387779676260,
        "highQuality": 1,
        "highQualityPos": 8,
        "officialPos": 2
      },
      "activity": false,
      "position": 8,
      "category": 4,
      "hot": true,
      "usedCount": 1993833,
      "createTime": 1387779676260,
      "name": "ACG",
      "id": 11002,
      "type": 1
    },
    {
      "playlistTag": {
        "id": 1031,
        "name": "怀旧",
        "category": 3,
        "usedCount": 2281066,
        "type": 0,
        "position": 9,
        "createTime": 1378707582870,
        "highQuality": 0,
        "highQualityPos": 0,
        "officialPos": 1
      },
      "activity": false,
      "position": 9,
      "category": 3,
      "hot": true,
      "usedCount": 2281066,
      "createTime": 1378707582870,
      "name": "怀旧",
      "id": 1031,
      "type": 1
    },
    {
      "playlistTag": {
        "id": 1032,
        "name": "治愈",
        "category": 3,
        "usedCount": 2813081,
        "type": 0,
        "position": 10,
        "createTime": 1378707587870,
        "highQuality": 0,
        "highQualityPos": 0,
        "officialPos": 6
      },
      "activity": false,
      "position": 10,
      "category": 3,
      "hot": true,
      "usedCount": 2813081,
      "createTime": 1378707587870,
      "name": "治愈",
      "id": 1032,
      "type": 1
    }
  ],
  "code": 200
}


export const newMusicExpress = [
  {
    label: "全部",
    type: 0
  },
  {
    label: "华语",
    type: 7
  },
  {
    label: "欧美",
    type: 96
  },
  {
    label: "日本",
    type: 8
  },
  {
    label: "韩国",
    type: 16
  },
]

export const Area = [
  {
    key: "全部",
    name: '全部'
  },
  {
    key: "内地",
    name: '内地'
  },
  {
    key: "港台",
    name: '港台'
  },
  {
    key: "欧美",
    name: '欧美'
  },
  {
    key: "韩国",
    name: '韩国'
  },
  {
    key: "日本",
    name: '日本'
  }
]

export const Type = [
  {
    key: "全部",
    name: '全部'
  },
  {
    key: "官方版",
    name: '官方版'
  },

  {
    key: "原声",
    name: '原声'
  },
  {
    key: "现场版",
    name: '现场版'
  },
  {
    key: "网易出品",
    name: '网易出品'
  },
]

export const Order = [
  {
    key: "上升最快",
    name: '上升最快'
  },
  {
    key: "最新",
    name: '最新'
  },
  {
    key: "最热",
    name: '最热'
  },
]


/*
  单曲、歌手、歌单、用户、视频、专辑
*/
export const searchType = {
  '1': {
    type: 1,
    countName: 'songCount',
    limit:100
  },
  '100': {
    type: 100,
    countName: 'artistCount',
    limit:30
  },
  '1000': {
    type: 1000,
    countName: 'playlistCount',
    limit:30

  },
  '1002': {
    type: 1002,
    countName: 'userprofileCount',
    limit:30
  },
  '1004': {
    type: 1004,
    countName: 'mvCount',
    limit:100
  },

  '10': {
    type: 10,
    countName: 'albumCount',
    limit:30
  },
}