import { Link } from 'react-router-dom';
import styled from 'styled-components';

interface NavItem {
  path: string;
  name: string;
}

interface NavigationProps {
  items: NavItem[];
}

const StyledNavigation = styled.nav`
  ul {
    list-style: none;
    display: flex;
    background-color: rgba(39, 39, 42, 0.9);
    border: solid 1px hsla(0, 0%, 100%, 0.1);
    padding-left: 1rem;
    padding-right: 1rem;
    border-radius: 9999px;
  }

  a {
    line-height: 1.5rem;
    font-weight: 500;
    padding-left: 1rem;
    padding-right: 1rem;
    padding-top: 1.25rem;
    padding-bottom: 1.25rem;
    &:hover {
      color: rgb(20 184 166/1);
    }
  }
`;

export function Navigation({ items }: NavigationProps): JSX.Element {
  return (
    <StyledNavigation>
      <ul>
        {items.map(({ path, name }, index: number) => (
          <Link key={index} to={path}>
            <li>{name}</li>
          </Link>
        ))}
      </ul>
    </StyledNavigation>
  );
}
