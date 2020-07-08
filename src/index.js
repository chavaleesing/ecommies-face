import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import './index.css';

import AppRoutes from './routes';

const App = () => (
  <BrowserRouter>
    <AppRoutes />
  </BrowserRouter>
)

ReactDOM.render(<App/>, document.getElementById('root'))
