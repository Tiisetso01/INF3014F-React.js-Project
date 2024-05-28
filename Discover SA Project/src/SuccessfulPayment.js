import React from 'react'
import "./SucessfulPaymentStyles.css"
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { useNavigate } from 'react-router-dom';

function SuccessfulPayment() {
  const navigate = useNavigate();
  function navigateTo() {
      navigate('/provinces-shopping');
  }
  return (
    <div>
      <Navbar/>
      <div className='SuccessfulPayment-container'>
        <div className='centered-div'>
             <img src={require("./assets/images/success.png")} className='success-img' alt="successful payment"/>
             <h3 id="success-title">Your Order was Placed Successfully!!!</h3>
             <button onClick={()=>navigateTo()} className="product-add_to_cart">Continue Shopping</button>

        </div>
      </div>
      <Footer/>
    </div>
   
  )
}

export default SuccessfulPayment