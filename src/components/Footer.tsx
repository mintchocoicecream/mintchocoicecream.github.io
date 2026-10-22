import { styled } from "styled-components";


export default function Footer() {
  return (
    <FooterContainer>
      <GithubLink 
        href="https://github.com/mintchocoicecream" 
        target="_blank" 
        rel="noopener noreferrer"
      >
        mintchocoicecream
      </GithubLink>
      <Copy>@ 2026. Designed & Developed by Mintchocoicecream.</Copy>
    </FooterContainer>
  );
}

const FooterContainer = styled.footer`
  max-width: 900px;
  margin: 0 auto;
  padding: 60px 20px 40px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  border-top: 1px solid ${(props) => props.theme.borderColor};
  margin-top: 80px;
`;

const GithubLink = styled.a`
  font-weight: 600;
  font-size: 0.95rem;
  color: ${(props) => props.theme.accentColor};
  transition: opacity 0.2s ease;
  width: fit-content;
  &:hover {
    opacity: 0.8;
    text-decoration: underline;
  }
`;

const Copy = styled.p`
  font-size: 0.8rem;
  opacity: 0.6;
`;