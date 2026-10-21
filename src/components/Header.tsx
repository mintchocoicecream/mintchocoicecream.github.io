// src/components/Header.tsx
import { Link } from 'react-router-dom';
import {styled} from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';

interface HeaderProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

export default function Header({ darkMode, toggleDarkMode }: HeaderProps) {
  return (
    <Nav>
      <Logo to="/">Ang.log</Logo>
      <MenuContainer>
        <NavLinks>
          <Link to="/">home</Link>
          <Link to="/projects">project</Link>
          <Link to="/contact">contact</Link>
        </NavLinks>
        <ThemeToggleBtn onClick={toggleDarkMode}>
          <FontAwesomeIcon icon={darkMode ? faSun : faMoon} size="lg" />
        </ThemeToggleBtn>
      </MenuContainer>
    </Nav>
  );
}

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 900px;
  margin: 0 auto;
  padding: 30px 20px;
`;

const Logo = styled(Link)`
  font-size: 1.25rem;
  font-weight: 700;
  color: ${(props) => props.theme.accentColor};
`;

const MenuContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 24px;
  font-weight: 500;

  a {
    transition: color 0.2s ease;
    &:hover {
      color: ${(props) => props.theme.accentColor};
    }
  }
`;

const ThemeToggleBtn = styled.button`
  background: ${(props) => props.theme.cardBgColor};
  color: ${(props) => props.theme.textColor};
  border: 1px solid ${(props) => props.theme.borderColor};
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease;

  &:hover {
    color: ${(props) => props.theme.accentColor};
    border-color: ${(props) => props.theme.accentColor};
  }
`;