import React, { Component } from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'
import $ from 'jquery'
import '../css/pInfo.css'

class Pinfo extends Component {

   t=()=> {
    $('.box3').fadeIn()
    setTimeout(()=> {
           $('.box3').fadeOut()
       } ,2000)
}

    back=()=>{
        this.props.history.goBack()
    }
    pI=() => {
        this.props.history.push("/phone")
    }
    render() {
        return (
            <div>
              <div className="header">
                <div className="back" onClick={this.back}><img src={require("../images/back.png")} alt=""/></div>
                <span className="title">个人信息设置</span>
                <div className="cog"><a href="pInfo.html"><i className="fa fa-skyatlas fa-fw"></i></a></div>
              </div>
              <div style={{height: 20+'px'}}></div>
              <div className="items">
                <div className="labels">用户头像</div>
                <div className="arrows"><img src={require("../images/avatar.png")} alt="" width="40"/><i className="fa fa-angle-right fa-2x"></i></div>
              </div>
              <div className="items">
                <div className="labels">用户名</div>
                <div className="arrows" onClick={this.t}>avatar123321</div>
              </div>
              <div className="items" onClick={this.pI}>
                  <div className="labels">手机号</div>
                  <div className="arrows"><span>183****5260</span>&nbsp;&nbsp;<i className="fa fa-angle-right fa-2x"></i></div>
              </div>
              <div className="items">
                  <div className="labels">收货地址</div>
                  <div className="arrows"><i className="fa fa-angle-right fa-2x"></i></div>
              </div>
              <div className="box3">用户名作为登录名不可修改^*^</div>
            </div>
        );
    }
}

export default Pinfo;