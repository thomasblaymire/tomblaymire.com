import styled from 'styled-components';

import moonIcon from '@/assets/icons/moon.svg';
import sunIcon from '@/assets/icons/sun.svg';
import { Button } from '@/components/button';
import { device } from '@/helpers/device';
import { THEME } from '@/helpers/style';

interface ThemeToggleProps {
  toggleTheme: () => void;
  theme: string;
}

const StyledThemeToggle = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  line-height: 1.5rem;
  padding-left: 1.5rem;

  @media ${device.tablet} {
    flex: 1 1 0%;
    padding-left: 0;
  }
`;

const StyledIcon = styled.img`
  width: 20px;
`;

const StyledToggleButton = styled(Button)`
  display: flex;
  background: rgba(39, 39, 42, 0.9);
  padding: 1rem;
`;

export function ThemeToggle({ toggleTheme, theme }: ThemeToggleProps) {
  const handleToggle = () => toggleTheme();
  return (
    <StyledThemeToggle>
      <StyledToggleButton onClick={handleToggle} color="base">
        {theme === THEME.DARK ? (
          <StyledIcon src={sunIcon} alt="sun" />
        ) : (
          <StyledIcon src={moonIcon} alt="moon" />
        )}
      </StyledToggleButton>
    </StyledThemeToggle>
  );
}
