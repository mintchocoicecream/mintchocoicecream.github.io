import { useEffect, useRef, useState } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import {styled, keyframes, css } from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShieldHalved } from '@fortawesome/free-solid-svg-icons';
import ScrollTopButton from '../components/Buttons.tsx';

interface DescriptionItem {
  label?: string;
  content: string;
}

interface ProjectItem {
  id: string;
  title: string;
  period: string;
  description: string | DescriptionItem[];
  role?: string;
  team?: string;
  award?: string;
  links?: {github?:string, ppt?:string, web?:string};
  securityNotice: string;
  techStack: string[];
}

interface YearGroup {
  yearRange: string;
  categoryTitle: string;
  companyName: string;
  coprLink: string;
  projects: ProjectItem[];
}

const CAREER_PROJECTS: YearGroup[] = [
  {
    yearRange: '2023 - 2026',
    categoryTitle: 'Webcash Company (Front-End Developer)',
    companyName: 'Webcash',
    coprLink:'https://www.webcash.co.kr/2026/MAIN.html',
    projects: [
      {
        id: 'webcash-link',
        title: 'e-IRB (Electronic Institutional Review Board) Platform Development & Maintenance',
        period: '2024.10 - 2026.05',
        team: "6-member team project",
        role: "Frontend & Admin Dashboard Development",
        description:[
          {content: "Developed and maintained the e-IRB system, an electronic platform designed to streamline human subject research compliance, bioethics protocol submissions, and institutional review board (IRB) approval workflows."},
          {label: "Admin Panel & Environment Configuration", content: "Developed comprehensive administrator dashboards and system management tools, enabling superusers to configure platform settings, manage user permissions, and control global system parameters."},
          {label: "Hospital Enterprise SSO Integration", content: "Implemented secure Single Sign-On (SSO) authentication by integrating with hospital institutional systems to provide seamless and unified login access for medical professionals and researchers."},
          {label: "Bioethics Review & Protocol Workflow Development", content: "Engineered core interactive modules for bioethics research proposal submission and multi-stage IRB protocol review processes, streamlining end-to-end compliance approval workflows."},
          {label: "Enterprise Reporting & Document Generation", content: "Designed and implemented dynamic reporting templates and print documents using OZ Report (an enterprise reporting engine), enabling seamless rendering, PDF generation, and printing of complex institutional data."},
        ],
        securityNotice:'Y',
        techStack: ['JavaScript', 'MSSQL', 'HTML5', 'CSS', 'SSO', 'jQuery'],
      },
      {
        id: 'webcash-link2',
        title: 'LINC 3.0 Integrated Research & Fund Management Platform: Development & Maintenance',
        period: '2023.12 - 2026.05',
        team: "4-member team project",
        role: "Lead Frontend Developer",
        description:[
          {content: "Developed an integrated budget and performance management platform tailored for university LINC 3.0 (Leaders in Industry-university Cooperation) business units to streamline administrative workflows, research fund execution, and outcome tracking."},
          {label: "Core Development & Maintenance", content: "Served as the lead developer responsible for end-to-end feature implementation, UI optimization, and system stability."},
          {label: "Authentication & SSO Integration", content: "Implemented secure login and registration systems featuring institutional Single Sign-On (SSO) integration for university systems alongside social login capabilities (Naver)."},
          {label: "Data Visualization", content: "Built dynamic data visualization dashboards by bridging university institutional databases with the Rerp enterprise database to clearly present financial and operational metrics."},
          {label: "Automated Research Matching Engine", content: "Designed and implemented an automated matching algorithm that correlates business grant announcements with faculty research keywords, significantly streamlining industry-academia collaboration workflows."},
        ],
        securityNotice:'Y',
        techStack: ['JavaScript', 'MSSQL', 'Spring', 'Rest API', 'HTML5', 'CSS', 'SSO', 'Figma', 'jQuery'],
      },
      {
        id: 'webcash-link3',
        title: 'rERP (Research Enterprise Resource Planning) System Development & Maintenance',
        period: '2023.06 - 2026.05',
        role: "Frontend Development",
        description:[
          {content: "Developed and maintained core enterprise resource management and financial integration web services. Responsible for front-end architecture, optimizing user interfaces, and building backend integration logic."},
          {label: "Enterprise-Scale Platform Maintenance", 
           content: "Managed, optimized, and scaled core modules of the rERP financial platform, reliably serving 100+ institutions including major universities, research hospitals, and national research bodies across South Korea."},
          {label: "Database Integration & Data Management",
           content: "Architected and managed data pipelines bridging client-specific institutional databases with the central rERP database to ensure seamless data synchronization and integrity.",},
          {label: "Multi-Environment Remote Troubleshooting",
           content: "Diagnosed and resolved critical system errors across diverse server environments (Windows & Linux) by establishing remote access and conducting deep-level log analysis to maintain high service availability."},
          {label: "Custom Feature Development",
           content: "Designed and implemented tailor-made administrative features, UI components, and functional modules customized to satisfy specific institutional requirements.",
          }
        ],
        securityNotice:'Y',
        techStack: ['JavaScript', 'MSSQL', 'HTML5', 'CSS', 'JSP', 'jQuery'],
      },
    ],
  },
  {
    yearRange: '2022',
    categoryTitle: 'NomadCoders Clone Coding Challenges',
    companyName: 'NomadCoders',
    coprLink:'https://nomadcoders.co/',
    projects: [
      {
        id: 'nomad',
        title: 'CSS Clone Coding Challenge',
        period: '2022.08.10~2022.09.07',
        description:[
          {content: "Conducted a clone coding challenge focused on mastering advanced CSS techniques, writing styles in SCSS and compiling them into CSS using Gulp. Implemented 5 responsive posters and 10 website layouts using Flexbox and CSS Grid to ensure adaptability across various screen sizes."},
        ],
        securityNotice:'N',
        links: {
          web: "https://mintchocoicecream.github.io/CSSLayoutCollection/",
        },
        techStack: ['HTML5', 'SCSS', 'JavaScript'],
      },
      {
        id: 'nomad2',
        title: 'GreenE: Vanilla JS Drawing App',
        period: '2022.05.03 ~ 2022.05.21 (Updated: 2022.07.27 ~ 2022.08.05)',
        description:[
          {content: "Developed a web-based drawing application using vanilla JavaScript and the Canvas API to strengthen core JavaScript fundamentals and interactive features.Implemented core tools including freehand drawing, shape rendering (rectangles and circles), color filling, and an eraser.Added advanced features such as image insertion, text overlay, and canvas drawing export (saving)"},
        ],
        links: {
          github: "https://github.com/mintchocoicecream/paintingJS",
          web: "https://mintchocoicecream.github.io/paintingJS/",
        },
        securityNotice:'N',
        techStack: ['JavaScript', 'HTML5', 'CSS'],
      },
      {
        id: 'nomad3',
        title: 'Twitter Clone Coding',
        period: '2022.03.04 ~ 2022.04.01',
        description:[
          {content: "Developed a Twitter clone application using React.js and Firebase to gain hands-on experience with React Hooks and React Router.Implemented user authentication and real-time CRUD operations utilizing Firebase.Added file upload functionality using Cloud Firestore."},
        ],
        links: {
          github: "https://github.com/mintchocoicecream/mintwitter",
          web: "https://mintchocoicecream.github.io/mintwitter/",
        },
        securityNotice:'N',
        techStack: ['React', 'JavaScript', 'HTML5', 'CSS', 'Firebase'],
      },
      {
        id: 'nomad4',
        title: 'KakaoTalk Clone Coding',
        period: '2022.03.11~2022.03.28',
        description:[
          {content: "Developed a KakaoTalk clone web application using only HTML5, CSS3, and JavaScript to master the fundamentals of web service implementation.Built a responsive layout using Flexbox and enhanced user experience with CSS animations and transitions."},          
        ],
        securityNotice:'N',
        links: {
          github: "https://github.com/mintchocoicecream/chat-clone",
          web: "https://mintchocoicecream.github.io/chat-clone/",
        },
        techStack: ['JavaScript', 'HTML5', 'CSS'],
      },
    ],
  },
  {
    yearRange: '2021',
    categoryTitle: 'Rian Inc. (R&D Software Developer)',
    companyName: 'Rian Inc.',
    coprLink:'http://rian.kr/',
    projects: [
      {
        id: 'marine-nvr',
        title: 'Real-time AI IP Camera NVR System for Marine Vessels',
        period: '2021.04 - 2021.06',
        description:
          'Spearheaded the 1-person R&D development of a real-time video processing NVR program for marine vessels. Integrated human pose estimation models and managed database architecture, successfully passing the Phase 1 business evaluation. (Visual demos omitted due to project confidentiality.)',
        securityNotice:'Y',
        links: {
          ppt: "https://drive.google.com/file/d/1DnFW1Fmng9-gqWjCH63zXi-6P4HYsvnm/view",
        },
        techStack: ['Python', 'PyQt5', 'OpenCV', 'MariaDB', 'AI / R&D'],
      },
    ],
  },
  {
    yearRange: '2020',
    categoryTitle: 'Completed Machine Learning Developer Bootcamp',
    companyName: 'Korean Foundation for Quality',
    coprLink:'https://www.kfq.or.kr/',
    projects: [
      {
        id: 'ML',
        title: 'Automobile Steering Wheel Defect Detection System Using AnoGAN',
        period: '2020.10.22~2020.11.20',
        team: "3-member team project",
        role: "Algorithm application & integration, Program UI development",
        description:[
          {content: `Researched anomaly detection and relevant domestic/international papers to select the optimal algorithm.Adopted the AnoGAN algorithm and implemented the core logic to calculate the 'anomaly score' as a benchmark for determining normal/abnormal input data.Developed the application user interface (UI) using QtDesigner and PyQt5, which are widely used for industrial programs.`},
        ],
        award: "Won the Excellence Award in the AI SW Development category at the 3rd Industry-Academia Cooperation Final Project Competition (Organized by the Korean Foundation for Quality).",
        links: {
          github: "https://github.com/mintchocoicecream/AnoGAN-", 
          ppt: "https://drive.google.com/file/d/1cGhJvBldiP4HsT5CWcmAA8b76EMv564m/view?usp=sharing"  
        },
        securityNotice:'Y',  
        techStack: ['Python', 'Tensorflow', 'OpenCV', 'QtDesigner', 'h5py', 'Git'],
      },
      {
        id: 'ML2',
        title: 'Predicting the Final Win Rates of the 2020 KBO League Using Python',
        period: '2020.07.24~2020.07.31',
        team: "3-member team project",
        role: "Data Collection, Preprocessing, Analysis & Presentation Design",
        description:[
          {content: "Crawled team and player match records from official club websites using BeautifulSoup and Selenium.Performed data preprocessing, including standardizing team names, converting data types, and handling missing values.Measured correlation coefficients between all preprocessed data columns and team win rates using simple linear regression."},
          ],
        links: {
          github: "https://github.com/mintchocoicecream/2020KBO",
          ppt: "https://drive.google.com/file/d/1YIvdYp78byZomewLop-tBXy5olrUv6jW/view"
        },
        securityNotice:'N',
        techStack: ['Python'],
      },
      {
        id: 'ML3',
        title: 'SoulMovie: Movie-Sharing Web Service Using Spring Framework',
        period: '2020.06.24~~2020.07.04',
        team: "6-member team project",
        role: "UI Design, Login & Sign-up Feature Implementation",
        description:[
          {content: "Designed and built the user interface by customizing a free open-source Bootstrap template using JSP and CSS to match the service theme.Implemented user registration and login functionalities, storing user input in OracleDB and validating credentials against stored records.Facilitated team collaboration and version control by sharing and managing code through GitHub Desktop and Git."},
        ],
        links: {
          github: "https://github.com/mintchocoicecream/SOULMOVIE",
          ppt: "https://drive.google.com/file/d/172TDUcDLfQ7XBLwc3t12CFtuXJ5UKhUB/view",
        },
        securityNotice:'N',
        techStack: ['Java', 'JavaScript', 'Python', 'Spring', 'OracleDB', 'HTML5', 'CSS', 'Git'],
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
                  <CoprLink href={group.coprLink} target="_blank" rel="noopener noreferrer">{group.companyName}</CoprLink>
                </YearHeader>


                <ProjectList>
                  {group.projects.map((project) => (
                    <ProjectCard key={project.id}>
                      <ProjectMeta>
                        <ProjectTitle>{project.title}</ProjectTitle>
                        <Period>{project.period}</Period>
                      </ProjectMeta>

                      {(project.team || project.role) && (
                        <MetaInfo>
                          {project.team && <p>👥 {project.team}</p>}
                          {project.role && <p>Role: {project.role}</p>}
                        </MetaInfo>
                      )}

                      <DescriptionContainer>
                        {Array.isArray(project.description) ? (
                          project.description.map((desc, idx) => (
                            <DescriptionRow key={idx}>
                              {desc.label && <DescLabel>• {desc.label}:</DescLabel>}
                              <DescContent>{desc.content}</DescContent>
                            </DescriptionRow>
                          ))
                        ) : (
                          <Description>{project.description}</Description>
                        )}
                      </DescriptionContainer>
                      
                      {project.award && (
                        <AwardBox>
                          <span>🏆 Award:</span>
                          <div>{project.award}</div>
                        </AwardBox>
                      )}

                      {project.securityNotice == 'Y' && 
                      <SecurityNotice>
                        <FontAwesomeIcon icon={faShieldHalved} /> Confidential / Internal Project
                      </SecurityNotice>
                      }

                      {project.links && (
                      <LinksContainer>
                        {project.links.github && (
                          <LinkButton href={project.links.github} target="_blank" rel="noopener noreferrer">
                            GitHub
                          </LinkButton>
                        )}
                        {project.links.ppt && (
                          <LinkButton href={project.links.ppt} target="_blank" rel="noopener noreferrer">
                            Presentation (PPT)
                          </LinkButton>
                        )}
                        {project.links.web && (
                          <LinkButton href={project.links.web} target="_blank" rel="noopener noreferrer">
                            Website
                          </LinkButton>
                        )}
                      </LinksContainer>
                    )}
                      
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
      <ScrollTopButton />
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

const CoprLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 6px 14px;
  font-size: 0.8rem;
  font-weight: 500;
  color: #374151;
  background-color: #f3f4f6;
  border-radius: 25px;
  text-decoration: none;
  transition: background-color 0.2s ease;

  &:hover {
    opacity: .8;
  }
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

const MetaInfo = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 12px;
  font-size: 0.875rem;
  color: #4b5563;
  margin-bottom: 16px;
`;

const AwardBox = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 8px;
  padding: 12px;
  background-color: #fffbeb;
  border: 1px solid #fde68a;
  border-radius: 8px;
  color: #92400e;
  font-size: 0.875rem;
  margin-bottom: 16px;

  span {
    font-weight: 600;
  }
`;

const LinksContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  padding-top: 12px;
  border-top: 1px solid #f3f4f6;
`;

const LinkButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 6px 14px;
  font-size: 0.8rem;
  font-weight: 500;
  color: #374151;
  background-color: #f3f4f6;
  border-radius: 6px;
  text-decoration: none;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #e5e7eb;
  }
`;
const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  margin: 4px 0;
`;

const DescriptionRow = styled.div`
  display: flex;
  align-items: baseline;
  gap: 6px;
  font-size: 0.95rem;
  line-height: 1.5;
  opacity: 0.85;
  flex-wrap: wrap;

  @media (max-width: 480px) {
    flex-direction: column;
    gap: 2px;
  }
`;

const DescLabel = styled.span`
  font-weight: 700;
  color: ${(props) => props.theme.accentColor || '#10b981'};
`;

const DescContent = styled.span`
  opacity: 0.9;
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