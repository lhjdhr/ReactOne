import React from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'
import MyNavLink from '../components/my-nav-link'

import '../css/bootstrap.min.css'
import '../css/index.css'

export default function Home() {
  return (
    <div>
        <div idS="myCarousel" data-ride="carousel" className="carousel slide">
            <ol className="carousel-indicators">
                <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
                <li data-target="#myCarousel" data-slide-to="1"></li>
                <li data-target="#myCarousel" data-slide-to="2"></li>
            </ol>
            <div className="carousel-inner">
                <div className="item active">
                    <img src={require("../image/1.jpg")} alt="First slide" className="sl"/>
                </div>
                <div className="item">
                    <img src={require("../image/2.png")} alt="Second slide" className="sl"/>
                </div>
                <div className="item">
                    <img src={require("../image/3.png")} alt="Third slide" className="sl"/>
                </div>
            </div>
        </div>
        <div className="logo"><img src={require("../images/logo1.png")} alt=""/></div>
        <div className="search">
            <input id="seac" type="text" placeholder="请输入商品"/>
                <i className="fa fa-search"></i>
        </div>
        <div className="enter"><a href="login.html">登录</a> | <a href="register.html">注册</a></div>

        <div className="pic">
            <img src={require("../image/4.png")} width="100%" height="75px" style={{marginTop: 5+'px'}}/>
        </div>

        <div className="list">
            <ul className="l_ul">
                <li>
                    <div className="box2">
                        <img src={require("../image/17.png")} alt="" width="100%" height="100%"/>
                    </div>
                    <span>休闲</span>
                </li>
                <li>
                    <div className="box2">
                        <img src={require("../image/18.png")} alt="" width="100%" height="100%"/>
                    </div>
                    <span>肉类</span>
                </li>
                <li>
                    <div className="box2">
                        <img src={require("../image/19.png")} alt="" width="100%" height="100%"/>
                    </div>
                    <span>饮品</span>
                </li>
                <li>
                    <div className="box2">
                        <img src={require("../image/20.png")} alt="" width="100%" height="100%"/>
                    </div>
                    <span>水果</span>
                </li>
            </ul>
            <ul className="l_ul">
                <li>
                    <div className="box2">
                        <img src={require("../image/21.png")} alt="" width="100%" height="100%"/>
                    </div>
                    <span>蛋类</span>
                </li>
                <li>
                    <div className="box2">
                        <img src={require("../image/22.png")} alt="" width="100%" height="100%"/>
                    </div>
                    <span>豆类</span>
                </li>
                <li>
                    <div className="box2">
                        <img src={require("../image/24.png")} alt="" style={{width:100+'%',height:100+'%'}}/>
                    </div>
                    <span>全麦</span>
                </li>
                <li>
                    <div className="box2">
                        <img src={require("../image/24.png")} alt="" style={{width:100+'%',height:100+'%'}}/>
                    </div>
                    <span>花木</span>
                </li>
            </ul>
        </div>
        <div className="news">
            <div className="n_l_box">
                <img src={require("../image/10.png")} width="100%" height="100%"/>
            </div>
            <div className="n_r_box">
       <span className="gg">
           <span className="aa">&#9758;</span>
           <span style={{fontSize: 10+'px'}}>买正宗的土鸡蛋去哪儿？快看过来</span>
       </span>
                <span className="gg">
            <span className="mm">&#9758;</span>
           <span style={{fontSize: 10}}>听说这里的产品全部都是无公害，纯天然</span>
       </span>
            </div>
        </div>
        <div className="product">
            <div className="p_box" style={{height: 80}}>
                <img src={require("../image/5.png")} width="100%" height="100%"/>
            </div>
            <div className="p_box">
                <div className="in_box">
                    <div className="in_ner_box">
                        <img src={require("../image/6.png")}/>
                    </div>
                    <div className="in_ner_box">
                        <a href="product.html"> <img src={require("../image/7.png")}/></a>
                    </div>
                </div>
                <div className="in_box">
                    <div className="in_ner_box">
                        <img src={require("../image/8.png")}/>
                    </div>
                    <div className="in_ner_box">
                        <img src={require("../image/9.png")}/>
                    </div>
                </div>
            </div>
        </div>
        <div className="icon"></div>
        <div className="display">
            <div className="d_p_box">
                <div className="d_i_box">
                    <p className="font0">城市专享</p>
                    <p className="font1">城市专享，买就送到家</p>
                    <a href="#"><img src={require("../image/25.png")} width="40px" height="40px"/></a>
                </div>
                <div className="d_i_box">
                    <p className="font0">大聚惠</p>
                    <p className="font1">现摘水果，全部大优惠</p>
                    <a href="#"><img src={require("../image/26.png")} width="40px" height="40px"/></a>
                    <a href="#"><img src={require("../image/28.png")} width="40px" height="40px"/></a>
                </div>
            </div>
            <div className="d_p_box">
                <div className="d_i_box">
                    <p className="font0">领劵中心</p>
                    <p className="font1">买就送，满199减100</p>
                    <a href="#"><img src={require("../image/26.png")} width="40px" height="40px"/></a>
                    <a href="#"><img src={require("../image/25.png")} width="40px" height="40px"/></a>
                </div>
                <div className="d_i_box">
                    <p className="font0">国际派送</p>
                    <p className="font1">保证无公害，全部新鲜</p>
                    <a href="#"><img src={require("../image/28.png")} width="40px" height="40px"/></a>
                    <a href="#"><img src={require("../image/27.png")} width="40px" height="40px"/></a>
                </div>
            </div>
            <div className="d_p_box">
                <div className="d_i_box">
                    <p className="font0">全部谷类</p>
                    <p className="font1">想要的谷类应有尽有</p>
                    <a href="#"><img src={require("../image/27.png")} width="40px" height="40px"/></a>
                </div>
                <div className="d_i_box">
                    <p className="font0">0元试用</p>
                    <p className="font1">免费使用</p>
                    <a href="#"><img src={require("../image/25.png")} width="40px" height="40px"/></a>
                </div>
            </div>
        </div>
        <div className="p_list">
            <div className="title">
                <p>全部商品</p>
            </div>
            <div className="p-box">
                <ul className="ul1">
                    <li>
                        <img src={require("../image/29.png")} alt="" width="100%" height="150px"/>
                            <p className="font2">有机蔬菜无农药</p>
                            <span className="font3">新乡</span><br/>
                            <span className="font4">￥25.9</span><span className="font5">4282人付款</span>
                    </li>
                    <li>
                        <img src={require("../image/13.png")} alt="" width="100%" height="150px"/>
                            <p className="font2">有机蔬菜无农药</p>
                            <span className="font3">新乡</span><br/>
                            <span className="font4">￥25.9</span><span className="font5">4282人付款</span>
                    </li>
                    <li>
                        <img src={require("../image/27.png")} alt="" width="100%" height="150px"/>
                            <p className="font2">有机蔬菜无农药</p>
                            <span className="font3">新乡</span><br/>
                            <span className="font4">￥25.9</span><span className="font5">4282人付款</span>
                    </li>
                    <li>
                        <img src={require("../image/16.jpg")} alt="" width="100%" height="150px"/>
                            <p className="font2">有机蔬菜无农药</p>
                            <span className="font3">新乡</span><br/>
                            <span className="font4">￥25.9</span><span className="font5">4282人付款</span>
                    </li>
                </ul>
            </div>
            <div className="p-box">
                <ul className="ul2">
                    <li>
                        <img src={require("../image/14.png")} alt="" width="100%" height="170px"/>
                            <p className="font2">有机蔬菜无农药</p>
                            <span className="font3">新乡</span><br/>
                            <span className="font4">￥25.9</span><span className="font5">4282人付款</span>
                    </li>
                    <li>
                        <img src={require("../image/3.png")} alt="" width="100%" height="170px"/>
                            <p className="font2">有机蔬菜无农药</p>
                            <span className="font3">新乡</span><br/>
                            <span className="font4">￥25.9</span><span className="font5">4282人付款</span>
                    </li>
                    <li>
                        <img src={require("../image/28.png")} alt="" width="100%" height="170px"/>
                            <p className="font2">全谷类</p>
                            <span className="font3">新乡</span><br/>
                            <span className="font4">￥25.9</span><span className="font5">4282人付款</span>
                    </li>
                    <li className="llist" id="mo">
                        <span>——</span><span>分类</span><span>——</span><br/>
                        <p className="lable">豆类</p>
                        <p className="lable">小麦</p>
                        <p className="lable">全麦</p>
                        <p className="lable">蔬菜</p>
                        <p className="lable">玉米</p>
                        <p className="lable">谷类</p>
                        <p className="lable">番茄</p>
                        <p className="lable">果类</p>
                    </li>
                </ul>
            </div>
        </div>
    </div>
  )
}