import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { RouterProvider } from 'react-router-dom'
import myCreatedRoute from './Route/Route.jsx'
import UserProvider from './Context/UserProvider'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UserProvider>
      <RouterProvider router={myCreatedRoute}/>
    </UserProvider>
   
  </React.StrictMode>,
)
