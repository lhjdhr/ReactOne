import React from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'

//import '//netdna.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css'
import '../css/work.css'

import avatar from '..//images/avatar.png'
import order from '../images/order.png'
import work from '../images/work.png'
import shangpin from '../images/shangpin.png'
import check from '../images/check.png'


export default function Order() {
    return (
        <div>
          <div className="heade">
            <div className="back"><a href="javascript:history.go(-1)"><img src={require("../images/back.png")} alt=""/></a></div>
            <span className="title">订单中心</span>
          </div>
          <div className="header2">
            <div className="avatarImg"><img src={avatar} width="20"/></div>
            <div className="avatarName">
              <p style={{padding:0,margin: 0 }}>512任意购</p>
              <p>阿凡达</p>
            </div>
          </div>
          <div className="addDate">
            <i className=" fa fa-plus-square fa-fw"></i>
            <span>添加数据</span>
          </div>
          <div className="dataList">
            <div className="section">
              <div className="head">今日总访客</div>
              <div className="number">137</div>
            </div>
            <div className="section">
              <div className="head">今月总访客</div>
              <div className="number">4050</div>
            </div>
            <div className="section">
              <div className="head">今日总成交额</div>
              <div className="number">213</div>
            </div>
            <div className="section">
              <div className="head">今日订单数</div>
              <div className="number">21</div>
            </div>
            <div className="manageList">
              <div className="manage">
                <div className="manageImg"><img src={order}/></div>
                <p>查看订单</p>
              </div>
              <div className="manage">
                <div className="manageImg"><img src={work}/></div>
                <p>任务中心</p>
              </div>
              <div className="manage">
                <div className="manageImg"><img src={check}/></div>
                <p>交易管理</p>
              </div>
              <div className="manage">
                <div className="manageImg"><img src={shangpin}/></div>
                <p>商品管理</p>
              </div>
            </div>
          </div>
        </div>
    )
}
