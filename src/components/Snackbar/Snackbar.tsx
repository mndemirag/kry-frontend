import { SnackbarProps } from "../../types";

import styles from "./Snackbar.module.scss";

export const Snackbar: React.FC<SnackbarProps> = ({ children, open }) => {
  return (
    <>
      <div className={`${styles.snackbar} ${open ? `${styles.show}` : ""}`}>
        {children}
      </div>
    </>
  );
};
