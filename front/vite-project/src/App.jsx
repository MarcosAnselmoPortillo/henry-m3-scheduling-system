import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './views/Home'
import Appointments from './views/Appointments'
import About from './views/About'
import Contact from './views/Contact'
import Login from './views/Login'
import NavbarComponent from './components/Navbar.component'
import Register from './views/Register'
import PrivateRoute from './components/PrivateRoute'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Footer from './components/Footer'

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    // Lógica para cerrar la sesión del usuario
    setIsAuthenticated(false);
    navigate('/login');
  };

  return (
    <div>
      <NavbarComponent isAuthenticated={isAuthenticated} handleLogout={handleLogout}/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/appointments" element={
            <PrivateRoute isAuthenticated={isAuthenticated}>
              <Appointments />
            </PrivateRoute>
          } />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login setIsAuthenticated={setIsAuthenticated} />} />
        <Route path="/register" element={<Register />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App