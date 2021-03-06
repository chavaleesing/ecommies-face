import React, { Component } from 'react'
// import { Route } from 'react-router-dom';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom'

import Header from './components/header'
import Home from './pages/home'
import Login from './pages/login'
import Register from './pages/register'
import Detail from './pages/productDetail'
import MyShop from './pages/myShop'
import newItem from './pages/newItem'


const AppRoutes = () => {
  return (
    <BrowserRouter>
      <React.Fragment>
        <Header />
        <Switch>
          <Route exact path={'/'} render={() => { return <Redirect to={'/home'} /> }} />
          <Route path="/home" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/productdetail" component={Detail} />
          <Route path="/myshop" component={MyShop} />
          <Route path="/newitem" component={newItem} />
        </Switch>
      </React.Fragment>
    </BrowserRouter>
  )
}

export default AppRoutes