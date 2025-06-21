import React, { Profiler } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import UserLayout from './components/Layout/UserLayout'
import Home from './pages/Home' // Adjust the path as needed
import {Toaster} from "sonner"
import Login from './pages/Login'; // Adjust path based on your folder structure
import Register from './pages/Register'
import Profile from './pages/Profile'
import CollectionPage from './pages/CollectionPage'
import ProductDetails from './components/Products/ProductDetails'
import CheckOut from './components/Cart/CheckOut'


const App = () => { 
  return (
    <BrowserRouter
    future= {{v7_startTransition: true, v7_relativeSplatePath: true}}
    >
    <Toaster position="top-right" />
      <Routes>
        {/* User Layout Routes */}
        <Route path="/" element={<UserLayout />}>
          <Route index element={<Home />} />
          <Route path="login" element={<Login/>}/>
                    <Route path="register" element={<Register/>}/>
                    <Route path="profile" element={<Profile/>}/>
                    <Route path="collections/:collection" element={<CollectionPage/>}/>
                    <Route path="product/:id" element={<ProductDetails />} />
                    <Route path="checkout" element={<CheckOut />} />


        </Route>

        {/* Admin Layout Routes (example placeholder) */}
        {/* <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<AdminDashboard />} />
        </Route> */}
      </Routes>
    </BrowserRouter>
  )
}

export default App
