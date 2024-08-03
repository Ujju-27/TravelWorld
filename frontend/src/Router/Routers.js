import React from 'react'
import {Routes, Route, Navigate} from 'react-router-dom'
import Home from '../pages/Home.jsx'
import Tours from '../pages/Tours.jsx'
import Tourdetails from '../pages/Tourdetails.jsx'
import Login from '../pages/Login.jsx'
import Register from '../pages/Register.jsx'
import SearchList from '../pages/SearchList.jsx'
import About from '../pages/About.jsx'
import ContactUs from '../pages/ContactUs.jsx'
import ThankYou from '../pages/ThankYou.jsx'

const Routers = () => {
  return (
    <Routes>
        <Route path='/' element={<Navigate to="/home"/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/tour' element={<Tours/>}/>
        <Route path='/tour/:id' element={<Tourdetails/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/thank-you' element={<ThankYou/>}/>
        <Route path='/tour/search' element={<SearchList/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<ContactUs/>}/>
    </Routes>
  )
}

export default Routers;