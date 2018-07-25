  import React, { Component } from 'react'
  import {Switch, Route, Redirect} from 'react-router-dom'

 import '../css/phone.css'

  class Phone extends Component {
  back=()=>{
      this.props.history.goBack()
  }
      checkPhone=() =>{
      var phone = document.getElementById('phone').value;
      var show=document.getElementsByclassNameName('show')[0]
      if (!(/^1[34578]\d{9}$/.test(phone))) {
          show.style.display='block'
          return false;
      }
      else{
          show.style.display='none'
      }
  }
    render() {
      return (
        <div>
          <div className="header">
            <div className="back" onClick={this.back}> <img src={require("../images/back.png")} alt=""/></div>
            <span className="title">换绑手机</span>
          </div>
          <div className="tips">请输入你需要绑定的手机号</div>
          <div className="item">
            <div className="label">国家和地区</div>
            <div className="con1"> <span>中国大陆86</span> &nbsp;&nbsp;&nbsp;<i className="fa fa-angle-right fa-2x"></i> </div>
          </div>
          <div className="item">
            <div className="label">新手机号</div>
            <div className="con"><input type="text" id="phone" onBlur="this.checkPhone"/></div>
          </div>
          <div className="show">手机号码有误，请重填</div>
          <div className="row"><button>下一步</button></div>
        </div>
      );
    }
  }

  export default Phone;