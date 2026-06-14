import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/shared/ui/inputs/InputGroup";

type InputIconPlaceholderT = {
  placeholder: string;
  icon?: React.ReactNode;
  type?: React.HTMLInputTypeAttribute;
};

const InputIconPlaceholder = ({ placeholder, icon, type = "text" }: InputIconPlaceholderT) => {
  return (
    <InputGroup>
      <InputGroupInput placeholder={placeholder} type={type} />
      {icon && <InputGroupAddon>{icon}</InputGroupAddon>}
    </InputGroup>
  );
};

export default InputIconPlaceholder;
