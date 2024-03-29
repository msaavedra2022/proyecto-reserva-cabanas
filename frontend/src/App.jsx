import './App.css';
import React from 'react';
import { createBrowserRouter, RouterProvider, useLoaderData } from 'react-router-dom';
import Footer from './components/Footer';
import Nav from './components/Nav';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import CabinsPage from './pages/CabinsPage';
import ContactoPage from './pages/ContactoPage';

import { BrowserRouter } from 'react-router-dom'
import Comprobante from './pages/Comprobante';
import UnconfirmedReservations from './pages/Reservas';


        
// Configuración del nuevo router personalizado
let router = createBrowserRouter([
  {
    path: '/login',
    Component: Login,
  },
  {
    path: '/register',
    Component: Register,
  },
  {
    path: '/',
    Component: Home,
  },
  {
    path: '/reservas',
    Component: CabinsPage,
  },
  {
    path: '/contacto',
    Component: ContactoPage,
  },
  // Redirección a /login si la ruta no coincide con ninguna definida
  {
    path: '(.*)',
    redirect: '/',
  },
  {
    path: '/comprobante',
    Component: Comprobante,
  },
  {
    path: '/acerca',
    Component: UnconfirmedReservations,
  }
]);

export default function App() {
  //Busca el token en el local storage, si no lo encuentra lo redirige a login
  const token = localStorage.getItem('token');
  console.log(window.location.pathname);
  if (!token && window.location.pathname == '/admin') {
    router.navigate('/login');
  }
  


  return (
    <div className='app'>
      {/* Si la ruta es login, ocultar el nav */}
      {(window.location.pathname !== '/login' && window.location.pathname !== '/register') ? <Nav /> : null}
      <RouterProvider router={router} fallbackElement={<p>Loading...</p>} />
      {(window.location.pathname !== '/login' && window.location.pathname !== '/register') ? <Footer /> : null}
    </div>
  );
}

if (import.meta.hot) {
  import.meta.hot.dispose(() => router.dispose());
}
