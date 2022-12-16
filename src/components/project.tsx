import { Link } from 'react-router-dom';
import styled from 'styled-components';

import linkIcon from '@/assets/icons/link.svg';

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

const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  color: rgb(228 228 231 / 1);
  font-weight: 500;
  margin-top: 1.5rem;
  font-size: 1.5rem;
  line-height: 2rem;
  color: rgb(161 161 170/1);
  z-index: 10;
  position: relative;

  span {
    margin-left: 1rem;
  }
`;

const StyledInset = styled.div``;

export function Project({ project }: any): JSX.Element {
  const { image, name, link, linkText, shortDescription } = project;
  return (
    <li key={name}>
      <StyledImageWrapper>
        <img alt="" src={image} decoding="async" data-nimg="1" loading="lazy" />
      </StyledImageWrapper>
      <h2>
        <StyledInset />
        <a href={link}>
          <span className="relative z-10">{name}</span>
        </a>
      </h2>
      <p>{shortDescription}</p>
      {link ? (
        <StyledLink to={link}>
          <img src={linkIcon} alt={name} />
          <span>{linkText}</span>
        </StyledLink>
      ) : null}
    </li>
  );
}
