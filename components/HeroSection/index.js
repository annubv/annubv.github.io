import styled from "styled-components";
import { PROFILE_PIC } from "../../constants/contactDetails";
import Avatar from "../Avatar";

const HeroSectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const HeroSection = () => {
  return (
    <HeroSectionWrapper>
      <Avatar avatarImage={PROFILE_PIC} />
    </HeroSectionWrapper>
  );
};

export default HeroSection;
