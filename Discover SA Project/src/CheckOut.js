import React, { useEffect, useState } from 'react'
import "./CheckOutStyles.css"
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

function CheckOut() {

  const cart = useSelector(state=> state.cartList.cart)
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalItems, setTotalItems] = useState(0);

  useEffect(() => {
    let items = 0;
    let price = 0;

    cart.forEach((item) => {
      items += item.qty;
      
      price += item.discount > 0 ? item.qty * item.discount : item.qty * item.price
    });

    setTotalItems(items);
    setTotalPrice(price);
  }, [cart, totalPrice, totalItems, setTotalPrice, setTotalItems]);
  return (
    <div className='checkout-container'>
        <Navbar/>
        <div className="row">
            <div className="col-75">
                <div className="content-container">
                <form action="/payment-successful">
                
                    <div className="row">
                    <div className="col-50">
                        <h3>Billing Address</h3>
                        <label for="fname"><i class="fa fa-user"></i> Full Name</label>
                        <input type="text" id="fname" name="firstname" placeholder="Tiisetso Mmaboko"/>
                        <label for="email"><i class="fa fa-envelope"></i> Email</label>
                        <input type="text" id="email" name="email" placeholder="tiisetso@example.com"/>
                        <label for="adr"><i class="fa fa-address-card-o"></i> Address</label>
                        <input type="text" id="adr" name="address" placeholder="542 W. 15th Street"/>
                        <label for="city"><i class="fa fa-institution"></i> City</label>
                        <input type="text" id="city" name="city" placeholder="New York"/>

                        <div className="row">
                        <div className="col-50">
                            <label for="state">State</label>
                            <input type="text" id="state" name="state" placeholder="NY"/>
                        </div>
                        <div className="col-50">
                            <label for="zip">Zip</label>
                            <input type="text" id="zip" name="zip" placeholder="1235"/>
                        </div>
                        </div>
                    </div>

                    <div className="col-50">
                        <h3>Payment</h3>
                        <label for="fname">Accepted Cards</label>
                        <div className="icon-container">
                        <i class="fa fa-cc-visa" style={{color:"navy;"}}></i>
                        <i class="fa fa-cc-amex" style={{color:"blue;"}}></i>
                        <i class="fa fa-cc-mastercard" style={{color:"red;"}}></i>
                        <i class="fa fa-cc-discover" style={{color:"orange;"}}></i>
                        </div>
                        <label for="cname">Name on Card</label>
                        <input type="text" id="cname" name="cardname" placeholder="MR Tiisetso Mmaboko"/>
                        <label for="ccnum">Credit card number</label>
                        <input type="text" id="ccnum" name="cardnumber" placeholder="1111-2222-3333-4444"/>
                        <label for="expmonth">Exp Month</label>
                        <input type="text" id="expmonth" name="expmonth" placeholder="January"/>
                        <div className="row">
                        <div className="col-50">
                            <label for="expyear">Exp Year</label>
                            <input type="text" id="expyear" name="expyear" placeholder="2018"/>
                        </div>
                        <div className="col-50">
                            <label for="cvv">CVV</label>
                            <input type="text" id="cvv" name="cvv" placeholder="123"/>
                        </div>
                        </div>
                    </div>
                    
                    </div>
                    <label>
                    <input type="checkbox" checked="checked" name="sameadr"/> Shipping address same as billing
                    </label>
                    <input type="submit" value="Pay Now" className="btn"/>
                </form>
                </div>
            </div>
            <div className="col-25">
                <div className="content-container">
                    <h4>Your Order Summary <span className="price" style={{color:"black"}}><i class="fa fa-shopping-cart"></i> <b>Total Items ({totalItems})</b></span></h4>
                    {
                        cart.map((item)=>(
                            <p><Link to="">
                            {
                                item.title.length > 26 
                                ? item.title.substring(0, 24) +"..."
                                : item.title
                            }
                            </Link> <span className="price">{item.qty}  x  R{item.discount > 0 ? item.discount :item.price }</span></p>
                        ))
                    }
                    
                    <hr/>
                    <p>Total Order Price <span className="price" style={{color:"black"}}><b>R {totalPrice}</b></span></p>
                </div>
            </div>
        </div>
        <Footer/>
    </div>
  )
}

export default CheckOut