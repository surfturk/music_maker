import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { BrowserRouter as Router } from 'react-router-dom'
import { ThemeProvider } from '@material-ui/core/styles'
import { Button, Typography } from '@material-ui/core'
import theme from './components/theme'


import App from './components/App'
import { rootReducer } from './reducers/rootReducer'

const store = createStore(
    rootReducer,
     composeWithDevTools(applyMiddleware(thunk))
     )



 ReactDOM.render(
     <Provider store={store}>
         <Router>
         <ThemeProvider theme={theme}>
          <App/> 
          </ThemeProvider>
         </Router>
     </Provider>,
     document.getElementById('root')
 )    