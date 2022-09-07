import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'
import rootReducer from './reducers'
import App from './App'

// const store = configureStore(rootReducer);
render(
  // <Provider store={store}>
    <App />,
  // </Provider>,
  document.getElementById('root')
)
