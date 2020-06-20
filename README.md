<!--
 * @Description: README说明
 * @Autor: cn
 * @Date: 2019-10-09 20:38:01
 * @LastEditors: cn
 * @LastEditTime: 2019-12-09 20:27:48
 -->

### 简介
项目使用create-react-app脚手架搭建,依赖react全家桶->(react-hooks、react-router4.、react-redux)  
index.js 语法使用es6  
style.js 样式使用style in js (style-component)  
使用rem来实现设配,转换工具是px2rem  

```js
|--public                                       //公用目录
|   |--rank                                     //排行榜相关图片
|   |--singer                                   //歌手详情相关图片
|   |--index.html                               //入口html
|--src                                          //主代码目录
|   |--api                                      //相关请求、工具方法目录
|   |   |--config                               //配置文件
|   |   |--request                              //请求文件
|   |   |--utils                                //工具方法
|   |--assets                                   //全局样式目录
|   |   |--iconfont                             //阿里字体图标
|   |   |--global-style                         //全局通用样式
|   |--baseui                                   //基础通用组件目录(笨组件)
|   |   |--header                               //头部组件
|   |   |--horizen                              //水平列表组件
|   |   |--loading                              //加载中....
|   |   |--progress-bar                         //进度条组件    
|   |   |--scroll                               //batter-scroll组件封装
|   |   |--slide                                //轮播图组件
|   |   |--toast                                //提示组件
|   |   |--toggle-bar                           //顶部切换栏组件
|   |--components                               //逻辑组件目录
|   |   |--aside                                //侧边栏组件  
|   |   |--comment                              //评论组件
|   |   |--inline-lyric                         //内联歌词组件
|   |   |--list                                 //推荐页面歌单列表组件
|   |   |--mv-list                              //推荐页面mv列表组件
|   |   |--outline-lyric                        //外放歌词组件
|   |   |--pagination                           //分页组件
|   |   |--search-dialog                        //搜索dialog组件
|   |   |--song-table                           //歌曲列表组件
|   |   |--tabs                                 //tab组件
|   |   |--login                                //登录框组件
|   |--pages                                    //页面
|   |   |--playList-detail                      //歌单详情页
|   |   |--album-detail                         //专辑详情页
|   |   |--playlist                             //歌单页面
|   |   |--home                                 //主入口页
|   |   |--mv                                   //mv详情页
|   |   |--mvs                                  //mv列表页
|   |   |--new-music                            //最新歌曲页  
|   |   |--player                               //播放器页面
|   |   |--rank                                 //排行榜页面
|   |   |--recommend                            //推荐页面
|   |   |--search                               //搜索页面
|   |   |--singer                               //歌手详情页
|   |   |--singers                              //歌手列表页
|   |   |--video                                //视频详情页
|   |--routers                                  //路由配置
|   |--store                                    //总store目录
|   |--style.js                                 //样式格式化文件css rest                               

```
> dev2

### 说明

#### 运行
1、第一次,进入项目目录,输入`npm  install`  
2、运行 输入 `npm start`  
3、打包 输入 `npm run build` 生成build文件夹  

#### 其他说明
1、预览默认打开http://localhost:3000,后台数据在http://106.15.205.33:3000/上部署了, 打开谷歌浏览器F11全屏体验更好呀！  
2、目录结构有点不是很正确,当初写的时候没有考虑详细,例如aside应该属于baseui的而header应该属于components,且组件细化不是很够,待跟进,文件命名也有些low,吃了文化的亏！理解万岁！
