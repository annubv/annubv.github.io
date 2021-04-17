import styled from "styled-components";
import GithubIcon from "../../common/icons/GithubIcon";
import { GITHUB_LINK, GITHUB_UNAME } from "../../constants/contactDetails";
import ThemeToggleButton from "../ThemeToggleButton";

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
  border: 2px solid ${(props) => props.theme.border.primary};
  border-radius: 40% 50% 50% 50%;
  margin-right: 0.5rem;
`;

const IconContainer = styled.div`
  color: ${(props) => props.theme.text.primary};
`;

const MailText = styled.a`
  text-decoration: none;
  color: ${(props) => props.theme.text.primary};
  font-family: "PlusJakartaSans";
  font-weight: 500;
`;

const Navbar = ({ toggleTheme, currentTheme }) => {
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
      <ThemeToggleButton
        toggleTheme={toggleTheme}
        currentTheme={currentTheme}
      />
    </NavbarWrapper>
  );
};

export default Navbar;
