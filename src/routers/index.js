/*
 * @Description: 路由配置
 * @Author: cn
 * @Date: 2019-10-02 15:22:43
 * @LastEditTime: 2019-11-24 10:20:34
 * @LastEditors: cn
 */
import React ,{lazy,Suspense}from 'react';
import {Redirect} from 'react-router-dom';

const HomeComponent = lazy(()=>import("../pages/home"));
const Home = (props)=>{
   return (
       <Suspense fallback={null}>
         <HomeComponent {...props}></HomeComponent>
       </Suspense>
   )
}

const RecommendComponent = lazy(()=>import("../pages/recommend"));
const Recommend = (props)=>{
    return (
        <Suspense fallback={null}>
          <RecommendComponent {...props}></RecommendComponent>
        </Suspense>
    )
 }

 const SingersComponent =lazy(()=>import("../pages/singers"));
 const Singers =(props)=>{
     return (
         <Suspense fallback={null}>
             <SingersComponent {...props}></SingersComponent>
         </Suspense>
     )
 }

 const SingerComponent =lazy(()=>import("../pages/singer"));
 const Singer =(props)=>{
     return (
         <Suspense fallback={null}>
             <SingerComponent {...props}></SingerComponent>
         </Suspense>
     )
 }


 const RankComponent =lazy(()=>import("../pages/rank"));
 const Rank =(props)=>{
     return (
         <Suspense fallback={null}>
             <RankComponent {...props}></RankComponent>
         </Suspense>
     )
 }
 const PlayListComponent = lazy(()=>import("../pages/playlist"));
 const PlayList =(props)=>{
     return (
         <Suspense fallback={null}>
             <PlayListComponent {...props}></PlayListComponent>
         </Suspense>
     )
 }


const PlayListDetailComponent = lazy(()=>import("../pages/playList-detail"));
const PlayListDetail =(props)=>{
    return (
        <Suspense fallback={null}>
            <PlayListDetailComponent {...props}></PlayListDetailComponent>
        </Suspense>
    )
}
const AlbumDetailComponent = lazy(()=>import("../pages/album-detail"));
const AlbumDetail =(props)=>{
    return (
        <Suspense fallback={null}>
            <AlbumDetailComponent {...props}></AlbumDetailComponent>
        </Suspense>
    )
}

const NewMusicComponent = lazy(()=>import("../pages/new-music"));
const NewMusic =(props)=>{
    return (
        <Suspense fallback={null}>
            <NewMusicComponent {...props}></NewMusicComponent>
        </Suspense>
    )
}

const SearchComponent = lazy(()=>import("../pages/search"));
const Search =(props)=>{
    return (
        <Suspense fallback={null}>
            <SearchComponent {...props}></SearchComponent>
        </Suspense>
    )
}
const MvComponent = lazy(()=>import("../pages/mvs"));
const MV =(props)=>{
    return (
        <Suspense fallback={null}>
            <MvComponent {...props}></MvComponent>
        </Suspense>
    )
}
const MyLikeComponent = lazy(()=>import("../pages/mylike-detail"));
const MyLike =(props)=>{
    return (
        <Suspense fallback={null}>
            <MyLikeComponent {...props}></MyLikeComponent>
        </Suspense>
    )
}

export const routers = [
    {
        component: Home,
        path: '/',
        routes: [
            {
                path: "/",
                exact: true,
                render: () => {
                    return <Redirect to="/recommend"></Redirect>
                }
            },
            {
                path: '/recommend',
                exact: true,
                component: Recommend,
                routes: [
                //    {
                //     path: '/recommend/:id',
                //     component: AlbumDetail,
                //    }
                ]
            },
            {
                path: '/recommend/:id',
                exact: true,
                component: PlayListDetail,
            },
            {
               path:'/album/:id',
               component:AlbumDetail 
            },
            {
                path:'/mylike/:id',
                component:MyLike 
                
            },
            {
                path: '/singers',
                component: Singers,
                exact: true,
                routes: [
                    // {
                    //     path: '/singers/:id',
                    //     component: Singer,
                    // }
                ]
            },
            {
                path: '/singers/:id',
                exact: true,
                component: Singer,
            },
            {
                path: '/rank',
                component: Rank,
                routes: [

                ]
            },
            {
                path: '/music',
                component: PlayList,
                routes: [

                ]
            },
            {
                path: '/newmusic',
                component: NewMusic,
                routes: [

                ]
            },
            {
                path: '/search/:keywords',
                component: Search,
                routes: [

                ]
            },
            {
                path: '/mv',
                component: MV,
                routes: [

                ]
            },
        ]
    }
] 