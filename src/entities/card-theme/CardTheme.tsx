import { Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/shared/ui/card/card";

const CardTheme = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle></CardTitle>
        <CardDescription></CardDescription>
        <CardAction></CardAction>
      </CardHeader>
      <CardContent>
        {/* <p>Card Content</p> */}
      </CardContent>
      <CardFooter>
        {/* <p>Card Footer</p> */}
      </CardFooter>
    </Card>
  );
};

export default CardTheme;
