import React from 'react'
import ReactDOM from 'react-dom'
import './assets/css/reset.css'
import { HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import App from './App'
import store from './store/index'

ReactDOM.render(
  <HashRouter>
    <Provider store={ store }>
      <App />
    </Provider>
  </HashRouter>,
  document.getElementById('root')
)
