import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
import { Global, theme } from './Styles/Theme'
import { ThemeProvider } from 'styled-components'
import { store } from './Redux/Store'
import { Provider } from 'react-redux'

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <Provider store={store}>
      <Global />
      <App />
    </Provider>
  </ThemeProvider>,
  document.getElementById('root')
);
