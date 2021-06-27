import { useEffect, useState } from "react";
import { api } from "../../api";
import { Service } from "../../types";
import { Button } from "../Button/Button";
import { ServiceFormDialog } from "../ServiceFormDialog/ServiceFormDialog";
import { ServiceTable } from "../ServiceTable/ServiceTable";
import { Snackbar } from "../Snackbar/Snackbar";

import styles from "./MainPage.module.scss";

export const MainPage = () => {
  const [data, setData] = useState([] as Service[]);
  const [showDialog, setShowDialog] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");

  useEffect(() => {
    api.getServiceData().then(setData);
  }, []);

  const handleSubmit = (name: string, url: string) => {
    api.postServiceData(`${name}`, `${url}`);
    setSnackbarMessage(
      "New service added. Please refresh the page to see the updated table."
    );
  };

  const handleDelete = (name: string) => {
    api.deleteServiceData(name);
    setSnackbarMessage(
      "Your service is deleted. Please refresh the page to see the updated table."
    );
  };

  return (
    <>
      <div className={styles.container} role="main">
        <div className={styles.tableContainer}>
          <ServiceTable data={data} handleDelete={handleDelete} />
          <div className={styles.addButtonContainer}>
            <Button onClick={() => setShowDialog(true)}>Add</Button>
          </div>
        </div>
        {showDialog && (
          <ServiceFormDialog
            onClose={() => setShowDialog(false)}
            onSubmit={handleSubmit}
          />
        )}
      </div>

      <Snackbar open={!!snackbarMessage} onClose={() => setSnackbarMessage("")}>
        {snackbarMessage}
      </Snackbar>
    </>
  );
};
