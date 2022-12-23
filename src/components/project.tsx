import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { PersonalProjectItem } from '@/content/work';

const StyledImageWrapper = styled.div`
  background-color: rgb(39 39 42/1);
  border-color: rgba(63, 63, 70, 0.5);
  border-width: 1px;
  border-radius: 9999px;
  justify-content: center;
  align-items: center;
  width: 5rem;
  height: 5rem;
  display: flex;
  z-index: 10;
  right: 8px;
  position: relative;

  img {
    width: 35px;
    height: 35px;
  }
`;

const StyledProjectLink = styled(Link)`
  box-sizing: border-box;
  padding: 1rem;
  border-radius: 1rem;
  transition: all 0.4s ease-in-out 0s;
  &:hover {
    box-shadow: rgb(0 0 0 / 10%) -1px 10px 19px 0px;
    transition: all 0.4s ease-in-out 0s;
    background: rgba(39, 39, 42, 0.5);
  }
`;

interface ProjectProps {
  project: PersonalProjectItem;
}

export function Project({ project }: ProjectProps): JSX.Element {
  const { image, name, link, linkText, shortDescription } = project;
  return (
    <StyledProjectLink to={linkText}>
      <li key={name}>
        <StyledImageWrapper>
          <img alt="" src={image} decoding="async" data-nimg="1" loading="lazy" />
        </StyledImageWrapper>
        <h2>
          <a href={link}>
            <span>{name}</span>
          </a>
        </h2>
        <p>{shortDescription}</p>
      </li>
    </StyledProjectLink>
  );
}
