import { ServiceTableProps } from "../../types";
import { DeleteIcon } from "../Icons/DeleteIcon";

import styles from "./ServiceTable.module.scss";

export const ServiceTable: React.FC<ServiceTableProps> = ({
  data,
  handleDelete,
}) => {
  return (
    <>
      <div className={styles.tableTitle} role="heading" aria-level={1}>
        <h2>Service Table</h2>
      </div>
      <table>
        <thead>
          <tr>
            <th className={styles.nameCol}>Name</th>
            <th className={styles.statusCol}>Status</th>
            <th>Url</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, i) => (
            <tr key={i}>
              <td>{item.name}</td>
              <td>{item.status.status}</td>
              <td>{item.status.url}</td>
              <td>
                <div
                  className={styles.iconWrapper}
                  onClick={() => handleDelete(item.name)}
                >
                  <DeleteIcon />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};
