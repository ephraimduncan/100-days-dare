import { Avatar, AvatarBadge } from "@chakra-ui/react";

export default function UserAvatar({ name, url }) {
  return (
    <>
      <Avatar m={2} name={name} src={url} />
    </>
  );
}
