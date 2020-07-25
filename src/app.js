import React, { Component } from 'react'
// import { Route } from 'react-router-dom';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom'

import Header from './components/header'
import Sidebar from './components/sidebar'
import Home from './pages/home'
import Login from './pages/login'
import Register from './pages/register'
import Detail from './pages/productDetail'


const AppRoutes = () => {
  return (
    <BrowserRouter>
      <React.Fragment>
        <div className="row-sm">
          <Header />
        </div>
        <div className="row">
          <div className="col-2">
            {/* <p>PPPP</p> */}
            <Sidebar />
          </div>
          <div className="col-10">
            <Switch>
              <Route exact path={'/'} render={() => { return <Redirect to={'/home'} /> }} />
              <Route path="/home" component={Home} />
              <Route path="/login" component={Login} />
              <Route path="/register" component={Register} />
              <Route path="/productdetail" component={Detail} />
            </Switch>
          </div>
        </div>
      </React.Fragment>
    </BrowserRouter>
  )
}


export default AppRoutes