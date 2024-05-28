import "./ShoppingStyles.css"
import { Link, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { easternProducts, freestateProducts, kznProducts, limpopoProducts, mpumalangaProducts, westernProducts } from "./Constants/Constants";
import { addToCart } from "./redux/Shopping/shopping-actions";
import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import EmptyMessage from "./components/EmptyMessage"
import Footer from "./components/Footer";
import { addToWishList } from "./redux/WishList/wishlist-actions";


const Shopping = ()=>{
    const location = useLocation();
    const province = location.state?.province
    const [products, setProducts] = useState(null)
    const cart = useSelector(state=> state.cartList.cart)
    const provinceProducts = ()=>{
        switch(province){
            case "Limpopo":
                return limpopoProducts
            case "Mpumalanga":
                return mpumalangaProducts
            case "Kwa-Zulu Natal":
                return kznProducts
            case "Western Cape":
                return westernProducts
            case "Eastern Cape":
                return easternProducts
            case "Free State":
                    return freestateProducts
            default:
                return null
        }
    }
    
    //provinceProducts()
    //const [count, setCount] = useState(0)
    const searchItems =(e)=>{
        
        var searchtext = e.target.value;
        if(products != null && searchtext.length > 3){
            const foundProducts = products.filter((item)=>{
                (item.title).includes(searchtext)
                console.log((item.title).includes(searchtext))
             })
             
             if(foundProducts.length > 0){
               setProducts(foundProducts)
             }
             
        }
        if(products != null && searchtext.length == 0){
            setProducts(provinceProducts())
        }
       

    }
    
    const dispatch = useDispatch()
    if(provinceProducts() == null){
        return(
            <>
                <EmptyMessage message="No Products for This province Yet."/>
            </>
        )
    }
   
    return(
        
        <div className="shopping-container">
           <Navbar searchItems={searchItems} />
           <h3 className="province-name">{location.state.province} Shopping (Cultural Items)</h3>
            <div className="products_container" >
            
                {
                    provinceProducts()?.map((item)=>(
                        
                            <div key={item.id} className="shopping-cart" >
                                <Link  to="/product-details" state={{productDetails:item}}>
                                    <img src={item.img} className="product_img" alt="images"/>
                                </Link>
                                {
                                    item.discount > 0 &&  <h4 class="sale">Sale</h4>
                                }
                               
                                <div className="product_details" >
                                    <p className="product_ratings">⭐⭐⭐⭐</p>
                                    <h4 className="product_title">
                                        {
                                            item.title.length > 26 
                                            ? item.title.substring(0, 24) +"..."
                                            : item.title
                                        }
                                    </h4>
                                    <span className="product_price">
                                       
                                        {
                                            item.discount > 0 
                                            ? <div>R{item.discount}<span className="disc_price">R{item.price}</span></div>
                                            : <span> R{item.price}</span>
                                        }
                                        
                                    </span>
                                    <button onClick={()=>dispatch(addToCart(item.id))} className="add_to_cart">Add to Cart</button>
                                    <button onClick={()=>dispatch(addToWishList(item.id))} className="add_to_wishlist">Add to Wishlist</button>
                                </div>
                            </div>
                
                    ))
                }
                
            </div>
            <Footer/>

        </div>
    )
}


export default  Shopping