import { Link, useLocation } from 'react-router-dom';
import {styled} from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
const mintchoco = new URL('../assets/mintchoco.png', import.meta.url).href;

interface HeaderProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

export default function Header({ darkMode, toggleDarkMode }: HeaderProps) {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <Nav>
      <Logo to="/">
        <LogoImage src={mintchoco} alt="Logo" />
      </Logo>
      <MenuContainer>
        <NavLinks>
          <StyledLink to="/" $isActive={currentPath === '/'}>
            home
          </StyledLink>
          <StyledLink to="/projects" $isActive={currentPath === '/projects'}>
            project
          </StyledLink>
          <StyledLink to="/contact" $isActive={currentPath === '/contact'}>
            contact
          </StyledLink>
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
  display: flex;
  align-items: center;
`;

const LogoImage = styled.img`
  height: 32px;
  width: auto;
  object-fit: contain;
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
`;

const StyledLink = styled(Link)<{ $isActive: boolean }>`
  transition: color 0.2s ease;
  color: ${(props) => (props.$isActive ? props.theme.accentColor : 'inherit')};
  font-weight: ${(props) => (props.$isActive ? '700' : '500')};

  &:hover {
    color: ${(props) => props.theme.accentColor};
  }
`;

const ThemeToggleBtn = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  color: ${(props) => props.theme.textColor};
  font-size: 1.1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px;
  transition: color 0.2s ease;

  &:hover {
    color: ${(props) => props.theme.accentColor};
  }
`;