import { Component } from "react";
import './movieCart.css';

export default class MovieCart extends Component{
    render(){
        return (
            <>
                <div className="main">
                    <div className="movie-cart">
                        {/* left part for poster  */}
                        <div className="left">
                            <img src="https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg" alt="poster" srcset="" />
                        </div>

                        {/* right part for other element */}
                        <div className="right">
                            <div className="title">Title</div>
                            <div className="plot">Plot</div>
                            <div className="price">Rs. 199</div>

                            {/* footer of the right container */}
                            <div className="footer">
                                <div className="rating">IMDB 4.5</div>
                                <div className="stars star-dis">Stars</div>
                                <button className="fav-btn">Favourite</button>
                                <button className="cart-btn">Add to Cart</button>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}