import styled from "styled-components";

const ThemeToggleButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ThemeToggleButton = ({ toggleTheme, currentTheme }) => (
  <ThemeToggleButtonWrapper onClick={toggleTheme}>
    <input
      readOnly
      type="checkbox"
      id="theme-toggle-btn-hide-checkbox"
      checked={currentTheme === "light"}
    />
    <label htmlFor="theme-toggle-btn-hide-checkbox" className="toggle">
      <span className="toggle-button">
        <span className="crater crater-1"></span>
        <span className="crater crater-2"></span>
        <span className="crater crater-3"></span>
        <span className="crater crater-4"></span>
        <span className="crater crater-5"></span>
        <span className="crater crater-6"></span>
        <span className="crater crater-7"></span>
      </span>
      <span className="star star-1"></span>
      <span className="star star-2"></span>
      <span className="star star-3"></span>
      <span className="star star-4"></span>
      <span className="star star-5"></span>
      <span className="star star-6"></span>
      <span className="star star-7"></span>
      <span className="star star-8"></span>
    </label>
  </ThemeToggleButtonWrapper>
);

export default ThemeToggleButton;
