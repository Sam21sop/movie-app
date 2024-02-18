import { Component } from "react";
import './movieCart.css';

export default class MovieCart extends Component{

    constructor(){
        super();
        this.state = {
            imgUrl: "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg",
            title: "The Avenger",
            plot: "This are real hero to destroy everything.",
            price: 999,
            rating: 4.9,
            stars: 0
        }
    }

    addStar = () => {
        // setState first form
        // this.setState({
        //     stars: this.state.stars + 0.5
        // })

        // setState second form
        this.setState((prevState) => {
            return {
                stars: prevState.stars + 0.5
            }
        })
    }


    removeStar = () => {
        this.setState({
            stars: this.state.stars - 0.5
        })
    }


    render(){
        const {imgUrl, title, plot, price, rating, stars} = this.state;
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
                                    <img src="https://cdn-icons-png.flaticon.com/128/992/992683.png" alt="decreament" className="inc-dec" onClick={this.removeStar}/>
                                    <img src="https://cdn-icons-png.flaticon.com/128/477/477406.png" alt="Star" className="stars"/>
                                    <img src="https://cdn-icons-png.flaticon.com/128/992/992651.png" alt="increament" className="inc-dec" onClick={this.addStar}/>
                                    <span className="stars">{stars}</span>
                                </div>
                                <button className="fav-btn" >Favourite</button>
                                <button className="cart-btn">Add to Cart</button>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}