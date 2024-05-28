import React, { useState, useEffect } from "react";
import "./CartStyles.css";


import CartItem from "./components/CartItem";
import { useSelector } from "react-redux";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Link, useNavigate } from "react-router-dom";
import EmptyMessage from "./components/EmptyMessage";

const Cart = () => {
  const cart = useSelector(state =>state.cartList.cart)
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalItems, setTotalItems] = useState(0);
  const navigate = useNavigate();
  function navigateTo() {
      navigate('/checkout');
  }
 

  useEffect(() => {
    let items = 0;
    let price = 0;
    
    cart.forEach((item) => {
      items += item.qty;
      
      price += item.discount > 0 ? item.qty * item.discount : item.qty * item.price;
    });

    setTotalItems(items);
    setTotalPrice(price);
  }, [cart, totalPrice, totalItems, setTotalPrice, setTotalItems]);

  if(cart.length == 0){
    return(
      <>
        <EmptyMessage message="Your Cart is Empty"/>
      </>
    )
  }

  return (
    <div className="checkout-container">
    <Navbar />
      <div className="checkout_cart">
        <div className="cart_items">

          <div className="free-delivery-container">
            <div className="truck-img-container">
              <img src="https://shopfront.takealot.com/7fdf793a3356aa23a63a0a8726f91be39b408d66/static/media/src/images/icon-delivery.svg-289ec5f71b25443056af.svg" alt="Free shipping"/>
              <div className="free-deliry-discription">
                <span>You've earned <strong>FREE DELIVERY</strong></span>
                <span>or <strong>FREE COLLECTION</strong>.</span>
              </div>
              
            </div>
          </div>
          
          {cart.map((item) => (
            <CartItem key={item.id} item={item} />
          ))}
        </div>
        <div className="cart_summary">
          <h4 className="summary_title">Cart Summary</h4>
          <div className="summary_price">
            <span><strong>TOTAL:</strong> ({totalItems} items)</span>
            <span>R {totalPrice}</span>
          </div>
          <button onClick={()=> navigateTo()}className="summary_checkoutBtn">
              Proceed To Checkout
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};


export default Cart;
