import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {RouterProvider , createBrowserRouter} from "react-router-dom"
import './index.css'
import App from './App.jsx'
import Bag from './components/Bag.jsx'
import Shop from './components/Shop.jsx'


  const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
      children: [
        {path: "/", element:<Shop/>},


        {path:"/bag", element:<Bag/>}
      ]
    }
  ])
  createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router = {router} />
  </StrictMode>
)