import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import NotFound from './pages/NotFound'
import Home from './pages/Home'
import BusDetailPage from './pages/BusDetailPage'


const Routing = () => {
  return (
<BrowserRouter>
<Routes>
    <Route exact path='/' element={<Home/>}>Home</Route>
    <Route exact path='/:id' element={<BusDetailPage/>}>Bus Layout</Route>
    <Route  path='*' element={<NotFound/>}>NotFound</Route>
</Routes>
</BrowserRouter>
  )
}

export default Routing