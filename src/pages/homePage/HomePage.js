import { Component } from "react";
import MoviesList from "../../components/moviesList/MoviesList";
import api from "../../services/api";
import styles from "./HomePage.module.css";

export class HomePage extends Component {
  state = {
    movies: [],
  };

  componentDidMount() {
    api
      .getMovieTrending()
      .then((results) => this.setState({ movies: results }))
      .catch((error) => console.log(error));
  }

  render() {
    return (
      <>
        <h1 className={styles.title}>Trending today</h1>
        <MoviesList movies={this.state.movies} />
      </>
    );
  }
}
export default HomePage;
