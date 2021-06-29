import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import styles from "./Loader.module.css";

const loader = () => {
  return (
    <Loader
      className={styles.loader}
      type="Puff"
      color="#00BFFF"
      height={100}
      width={100}
      timeout={1000}
    />
  );
};
export default loader;
