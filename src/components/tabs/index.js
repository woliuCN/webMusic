/*
 * @Description: Tab 组件
 * @Autor: cn
 * @Date: 2019-10-17 14:46:16
 * @LastEditors: cn
 * @LastEditTime: 2019-11-28 09:42:16
 */
import React ,{useState,forwardRef,useImperativeHandle}from 'react';
import styled from 'styled-components';
const TabContainer = styled.div`
       width:100%;
`
const TabHeader =styled.div`
       width:100%;
       border-bottom:1px solid #ddd;
       >div{
           display:inline-block;
           cursor: pointer;
           padding: 0 0.7692rem 0 3.8462rem;
           >span{
            display: inline-block;
            padding: 0.6154rem;
            &.active{
                color:#3bba7d;
                border-bottom: 3px solid #3bba7d;
            }
           }
       }
 `
const TabPanelContainer = styled.div`
`       
function TabComponent (props,ref){
    const {defaultSelect,onChangeTabPanel,children} = props;
    const [currentSelect,setCurrentSelect] = useState(defaultSelect);

    useImperativeHandle(ref,()=>({
        resetSelect:()=>{setCurrentSelect("单曲")},
    }))
    //渲染tab头
    const renderTabHeader = ()=>{
        let title = [];
        children.map((child)=>{
            title.push({
                label:child.props.label
            });
        });
        return title.map((item)=>{
           return (
            <div key={'header-'+item.label}
                onClick={()=>{setCurrentSelect(item.label);onChangeTabPanel&&onChangeTabPanel(item.label)}}
             ><span className={item.label==currentSelect?'active':''}>{item.label}</span></div>
           )
        })
    }
    //渲染内容
    const renderTabContent = ()=>{
        return children.map((child)=>{
            return <div key={'content-'+child.props.label} style={{display:child.props.label==currentSelect?'block':'none'}}>{child}</div>
        });
    }
   return (
       <TabContainer>
           <TabHeader>
             {renderTabHeader()}
           </TabHeader>
           {renderTabContent()}
       </TabContainer>
   )
}

function TabPanel (props){
      return (
        <TabPanelContainer>
            {props.children}
        </TabPanelContainer>
      ) 
}
const Tab = forwardRef(TabComponent);
export {
    Tab,
    TabPanel
}