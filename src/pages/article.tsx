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
  const { post, error } = usePost(slug);

  const metaTitle = post ? post.meta.title : 'Article';
  const metaDescription = post ? post.meta.description : 'Article - Tom Blaymire';
  const metaImage = post?.meta.image;
  const metaPublishDate = post?.meta.publishDate;
  const metaKeywords = post?.meta.tags || [];

  const renderPost = () => {
    if (post) {
      const { title, publishDate } = post.meta;
      const Content = post.Content;
      return (
        <div className="max-w-[70rem] mx-auto [&_h1]:text-[5rem] [&_h1]:leading-[4.5rem] [&_h1]:mt-12 [&_h2]:text-[1.75rem] [&_h2]:leading-[1.75rem] [&_h2]:mt-32 [&_h2]:mb-4 [&_h2]:text-[#e4e4e7] [&_h2]:font-semibold [&_a]:text-[#2dd4bf] [&_a]:font-semibold [&_a]:underline [&_a]:decoration-[rgba(45,212,191,0.3)] [&_a]:transition-[color,text-decoration-color] [&_a]:duration-150 [&_p]:my-[2.5rem] [&_p]:text-[#a1a1aa] [&_p]:text-[1.65rem] [&_ul]:my-[2.5rem] [&_ul]:text-[#a1a1aa] [&_ul]:text-[1.65rem] [&_li]:text-[#a1a1aa] [&_li]:my-2 [&_strong]:text-[#e4e4e7] [&_strong]:font-semibold [&_img]:rounded-[1.5rem] [&_img]:max-w-full [&_img]:h-auto [&_img]:my-[2.5rem] [&_blockquote]:border-l-4 [&_blockquote]:border-[#2dd4bf] [&_blockquote]:pl-8 [&_blockquote]:my-[2.5rem] [&_blockquote]:italic [&_blockquote]:text-[#a1a1aa] [&_pre]:text-[1.35rem] [&_pre]:leading-[2.2rem] [&_pre]:rounded-[1.2rem] [&_pre]:p-8 [&_pre]:my-[2.5rem] [&_pre]:overflow-x-auto [&_pre]:border [&_pre]:border-[hsla(240,6%,90%,0.08)] [&_code]:font-mono [&_p_code]:bg-[rgba(45,212,191,0.1)] [&_p_code]:text-[#2dd4bf] [&_p_code]:px-2 [&_p_code]:py-1 [&_p_code]:rounded-md [&_p_code]:text-[1.4rem] [&_li_code]:bg-[rgba(45,212,191,0.1)] [&_li_code]:text-[#2dd4bf] [&_li_code]:px-2 [&_li_code]:py-1 [&_li_code]:rounded-md [&_li_code]:text-[1.4rem]">
          <Time dateTime={publishDate} />
          <h1>{title}</h1>
          <Content />
        </div>
      );
    }
  };

  return (
    <>
      <Meta
        title={metaTitle}
        description={metaDescription}
        image={metaImage}
        type="article"
        author="Tom Blaymire"
        publishedTime={metaPublishDate}
        keywords={metaKeywords}
      />
      <Grid>
        <PageRow>
          <Col size={12}>
            <div className="flex items-start">
              <Button
                onClick={handleBack}
                className="flex bg-[rgb(39,39,42)] border border-[rgba(63,63,70,0.5)] p-[1.1rem] [&_img]:w-[2.3rem]"
              >
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
