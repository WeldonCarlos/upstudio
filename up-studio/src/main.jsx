import React, { Children } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

import {createBrowserRouter,RouterProvider,Route} from 'react-router-dom'

// seção de rotas das paginas
import Home from './routes/home/Home'
import Sobre from './routes/sobre/Sobre'
import Servicos from './routes/servicos/Servicos'
import Portifolio from './routes/portifolio/Portifolio'
import Contato from './routes/contato/Contato'



const router = createBrowserRouter([
  {
    element: <App/>,
    children:[
      {
        path:"/",
        element: <Home/>,
      },
      {
        path:"/sobre",
        element:<Sobre/>,
      },
      {
        path:"/servicos",
        element: <Servicos/>,
      },
      {
        path:"/portifolio",
        element:<Portifolio/>,
      },
      {
        path:"/contato",
        element:<Contato/>,
      },
    ],
  }

])




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
