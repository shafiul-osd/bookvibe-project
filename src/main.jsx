import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import router from './Routes/Routes.jsx'
import {RouterProvider} from "react-router-dom"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
