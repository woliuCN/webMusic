/*
 * @Description: 搜索页面样式
 * @Autor: cn
 * @Date: 2019-10-23 10:41:22
 * @LastEditors: cn
 * @LastEditTime: 2019-11-28 10:03:09
 */
import styled from 'styled-components';
import style from '../../assets/global-style';
export const SearchContainer = styled.div`
        position:fixed;
        left:15%;
        right:0;
        top:3.8462rem;
        bottom:${props=>props.playing?'3.8462rem':0}; 
        z-index:99;
        overflow-y:auto;
        background:#fff;
        ${style["scroll"]};
        >p{
            padding:2.3077rem;
            font-family:"微软雅黑";
            span:nth-child(1){
                padding:0 0.3077rem;
                color:#0072ff;
            }
            span:nth-child(2){
                padding:0 0.3077rem;
            }
        }
`
export const AlbumList = styled.ul`
        li{
            display:flex;
            align-items:center;
            height:4.6154rem;
            color:#999;
            font-size:0.9231rem;
            cursor: pointer;
            &:nth-child(even){
                background:#f9f9f9;
            }
            .img-wrapper{
                flex : 0 0 9.2308rem;
                text-align:center;
                img{
                   width:3.4615rem;
                   height:3.4615rem;     
                 }
                .mask{
                    position:absolute;
                    background:url("../singer/tempsnip.png") no-repeat;
                    width: 2.3077rem;
                    height: 3.4615rem;
                    background-size:contain;
                }     
            }
            .ablum-name{
                flex: 0 0 30.7692rem;
            }
            .singer-name{
                flex:1;
            }
            
            &:hover{
                background:${style["hover-color"]}!important;
            }
        }
`
export const SingerList = styled.ul`
        li{
            display:flex;
            align-items:center;
            height:4.6154rem;
            font-size:0.9231rem;
            padding:0 2.3077rem;
            color:${style["text-color"]};
            cursor: pointer;
            &:nth-child(even){
                background:#f9f9f9;
            }
            .img-wrapper{
                flex : 0 0 4.6154rem;
                text-align:center;
                img{
                   width:3.2308rem;
                   height:3.2308rem;     
                 }
            }
        
            .info{
                flex:1;
                .alias{
                    color:#888;
                    padding:0 0.3077rem;
                }
                .iconfont {
                    vertical-align:middle;
                    padding:0 0.4615rem;
                    font-size:1.1538rem;
                    color:${style["theme-color"]};
                }
                
            }
            &:hover{
                background:${style["hover-color"]};
            }
           
        }

`
export const SongSheet = styled.ul`
        li{
            display:flex;
            align-items:center;
            height:4.6154rem;
            font-size:0.9231rem;
            padding:0 2.3077rem;
            color:#888;
            cursor: pointer;
            &:nth-child(even){
                background:#f9f9f9;
            }
            .img-wrapper{
                flex : 0 0 4.6154rem;
                text-align:center;
                img{
                   width:3.2308rem;
                   height:3.2308rem;     
                 }
            }
        
            .info{
                flex:0 0 30.7692rem;
                color:#2e79d6c4;
            }
            .song-count{
                flex:0 0 11.5385rem;
            }
            .creator{
                flex:1;
            }
            &:hover{
                background:${style["hover-color"]}!important;
            }
        }

`
export const UserList = styled.ul`
        li{
            display:flex;
            align-items:center;
            height:4.6154rem;
            color:#999;
            font-size:0.9231rem;
            padding:0 2.3077rem;
            cursor: pointer;
            &:nth-child(even){
                background:#f9f9f9;
            }
            .img-wrapper{
                flex : 0 0 4.6154rem;
                text-align:center;
                img{
                   width:3.0769rem;
                   height:3.0769rem; 
                   border-radius:50%;    
                 }
            
            }
            .user-name{
                flex: 0 0 30.7692rem;
                color:#0072ff;
                .icon-nv{
                    color:pink;
                    vertical-align:text-bottom;
                    margin:0 0.3846rem;
                }
                .icon-nan{
                    color:#0072ffa3;
                    vertical-align:text-bottom;
                    margin:0 0.3846rem;
                }
            }
            .desc{
                flex:1;
                text-align:right;
               
            }
            
            &:hover{
                background:${style["hover-color"]}!important;
            }
        }
`