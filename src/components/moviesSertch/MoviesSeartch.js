import { Component } from "react";
import PropTypes from "prop-types";
import styles from "./MoviesSeartch.module.css";

class SearchForm extends Component {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
  };
  state = { qwery: "" };

  handleChange = (e) => {
    this.setState({ qwery: e.currentTarget.value });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state.qwery);
    this.setState({ qwery: "" });
  };

  render() {
    return (
      <div className={styles.searchbar}>
        <form onSubmit={this.handleSubmit} className={styles.form}>
          <button type="submit" className={styles.btn}>
            <span className={styles.label}>Search</span>
          </button>

          <input
            className={styles.input}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search movies"
            onChange={this.handleChange}
          />
        </form>
      </div>
    );
  }
}

export default SearchForm;
