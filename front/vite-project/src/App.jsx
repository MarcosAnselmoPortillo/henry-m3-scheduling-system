import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './views/Home'
import Appointments from './views/Appointments'
import About from './views/About'
import Contact from './views/Contact'
import Login from './views/Login'
import NavbarComponent from './components/Navbar.component'

const App = () => {
  return (
    <div>
      <NavbarComponent />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/appointments" element={<Appointments />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  )
}

export default App