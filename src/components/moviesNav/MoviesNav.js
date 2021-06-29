import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import styles from "./SecondaryNav.module.css";

const Reviews = ({ url, location }) => {
  return (
    <nav>
      <ul className={styles.list}>
        <li className={styles.listItem}>
          <NavLink
            to={{
              pathname: `${url}/cast`,
              state: location,
            }}
            className={styles.link}
            activeClassName={styles.activeLink}
          >
            Cast
          </NavLink>
        </li>
        <li className={styles.listItem}>
          <NavLink
            to={{
              pathname: `${url}/reviews`,
              state: location,
            }}
            className={styles.link}
            activeClassName={styles.activeLink}
          >
            Reviews
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Reviews;

Reviews.propTypes = {
  url: PropTypes.string.isRequired,
  location: PropTypes.object.isRequired,
};
