import styled from 'styled-components';

import { Project } from '@/components/project';
import { personalProjects, workExperiences } from '@/content/work';

const StyledProjectsSection = styled.section`
  padding-bottom: 4rem;

  ul {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    column-gap: 4rem;
    row-gap: 8rem;
  }

  li {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    position: relative;
  }

  h2 {
    font-size: 1.5rem;
    line-height: 1.75rem;
    font-weight: 600;
    margin-top: 2.5rem;
    color: rgb(244 244 245/1);
  }

  p {
    margin-top: 1.5rem;
    font-size: 1.5rem;
    line-height: 2.3rem;
    color: rgb(161 161 170/1);
    z-index: 10;
    position: relative;
  }

  svg {
    width: 50px;
  }
`;

export function ProjectsSection() {
  const projects = [...workExperiences, ...personalProjects];
  return (
    <StyledProjectsSection>
      <div className="mt-16 sm:mt-20">
        <ul>
          {projects.map((project, index) => (
            <Project key={index} project={project} />
          ))}
        </ul>
      </div>
    </StyledProjectsSection>
  );
}
