import React from "react";
import { Route, NavLink, Switch } from "react-router-dom";
import HomePage from "./pages/homePage/HomePage";
import MoviePage from "./pages/moviePage/MoviePage";
import MovieDetailsPage from "./pages/movieDetailsPage/MovieDetailsPage";
import NotFound from "./pages/notFound/NotFound";
import routes from "./routes/routes";
import css from "./App.module.css";

const App = () => {
  return (
    <>
      <header className={css.Header}>
        <nav>
          <ul className={css.list}>
            <li className={css.listItem}>
              <NavLink
                exact
                to={routes.home}
                className={css.link}
                activeClassName={css.activeLink}
              >
                Home
              </NavLink>
            </li>
            <li className={css.listItem}>
              <NavLink
                to={routes.moviePage}
                className={css.link}
                activeClassName={css.activeLink}
              >
                Movies
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
      <Switch>
        <Route exact path={routes.home} component={HomePage} />
        <Route path={routes.movieDetails} component={MovieDetailsPage} />
        <Route path={routes.moviePage} component={MoviePage} />
        <Route component={NotFound} />
      </Switch>
    </>
  );
};

export default App;
