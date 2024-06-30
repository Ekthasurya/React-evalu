import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './Page/Home'
import Product from './Page/Product'
import ProductDetail from './Page/ProductDetail'
import Cart from './Page/Cart'
import Login from './Page/Login'
import Navbar from './Component/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/product' element={<Product/>} />
        <Route path='/product/:Id' element={<ProductDetail/>} />
        <Route path='/cart' element={<Cart/>} />
        <Route path='/login' element={<Login/>} />

      </Routes>
    </>
  )
}

export default App
