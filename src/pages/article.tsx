import ReactMarkdown from 'react-markdown';
import { useNavigate, useParams } from 'react-router-dom';
import backIcon from '@/assets/icons/left.svg';
import { Button } from '@/components/button';
import { ErrorMessage } from '@/components/error-message';
import { Meta } from '@/components/meta';
import { FooterSection } from '@/components/sections/footer-section';
import { Time } from '@/components/time';
import { usePost } from '@/hooks/usePost';
import { Col, Grid, PageRow } from '@/styles/grid';

export function Article(): JSX.Element {
  const navigate = useNavigate();
  const handleBack = () => navigate(-1);
  const { slug } = useParams();
  const { post, error } = usePost(slug, 'blogPost');

  const metaTitle = post ? `${post.fields.title}` : 'Article';
  const metaDescription = post ? `${post.fields.title}` : 'Article - Tom Blaymire';

  const renderPost = () => {
    if (post) {
      const { title, body, publishDate } = post.fields;
      return (
        <div className="max-w-[70rem] mx-auto [&_h1]:text-[5rem] [&_h1]:leading-[4.5rem] [&_h1]:mt-12 [&_h2]:text-[1.75rem] [&_h2]:leading-[1.75rem] [&_h2]:mt-32 [&_h2]:mb-4 [&_h2]:text-[#e4e4e7] [&_h2]:font-semibold [&_a]:text-[#2dd4bf] [&_a]:font-semibold [&_a]:underline [&_a]:decoration-[rgba(45,212,191,0.3)] [&_a]:transition-[color,text-decoration-color] [&_a]:duration-150 [&_p]:my-[2.5rem] [&_p]:text-[#a1a1aa] [&_p]:text-[1.65rem] [&_ul]:my-[2.5rem] [&_ul]:text-[#a1a1aa] [&_ul]:text-[1.65rem] [&_li]:text-red-500 [&_img]:rounded-[1.5rem] [&_img]:max-w-full [&_img]:h-auto [&_img]:my-[2.5rem] [&_pre]:text-[#f4f4f5] [&_pre]:text-[1.4rem] [&_pre]:font-medium [&_pre]:bg-[rgba(0,0,0,0.4)] [&_pre]:rounded-[1.5rem] [&_pre]:p-8 [&_pre]:overflow-x-auto [&_pre]:border [&_pre]:border-[hsla(240,6%,90%,0.1)]">
          <Time dateTime={publishDate} />
          <h1>{title}</h1>
          <ReactMarkdown>{body}</ReactMarkdown>
        </div>
      );
    }
  };

  return (
    <>
      <Meta title={metaTitle} description={metaDescription} />
      <Grid>
        <PageRow>
          <Col size={12}>
            <div className="flex items-start">
              <Button onClick={handleBack} className="flex bg-[rgb(39,39,42)] border border-[rgba(63,63,70,0.5)] p-[1.1rem] [&_img]:w-[2.3rem]">
                <img src={backIcon} alt="Back" />
              </Button>
              {error && <ErrorMessage error={error} />}
              {post && renderPost()}
            </div>
          </Col>
        </PageRow>
      </Grid>
      <FooterSection />
    </>
  );
}
