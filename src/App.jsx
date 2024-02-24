import { Component } from 'react';
import MoviesList from './component/MoviesList/moviesList';
import Navbar from './component/Navbar/navbar';
import moviesData from './component/MoviesList/moviesData';

class App extends Component{

  constructor(){
    super();
    this.state = {
        movies:moviesData,
        cartCount:0
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
    let {movies, cartCount} = this.state
    const movieIndex = movies.indexOf(selectedMovie);
    movies[movieIndex].cart = !movies[movieIndex].cart;

    // increasing cart count
    if (movies[movieIndex].cart) {
      cartCount += 1;
    } else {
      cartCount -= 1;
    }

    // setState first form
    this.setState({
        movies,
        cartCount
    })
    // this.setState({
    //     cart: !this.state.cart
    // })
}

  render(){
    const {movies, cartCount} = this.state
    return (
      <>

        <Navbar cartCount={cartCount}/>
        <MoviesList 
          moviesData={movies} 
          addStar={this.handleIncStar}
          removeStar = {this.handleDecStar}
          handleFavorite = {this.handleFavorite}
          handleCart = {this.handleCart}
        />

      </>
    )
  }
}

export default App
