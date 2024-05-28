import React, { useState, useEffect } from "react";
import "./WishListStyles.css";



import { useSelector } from "react-redux";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Link, useNavigate } from "react-router-dom";
import WishlistItem from "./components/WishlistItem";
import EmptyMessage from "./components/EmptyMessage";

const WishList = () => {
  const wishlist = useSelector(state => state.wishList.wishlist)
  
  const navigate = useNavigate();
  function navigateTo() {
      navigate('/checkout');
  }
 
  console.log(wishlist.length == 0)
    if(wishlist.length == 0){
    return (
        <>
            <EmptyMessage message="No Items Yet"/>
        </>
        
        );
    }
  return (
    <div className="wishlist-container">
    <Navbar />
    <div className="items-container">
            
    </div>
      <div className="items-container">
          {wishlist.map((item) => (
            <WishlistItem key={item.id} item={item} />
          ))}
        
      </div>
      <Footer />
    </div>
  );
};


export default WishList;
