import styled from 'styled-components';

import { Project } from '@/components/project';
import { personalProjects, workExperiences } from '@/content/work';
import { device } from '@/helpers/device';

const StyledProjectsSection = styled.section`
  padding-bottom: 4rem;
  ul {
    display: grid;
    grid-template-columns: repeat(1, minmax(0, 1fr));
    column-gap: 4rem;
    row-gap: 4rem;
    @media ${device.tablet} {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }

    @media ${device.laptop} {
      grid-template-columns: repeat(3, minmax(0, 1fr));
      row-gap: 8rem;
    }
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
    color: ${({ theme }) => theme.colors.textHeading};
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

export function ProjectsSection(): JSX.Element {
  const projects = [...workExperiences, ...personalProjects];
  return (
    <StyledProjectsSection>
      <ul>
        {projects.map((project, index) => (
          <Project key={index} project={project} />
        ))}
      </ul>
    </StyledProjectsSection>
  );
}
