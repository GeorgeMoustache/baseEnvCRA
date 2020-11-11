import React from 'react'
import ReactDOM from 'react-dom'
import store from '@store'
import { Provider } from 'react-redux'
import '@assets/styles/reset.css'
import { ThemeProvider } from 'styled-components'
import theme from '@utils/theme'
import App from './App'
import Loading from '@components/Loading/'

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <App />
      <Loading />
    </ThemeProvider>
  </Provider>,
  document.getElementById('root'),
)
