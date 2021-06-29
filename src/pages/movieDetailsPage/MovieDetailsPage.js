import { Component, Suspense, lazy } from "react";
import { Route, Switch } from "react-router-dom";
import PropTypes from "prop-types";
import Loader from "../../components/loader/Loader";
import SecondaryNav from "../../components/moviesNav/MoviesNav";
import MovieDetails from "../../components/movieDetails/MovieDetails";
import api from "../../services/api";
import routes from "../../routes/routes";

const Cast = lazy(() => import("../../components/cast/Cast"));
const Reviews = lazy(() => import("../../components/reviews/Reviews"));

class MovieDetailsPage extends Component {
  static propTypes = {
    history: PropTypes.object.isRequired,
    location: PropTypes.shape({
      form: PropTypes.shape({
        state: PropTypes.object,
      }),
    }).isRequired,
    match: PropTypes.shape({
      params: PropTypes.object,
    }).isRequired,
  };

  state = {
    title: null,
    release_date: null,
    vote_average: null,
    overview: null,
    genres: [],
    poster_path: null,
  };

  componentDidMount() {
    const { movieId } = this.props.match.params;

    api
      .getMovieDetails(movieId)
      .then((data) => this.setState({ ...data }))
      .catch((error) => console.log(error));
  }

  handleBtnBack = () => {
    const { location, history } = this.props;

    history.push(location?.state?.from || routes.movies);
  };

  render() {
    return (
      <>
        <button type="button" onClick={this.handleBtnBack}>
          Go back
        </button>

        <MovieDetails state={this.state} />

        <h3>Additional information</h3>
        {this.state.isLoading && <Loader />}
        <SecondaryNav
          url={this.props.match.url}
          location={this.props.location.state}
        />

        <Suspense fallback={<Loader />}>
          <Switch>
            <Route
              path={`${this.props.match.url}/cast`}
              render={(props) => (
                <Cast {...props} id={this.props.match.params.movieId} />
              )}
            />
            <Route
              exact
              path={`${this.props.match.url}/reviews`}
              render={(props) => (
                <Reviews {...props} id={this.props.match.params.movieId} />
              )}
            />
          </Switch>
        </Suspense>
      </>
    );
  }
}

export default MovieDetailsPage;
