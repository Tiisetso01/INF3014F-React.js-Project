import React, { useEffect, useState } from 'react'
import "./NavbarStyles.css"
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

function Navbar() {
  const cart =useSelector(state=> state.cartList.cart)
  const [cartCount, setCartCount] = useState(0);
  //const [searchValue, setCartCount] = useState(0);

  useEffect(() => {
    let count = 0;
    cart.forEach((item) => {
      count += item.qty;
    });

    setCartCount(count);
  }, [cart, cartCount]);


  return (
    <div className='navbar'>

        <div className="top-header">

            <Link className="link-home" to="/">
              <img src={require("../assets/images/shop/logo-no-background.png")} alt="logo"/>
             
            </Link>

            <div  className="links_position">
              
              <div  className="links_ani links_flex">
                
                <Link to="/provinces-shopping" className="header_links"  >
                  Shop
                </Link>
                
                <Link to="/contact" className="header_links"  >
                  Contact us
                </Link>
              </div>
              <div className="top-right-corner">
                <i className="fas fa-user-circle"></i>
                <span className="username">Hi, <strong>User</strong></span>
              </div>
             
            </div>

        </div>

        <div className='bottom-header'>

            <div className="search">
              <input 
                type="text"
                placeholder="What are you looking for?" 
                className="input-search"
                //value={}
                //onChange={(e)=>searchItems(e)}
              />
              <button className="button-search"><i className="fas fa-search"></i></button>
            </div>

            <div className='right-header'>
              
              <Link to="/wishlist"><i className="fas fa-heart"></i></Link>
                
              <div className="right-corner">
                <Link to="/cart">
                  <i className="fas fa-shopping-cart"></i>
                </Link>
                <span id="count-container">
                  <span id="cart-count">{cartCount <= 9 ? cartCount : "9+"}</span>
                </span>
              </div>
        </div>

        </div>
        
        
    </div>
  )
}

export default Navbar