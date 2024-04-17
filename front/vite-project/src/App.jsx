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
import { useNavigate } from 'react-router-dom'
import Footer from './components/Footer'
import { useSelector, useDispatch } from 'react-redux';
import { logout } from './redux-toolkit/userSlice';

const App = () => {
  const isAuthenticated = useSelector((state) => state.user.isAuthenticated);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    // Lógica para cerrar la sesión del usuario
    dispatch(logout());
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
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App