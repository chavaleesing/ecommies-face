import React, { Component } from 'react'
// import { Route } from 'react-router-dom';
import {BrowserRouter, Route} from 'react-router-dom'

import Login from './components/login'
import Register from './components/register'

// class AppRoutes extends Component {
//   render() {
//     return (
//       <div className="App container">
//           <Route path="/login" component={Login} />
//           <Route path="/register" component={Register} />
//       </div>
//     )
//   }
// }

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
    </BrowserRouter>
  )
}


export default AppRoutes