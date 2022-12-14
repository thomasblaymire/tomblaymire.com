import ReactMarkdown from 'react-markdown';
import { useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';

import backIcon from '@/assets/icons/left.svg';
import { Button } from '@/components/button';
import { ErrorMessage } from '@/components/error-message';
import { Loading } from '@/components/loading';
import { FooterSection } from '@/components/sections/footer-section';
import { usePost } from '@/hooks/usePost';
import { Col, Grid, Row } from '@/styles/grid';

const StyledArticleRow = styled(Row)`
  margin-top: 13rem;
`;

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
  max-width: 75rem;
  margin-left: auto;
  margin-right: auto;

  p {
    margin-top: 2.5rem;
    margin-bottom: 2.5rem;
  }

  img {
    border-radius: 1.5rem;
    max-width: 100%;
    height: auto;
    margin-top: 2.5rem;
    margin-bottom: 2.5rem;
  }
`;

export function Article(): JSX.Element {
  const navigate = useNavigate();
  const handleBack = () => navigate(-1);
  const { slug } = useParams();
  const { post, loading, error } = usePost(slug);

  const renderPost = () => {
    if (loading) return <Loading position="center" />;
    if (error) return <ErrorMessage error={error} />;
    if (post) {
      const { title, body } = post.fields;
      return (
        <StyledBlogSection>
          <h1>{title}</h1>
          <ReactMarkdown>{body}</ReactMarkdown>
        </StyledBlogSection>
      );
    }
  };

  return (
    <>
      <Grid>
        <StyledArticleRow>
          <Col size={12}>
            <StyledButton onClick={handleBack}>
              <img src={backIcon} alt="Back" />
            </StyledButton>
            {renderPost()}
          </Col>
        </StyledArticleRow>
      </Grid>
      <FooterSection />
    </>
  );
}
