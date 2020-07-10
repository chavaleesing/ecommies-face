import React, { Component } from 'react'
// import { Route } from 'react-router-dom';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom'

import Header from './components/header'
import Home from './pages/home'
import Login from './pages/login'
import Register from './pages/register'


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
        </Switch>
      </React.Fragment>
    </BrowserRouter>
  )
}


export default AppRoutes