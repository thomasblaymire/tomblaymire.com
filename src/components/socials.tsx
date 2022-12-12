import { Link } from 'react-router-dom';
import styled from 'styled-components';

import emailIcon from '@/assets/icons/social/email.svg';
import githubIcon from '@/assets/icons/social/github.svg';
import instagramIcon from '@/assets/icons/social/instagram.svg';
import linkedinIcon from '@/assets/icons/social/linkedin.svg';
import twitterIcon from '@/assets/icons/social/twitter.svg';
import { Button } from '@/components/button';
import { Card } from '@/components/card';

const StyledSocials = styled.div`
  margin-top: 2.5rem;
  display: flex;

  ul {
    width: 100%;
  }

  li {
    display: flex;
    &:not(:first-child) {
      margin-top: 2rem;
    }
    &:last-child {
      margin-top: 3rem;
      padding-top: 3rem;
      border-color: rgba(63, 63, 70, 0.4);
      border-top-width: 1px;
    }
    &:hover img {
      filter: invert(52%) sepia(76%) saturate(475%) hue-rotate(124deg) brightness(98%)
        contrast(90%);
    }
  }

  a {
    display: flex;
    align-items: center;
    color: rgb(228 228 231/1);
    font-size: 1.25rem;
    &:hover {
      color: rgb(20 184 166/1);
    }
  }

  img {
    width: 2.5rem;
    height: 2.5rem;
  }
`;

const SocialText = styled.span`
  margin-left: 2rem;
  font-size: 1.25rem;
  font-weight: 600;
`;

const StyledCard = styled(Card)`
  padding: 0;
  margin: 0;
  border: 0;
`;

export function Socials() {
  return (
    <StyledCard>
      <StyledSocials>
        <ul>
          <li>
            <a
              href="https://twitter.com/thomas_blaymire"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={twitterIcon} alt="Twitter" />
              <SocialText>Follow on Twitter</SocialText>
            </a>
          </li>

          <li>
            <a href="https://github.com/thomasblaymire" target="_blank" rel="noreferrer">
              <img src={githubIcon} alt="Github" />
              <SocialText>Follow on GitHub</SocialText>
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/thomasblaymire/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={linkedinIcon} alt="Linkedin" />
              <SocialText>Follow on LinkedIn</SocialText>
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/tomblaymire/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={instagramIcon} alt="Instagram" />
              <SocialText>Follow on Instagram</SocialText>
            </a>
          </li>
          <li>
            <Link to="mailto:thomasblaymire@gmail.com" target="_blank">
              <img src={emailIcon} alt="Linkedin" />
              <SocialText>email@tomblaymire.com</SocialText>
            </Link>
          </li>
        </ul>
      </StyledSocials>
    </StyledCard>
  );
}
