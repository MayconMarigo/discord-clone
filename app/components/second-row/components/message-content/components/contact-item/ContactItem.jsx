import {
  ContactItemButton,
  ContactName,
  CustomCloseIcon,
  CustomUserBadge,
  CustomUserBadgeContainer,
  UserStatusCircle,
} from "./ContactItem.styles";

export default function ContactItem({ content }) {
  const { name } = content;
  return (
    <ContactItemButton>
      <CustomUserBadgeContainer>
        <CustomUserBadge src="https://randomuser.me/api/portraits/men/2.jpg" width="36" height="36" />
        <UserStatusCircle status="yellow" semiCircle={true} />
      </CustomUserBadgeContainer>
        <ContactName>{name}</ContactName>
      <CustomCloseIcon />
    </ContactItemButton>
  );
}
