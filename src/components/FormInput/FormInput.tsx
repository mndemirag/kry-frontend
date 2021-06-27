import { FormInputProps } from "../../types";

import styles from "./FormInput.module.scss";

export const FormInput: React.FC<FormInputProps> = ({ label, onChange }) => {
  return (
    <label className={styles.inputLabel}>
      {label}
      <input
        type="text"
        className={styles.inputField}
        aria-label={label}
        onChange={(e) => onChange(e.target.value)}
      />
    </label>
  );
};
