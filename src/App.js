import React, { useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import './App.css'
import AboutUs from './components/AboutUs/AboutUs';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Header from './components/HeaderComponent/Header';
import Home from './components/Home';
import Product from './components/Products/Product';

function App() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="App">
       <Header/>
       <Routes>
        <Route exact path='/' element={<Home/>} />
        <Route exact path='/products' element={<Product/>} />
        <Route exact path='/about' element={<AboutUs/>} />
        <Route exact path='/contact' element={<Contact/>} />
       </Routes>
       <Footer/>
    </div>
  );
}

export default App;
