import { useState } from "react";
import { ServiceFormDialogProps } from "../../types";
import { Button } from "../Button/Button";
import { FormInput } from "../FormInput/FormInput";

import styles from "./ServiceFormDialog.module.scss";

export const ServiceFormDialog: React.FC<ServiceFormDialogProps> = ({
  onClose,
  onSubmit,
}) => {
  const [name, setName] = useState("");
  const [url, setUrl] = useState("");
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(name, url);
    onClose();
  };

  return (
    <div className={styles.overlay}>
      <div className={styles.popup}>
        <h2>Add a new service</h2>
        <span
          className={styles.close}
          aria-label="Close the form"
          onClick={() => onClose()}
        >
          &times;
        </span>
        <div className={styles.content}>
          <form className={styles.serviceForm} onSubmit={handleSubmit}>
            <FormInput label="Name" onChange={setName} />
            <FormInput label="URL" onChange={setUrl} />

            <div className={styles.buttonContainer}>
              <Button aria-label="Close the form" onClick={onClose}>
                Close
              </Button>
              <Button aria-label="Submit the form" type="submit">
                Submit
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
