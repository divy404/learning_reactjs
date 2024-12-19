import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './components/header/header';
import Footer from './components/footer/footer';

function Layout() { // Changed to PascalCase
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default Layout;

