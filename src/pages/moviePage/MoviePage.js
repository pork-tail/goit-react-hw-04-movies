import { Component } from "react";
import PropTypes from "prop-types";
import api from "../../services/api";
import SearchForm from "../../components/moviesSertch/MoviesSeartch";
import MoviesList from "../../components/moviesList/MoviesList";
import queryString from "query-string";

export class MoviePage extends Component {
  static propTypes = {
    history: PropTypes.shape({
      pathname: PropTypes.string,
    }).isRequired,
    location: PropTypes.shape({
      query: PropTypes.string,
      search: PropTypes.string,
    }).isRequired,
  };

  state = {
    movies: [],
    page: "",
    error: null,
    query: "",
  };

  componentDidMount() {
    const { location } = this.props;
    const { query } = queryString.parse(location.search);
    query &&
      api.getSearchMovies(query).then((results) => {
        this.setState({ movies: results });
      });
  }

  handleSubmit = (query) => {
    const { history } = this.props;
    this.setState({ query });
    api
      .getSearchMovies(query)
      .then((results) => {
        this.setState({ movies: results });
      })
      .catch((error) => console.log(error));

    history.push({
      pathname: history.pathname,
      search: `query=${query}`,
    });
  };

  render() {
    return (
      <>
        <SearchForm onSubmit={this.handleSubmit} />

        <MoviesList movies={this.state.movies} location={this.props.location} />
      </>
    );
  }
}

export default MoviePage;
