import { useEffect, useRef, useState } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import {styled, keyframes, css } from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShieldHalved } from '@fortawesome/free-solid-svg-icons';

interface ProjectItem {
  id: string;
  title: string;
  period: string;
  description: string;
  techStack: string[];
}

interface YearGroup {
  yearRange: string;
  categoryTitle: string;
  projects: ProjectItem[];
}

const CAREER_PROJECTS: YearGroup[] = [
  {
    yearRange: '2023 - 2026',
    categoryTitle: 'Webcash Company (Front-End Developer)',
    projects: [
      {
        id: 'webcash-link',
        title: 'Enterprise Link Service Development & Maintenance',
        period: '2023.06 - 2026.05',
        description:
          'Developed and maintained core enterprise resource management and financial integration web services. Responsible for front-end architecture, optimizing user interfaces, and building backend integration logic. (Note: Detailed screenshots and source codes are restricted due to company security policies.)',
        techStack: ['JavaScript', 'TypeScript', 'React', 'Styled-Components', 'MSSQL', 'JSP', 'jQuery'],
      },
      {
        id: 'webcash-link2',
        title: 'Enterprise Link Service Development & Maintenance',
        period: '2023.06 - 2026.05',
        description:
          'Developed and maintained core enterprise resource management and financial integration web services. Responsible for front-end architecture, optimizing user interfaces, and building backend integration logic. (Note: Detailed screenshots and source codes are restricted due to company security policies.)',
        techStack: ['JavaScript', 'TypeScript', 'React', 'Styled-Components', 'MSSQL', 'JSP', 'jQuery'],
      },
      {
        id: 'webcash-link3',
        title: 'Enterprise Link Service Development & Maintenance',
        period: '2023.06 - 2026.05',
        description:
          'Developed and maintained core enterprise resource management and financial integration web services. Responsible for front-end architecture, optimizing user interfaces, and building backend integration logic. (Note: Detailed screenshots and source codes are restricted due to company security policies.)',
        techStack: ['JavaScript', 'TypeScript', 'React', 'Styled-Components', 'MSSQL', 'JSP', 'jQuery'],
      },
    ],
  },
  {
    yearRange: '2021',
    categoryTitle: 'Rian Inc.(National R&D Project)',
    projects: [
      {
        id: 'marine-nvr',
        title: 'Real-time AI IP Camera NVR System for Marine Vessels',
        period: '2021.04 - 2021.06',
        description:
          'Spearheaded the 1-person R&D development of a real-time video processing NVR program for marine vessels. Integrated human pose estimation models and managed database architecture, successfully passing the Phase 1 business evaluation. (Visual demos omitted due to project confidentiality.)',
        techStack: ['Python', 'PyQt5', 'OpenCV', 'MariaDB', 'AI / R&D'],
      },
    ],
  },
  {
    yearRange: '2020',
    categoryTitle: 'Previous Experience / Projects',
    projects: [
      {
        id: 'web-foundations',
        title: 'Web Application & Development Projects',
        period: '2020',
        description:
          'Conducted foundational web development projects and explored core programming concepts, building a strong base in software engineering and web technologies.',
        techStack: ['HTML/CSS', 'JavaScript', 'Git'],
      },
    ],
  },
];

const ALL_TECH_TAGS = [
  'All',
  ...Array.from(
    new Set(
      CAREER_PROJECTS.flatMap((group) =>
        group.projects.flatMap((project) => project.techStack)
      )
    )
  ),
];

export default function Projects() {
  const [searchParams] = useSearchParams();
  const targetYear = searchParams.get('year');

  const [selectedTag, setSelectedTag] = useState<string>('All');

  const location = useLocation();
  const [highlightedYear, setHighlightedYear] = useState<string | null>(null);
  const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({});

  useEffect(() => {
    if (targetYear && sectionRefs.current[targetYear]) {
      setHighlightedYear(targetYear);

      sectionRefs.current[targetYear]?.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
      });

      const timer = setTimeout(() => {
        setHighlightedYear(null);
      }, 2500);

      return () => clearTimeout(timer);
    }
  }, [location]);

  // filter
  const filteredCareerProjects = CAREER_PROJECTS.map((group) => {
    if (selectedTag === 'All') return group;
    const filteredProjects = group.projects.filter((project) =>
      project.techStack.includes(selectedTag)
    );
    return { ...group, projects: filteredProjects };
  }).filter((group) => group.projects.length > 0);

  return (
    <ProjectsWrapper>
      <HeaderSection>
        <Title>Projects & Experience</Title>
        <Subtitle>
          A comprehensive history of professional projects and system developments I have worked on. 
          *Certain project deliverables are omitted due to corporate security policies.
        </Subtitle>
      </HeaderSection>

      {/* Tech Tag Filter Section */}
      <FilterWrapper>
        <FilterLabel>Filter by Technology:</FilterLabel>
        <TagList>
          {ALL_TECH_TAGS.map((tag) => (
            <FilterTagButton
              key={tag}
              $isSelected={selectedTag === tag}
              onClick={() => setSelectedTag(tag)}
            >
              {tag}
            </FilterTagButton>
          ))}
        </TagList>
      </FilterWrapper>

      {/* Career Container */}
      <CareerContainer>
        {filteredCareerProjects.length > 0 ? (
          filteredCareerProjects.map((group) => {
            const isHighlighted = highlightedYear === group.yearRange;

            return (
              <YearSection
                key={group.yearRange}
                ref={(el) => {
                  sectionRefs.current[group.yearRange] = el;
                }}
                $isHighlighted={isHighlighted}
              >
                <YearHeader>
                  <YearLabel>{group.yearRange}</YearLabel>
                  <CompanyLabel>{group.categoryTitle}</CompanyLabel>
                </YearHeader>

                <ProjectList>
                  {group.projects.map((project) => (
                    <ProjectCard key={project.id}>
                      <ProjectMeta>
                        <ProjectTitle>{project.title}</ProjectTitle>
                        <Period>{project.period}</Period>
                      </ProjectMeta>

                      <Description>{project.description}</Description>

                      <SecurityNotice>
                        <FontAwesomeIcon icon={faShieldHalved} /> Confidential / Internal Project
                      </SecurityNotice>

                      <TechStackWrapper>
                        {project.techStack.map((tech) => (
                          <TechTag
                            key={tech}
                            $isHighlight={selectedTag === tech}
                            onClick={() => setSelectedTag(tech)}
                          >
                            {tech}
                          </TechTag>
                        ))}
                      </TechStackWrapper>
                    </ProjectCard>
                  ))}
                </ProjectList>
              </YearSection>
            );
          })
        ) : (
          <EmptyState>No projects found for "{selectedTag}".</EmptyState>
        )}
      </CareerContainer>
    </ProjectsWrapper>
  );
}

// ----- Styled Components -----

const ProjectsWrapper = styled.div`
  max-width: 850px;
  margin: 0 auto;
  padding: 60px 20px 100px;
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

const HeaderSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: 800;
  letter-spacing: -0.5px;
`;

const Subtitle = styled.p`
  font-size: 1.05rem;
  line-height: 1.6;
  opacity: 0.8;
  max-width: 700px;
`;

const FilterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 18px 20px;
  background-color: ${(props) => props.theme.cardBgColor || props.theme.whiteColor};
  border: 1px solid ${(props) => props.theme.borderColor || 'rgba(128, 128, 128, 0.15)'};
  border-radius: 14px;
`;

const FilterLabel = styled.span`
  font-size: 0.85rem;
  font-weight: 700;
  opacity: 0.7;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;

const TagList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

const FilterTagButton = styled.button<{ $isSelected: boolean }>`
  padding: 6px 14px;
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: 600;
  border: 1px solid
    ${(props) =>
      props.$isSelected
        ? props.theme.accentColor || '#10b981'
        : 'rgba(128, 128, 128, 0.2)'};
  background-color: ${(props) =>
    props.$isSelected
      ? props.theme.accentColor || '#10b981'
      : 'transparent'};
  color: ${(props) => (props.$isSelected ? props.theme.whiteColor : 'inherit')};
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    border-color: ${(props) => props.theme.accentColor || '#10b981'};
    transform: translateY(-1px);
  }
`;

const CareerContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

const pulseHighlight = keyframes`
  0% {
    box-shadow: 0 0 0 0 rgba(16, 185, 129, 0.4);
  }
  50% {
    box-shadow: 0 0 20px 4px rgba(16, 185, 129, 0.3);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(16, 185, 129, 0);
  }
`;

const YearSection = styled.section<{ $isHighlighted?: boolean }>`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 16px;
  border-radius: 16px;
  transition: all 0.3s ease;

  ${(props) =>
    props.$isHighlighted &&
    css`
      animation: ${pulseHighlight} 1.5s ease-in-out infinite;
      background-color: ${(props) => props.theme.accentColor || '#10b981'}08;
    `}
`;

const YearHeader = styled.div`
  display: flex;
  align-items: baseline;
  gap: 16px;
  border-bottom: 2px solid ${(props) => props.theme.accentColor || '#10b981'}30;
  padding-bottom: 10px;
  flex-wrap: wrap;
`;

const YearLabel = styled.h2`
  font-size: 1.4rem;
  font-weight: 800;
  color: ${(props) => props.theme.accentColor || '#10b981'};
`;

const CompanyLabel = styled.span`
  font-size: 1.1rem;
  font-weight: 700;
  opacity: 0.9;
`;

const ProjectList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const ProjectCard = styled.div`
  background-color: ${(props) => props.theme.cardBgColor || props.theme.whiteColor};
  border: 1px solid ${(props) => props.theme.borderColor || 'rgba(128, 128, 128, 0.15)'};
  border-radius: 14px;
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  transition: transform 0.2s ease, border-color 0.2s ease;

  &:hover {
    border-color: ${(props) => props.theme.accentColor || '#10b981'};
    transform: translateY(-2px);
    box-shadow: 0 4px 14px rgba(0, 0, 0, 0.04);
  }
`;

const ProjectMeta = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 12px;
  flex-wrap: wrap;
`;

const ProjectTitle = styled.h3`
  font-size: 1.2rem;
  font-weight: 700;
  line-height: 1.3;
`;

const Period = styled.span`
  font-size: 0.85rem;
  opacity: 0.65;
  font-weight: 600;
`;

const Description = styled.p`
  font-size: 0.95rem;
  line-height: 1.6;
  opacity: 0.85;
`;

const SecurityNotice = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 0.8rem;
  color: #eab308;
  font-weight: 600;
  background-color: #eab30815;
  padding: 4px 10px;
  border-radius: 6px;
  width: fit-content;
`;

const TechStackWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-top: 4px;
`;

const TechTag = styled.span<{ $isHighlight: boolean }>`
  font-size: 0.75rem;
  padding: 4px 10px;
  border-radius: 12px;
  background-color: ${(props) =>
    props.$isHighlight
      ? props.theme.accentColor || '#10b981'
      : (props.theme.accentColor || '#10b981') + '15'};
  color: ${(props) => (props.$isHighlight ? props.theme.whiteColor: props.theme.accentColor || '#10b981')};
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    opacity: 0.9;
  }
`;

const EmptyState = styled.div`
  text-align: center;
  padding: 40px;
  opacity: 0.6;
  font-size: 1rem;
`;