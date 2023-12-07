import logo from './logo.svg';
import './App.css';
import Product from './Product';
import Carts from './Carts';
import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar1";
import { Header } from './components/Header';
import "bootstrap";
import Footer from './components/Footer';
import { useState } from 'react';
import { Productlist } from './components/Productlist';


function App() {
   
  const [cart, setCart] = useState([]) ;
  
  let handleAddtoCart = (planName) => {
    setCart([...cart,planName.id])
  }
  return (
    <div className="App">
      <Router>
         <Navbar cart={cart} />
        <Routes>
            <Route path="/home" element={<div> 
              <Header></Header>
      <section className="py-5">
            <div className="container px-4 px-lg-5 mt-5">
                <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                 {
                 Productlist.map((detail,index) => {
                  return<Product details={detail} key={index} handleAddtoCart={handleAddtoCart} ></Product>
                 })
                }
                 
              </div>
      </div> 
    </section>
              <footer className="py-5 bg-dark">
              <Footer/>
              </footer>
            </div>}  />
          <Route path="/cart" element={<Carts  cart={cart} />} />
        </Routes>
      </Router>
      
    </div>
   
  );
}

export default App;
