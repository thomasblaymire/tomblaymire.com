import Link from "next/link";
import styled from "styled-components";
import { navLinks } from "content/links";

const StyledHeaderSection = styled.header``;

export function HeaderSection() {
  return (
    <StyledHeaderSection>
      <nav>
        <ul>
          {navLinks.map(({ path, name }, index) => (
            <Link key={index} href={path}>
              <li>{name}</li>
            </Link>
          ))}
        </ul>
      </nav>
    </StyledHeaderSection>
  );
}
