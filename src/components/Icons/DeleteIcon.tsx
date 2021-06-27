import styles from "./Icons.module.scss";

export const DeleteIcon = () => {
  return (
    <div id="deleteIcon">
      <svg
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 48 48"
        width="24px"
        height="24px"
      >
        <polyline
          fill="#f55376"
          points="12.229,42.048 5.952,35.77 35.771,5.952 42.048,12.23 12.229,42.048"
        />
        <path
          fill="#f55376"
          d="M30.278,24L24,30.278l11.771,11.77l6.277-6.278L30.278,24 M12.229,5.952L5.952,12.23L17.722,24 L24,17.722L12.229,5.952"
        />
        <polyline
          fill="#eb0000"
          points="24,17.722 17.722,24 24,30.278 30.278,24 24,17.722"
        />
      </svg>
      <span className={styles.visuallyHidden}>Delete the service</span>
    </div>
  );
};
