import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import './index.css';
import './index.scss';

import AppRoutes from './app';

const App = () => (
  <BrowserRouter>
    <AppRoutes />
  </BrowserRouter>
)

ReactDOM.render(<App/>, document.getElementById('root'))
