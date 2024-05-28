//import Navbar from "./components/Navbar";
//import Home from "./components/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Provinces from './Provinces';
import Shopping from "./Shopping"
import ProductDetails from "./ProductDetails"
import Gallery from "./Gallery"
import Cart from "./Cart";
import Navbar from "./components/Navbar";
import Home from "./Home";
import Footer from "./components/Footer";
import CheckOut from "./CheckOut";
import SuccessfulPayment from "./SuccessfulPayment";
import Contact from "./Contact";
import WishList from "./WishList";


//import "./styles.css";

export default function App() {
  return (

     <BrowserRouter>
      <Routes>
        
        <Route  path="/" element={<Home />}/>
        <Route  path="provinces-shopping" element={<Provinces />}/>
        <Route path="shopping" element={<Shopping />} />
        <Route path="product-details" element={<ProductDetails />} />
        <Route  path="cart" element={<Cart />}/>
        <Route  path="navbar" element={<Navbar />}/>
        <Route  path="footer" element={<Footer />}/>
        <Route  path="checkout" element={<CheckOut />}/>
        <Route  path="payment-successful" element={<SuccessfulPayment/>} />
        <Route path="contact" element={<Contact />} />
        <Route path="wishlist" element={<WishList />} />
        
        
          {/**
         
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} />}*/}
        
      </Routes>
    </BrowserRouter>

  );
}
