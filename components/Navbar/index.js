import styled from "styled-components";
import GithubIcon from "../../common/icons/GithubIcon";
//import MailIcon from "../../common/icons/MailIcon";
import {
  CONTACT_EMAIL,
  GITHUB_LINK,
  GITHUB_UNAME,
} from "../../constants/contactDetails";

const NavbarWrapper = styled.div`
  padding: 2rem 1.8rem;
  display: flex;
  justify-content: space-between;
`;

const MailSection = styled.div`
  display: flex;
  align-items: center;
`;

const MailButton = styled.a`
  padding: 0.6rem 0.8rem 0.5rem 0.8rem;
  background: none;
  border: 2px solid ${(props) => props.theme.border};
  border-radius: 40% 50% 50% 50%;
  margin-right: 0.5rem;
`;

const IconContainer = styled.div`
  color: ${(props) => props.theme.text};
`;

const MailText = styled.a`
  text-decoration: none;
  color: ${(props) => props.theme.text};
  font-family: "PlusJakartaSans";
  font-weight: 500;
`;

const Navbar = () => {
  return (
    <NavbarWrapper>
      <MailSection>
        <MailButton
          href={GITHUB_LINK}
          target="_blank"
          rel="noopener noreferrer"
        >
          <IconContainer>
            <GithubIcon />
          </IconContainer>
        </MailButton>

        <MailText href={GITHUB_LINK} target="_blank" rel="noopener noreferrer">
          {GITHUB_UNAME}
        </MailText>
      </MailSection>
    </NavbarWrapper>
  );
};

export default Navbar;
