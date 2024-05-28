import React from 'react'
import "./ContactStyles.css"
import Navbar from './components/Navbar'
import Footer from './components/Footer'

function Contact() {
  return (
    <div className='contact-container'> 
        <Navbar/>
        <div className="contact-content" >
            <section className="contact-section">
                <h2>Get in Touch</h2>
                <p>
                    Have a question, comment, or suggestion? We'd love to hear from you! 
                    Please fill out the form below, and we'll get back to you as soon as possible.
                </p>
                <form action="#" method="post">
                    <label for="name">Name:</label>
                    <input type="text" id="name" name="name" required/>
        
                    <label for="email">Email:</label>
                    <input type="email" id="email" name="email" required/>
        
                    <label for="message">Message:</label>
                    <textarea id="message" name="message" rows="4" required></textarea>
        
                    <button type="submit">Submit</button>
                </form>
            </section> 
        </div>
        <Footer/>
    </div>
  )
}

export default Contact