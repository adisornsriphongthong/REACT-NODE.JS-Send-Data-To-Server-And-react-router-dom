import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route, Routes } from 'react-router-dom'

import Content from './Content/Content'

import Home from './Content/Home'
import Contact from './Content/Contact'
import Help from './Content/Help'

import Adisorn from './Content/adisorn'
import Jackson from './Content/jackson'

function App() {
  const [count, setCount] = useState(0)

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Content/>}>
        <Route index element={<Home/>}/>
        <Route path='contact' element={<Contact/>}>
          <Route path='adisorn' element={<Adisorn/>}></Route>
          <Route path='jackson' element={<Jackson/>}></Route>
        </Route>

        <Route path='help' element={<Help/>} />
      </Route>
    )
  )

  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  )
}

export default App
