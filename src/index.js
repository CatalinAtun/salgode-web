import React from 'react'
import ReactDOM from 'react-dom'

import { Provider } from 'react-redux'
import { store } from './redux/store'

import 'bulma/bulma.sass'
import 'bulma-helpers/bulma-helpers.sass'

import './styles/index.css'
import './styles/main.scss'
import App from './App'

const rootElement = document.getElementById('root')
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
)
