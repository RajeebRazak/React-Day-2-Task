import logo from './logo.svg';
import './App.css';
import Product from './Product';
import Carts from './Carts';
import {BrowserRouter as Router, Routes,Route } from "react-router-dom";
import { Navbar } from "./components/Navbar1";
import { Header } from './components/Header';
import "bootstrap";
import Footer from './components/Footer';


function App() {

  const PlanDetails = [{
    id:1,
    planName: "Ipone 15",
    price: "$799",
    image: 'https://m.media-amazon.com/images/I/71657TiFeHL._SX679_.jpg'
  },
  {
    id:2,
    planName: "Apple Watch Series 7",
    price: "$199",
    image: 'https://m.media-amazon.com/images/I/71gktkb97iL._SY695_.jpg'
  },
  {
    id:3,
    planName: "AirPods Max",
    price: "$129",
    image: 'https://m.media-amazon.com/images/I/2110TEYPKnL._SX300_SY300_QL70_FMwebp_.jpg'
  },
  {
    id:4,
    planName: "iMac ",
    price: "$1699",
    image: 'https://m.media-amazon.com/images/I/61Tedl8bksL._SX679_.jpg'
  },
  {
    id:5,
    planName: "Apple Pro Display XDR",
    price: "$499",
    image: 'https://m.media-amazon.com/images/I/816DD5Kg7mL._SX679_.jpg'
  },
  {
    id:6,
    planName: "MacBook Pro ",
    price: "$1599",
    image: 'https://m.media-amazon.com/images/I/61YCWzjldDL._SX679_.jpg'
  },
  {
    id:7,
    planName: "iPad Pro ",
    price: "$68",
    image: 'https://m.media-amazon.com/images/I/8124D1qS2UL._SX679_.jpg'
  },
  {
    id:8,
    planName: "MacBook Air (M1)",
    price: "$1099",
    image: 'https://m.media-amazon.com/images/I/31+G-o8iK-L._SX342_SY445_.jpg'
  }
    
  ];
  return (
    <div className="App">
      <Router>
         <Navbar />
        <Routes>
          <Route path="/" />
          <Route path="/cart" /> 
        </Routes>
      </Router>
      <Header></Header>
      <section className="py-5">
            <div className="container px-4 px-lg-5 mt-5">
                <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                 {
                 PlanDetails.map((details) => {
                  return<Product details={details}></Product>
                 })
                }
                 
              </div>
      </div> 
    </section>
              <footer className="py-5 bg-dark">
              <Footer/>
              </footer>
    </div>
   
  );
}

export default App;
