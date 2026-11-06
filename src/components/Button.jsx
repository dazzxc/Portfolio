import { Link } from "react-router";
import styles from "./Button.module.css";

const Button = ({ buttonText, link, to, type, disabled, onClick }) => {
  if (type === "submit") {
    return (
      <div className={styles.buttons}>
        <button
          type="submit"
          className={styles.button}
          disabled={disabled}
          onClick={onClick}
        >
          {buttonText}
        </button>
      </div>
    );
  }
  return (
    <div className={styles.buttons}>
      {to ? (
        <Link to={to} className={styles.button}>
          {buttonText}
        </Link>
      ) : (
        <a href={link} className={styles.button}>
          {buttonText}
        </a>
      )}
    </div>
  );
};

export default Button;
