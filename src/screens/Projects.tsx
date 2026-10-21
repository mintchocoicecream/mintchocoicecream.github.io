import {styled} from "styled-components";

export default function Projects() {
  return (
    <ProjectsWrapper>
      <Heading>Projects</Heading>
      <ProjectCard>
        <h3>Crypto Tracker v2</h3>
        <p>React와 TypeScript를 활용한 실시간 암호화폐 트래킹 웹 애플리케이션</p>
      </ProjectCard>
    </ProjectsWrapper>
  );
}

const ProjectsWrapper = styled.div`
  max-width: 900px;
  margin: 80px auto 0;
  padding: 0 20px;
`;

const Heading = styled.h2`
  font-size: 2rem;
  margin-bottom: 30px;
`;

const ProjectCard = styled.div`
  background-color: ${(props) => props.theme.cardBgColor};
  border: 1px solid ${(props) => props.theme.borderColor};
  padding: 24px;
  border-radius: 12px;
  
  h3 {
    margin-bottom: 8px;
    color: ${(props) => props.theme.accentColor};
  }
  
  p {
    opacity: 0.8;
    font-size: 0.95rem;
  }
`;