import React, { Children } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

import {createBrowserRoute,RouterProvider,Route} from 'react-router-dom'

const router = createBrowserRoute([
  {
    element: <App/>,
    children:[
      {
        path:"/",
      },
      {
        path:"/sobre",
      },
      {
        path:"/portifolio",
      },
      {
        path:"/contato",
      },
    ],
  }

])




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
