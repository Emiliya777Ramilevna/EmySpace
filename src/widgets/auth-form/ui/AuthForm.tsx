import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/shared/ui/card/card";
import InputIconPlaceholder from "@/shared/ui/inputs/InputIconPlaceholder";
import EmailIcon from "@/shared/ui/icons/mail.svg?react";
import PasswordIcon from "@/shared/ui/icons/lock.svg?react";

const AuthForm = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Вход</CardTitle>
        <CardDescription>Вернитесь к темам и уютным разговорам</CardDescription>
        {/* <CardAction></CardAction> */}
      </CardHeader>
      <CardContent>
        <form>
            <InputIconPlaceholder placeholder="Email" type="email" icon={<EmailIcon />}></InputIconPlaceholder>
            <InputIconPlaceholder placeholder="Пароль" type="password" icon={<PasswordIcon />}></InputIconPlaceholder>
            <label htmlFor="isSavePassword">Запомнить</label>
            <input id="isSavePassword" type="checkbox" />
        </form>
      </CardContent>
      <CardFooter>{/* <p>Card Footer</p> */}</CardFooter>
    </Card>
  );
};

export default AuthForm;
