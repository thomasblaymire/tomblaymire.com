import styled from 'styled-components';

import { Navigation } from '@/components/navigation';
import { navLinks } from '@/content/links';
import { device } from '@/helpers/device';
import { useMediaQuery } from '@/hooks/useMediaQuery';

const StyledFooterSection = styled.section`
  padding-bottom: 8rem;
  margin-top: 10rem;
  border-top-width: 1px;
  padding-top: 5rem;
  border-color: rgba(63, 63, 70, 0.4);
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const StyledFooterCopyright = styled.div`
  p {
    color: rgb(113 113 122 / 1);
    line-height: 1.5rem;
    font-size: 1.4rem;
  }
`;

const StyledFooterNavigation = styled(Navigation)``;

export function FooterSection() {
  const isTablet = useMediaQuery(device.tablet);
  return (
    <StyledFooterSection>
      {isTablet ? <StyledFooterNavigation items={navLinks} type="basic" /> : null}
      <StyledFooterCopyright className="col-span-full mt-24 text-lg text-gray-500 dark:text-slate-500 md:mt-44">
        <p>{`© Tom Blaymire ${new Date().getFullYear()}`}. All rights reserved.</p>
      </StyledFooterCopyright>
    </StyledFooterSection>
  );
}
