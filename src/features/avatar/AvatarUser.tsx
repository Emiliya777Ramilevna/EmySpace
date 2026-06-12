import { Avatar, AvatarFallback, AvatarImage } from "@/shared/ui/avatar/avatar";

type AvatarUserT = {
    src?: string;
    initials: string;
}

const AvatarUser = ({src, initials}: AvatarUserT) => {
  return (
    <Avatar>
      <AvatarImage src={src} />
      <AvatarFallback>{initials}</AvatarFallback>
    </Avatar>
  );
};

export default AvatarUser;
