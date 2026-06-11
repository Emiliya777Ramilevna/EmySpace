import { Button } from "../../button/ui/button";
type ButtonWithIconT = {
    icon?: React.ReactNode;
    children: React.ReactNode;
}

const ButtonWithIcon = ({icon, children}: ButtonWithIconT) => {
  return (
    <Button
      variant="default"
      className="flex items-center gap-2 shadow-md hover:shadow-lg transition-shadow"
    >
      {icon}
      {children}
    </Button>
  );
};

export default ButtonWithIcon;