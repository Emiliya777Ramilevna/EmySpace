import ButtonWithIcon from "@/shared/ui/buttons/ButtonWithIcon";
import HeartIcon from "@/shared/icons/heart.svg?react";

const SignInButton = () => {
  return (
    <ButtonWithIcon icon={<HeartIcon />} variant="primary">
      Ответить
    </ButtonWithIcon>
  );
};

export default SignInButton;
