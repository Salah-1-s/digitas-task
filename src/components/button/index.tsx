import "./styles.css";

export interface ButtonProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  children: React.ReactNode;
  secondary?: boolean | null;
  className?: string;
}

export default function GoldButton({ secondary, ...props }: ButtonProps) {
  return (
    <button
      {...props}
      className={`btn ${secondary ? "btn--secondary-gold" : "btn--gold"} ${
        props.className ?? ""
      }`}
    >
      {props.children}
      <div className="gold" />
    </button>
  );
}
