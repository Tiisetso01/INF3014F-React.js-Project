//import "./GalleryStyles.css"
import $ from "jquery"

const Gallery =()=>{
    //Work in Progress

    $(document).ready(function(){
        $(".filter-tech").click(function(){
            $(".people, .nature").fadeOut(200);
            $(".tech").fadeIn(200);
        });
        $(".filter-people").click(function(){
            $(".tech, .nature").fadeOut(200);
            $(".people").fadeIn(200);
        });
        $(".filter-nature").click(function(){
            $(".tech, .people").fadeOut(200);
            $(".nature").fadeIn(200);
        });
        $(".filter-all").click(function(){
            $(".tech, .people, .nature").fadeIn(200);
        });
    });
    return(
        <div classNameName="">
           <div class="col-md-12">
            <h1>Select a Tribe</h1>
            <ul>
                <li><a href="#" class="filter-all">All</a></li>
                <li><a href="#" class="filter-tech">Tech</a></li>
                <li><a href="#" class="filter-people">Architecture</a></li>
                <li><a href="#" class="filter-nature">Nature</a></li>
            </ul>
            <button  className="add_to_cart">Add to Cart</button>
        </div>
        <div className="gallery">
            
            <figure className="card tech">
            <img className="card__image" loading="lazy" src="https://picsum.photos/id/0/300" alt=""/>
            <figcaption className="card__caption">Laptop</figcaption>
            </figure>
            <figure className="card nature">
            <img className="card__image" loading="lazy" src="https://picsum.photos/id/10/300" alt=""/>
            <figcaption className="card__caption">Sea forest</figcaption>
            </figure>
            <figure className="card animals">
            <img className="card__image" loading="lazy" src="https://picsum.photos/id/1003/300" alt=""/>
            <figcaption className="card__caption">Deer</figcaption>
            </figure>
            <figure className="card people">
            <img className="card__image" loading="lazy" src="https://picsum.photos/id/1005/300" alt=""/>
            <figcaption className="card__caption">Horizon sight</figcaption>
            </figure>
            <figure className="card nature">
            <img className="card__image" loading="lazy" src="https://picsum.photos/id/218/300" alt=""/>
            <figcaption className="card__caption">Sea</figcaption>
            </figure>
            <figure className="card people">
            <img className="card__image" loading="lazy" src="https://picsum.photos/id/1012/300" alt=""/>
            <figcaption className="card__caption">Man & Dog</figcaption>
            </figure>
            <figure className="card animals">
            <img className="card__image" loading="lazy" src="https://picsum.photos/id/1020/300" alt=""/>
            <figcaption className="card__caption">Bear</figcaption>
            </figure>
            <figure className="card people">
            <img className="card__image" loading="lazy" src="https://picsum.photos/id/1027/300" alt=""/>
            <figcaption className="card__caption">Girl</figcaption>
            </figure>
            <figure className="card tech">
            <img className="card__image" loading="lazy" src="https://picsum.photos/id/119/300" alt=""/>
            <figcaption className="card__caption">MacBook</figcaption>
            </figure>
            <figure className="card animals">
            <img className="card__image" loading="lazy" src="https://picsum.photos/id/219/300" alt=""/>
            <figcaption className="card__caption">Leopard</figcaption>
            </figure>
            <figure className="card nature">
            <img className="card__image" loading="lazy" src="https://picsum.photos/id/306/300" alt=""/>
            <figcaption className="card__caption">Flower</figcaption>
            </figure>
        </div>
       

        </div>
    )
}

export default Gallery