import React from "react";
import PropTypes from "prop-types";
import styles from "./MovieDetails.module.css";

const MovieDetails = ({ state }) => {
  return (
    <div className={styles.details}>
      <img
        className={styles.image}
        src={
          state.poster_path &&
          `https://image.tmdb.org/t/p/w500/${state.poster_path}`
        }
        alt={`${state.title} poster`}
      />
      <div className={styles.container}>
        <h1 className={styles.title}>{state.title}</h1>
        <p> Release date: {state.release_date}</p>
        <p>
          Score:
          <span> {state.vote_average * 10}%</span>
        </p>
        <h2>Overview</h2>
        <p>{state.overview}</p>
        <h2>Genres</h2>
        {state.genres.map((genre) => (
          <span className={styles.genre} key={genre.id}>
            {genre.name}
          </span>
        ))}
      </div>
    </div>
  );
};
export default MovieDetails;

MovieDetails.propTypes = {
  state: PropTypes.shape({
    poster_path: PropTypes.string,
    title: PropTypes.string,
    release_date: PropTypes.string,
    vote_average: PropTypes.number,
    overview: PropTypes.string,
  }).isRequired,
};
