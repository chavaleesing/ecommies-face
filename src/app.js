import React, { Component } from 'react'
// import { Route } from 'react-router-dom';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom'

import Login from './components/login'
import Register from './components/register'
import Shop from './components/shop'
import Header from './components/header'
import Home from './pages/home'

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <React.Fragment>
        <Header />
        <Switch>
          <Route exact path={'/'} render={() => {
            return <Redirect to={'/home'} />
          }} />
          <Route path="/home" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/shop" component={Shop} />
        </Switch>
      </React.Fragment>
    </BrowserRouter>
  )
}


export default AppRoutes