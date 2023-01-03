import styled from 'styled-components';

import { device } from '@/helpers/device';

const StyledTimeLine = styled.div`
  display: grid;
  grid-template-columns: repeat(1, minmax(0, 1fr));
  row-gap: 2rem;
  align-items: baseline;
  max-width: 68rem;

  @media ${device.tablet} {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }

  h2 {
    color: ${({ theme }) => theme.colors.textHeading};
    font-weight: 600;
    line-height: 1.5rem;
    margin: 0;
  }
`;

const StyledTimeLineItem = styled.div`
  grid-column: span 3 / span 3;

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  li {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    &:not(:first-child) {
      margin-top: calc(4rem * calc(1 - 0));
      margin-bottom: calc(4rem * 0);
    }
  }
`;

export function TimeLineItem({ items }: any) {
  console.log('debug items', items);
  return (
    <StyledTimeLineItem>
      <ul>
        {items.map((item: any, index: any) => (
          <li key={index}>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </li>
        ))}
      </ul>
    </StyledTimeLineItem>
  );
}

export function TimeLine({ use }: any): JSX.Element {
  const { items } = use;
  return (
    <StyledTimeLine>
      <h2>{use.name}</h2>
      <TimeLineItem items={items} />
    </StyledTimeLine>
  );
}
