import  "./button.css"


type ButtonProps = {
  children: React.ReactNode;
  variant?: "primary" | "neutral" | "subtle";
};

export default function Button({
  children,
  variant = "primary",
}: ButtonProps) {
  return (
    <button className={`btn btn-${variant}`}>
      {children}
    </button>
  );
}