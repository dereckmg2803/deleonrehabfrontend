import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Home from './pages/public/Home';
import About from './pages/public/About';
import Blog from './pages/public/Blog';
import Contact from './pages/public/Contact';
import Booking from './pages/public/Booking';
import Login from './pages/public/auth/Login';
import ForgotPassword from './pages/public/auth/ForgotPassword';
import Dashboard from './pages/private/Dashboard';
import { Toaster } from './components/ui/toaster';


function App() {
  const location = useLocation();

  // Rutas donde NO quieres mostrar Nav ni Footer
  const hideLayoutRoutes = ["/dashboard"];

  const hideLayout = hideLayoutRoutes.includes(location.pathname);

  return (
    <div className="App">
      {!hideLayout && <Navigation />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>



      <Toaster />
    </div>
  );
}

function AppWrapper() {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
}

export default AppWrapper;
