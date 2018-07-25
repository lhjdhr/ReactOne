import React from 'react'
import {Route, Switch, Redirect} from 'react-router-dom'
import MyNavLink from './my-nav-link'

import Manage from '../views/manage'
import Order from '../views/order'
import Shopping from '../views/shopping'
import Person from '../views/person'
import Pinfo from '../views/pInfo'
import Phone from '../views/phone'
import Home from '../views/home'

export default class App extends React.Component {

  render() {
    return (
      <div>
        <div className="containe">
            {/*可切换的路由组件*/}
            <Switch>
                <Route path='/home' component={Home}/>
                <Route path='/manage' component={Manage}/>
                <Route path='/order' component={Order}/>
                <Route path='/shopping' component={Shopping}/>
                <Route path='/person' component={Person}/>
                <Route path='/pInfo' component={Pinfo}/>
                <Route path='/phone' component={Phone}/>
                <Redirect to='/home'/>
            </Switch>
        </div>
        <div className="footer">
          <ul>
            <li><MyNavLink to='/home'><i className="fa fa-home fa-fw"></i><p>首页</p></MyNavLink></li>
              <li><MyNavLink to='/manage'><i className="fa fa-institution (alias) fa-fw"></i><p>宝贝管理</p></MyNavLink></li>
              <li><MyNavLink to='/order'><i className="fa fa-institution (alias) fa-fw"></i><p>工作台</p></MyNavLink></li>
            <li><MyNavLink to='/shopping'><i className="fa fa-shopping-cart fa-fw"></i><p>购物车</p></MyNavLink> </li>
            <li><MyNavLink to='/person'><i className="fa fa-user-o fa-fw"></i><p>个人中心</p></MyNavLink> </li>
          </ul>
        </div>
      </div>
    )
  }
}
