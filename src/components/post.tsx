import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { Button } from '@/components/button';

const StyledPost = styled.div`
  font-size: 1.5rem;
  position: relative;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: flex-start;
  position: relative;

  h2 {
    color: rgb(244 244 245 1);
    letter-spacing: -0.025em;
    font-weight: 600;
    font-size: 2rem;
    line-height: 2rem;
  }

  p {
    color: rgb(161 161 170 1);
    line-height: 2.2rem;
    font-size: 1.4rem;
    margin-top: 1rem;
  }
`;

const StyledTime = styled.time`
  position: relative;
  color: rgb(113 113 122 /1);
  line-height: 1.5rem;
  padding-left: 0.875rem;
  font-size: 1.25rem;
  margin-bottom: 0.75rem;
  display: flex;
  align-items: center;
  order: -9999;
  margin-bottom: 2rem;
`;

const StyledTimeDivider = styled.span`
  width: 0.125rem;
  background-color: rgb(113 113 122 / 1);
  border-radius: 9999px;
  height: 1rem;
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
  left: -1.5rem;
  right: -1.5rem;
  border-radius: 1rem;
  background-color: rgba(39, 39, 42, 0.5);
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 0.15s;
  position: absolute;
  height: 100%;
  opacity: 0;
  transform: translate(0, 0) rotate(0) skewX(0) skewY(0) scaleX(1) scaleY(1);
  z-index: 0;

  &:hover {
    cursor: pointer;
    background: rgba(39, 39, 42, 0.5);
    opacity: 1;
    border-radius: 1rem;
  }
`;

const StyledDividerWrapper = styled.span`
  display: flex;
  align-items: center;
  left: 0;
  top: 0;
  bottom: 0;
  position: absolute;
`;

interface PostProps {
  post: Post;
}

interface Post {
  date: string;
  title: string;
  shortMessage: string;
  link: string;
}

export function Post({ post }: PostProps) {
  const { date, title, shortMessage, link } = post;

  console.log('debug title', title);

  return (
    <StyledPost>
      <StyledTime>
        <StyledDividerWrapper>
          <StyledTimeDivider />
        </StyledDividerWrapper>
        {date}
      </StyledTime>
      <h2>{title}</h2>
      <StyledInset />
      <p>{shortMessage}</p>
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
    </StyledPost>
  );
}
