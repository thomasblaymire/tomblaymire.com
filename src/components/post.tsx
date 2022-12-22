import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { Button } from '@/components/button';
import { Time } from '@/components/time';
import { device } from '@/helpers/device';
import { PostInterface } from '@/types/post';

const StyledPost = styled.article`
  font-size: 1.5rem;
  position: relative;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: flex-start;
  position: relative;

  h2 {
    color: rgb(244 244 245 / 1);
    letter-spacing: -0.025em;
    font-weight: 600;
    font-size: 1.7rem;
    line-height: 2rem;
  }

  p {
    color: rgb(161 161 170 / 1);
    line-height: 2.4rem;
    font-size: 1.4rem;
    margin-top: 1rem;
  }
`;

const StyledPostButton = styled(Button)`
  margin-top: 2rem;
  color: rgb(20 184 166/1);
  display: flex;
  line-height: 2rem;
  font-size: 1.5rem;
  font-weight: 800;
  padding: 0;
  svg {
    stroke: rgb(20 184 166/1);
    width: 2.6rem;
    height: 2.2rem;
  }
`;

const StyledInset = styled.div`
  left: initial;
  right: initial;
  border-radius: 1rem;
  background-color: rgba(39, 39, 42, 0.5);
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 0.15s;
  position: absolute;
  height: 100%;
  opacity: 0;
  transform: translate(0, 0) rotate(0) skewX(0) skewY(0) scaleX(1) scaleY(1);
  z-index: 0;

  @media ${device.tablet} {
    left: -1.5rem;
    right: -1.5rem;
    top: 0;
  }

  &:hover {
    cursor: pointer;
    background: rgba(39, 39, 42, 0.5);
    opacity: 1;
    border-radius: 1rem;
  }
`;

const StyledTitle = styled.span`
  z-index: 10;
  position: relative;
`;

const StyledInner = styled.span`
  left: -1.5rem;
  right: -1.5rem;
  z-index: 20;
  top: -1.5rem;
  bottom: -1.5rem;
  position: absolute;
  border-radius: 1rem;
`;

interface PostProps {
  post: PostInterface;
}

interface Post {
  date: string;
  title: string;
  shortMessage: string;
  link: string;
}

export function Post(post: PostProps): JSX.Element {
  const { title, description, slug } = post.post.fields;
  const { createdAt } = post.post.sys;

  return (
    <StyledPost>
      <Link to={`/articles/${slug}`}>
        {createdAt ? <Time dateTime={createdAt} /> : null}
        <h2>
          <StyledInset />
          <StyledInner />
          <StyledTitle>{title}</StyledTitle>
          <StyledInner />
        </h2>
        <p>{description}</p>
        <StyledPostButton color="link">
          Read article
          <svg
            viewBox="0 0 16 16"
            fill="none"
            aria-hidden="true"
            className="ml-1 h-4 w-4 stroke-current"
          >
            <path
              d="M6.75 5.75 9.25 8l-2.5 2.25"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
          </svg>
        </StyledPostButton>
      </Link>
    </StyledPost>
  );
}
