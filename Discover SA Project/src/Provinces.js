import "./ProvinceStyles.css"
import {Link, useNavigate} from 'react-router-dom';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const Provinces =()=>{
    const provinces = ["Limpopo","Mpumalanga","Gauteng","Western Cape","Kwa-Zulu Natal","North West","Eastern Cape","Nothern Cape","Free State"]
    const navigate = useNavigate();
    

    function navigateTo(province) {
        navigate('/shopping', {state: {province} });
    }
    return(
        <div className="province-container">
            <Navbar/>
            <div id="province-title">
                <h1>Which province you want to shop in:</h1>
            </div>
            <div className="pro-container">
                {
                    provinces.map((province, index)=>(   
                        <div key={index} onClick={()=>navigateTo(province)} className="province">
                            <h1>{province}</h1>
                        </div>
                    ))
                }
            </div>
            <Footer/>
        </div>
    )
}

export default Provinces