import { Component } from "react";
import './movieCart.css';

export default class MovieCart extends Component{

    render(){
        // const {imgUrl, title, plot, price, rating, stars, fav, cart} = this.props;
        // const {imgUrl, title, plot, price, rating, stars, fav, cart} = this.props.movieObject;
        const {addStar, movieObject, removeStar, handleFavorite, handleCart} = this.props;
        const {imgUrl, title, plot, price, rating, stars, fav, cart} = movieObject;


        return (
            <>
                <div className="main">
                    <div className="movie-cart">
                        {/* left part for poster  */}
                        <div className="left">
                            <img src={imgUrl} alt="poster"/>
                        </div>

                        {/* right part for other element */}
                        <div className="right">
                            <div className="title">{title}</div>
                            <div className="plot">{plot}</div>
                            <div className="price">Rs. {price}</div>

                            {/* footer of the right container */}
                            <div className="footer">
                                <div className="rating">IMDB {rating}</div>
                                <div className="star-dis">
                                    <img src="https://cdn-icons-png.flaticon.com/128/992/992683.png" 
                                        alt="decreament" 
                                        className="inc-dec" 
                                        onClick={() => {removeStar(movieObject)}}/>
                                    <img src="https://cdn-icons-png.flaticon.com/128/477/477406.png" alt="Star" className="stars"/>
                                    <img src="https://cdn-icons-png.flaticon.com/128/992/992651.png" 
                                        alt="increament" 
                                        className="inc-dec" 
                                        onClick={() => {addStar(movieObject)}}/>
                                    <span className="stars">{stars}</span>
                                </div>

                                {/* favortie un-favrote button  */}
                                <button 
                                    className={fav ? "unfav-btn" : "fav-btn"} 
                                    onClick={() => {handleFavorite(movieObject)}}>
                                    {fav ? "Un-favorites" : 'Favorite'}
                                </button>

                                {/* add to card or remove from cart button  */}
                                <button 
                                    className={cart ? "remove-from-cart-btn" : "add-to-cart-btn"} 
                                    onClick={() => {handleCart(movieObject)}}>
                                    {cart ? "Remove From Cart" : "Add To Cart"}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}