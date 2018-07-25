  import React, { Component } from 'react'
  import {Switch, Route, Redirect} from 'react-router-dom'

import  '../css/person.css'

  class Person extends Component {
   constructor (props){
     super(props)
   }

      pI=() => {
          this.props.history.push("/pInfo")
      }
    back=()=>{
        this.props.history.goBack()
    }

    render() {
            return (
       <div>
         <div className="header">
           <div className="back" onClick={this.back}> <img src={require("../images/back.png")} alt=""/> </div>
           <span className="title">个人信息</span>
           <div className="cog" onClick={this.pI}><i class="fa fa-gear (alias) fa-fw"></i></div>
         </div>
         <div className="vipcenter">
           <div className="vipheader">
             <a href="userinfo.html">
               <div className="touxiang"><a href="pInfo.html"><img src={require("../images/avatar.png")} alt=""/></a></div>
               <div className="name">阿凡达</div>
               <div className="gztt">[普通会员]</div>
               <div className="yue"> <p>余额</p><strong style={{fontSize: 16}}>0.00</strong></div>
               <div className="jifen"><p>积分</p><strong style={{fontSize: 16}}>1200</strong></div>
             </a>
           </div>
           <div className="vipsan">
             <div className="col-xs-3 text-center"><a ><i class="fa fa-vcard-o (alias) fa-2x"></i><p>待付款</p></a></div>
             <div className="col-xs-3 text-center"><a ><i class="fa fa-paper-plane-o fa-2x"></i><p>待发货</p></a></div>
             <div className="col-xs-3 text-center"><a ><i class="fa fa-truck fa-2x"></i><p>待收货</p></a></div>
             <div className="col-xs-3 text-center"><a ><i class="fa fa-plug fa-2x"></i><p>退换货</p></a></div>
           </div>
           <ul className="vipul">
             <li>
               <a href="work.html">
                 <div className="icc"><i className="fa fa-clipboard fa-2x"></i></div>
                 <div className="lzz">我的订单</div>
                 <div className="rizi"><i className="fa fa-angle-right fa-2x"></i></div>
               </a>
             </li>
             <li>
               <a href="shopping.html">
                 <div className="icc"><i className="fa fa-cart-plus  fa-2x"></i></div>
                 <div className="lzz">我的购物车</div>
                 <div className="rizi"><i className="fa fa-angle-right fa-2x"></i></div>
               </a>
             </li>
             <li>
               <a href="dizhi.html">
                 <div className="icc"><i className="fa fa-bookmark fa-2x"></i></div>
                 <div className="lzz">我的优惠券</div>
                 <div className="rizi"><i className="fa fa-angle-right fa-2x"></i></div>
               </a>
             </li>
             <li>
               <a href="ddcenter.html">
                 <div className="icc"><i className="fa fa-vine fa-2x"></i></div>
                 <div className="lzz">我的关注</div>
                 <div className="rizi"><i className="fa fa-angle-right fa-2x"></i></div>
               </a>
             </li>
             <li>
               <a href="userinfo.html">
                 <div className="icc"><i className="fa fa-renren fa-2x"></i></div>
                 <div className="lzz">我的足迹</div>
                 <div v="rizi"><i className="fa fa-angle-right fa-2x"></i></div>
               </a>
             </li>
           </ul>
         </div>
       </div>
      );
    }
  }

  export default Person;