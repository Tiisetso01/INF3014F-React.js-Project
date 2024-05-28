import { Link } from "react-router-dom";
import "./HomeStyles.css"
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const Home =()=>{
    return(
        <div>
            <Navbar />
            <section id="home">
                <div className="home_page">
                    <div className="home_img">
                        <img  src={require("./assets/images/image2-min-1536x906.jpg")} alt="img"/>
                    </div>
                    <div className="home_txt">
                        <p className="collectio ">CULTURAL COLLECTION</p>
                        <h2>DISCOVER SOUTH AFRICA</h2>
                        <div className="home_label ">
                            <p>"Cultural and traditional items are not just objects;<br/> they're storytellers of our heritage, weaving tales of our past <br/>and present into the fabric of our lives."</p>
                        </div>
                        <button><Link to="/provinces-shopping">SHOP NOW</Link><i className='bx bx-right-arrow-alt'></i></button>
                        <div className="home_social_icons">
                            <a href="#"><i className='bx bxl-facebook'></i></a>
                            <a href="#"><i className='bx bxl-twitter'></i></a>
                            <a href="#"><i className='bx bxl-pinterest'></i></a>
                            <a href="#"><i className='bx bxl-instagram'></i></a>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    )
}

export default Home;