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
                    imgUrl: "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/c618cd88432989.5dd5e72e505d1.jpg",
                    title: "SEVEN",
                    plot: "Seven is a 2019 Indian mystery thriller film directed and filmed by Nizar Shafi, and produced by Ramesh Varma.",
                    price: 299,
                    rating: 4.5,
                    stars: 5,
                    fav: false,
                    cart: false
                },
                {
                    title: 'The Avengers',                  
                    plot:"Earth's mightiest heroes must come together and learn to fight as a team if they are going to stop the mischievous Loki and his alien army from enslaving humanity.",
                    imgUrl:'https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg',
                    rating: '8.0',            
                    price: 99,            
                    stars: 0,
                    fav: false,
                    isInCart: false                  
                  },
                  {
                    title: 'The Dark Knight',                  
                    plot:'When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.',
                    imgUrl:'https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg',                  
                    rating: '9.0',            
                    price: 199,            
                    stars: 0,            
                    fav: false,
                    isInCart: false                  
                  },
                  {
                    title: 'Iron Man',                 
                    plot: 'After being held captive in an Afghan cave, billionaire engineer Tony Stark creates a unique weaponized suit of armor to fight evil.',                  
                    imgUrl: 'https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_SX300.jpg',                  
                    rating: '7.9',            
                    price: 139,            
                    stars: 0,            
                    fav: false,
                    isInCart: false                  
                  }
            ]
        }
    }

    
    handleIncStar = (selectedMovie) => {
        
        // exstract movies array from state
        const {movies} = this.state

        // find index of the selectedMovie
        const movieIndex = movies.indexOf(selectedMovie);

        // base case
        if (movies[movieIndex].stars >= 5) {
            return;
        };

        // increase current value of star by 0.5
        movies[movieIndex].stars += 0.5;

        // setState first form
        this.setState({
            movies
        })

        // // setState second form
        // this.setState((prevState) => {
        //     return {
        //         stars: prevState.stars + 0.5
        //     }
        // });
    }


    handleDecStar = (selectedMovie) => {
        
        // exstract movies array from state
        const {movies} = this.state

        // find index of the selectedMovie
        const movieIndex = movies.indexOf(selectedMovie);

        // base case
        if (movies[movieIndex].stars <= 0) {
            return;
        };

        // decrease current value of star by 0.5
        movies[movieIndex].stars -= 0.5;

        // setState first form
        this.setState({
            movies
        })

        // // setState second form
        // this.setState((prevState) => {
        //     return {
        //         stars: prevState.stars + 0.5
        //     }
        // });
    }


    handleFavorite = (selectedMovie) => {
        // exstract movies array from state
        const {movies} = this.state
        const movieIndex = movies.indexOf(selectedMovie);
        movies[movieIndex].fav = !movies[movieIndex].fav;

        // setState first form
        this.setState({
            movies
        })
        
        // this.setState({
        //     fav: !this.state.fav
        // })
    }


    handleCart = (selectedMovie) => {
        const {movies} = this.state
        const movieIndex = movies.indexOf(selectedMovie);
        movies[movieIndex].cart = !movies[movieIndex].cart;

        // setState first form
        this.setState({
            movies
        })
        // this.setState({
        //     cart: !this.state.cart
        // })
    }

    render(){
        // console.log(this.state);
        //  first way to destructure and pass indivisual props
        // const {imgUrl, title, plot, price, rating, stars, fav, cart} = this.state;

        // second way to directly pass whole movie object as single props

        const {movies} = this.state
        return (
            <>
                {movies.map((movie, index) => 
                    <MovieCart 
                        key={index} 
                        movieObject={movie} 
                        addStar={this.handleIncStar}
                        removeStar = {this.handleDecStar}
                        handleFavorite = {this.handleFavorite}
                        handleCart = {this.handleCart}
                    />)
                }
            </>
        )
    }
}