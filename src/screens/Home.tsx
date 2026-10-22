import { Link } from 'react-router-dom';
import {styled} from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faBriefcase, faCode } from '@fortawesome/free-solid-svg-icons';

export default function Home() {
  return (
    <HomeWrapper>
      <HeroSection>
        <Greeting>Hi, I'm Hyunjeong Seo 😆</Greeting>
        <JobTitle>Frontend Software Developer</JobTitle>
        <BioText>
          Front-End Developer with 3 years of professional experience, dedicated to building scalable web applications and exploring modern technologies. A collaborative team player who values active communication, clean code, and continuous learning.  
        </BioText>
        
        <ActionButtons>
          <PrimaryButton to="/projects">
            Explore Projects <FontAwesomeIcon icon={faArrowRight} />
          </PrimaryButton>
          <SecondaryButton to="/contact">
            Get in Touch
          </SecondaryButton>
        </ActionButtons>
      </HeroSection>

      <ExperienceSection>
        <SectionTitle>
          <FontAwesomeIcon icon={faBriefcase} /> Experience Highlight
        </SectionTitle>
        
        <ExperienceCard>
          <ExpHeader>
            <Role>Frontend Developer</Role>
            <Period>2023.06 - 2026.05 (3 Years)</Period>
          </ExpHeader>
          <Company>Webcash Company (South Korea)</Company>
          <ExpDescription>
            Contributed to front-end architecture and service development. Maintained and optimized enterprise web applications using core web technologies.
          </ExpDescription>

          <TechTags>
            <span>JavaScript</span>
            <span>HTML5</span>
            <span>CSS3</span>
            <span>jQuery</span>
            <span>MSSQL</span>
            <span>Eclipse</span>
          </TechTags>

          <MoreLink to="/projects">
            View detailed project experience <FontAwesomeIcon icon={faArrowRight} size="xs" />
          </MoreLink>
        </ExperienceCard>
        <ExperienceCard>
          <ExpHeader>
            <Role>R&D Software Developer (Project-based)</Role>
            <Period>2021.04 - 2021.06</Period>
          </ExpHeader>
          <Company>Rian Inc. (South Korea)</Company>
          <ExpDescription>
            Spearheaded the 1-person development of a real-time AI IP camera NVR system for marine vessels, integrating pose estimation models for human detection and successfully passing the Phase 1 business evaluation.  
          </ExpDescription>

          <TechTags>
            <span>Python</span>
            <span>PyQt5</span>
            <span>OpenCV</span>
            <span>MariaDB</span>
            <span>AI / R&D</span>
          </TechTags>
          <MoreLink to="/projects">
            View detailed project experience <FontAwesomeIcon icon={faArrowRight} size="xs" />
          </MoreLink>
        </ExperienceCard>
      </ExperienceSection>

      <SkillsSection>
        <SectionTitle>
          <FontAwesomeIcon icon={faCode} /> Core Tech Stack
        </SectionTitle>
        <SkillGrid>
          <SkillCategory>
            <h4>Languages & Core</h4>
            <p>JavaScript (ES6+), HTML5, CSS3, jQuery</p>
          </SkillCategory>
          <SkillCategory>
            <h4>Frameworks & Tools</h4>
            <p>React, TypeScript, Styled-Components, Vite, Git</p>
          </SkillCategory>
          <SkillCategory>
            <h4>Backend & DB</h4>
            <p>Node.js, MSSQL, Eclipse, RESTful APIs</p>
          </SkillCategory>
        </SkillGrid>
      </SkillsSection>
    </HomeWrapper>
  );
}

// ----- Styled Components -----

const HomeWrapper = styled.div`
  max-width: 900px;
  margin: 0 auto;
  padding: 40px 20px 80px;
  display: flex;
  flex-direction: column;
  gap: 60px;
`;

const HeroSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const Greeting = styled.span`
  font-size: 1.1rem;
  font-weight: 600;
  color: ${(props) => props.theme.accentColor};
`;

const JobTitle = styled.h1`
  font-size: 2.5rem;
  font-weight: 800;
  letter-spacing: -0.5px;
  line-height: 1.2;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const BioText = styled.p`
  font-size: 1.1rem;
  line-height: 1.6;
  opacity: 0.85;
  max-width: 700px;
  margin-top: 4px;
`;

const ActionButtons = styled.div`
  display: flex;
  gap: 16px;
  margin-top: 12px;
`;

const PrimaryButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  background-color: ${(props) => props.theme.accentColor};
  color: ${(props) => props.theme.whiteColor};
  padding: 12px 24px;
  border-radius: 8px;
  font-weight: 600;
  transition: opacity 0.2s ease;

  &:hover {
    opacity: 0.9;
  }
`;

const SecondaryButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  padding: 12px 24px;
  border-radius: 8px;
  font-weight: 600;
  border: 1px solid ${(props) => props.theme.borderColor || 'rgba(128, 128, 128, 0.3)'};
  transition: border-color 0.2s ease;

  &:hover {
    border-color: ${(props) => props.theme.accentColor};
    color: ${(props) => props.theme.accentColor};
  }
`;

const SectionTitle = styled.h2`
  font-size: 1.4rem;
  font-weight: 700;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  gap: 10px;
  color: ${(props) => props.theme.textColor};

  svg {
    color: ${(props) => props.theme.accentColor};
  }
`;

const ExperienceSection = styled.section``;

const ExperienceCard = styled.div`
  background-color: ${(props) => props.theme.cardBgColor || 'rgba(128, 128, 128, 0.04)'};
  border: 1px solid ${(props) => props.theme.borderColor || 'rgba(128, 128, 128, 0.15)'};
  border-radius: 12px;
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  transition: transform 0.2s ease;

  &:hover {
    border-color: ${(props) => props.theme.accentColor};
  }
`;

const ExpHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 8px;
`;

const Role = styled.h3`
  font-size: 1.2rem;
  font-weight: 700;
`;

const Period = styled.span`
  font-size: 0.9rem;
  opacity: 0.7;
`;

const Company = styled.div`
  font-weight: 600;
  color: ${(props) => props.theme.accentColor};
  font-size: 0.95rem;
`;

const ExpDescription = styled.p`
  font-size: 0.95rem;
  line-height: 1.5;
  opacity: 0.85;
`;

const TechTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 4px;

  span {
    font-size: 0.8rem;
    padding: 4px 10px;
    border-radius: 20px;
    background-color: ${(props) => props.theme.accentColor}15;
    color: ${(props) => props.theme.accentColor};
    font-weight: 500;
  }
`;

const MoreLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 0.9rem;
  font-weight: 600;
  color: ${(props) => props.theme.accentColor};
  margin-top: 8px;
  width: fit-content;

  &:hover {
    text-decoration: underline;
  }
`;

const SkillsSection = styled.section``;

const SkillGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 16px;
`;

const SkillCategory = styled.div`
  background-color: ${(props) => props.theme.cardBgColor || 'rgba(128, 128, 128, 0.04)'};
  border: 1px solid ${(props) => props.theme.borderColor || 'rgba(128, 128, 128, 0.15)'};
  border-radius: 12px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 8px;

  h4 {
    font-size: 1rem;
    font-weight: 700;
    color: ${(props) => props.theme.accentColor};
  }

  p {
    font-size: 0.9rem;
    opacity: 0.8;
  }
`;