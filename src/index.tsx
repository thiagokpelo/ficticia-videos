import { CssBaseline } from '@material-ui/core';
import * as React from 'react'
import * as ReactDOM from 'react-dom'
import App from './App'
import { Root } from './components';


ReactDOM.render(
  <Root>
    <CssBaseline />
    <App />
  </Root>,
  document.getElementById('root') as HTMLElement
)
