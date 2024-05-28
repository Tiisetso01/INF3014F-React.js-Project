import React from 'react'
import Footer from './Footer';
import Navbar from './Navbar';
import "./Empty.css"

function EmptyMessage({message}) {
    return (
        <div>
            <Navbar />
                <div className="empty-container">
                    <h1 className="heading-empty">{message}</h1>
                </div>  
            <Footer />
        </div>
    );
}

export default EmptyMessage