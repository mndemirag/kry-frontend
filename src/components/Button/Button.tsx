import { ButtonProps } from "../../types";

import styles from "./Button.module.scss";

export const Button: React.FC<ButtonProps> = ({ children, onClick, type }) => {
  return (
    <button
      className={styles.button}
      aria-label={children}
      type={type}
      onClick={() => onClick && onClick()}
    >
      {children}
    </button>
  );
};
