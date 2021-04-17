import styled from "styled-components";
import { PROFILE_PIC } from "../../constants/contactDetails";
import Avatar from "../Avatar";

const HeroSectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 1rem;
`;

const IntroText = styled.p`
  margin-top: 2rem;
  font-weight: 500;
  font-size: 1.3rem;
  text-align: center;
`;
const HeadText = styled.h1`
  margin: 2.3rem 0;
  text-align: center;
  font-size: 2.3rem;
  font-weight: 500;
  line-height: 2.7rem;
`;
const ExitText = styled.p`
  text-align: center;
  font-size: 1rem;
  line-height: 2rem;
  span {
    font-weight: 500;
  }
`;

const CtaButton = styled.button`
  margin-top: 4rem;
  padding: 1.5rem 2.5rem;
  background: ${(props) => props.theme.button.primary};
  color: ${(props) => props.theme.text.secondary};
  border: none;
  border-radius: 2rem;
  font-size: 0.8rem;
  font-weight: 500;
`;

const HeroSection = () => {
  return (
    <HeroSectionWrapper>
      <Avatar avatarImage={PROFILE_PIC} />
      <IntroText>Hi, I'm Anubhav 🤟</IntroText>
      <HeadText>Building digital products and experience.</HeadText>
      <ExitText>
        a <span>Product Designer</span> and <span>Visual Developer</span> in SF.
        I specialize in UI/UX Design, Responsive Web, Design and all that stuff.
      </ExitText>
      <CtaButton>CONNECT WITH ME</CtaButton>
    </HeroSectionWrapper>
  );
};

export default HeroSection;
