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
        <div className="max-w-[70rem] mx-auto px-4 md:px-0 [&_h1]:text-[2.8rem] [&_h1]:md:text-[4.5rem] [&_h1]:leading-[3.4rem] [&_h1]:md:leading-[5.4rem] [&_h1]:mt-6 [&_h1]:md:mt-8 [&_h1]:mb-10 [&_h1]:md:mb-16 [&_h1]:text-[#f4f4f5] [&_h1]:font-bold [&_h2]:text-[1.6rem] [&_h2]:md:text-[2rem] [&_h2]:leading-[2.2rem] [&_h2]:md:leading-[2.6rem] [&_h2]:mt-12 [&_h2]:md:mt-16 [&_h2]:mb-4 [&_h2]:md:mb-6 [&_h2]:text-[#f4f4f5] [&_h2]:font-semibold [&_a]:text-[#2dd4bf] [&_a]:font-semibold [&_a]:underline [&_a]:decoration-[rgba(45,212,191,0.3)] [&_a]:transition-[color,text-decoration-color] [&_a]:duration-150 [&_p]:my-6 [&_p]:md:my-8 [&_p]:text-[#a1a1aa] [&_p]:text-[1.5rem] [&_p]:md:text-[1.6rem] [&_p]:leading-[2.4rem] [&_p]:md:leading-[2.5rem] [&_ul]:my-6 [&_ul]:md:my-8 [&_ul]:text-[#a1a1aa] [&_ul]:text-[1.5rem] [&_ul]:md:text-[1.6rem] [&_ul]:leading-[2.4rem] [&_ul]:md:leading-[2.5rem] [&_ul]:pl-6 [&_ul]:md:pl-8 [&_li]:text-[#a1a1aa] [&_li]:my-2 [&_li]:md:my-3 [&_li]:list-disc [&_strong]:text-[#e4e4e7] [&_strong]:font-semibold [&_img]:rounded-[1rem] [&_img]:md:rounded-[1.5rem] [&_img]:max-w-full [&_img]:h-auto [&_img]:my-8 [&_img]:md:my-12 [&_blockquote]:border-l-4 [&_blockquote]:border-[#2dd4bf] [&_blockquote]:pl-6 [&_blockquote]:md:pl-8 [&_blockquote]:my-8 [&_blockquote]:md:my-10 [&_blockquote]:italic [&_blockquote]:text-[#a1a1aa] [&_blockquote]:text-[1.5rem] [&_blockquote]:md:text-[1.6rem] [&_blockquote]:leading-[2.4rem] [&_blockquote]:md:leading-[2.5rem] [&_pre]:text-[1.2rem] [&_pre]:md:text-[1.35rem] [&_pre]:leading-[2rem] [&_pre]:md:leading-[2.1rem] [&_pre]:rounded-[1rem] [&_pre]:md:rounded-[1.2rem] [&_pre]:p-4 [&_pre]:md:p-8 [&_pre]:my-8 [&_pre]:md:my-10 [&_pre]:overflow-x-auto [&_pre]:border [&_pre]:border-[hsla(240,6%,90%,0.08)] [&_code]:font-mono [&_p_code]:bg-[rgba(45,212,191,0.1)] [&_p_code]:text-[#2dd4bf] [&_p_code]:px-2 [&_p_code]:py-1 [&_p_code]:rounded-md [&_p_code]:text-[1.3rem] [&_p_code]:md:text-[1.4rem] [&_li_code]:bg-[rgba(45,212,191,0.1)] [&_li_code]:text-[#2dd4bf] [&_li_code]:px-2 [&_li_code]:py-1 [&_li_code]:rounded-md [&_li_code]:text-[1.3rem] [&_li_code]:md:text-[1.4rem]">
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
