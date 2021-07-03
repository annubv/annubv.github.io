import styled from "styled-components";
import { LINKEDIN_PROFILE, PROFILE_PIC } from "../../constants/contactDetails";
import { DESKTOP_MEDIA } from "../../styles/mediaConfig";
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
  ${DESKTOP_MEDIA} {
    font-size: 3.2rem;
    line-height: 3.8rem;
    max-width: 600px;
  }
`;

const ExitText = styled.p`
  text-align: center;
  font-size: 1rem;
  line-height: 2rem;
  span {
    font-weight: 500;
  }
  ${DESKTOP_MEDIA} {
    max-width: 350px;
  }
`;

const CtaButton = styled.button`
  margin-top: 4rem;
  padding: 1.5rem 2.5rem;
  background: ${(props) => props.theme.button.primary};
  color: ${(props) => props.theme.text.secondary};
  border: 1px solid ${(props) => props.theme.button.primary};
  border-radius: 2rem;
  font-size: 0.8rem;
  font-weight: 500;

  &:hover {
    background: ${(props) => props.theme.text.secondary};
    color: ${(props) => props.theme.button.primary};
  }
`;

const HeroSection = () => {
  function onClickCta() {
    const newWindow = window.open(
      LINKEDIN_PROFILE,
      "_blank",
      "noopener,noreferrer"
    );
    if (newWindow) newWindow.opener = null;
  }

  return (
    <HeroSectionWrapper>
      <Avatar avatarImage={PROFILE_PIC} />
      <IntroText>Hi, I'm Anubhav 🤟</IntroText>
      <HeadText>Building digital products and experience.</HeadText>
      <ExitText>
        a <span>Fullstack Developer</span> based in India, specialized in
        building Responsive Web Apps.
      </ExitText>
      <CtaButton onClick={onClickCta}>CONNECT WITH ME</CtaButton>
    </HeroSectionWrapper>
  );
};

export default HeroSection;
