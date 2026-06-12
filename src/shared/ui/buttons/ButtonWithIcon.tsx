import { Button } from "./button";
type ButtonWithIconT = {
  icon?: React.ReactNode;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "accent" | "muted";
};

const styles = {
  primary: "bg-primary text-primary-foreground",
  secondary: "bg-secondary text-secondary-foreground",
  accent: "bg-accent text-accent-foreground",
  muted: "bg-muted text-muted-foreground",
};

const ButtonWithIcon = ({ icon, children, variant }: ButtonWithIconT) => {
  return (
    <Button
      variant="default"
      className={[
        "flex items-center gap-2 shadow-md hover:shadow-lg transition-shadow",
        variant ? styles[variant] : "",
      ].join(" ")}
    >
      {icon && icon}
      {children}
    </Button>
  );
};

export default ButtonWithIcon;
