import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { provider } from 'react-redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'



const store = createStore(
    rootReducer,
     composeWithDevTools(applyMiddleware(thunk))
     )


 ReactDOM.render(
     <Provider store={store}>
         <App/> 
     </Provider>,
     document.getElementById('root')
 )    