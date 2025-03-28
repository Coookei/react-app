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
    <button onClick={onClick} className={"btn btn-" + style}>
      {children}
    </button>
  );
};

export default Button;
