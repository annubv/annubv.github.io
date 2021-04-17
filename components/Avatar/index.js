import styled from "styled-components";

const AvatarImg = styled.img`
  height: 10rem;
  width: 10rem;
  border-radius: 50%;
  object-fit: cover;
`;

const Avatar = ({ avatarImage }) => {
  return <AvatarImg src={avatarImage} />;
};

export default Avatar;
