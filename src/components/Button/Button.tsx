import styles from "./Button.module.css";

interface Props {
  children: string;
  style?:
    | "primary"
    | "secondary"
    | "success"
    | "danger"
    | "warning"
    | "info"
    | "light"
    | "dark";
  onClick: () => void;
}

const Button = ({ children, style = "primary", onClick }: Props) => {
  return (
    <button
      className={[styles.btn, styles["btn-" + style]].join(" ")}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
