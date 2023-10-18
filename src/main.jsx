import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Provider } from 'react-redux'
import {store} from "./App/store.js"
import {Route, RouterProvider, createBrowserRouter, createRoutesFromElements} from 'react-router-dom';
import Update from './Components/Update.jsx'
import Addtodo from './Components/Addtodo.jsx'


const roots= createBrowserRouter(
  createRoutesFromElements(
    <Route path='/'>
      <Route path=''element={<Addtodo/>}/>
      <Route path='update/:id' element={<Update/>}/>
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
   <RouterProvider router={roots}/>
  </Provider>
)
