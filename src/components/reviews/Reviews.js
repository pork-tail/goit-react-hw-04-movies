import React, { Component } from "react";
import PropTypes from "prop-types";
import api from "../../services/api";
import styles from "./Reviews.module.css";

export class Cast extends Component {
  static propTypes = {
    id: PropTypes.string.isRequired,
  };

  state = {
    reviews: [],
  };

  componentDidMount() {
    api
      .getMovieReviews(this.props.id)
      .then((data) => this.setState({ reviews: data }))
      .catch((error) => console.log(error));
  }

  render() {
    const { reviews } = this.state;

    return (
      <>
        {reviews.length ? (
          <ul className={styles.list}>
            {reviews.map((review) => (
              <li className={styles.item} key={review.id}>
                <h3>Author: {review.author}</h3>
                <p>{review.content}</p>
              </li>
            ))}
          </ul>
        ) : (
          <h3>We don't have any reviews for this movie</h3>
        )}
      </>
    );
  }
}

export default Cast;
