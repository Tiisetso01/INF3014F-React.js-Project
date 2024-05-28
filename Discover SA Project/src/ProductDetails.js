import "./ProductStyles.css"
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart} from "./redux/Shopping/shopping-actions";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { addToWishList } from "./redux/WishList/wishlist-actions";

const ProductDetails = ()=>{
    const {id, title, venderName, img, discription, price, discount} = useLocation().state.productDetails;
    const dispatch = useDispatch()
    const navigate = useNavigate();
    function navigateTo() {
        navigate('/');
    }
   
    
    return(
        <div className="single-product-container">
            <Navbar />
            <div className="top-product-details">
                <div className="flex-left">
                    <img src={img} className="product-image" alt="product"/>
                </div>
               
                <div className="flex-right">
                    <h4>{title}</h4>
                    <hr/>
                    <span id="single-ratings">⭐⭐⭐⭐ (40+)</span><br/><br/>
                    <div>
                        {
                            discount == 0 
                            ?
                            <div><span id="variables">Price: </span><span id="price">{price}</span></div>
                            :
                            <div>
                                <span id="variables">Old Price: </span><span id="old-price">{discount}</span><br/>
                                <span id="variables">New Price: </span><span id="price">{price}</span>
                            </div>

                        }
                        
                    </div><br/>
                    
                    <div>
                        <span id="variables">Stock: </span><span>In stock</span>
                    </div><br></br>

                    <span id="variables">sold by: </span> <span>{venderName}</span><br/>
                    

                    <h4>Discription:</h4>
                    <p id="discription">{discription}</p>
                    <div className="enable-flex">
                        <button onClick={()=>dispatch(addToWishList(id))} className="add_to_list">Add to Wishlist</button>
                        <button onClick={()=>dispatch(addToCart(id))} className="product-add_to_cart">Add to Cart</button>
                    </div>
                </div>     
            </div>

            <div className="review-title">
                <h1 >Customs Reviews</h1>
                <h3>Item reviews⭐ (40+) 4.6 ratings</h3>
            </div>
            

            <div className="bottom-product-details">
                
                <div className="user-review">
                    <div className="review-head">
                        <img src={img}  className="reviews-img" alt="profile"/>
                        <span id="name">Tiisetso Mmaboko</span>
                    </div>
                    <div>
                        <span id="stars">⭐⭐⭐ </span>on <span id="date">15 Mar 2024</span>
                    </div>
                    <p>Hi people thank you for your good work didn't wait long for my order keep up the good work God bless have a lovely weekend.</p>
                </div>
                <div className="user-review">
                    <div className="review-head">
                        <img src={img}  className="reviews-img" alt="profile"/>
                        <span id="name">Tiisetso Mmaboko</span>
                    </div>
                    <div>
                        <span id="stars">⭐⭐⭐⭐ </span>on <span id="date">15 Mar 2024</span>
                    </div>
                    <p>Hi people thank you for your good work didn't wait long for my order keep up the good work God bless have a lovely weekend.</p>
                </div>
                <div className="user-review">
                    <div className="review-head">
                        <img src={img}  className="reviews-img" alt="profile"/>
                        <span id="name">Tiisetso Mmaboko</span>
                    </div>
                    <div>
                        <span id="stars">⭐⭐⭐⭐ </span>on <span id="date">15 Mar 2024</span>
                    </div>
                    <p>Hi people thank you for your good work didn't wait long for my order keep up the good work God bless have a lovely weekend.</p>
                </div>
                <div className="user-review">
                    <div className="review-head">
                        <img src={img}  className="reviews-img" alt="profile"/>
                        <span id="name">Tiisetso Mmaboko</span>
                    </div>
                    <div>
                        <span id="stars">⭐⭐⭐⭐ </span>on <span id="date">15 Mar 2024</span>
                    </div>
                    <p>Hi people thank you for your good work didn't wait long for my order keep up the good work God bless have a lovely weekend.</p>
                </div>
                <div className="user-review">
                    <div className="review-head">
                        <img src={img}  className="reviews-img" alt="profile"/>
                        <span id="name">Tiisetso Mmaboko</span>
                    </div>
                    <div>
                        <span id="stars">⭐⭐⭐⭐ </span>on <span id="date">15 Mar 2024</span>
                    </div>
                    <p>Hi people thank you for your good work didn't wait long for my order keep up the good work God bless have a lovely weekend.</p>
                </div>
                <div className="user-review">
                    <div className="review-head">
                        <img src={img}  className="reviews-img" alt="profile"/>
                        <span id="name">Tiisetso Mmaboko</span>
                    </div>
                    <div>
                        <span id="stars">⭐⭐⭐⭐ </span>on <span id="date">15 Mar 2024</span>
                    </div>
                    <p>Hi people thank you for your good work didn't wait long for my order keep up the good work God bless have a lovely weekend.</p>
                </div>
                
            </div>
            <Footer />
            
        </div>
    )
}

export default ProductDetails