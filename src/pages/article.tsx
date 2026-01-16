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
      const { title } = post.meta;
      const Content = post.Content;
      return (
        <div className="w-full overflow-hidden [&_h1]:text-[2.2rem] [&_h1]:tablet:text-[4.5rem] [&_h1]:leading-[2.8rem] [&_h1]:tablet:leading-[5.4rem] [&_h1]:mt-4 [&_h1]:tablet:mt-8 [&_h1]:mb-6 [&_h1]:tablet:mb-16 [&_h1]:text-[#f4f4f5] [&_h1]:font-bold [&_h2]:text-[1.5rem] [&_h2]:tablet:text-[2rem] [&_h2]:leading-[2rem] [&_h2]:tablet:leading-[2.6rem] [&_h2]:mt-8 [&_h2]:tablet:mt-16 [&_h2]:mb-3 [&_h2]:tablet:mb-6 [&_h2]:text-[#f4f4f5] [&_h2]:font-semibold [&_a]:text-[#2dd4bf] [&_a]:font-semibold [&_a]:underline [&_a]:decoration-[rgba(45,212,191,0.3)] [&_a]:transition-[color,text-decoration-color] [&_a]:duration-150 [&_p]:my-4 [&_p]:tablet:my-8 [&_p]:text-[#a1a1aa] [&_p]:text-[1.4rem] [&_p]:tablet:text-[1.6rem] [&_p]:leading-[2.2rem] [&_p]:tablet:leading-[2.5rem] [&_ul]:my-4 [&_ul]:tablet:my-8 [&_ul]:text-[#a1a1aa] [&_ul]:text-[1.4rem] [&_ul]:tablet:text-[1.6rem] [&_ul]:leading-[2.2rem] [&_ul]:tablet:leading-[2.5rem] [&_ul]:pl-5 [&_ul]:tablet:pl-8 [&_li]:text-[#a1a1aa] [&_li]:my-1.5 [&_li]:tablet:my-3 [&_li]:list-disc [&_strong]:text-[#e4e4e7] [&_strong]:font-semibold [&_img]:rounded-[0.8rem] [&_img]:tablet:rounded-[1.5rem] [&_img]:max-w-full [&_img]:h-auto [&_img]:my-6 [&_img]:tablet:my-12 [&_blockquote]:border-l-4 [&_blockquote]:border-[#2dd4bf] [&_blockquote]:pl-4 [&_blockquote]:tablet:pl-8 [&_blockquote]:my-6 [&_blockquote]:tablet:my-10 [&_blockquote]:italic [&_blockquote]:text-[#a1a1aa] [&_blockquote]:text-[1.4rem] [&_blockquote]:tablet:text-[1.6rem] [&_blockquote]:leading-[2.2rem] [&_blockquote]:tablet:leading-[2.5rem] [&_pre]:text-[1.1rem] [&_pre]:tablet:text-[1.35rem] [&_pre]:leading-[1.8rem] [&_pre]:tablet:leading-[2.1rem] [&_pre]:rounded-[0.8rem] [&_pre]:tablet:rounded-[1.2rem] [&_pre]:p-3 [&_pre]:tablet:p-8 [&_pre]:my-6 [&_pre]:tablet:my-10 [&_pre]:overflow-x-auto [&_pre]:max-w-full [&_pre]:border [&_pre]:border-[hsla(240,6%,90%,0.08)] [&_code]:font-mono [&_p_code]:bg-[rgba(45,212,191,0.1)] [&_p_code]:text-[#2dd4bf] [&_p_code]:px-1.5 [&_p_code]:py-0.5 [&_p_code]:rounded-md [&_p_code]:text-[1.2rem] [&_p_code]:tablet:text-[1.4rem] [&_li_code]:bg-[rgba(45,212,191,0.1)] [&_li_code]:text-[#2dd4bf] [&_li_code]:px-1.5 [&_li_code]:py-0.5 [&_li_code]:rounded-md [&_li_code]:text-[1.2rem] [&_li_code]:tablet:text-[1.4rem]">
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
            <div className="flex flex-col w-full max-w-[70rem] mx-auto px-4 tablet:px-0 overflow-x-hidden">
              <div className="flex items-center justify-between gap-4 mb-6 tablet:mb-8">
                <Button
                  onClick={handleBack}
                  className="flex items-center justify-center bg-[rgb(39,39,42)] border border-[rgba(63,63,70,0.5)] w-12 h-12 tablet:w-[4.4rem] tablet:h-[4.4rem] rounded-full shrink-0"
                >
                  <img
                    src={backIcon}
                    alt="Back"
                    className="w-6 h-6 tablet:w-[2.3rem] tablet:h-[2.3rem]"
                  />
                </Button>
                {post && (
                  <Time dateTime={post.meta.publishDate} className="mb-0 order-none" />
                )}
              </div>
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
