import ReactMarkdown from 'react-markdown';
import { useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';

import backIcon from '@/assets/icons/left.svg';
import { Button } from '@/components/button';
import { ErrorMessage } from '@/components/error-message';
import { FooterSection } from '@/components/sections/footer-section';
import { Time } from '@/components/time';
import { usePost } from '@/hooks/usePost';
import { Col, Grid, PageRow } from '@/styles/grid';

const StyledButton = styled(Button)`
  display: flex;
  background-color: rgb(39 39 42/1);
  border-color: rgba(63, 63, 70, 0.5);
  border-width: 1px;
  padding: 1.1rem;

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
    margin-top: 2.5rem;
    margin-bottom: 2.5rem;
    color: #a1a1aa;
    font-size: 1.65rem;
  }

  li {
    color: red;
  }

  img {
    border-radius: 1.5rem;
    max-width: 100%;
    height: auto;
    margin-top: 2.5rem;
    margin-bottom: 2.5rem;
  }

  pre {
    color: #f4f4f5;
    font-size: 1.4rem;
    font-weight: 500;
    background-color: rgba(0, 0, 0, 0.4);
    border-radius: 1.5rem;
    padding: 2rem;
    overflow-x: auto;
    border: 1px solid;
    border-color: hsla(240, 6%, 90%, 0.1);
  }
`;

const StyledArticle = styled.div`
  display: flex;
  align-items: start;
`;

export function Article(): JSX.Element {
  const navigate = useNavigate();
  const handleBack = () => navigate(-1);
  const { slug } = useParams();
  const { post, error } = usePost(slug, 'blogPost');

  const renderPost = () => {
    if (post) {
      const { title, body } = post.fields;
      const { createdAt } = post.sys;
      return (
        <StyledBlogSection>
          <Time dateTime={createdAt} />
          <h1>{title}</h1>
          <ReactMarkdown>{body}</ReactMarkdown>
        </StyledBlogSection>
      );
    }
  };

  return (
    <>
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
