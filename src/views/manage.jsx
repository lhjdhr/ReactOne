  import React, { Component } from 'react'
  import {Switch, Route, Redirect} from 'react-router-dom'

  import '../css/manger.css'
  class Manage extends Component {
    render() {
      return (
       <div>
         <div className="header">
           <div className="back"><a href="javascript:history.go(-1)"><img src={require("../images/back.png")} alt=""/></a></div>
           <span className="title">我的宝贝</span>
           <div className="cog"><i className="fa fa-skyatlas fa-fw" onClick="show2()"></i></div>
         </div>
         <div id="box">
           <div className="m-box n0">
             <div className="inner-b-left">
               <img src={require("../image/27.png")} alt=""/>
             </div>
             <div className="inner-b-right">
               <p className="font1">五谷杂粮，含有丰富的营养成分</p>
               <span className="font22">价格:¥35.9</span>
               <span className="font33">河南新乡</span><br/>
               <p className="pic2">
                 <img id="del0" src={require("../image/del.png")} alt="" width="15px" height="15px"/>
               </p>
             </div>
           </div>
           {/*<!--2-->*/}
           <div className="m-box n1">
             <div className="inner-b-left">
               <img src={require("../image/2.png")} alt=""/>
             </div>
             <div className="inner-b-right">
               <p className="font1">慧农有机绿豆 非转基因 纯天然</p>
               <span className="font22">价格：¥25.9</span>
               <span className="font33">河南新乡</span><br/>
               <p className="pic"><img id="del1" src={require("../image/del.png")} alt="" width="15px" height="15px"/></p>
             </div>
           </div>
           {/*<!--3-->*/}
           <div className="m-box n2">
             <div className="inner-b-left">
               <img src={require("../image/13.png")} alt=""/>
             </div>
             <div className="inner-b-right">
               <p className="font1">慧农有机蔬菜 无农药 纯天然</p>
               <span className="font22">价格:¥25.9</span>
               <span className="font33">河南</span><br/>
               <p className="pic"><img id="del2" src={require("../image/del.png")} alt="" width="15px" height="15px"/></p>
             </div>
           </div>
         </div>
         {/*<!--管理-->*/}
         <div className="div1">
           <div className="arrow"></div>
           <div className="box">
             <div className="item2">
               <i className="fa fa-home"></i>
               <div className="nei">首页</div>
             </div>
             <div className="item2">
               <i className="fa fa-plus"></i>
               <a href=""><div className="nei">添加</div></a>
             </div>
             <div className="item2">
               <i className="fa fa-commenting-o"></i>
               <div className="nei">消息</div>
             </div>
           </div>
         </div>
       </div>
      );
    }
  }

  export default Manage;