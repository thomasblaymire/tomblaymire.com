import ReactMarkdown from 'react-markdown';
import { useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';

import backIcon from '@/assets/icons/left.svg';
import linkIcon from '@/assets/icons/link.svg';
import { Button } from '@/components/button';
import { ErrorMessage } from '@/components/error-message';
import { Meta } from '@/components/meta';
import { FooterSection } from '@/components/sections/footer-section';
import { Time } from '@/components/time';
import { usePost } from '@/hooks/usePost';
import { Col, Grid, PageRow } from '@/styles/grid';

const StyledButton = styled(Button)`
  display: flex;
  background-color: rgb(39 39 42/1);
  border-color: rgba(63, 63, 70, 0.5);
  border-width: 1px;
  padding: 1.2rem;

  img {
    width: 2.3rem;
  }
`;

const StyledBlogSection = styled.div`
  max-width: 70rem;
  margin-left: auto;
  margin-right: auto;

  h1 {
    font-size: 5rem;
    line-height: 4.5rem;
    margin-top: 3rem;
  }

  h2 {
    font-size: 1.75rem;
    line-height: 1.75rem;
    margin-top: 8rem;
    margin-bottom: 1rem;
    color: #e4e4e7;
    font-weight: 600;
  }

  a {
    color: #2dd4bf;
    font-weight: 600;
    text-decoration: underline;
    text-decoration-color: rgba(45, 212, 191, 0.3);
    transition-property: color, text-decoration-color;
    transition-duration: 0.15s;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  }

  p {
    margin-top: 2.5rem;
    margin-bottom: 2.5rem;
    color: #a1a1aa;
    font-size: 1.65rem;
  }

  ul {
    list-style: initial;
    padding-left: 1.5rem;
  }

  li {
    color: #a1a1aa;
    list-style: initial;
    font-size: 1.65rem;
    margin-bottom: 0.5rem;
  }

  img {
    border-radius: 1.5rem;
    max-width: 100%;
    height: auto;
    margin-top: 2.5rem;
    margin-bottom: 2.5rem;
  }
`;

const StyledBlogMeta = styled.div`
  display: flex;
  margin-bottom: 2rem;
  justify-content: space-between;
  align-items: center;
`;

const StyledArticle = styled.div`
  display: flex;
  align-items: start;
  flex-wrap: wrap;
  grid-gap: 2rem;
`;

const StyledTime = styled(Time)`
  margin: 0;
`;

const StyledLink = styled.a`
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

  img {
    border-radius: initial;
    margin: 0;
  }
`;

export function Project(): JSX.Element {
  const navigate = useNavigate();
  const handleBack = () => navigate(-1);
  const { slug } = useParams();
  const { post, error } = usePost(slug, 'work');

  const metaTitle = post ? `${post.fields.title}` : 'Project';
  const metaDescription = post ? `${post.fields.title}` : 'Project - Tom Blaymire';

  const renderPost = () => {
    if (post) {
      const { title, body, link } = post.fields;
      const { createdAt } = post.sys;
      return (
        <StyledBlogSection>
          <StyledBlogMeta>
            <StyledTime dateTime={createdAt} />
            <StyledLink href={link} target="_blank">
              <img src={linkIcon} alt={link} />
            </StyledLink>
          </StyledBlogMeta>
          <h1>{title}</h1>
          <ReactMarkdown>{body}</ReactMarkdown>
        </StyledBlogSection>
      );
    }
  };

  return (
    <>
      <Meta title={metaTitle} description={metaDescription} />
      <Grid>
        <PageRow>
          <Col size={12}>
            <StyledArticle>
              <StyledButton onClick={handleBack}>
                <img src={backIcon} alt="Back" />
              </StyledButton>
              {error && <ErrorMessage error={error} />}
              {post && renderPost()}
            </StyledArticle>
          </Col>
        </PageRow>
      </Grid>
      <FooterSection />
    </>
  );
}
