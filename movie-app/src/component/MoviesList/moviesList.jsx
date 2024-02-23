import { Component } from "react";
import MovieCart from "../MovieCart/MovieCart";

export default class MoviesList extends Component{

    render(){
        // console.log(this.state);
        //  first way to destructure and pass indivisual props
        // const {imgUrl, title, plot, price, rating, stars, fav, cart} = this.state;

        // second way to directly pass whole movie object as single props

        const { moviesData, addStar, removeStar, handleCart, handleFavorite} = this.props;
        return (
            <>
                {moviesData.map((movie, index) => 
                    <MovieCart 
                        key={index} 
                        movieObject={movie} 
                        addStar={addStar}
                        removeStar = {removeStar}
                        handleFavorite = {handleFavorite}
                        handleCart = {handleCart}
                    />)
                }
            </>
        )
    }
}