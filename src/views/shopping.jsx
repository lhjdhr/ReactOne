  import React, { Component } from 'react'
  import {Switch, Route, Redirect} from 'react-router-dom'

  import '../css/shopping.css'
 import '../css/module.css'
 import '../css/base.css'

  class Shopping extends Component {
    render() {
      return (
       <div  className="hom">
         <div className="header">
           <div className="back"><a href="javascript:history.go(-1)"><img src={require("../images/back.png")} alt=""/></a></div>
           <span className="title">我的购物车</span>
         </div>
         <div className="shopping">

           <div className="shop-group-item">
             <div className="shop-name">
               <input type="checkbox" className="check goods-check shopCheck"/>
                 <h4><a href="#">电商平台</a></h4>
                 <div className="coupons"><span>领券</span><em>|</em><span>编辑</span></div>
             </div>
             <ul>
               <li>
                 <div className="shop-info">
                   <input type="checkbox" className="check goods-check goodsCheck"/>
                     <div className="shop-info-img"><a href="#"><img src={require("../images/shopping-0.jpg")} /></a></div>
                     <div className="shop-info-text">
                       <h4>航椒4号,商品性好，味辣，含维生素C 122毫克/100克</h4>
                       <div className="shop-brief"><span>重量:3.3kg</span><span></span><span></span></div>
                       <div className="shop-price">
                         <div className="shop-pices">¥<b className="price">22.00</b></div>
                         <div className="shop-arithmetic">
                           <a href="javascript:;" className="minus">-</a>
                           <span className="num" >1</span>
                           <a href="javascript:;" className="plus">+</a>
                         </div>
                       </div>
                     </div>
                 </div>
               </li>
               <li>
               <div className="shop-info">
                 <input type="checkbox" className="check goods-check goodsCheck"/>
                   <div className="shop-info-img"><a href="#"><img src={require("../images/shopping-2.jpg")} /></a></div>
                   <div className="shop-info-text">
                     <h4>红背菜，中国传统的山野菜，别名：红菜、补血菜（台湾）、木耳菜、血皮菜等</h4>
                     <div className="shop-brief"><span>重量:3.3kg</span><span> </span><span> </span></div>
                     <div className="shop-price">
                       <div className="shop-pices">¥<b className="price">10.00</b></div>
                       <div className="shop-arithmetic">
                         <a href="javascript:;" className="minus">-</a>
                         <span className="num" >1</span>
                         <a href="javascript:;" className="plus">+</a>
                       </div>
                     </div>
                   </div>
               </div>
             </li>
             <li>
               <div className="shop-info">
                 <input type="checkbox" className="check goods-check goodsCheck"/>
                   <div className="shop-info-img"><a href="#"><img src={require("../images/shopping-1.jpg")} /></a></div>
                   <div className="shop-info-text">
                     <h4>西红柿，富含丰富的维生素C</h4>
                     <div className="shop-brief"><span>重量:2kg</span></div>
                     <div className="shop-price">
                       <div className="shop-pices">¥<b className="price">20.00</b></div>
                       <div className="shop-arithmetic">
                         <a href="javascript:;" className="minus">-</a>
                         <span className="num" >1</span>
                         <a href="javascript:;" className="plus">+</a>
                       </div>
                     </div>
                   </div>
               </div>
             </li>
           </ul>
           <div className="shopPrice">本店总计：¥<span className="shop-total-amount ShopTotal">0.00</span></div>
         </div>
       </div>

      <div className="payment-bar">
        <div className="all-checkbox"><input type="checkbox" className="check goods-check" id="AllCheck"/>全选</div>
        <div className="shop-total">
          <strong>总价：<i className="total" id="AllTotal">0.00</i></strong>
        </div>
        <a href="#" className="settlement">结算</a>
      </div>
       </div>
      );
    }
  }

  export default Shopping;