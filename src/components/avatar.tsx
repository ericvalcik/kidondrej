import { FC } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export const KidOndrejAvatar: FC<{ small?: boolean }> = ({ small = false }) => {
  return (
    <Avatar small={small}>
      <AvatarImage src="/logocircle.png" alt="@shadcn" />
      <AvatarFallback>KO</AvatarFallback>
    </Avatar>
  );
};
