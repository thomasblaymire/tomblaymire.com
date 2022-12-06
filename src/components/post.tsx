import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { Button } from '@/components/button';

const StyledPost = styled.div`
  font-size: 1.5rem;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: flex-start;

  h2 {
    color: rgb(244 244 245 1);
    letter-spacing: -0.025em;
    font-weight: 600;
    font-size: 1rem;
    line-height: 1.75rem;
  }

  p {
    color: rgb(161 161 170 1);
    line-height: 2.2rem;
    font-size: 1.4rem;
    margin-top: 0.5rem;
  }

  &:hover {
    cursor: pointer;
    background: rgba(39, 39, 42, 0.5);
    --tw-scale-x: 1;
    --tw-scale-y: 1;
    --tw-border-spacing-x: 0;
    --tw-border-spacing-y: 0;
    --tw-translate-x: 0;
    --tw-translate-y: 0;
    --tw-rotate: 0;
    --tw-skew-x: 0;
    --tw-skew-y: 0;
    transform: translate(var(--tw-translate-x), var(--tw-translate-y))
      rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y))
      scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  }
`;

const StyledTime = styled.time`
  color: rgb(113 113 122 1);
  line-height: 1.5rem;
  padding-left: 0.875rem;
  font-size: 0.875rem;
  margin-bottom: 0.75rem;
  display: flex;
  align-items: center;
  order: -9999;
`;

const StyledTimeDivider = styled.span`
  width: 0.125rem;
  background-color: rgb(113 113 122 1);
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

export function Post() {
  return (
    <StyledPost>
      <StyledTime>
        <StyledTimeDivider />
        September 5 2022
      </StyledTime>
      <h1>Crafting a design system for a multiplanetary future</h1>
      <p>
        Most companies try to stay ahead of the curve when it comes to visual design, but
        for Planetaria we needed to create a brand that would still inspire us 100 years
        from now when humanity has spread across our entire solar system.
      </p>
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
