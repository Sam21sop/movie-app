import { Component } from "react";
import MovieCart from "../MovieCart/MovieCart";

export default class MoviesList extends Component{

    constructor(){
        super();
        this.state = {
            movies:[
                {
                    imgUrl: "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg",
                    title: "The Avenger",
                    plot: "This are real hero to destroy everything.",
                    price: 999,
                    rating: 4.9,
                    stars: 0,
                    fav: false,
                    cart: false
                },
                {
                    imgUrl: "https://images.thedirect.com/media/photos/Untitled-1_0016_marvel-cinematic-universe-spiderman-far-from-home-movie-poster.jpg",
                    title: "Spiderman",
                    plot: "Far from home.",
                    price: 199,
                    rating: 3.9,
                    stars: 0,
                    fav: false,
                    cart: false
                },
                {
                    imgUrl: "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/c618cd88432989.5dd5e72e505d1.jpg",
                    title: "SEVEN",
                    plot: "Seven is a 2019 Indian mystery thriller film directed and filmed by Nizar Shafi, and produced by Ramesh Varma.",
                    price: 299,
                    rating: 4.5,
                    stars: 5,
                    fav: false,
                    cart: false
                }
            ]
        }
    }

    
    addStar = () => {

        if (this.state.stars >= 5) {
            return;
        };

        // setState first form
        // this.setState({
        //     stars: this.state.stars + 0.5
        // })

        // setState second form
        this.setState((prevState) => {
            return {
                stars: prevState.stars + 0.5
            }
        });
    }


    removeStar = () => {
        if (this.state.stars <= 0) {
            return;
        }
        this.setState({
            stars: this.state.stars - 0.5
        })
    }


    handleFav = () => {
        this.setState({
            fav: !this.state.fav
        })
    }


    handleCart = () => {
        this.setState({
            cart: !this.state.cart
        })
    }

    render(){
        // console.log(this.state);
        //  first way to destructure and pass indivisual props
        // const {imgUrl, title, plot, price, rating, stars, fav, cart} = this.state;

        // second way to directly pass whole movie object as single props

        const {movies} = this.state
        return (
            <>
                {movies.map((movie, index)=> <MovieCart key={index} movieObject={movie}/>)}
            </>
        )
    }
}