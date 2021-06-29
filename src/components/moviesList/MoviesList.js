import React from "react";
import { NavLink, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import styles from "./MoviesList.module.css";
import routes from "../../routes/routes";

const MoviesList = ({ movies, location }) => {
  return (
    <ul className={styles.list}>
      {movies.map(({ id, poster_path, title }) => (
        <li key={id} className={styles.item}>
          <NavLink
            to={{
              pathname: `${routes.moviePage}/${id}`,
              state: { from: location },
            }}
          >
            <img
              className={styles.image}
              src={
                poster_path && `https://image.tmdb.org/t/p/w500/${poster_path}`
              }
              alt={`${title} poster`}
            />
            <h4>{title}</h4>
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

export default withRouter(MoviesList);

MoviesList.propTypes = {
  movies: PropTypes.array.isRequired,
  location: PropTypes.object.isRequired,
};
