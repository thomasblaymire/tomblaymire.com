import { useParams } from 'react-router-dom';

import { ErrorMessage } from '@/components/error-message';
import { Meta } from '@/components/meta';
import { FooterSection } from '@/components/sections/footer-section';
import { Time } from '@/components/time';
import { usePost } from '@/hooks/usePost';
import { Col, Grid, PageRow } from '@/styles/grid';

export function Article() {
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
        <div className="w-full overflow-hidden [&_h1]:text-[2.2rem] tablet:[&_h1]:text-[4.5rem] [&_h1]:leading-[2.8rem] tablet:[&_h1]:leading-[5.4rem] [&_h1]:mt-4 tablet:[&_h1]:mt-8 [&_h1]:mb-6 tablet:[&_h1]:mb-16 [&_h1]:text-[rgb(0,0,0)] dark:[&_h1]:text-[#f4f4f5] [&_h1]:font-bold [&_h2]:text-[1.8rem] tablet:[&_h2]:text-[2.2rem] [&_h2]:leading-[2.4rem] tablet:[&_h2]:leading-[2.8rem] [&_h2]:mt-12 tablet:[&_h2]:mt-20 [&_h2]:mb-4 tablet:[&_h2]:mb-8 [&_h2]:text-[rgb(0,0,0)] dark:[&_h2]:text-[#f4f4f5] [&_h2]:font-semibold [&_h3]:text-[1.6rem] tablet:[&_h3]:text-[1.8rem] [&_h3]:leading-[2.2rem] tablet:[&_h3]:leading-[2.4rem] [&_h3]:mt-10 tablet:[&_h3]:mt-16 [&_h3]:mb-3 tablet:[&_h3]:mb-6 [&_h3]:text-[rgb(0,0,0)] dark:[&_h3]:text-[#f4f4f5] [&_h3]:font-semibold [&_a]:text-[#2dd4bf] [&_a]:font-semibold [&_a]:no-underline [&_a:hover]:underline [&_a]:decoration-[rgba(45,212,191,0.3)] [&_a]:transition-[color,text-decoration-color] [&_a]:duration-150 [&_p]:my-4 tablet:[&_p]:my-8 [&_p]:text-[rgb(82,82,91)] dark:[&_p]:text-[#a1a1aa] [&_p]:text-[1.4rem] tablet:[&_p]:text-[1.6rem] [&_p]:leading-[2.2rem] tablet:[&_p]:leading-10 [&_ul]:my-4 tablet:[&_ul]:my-8 [&_ul_ul]:my-1 tablet:[&_ul_ul]:my-2 [&_ul]:text-[rgb(82,82,91)] dark:[&_ul]:text-[#a1a1aa] [&_ul]:text-[1.4rem] tablet:[&_ul]:text-[1.6rem] [&_ul]:leading-[2.2rem] tablet:[&_ul]:leading-10 [&_ul]:pl-5 tablet:[&_ul]:pl-8 [&_li]:text-[rgb(82,82,91)] dark:[&_li]:text-[#a1a1aa] [&_li]:my-1.5 tablet:[&_li]:my-3 [&_li]:list-disc [&_strong]:text-[rgb(39,39,42)] dark:[&_strong]:text-[#e4e4e7] [&_strong]:font-semibold [&_img]:rounded-[0.8rem] tablet:[&_img]:rounded-[1.2rem] [&_img]:w-full [&_img]:max-h-160 [&_img]:object-contain [&_img]:my-6 tablet:[&_img]:my-12 [&_img]:border [&_img]:border-[rgba(63,63,70,0.4)] [&_blockquote]:border-l-4 [&_blockquote]:border-[#2dd4bf] [&_blockquote]:pl-4 tablet:[&_blockquote]:pl-8 [&_blockquote]:my-6 tablet:[&_blockquote]:my-10 [&_blockquote]:italic [&_blockquote]:text-[#a1a1aa] [&_blockquote]:text-[1.4rem] tablet:[&_blockquote]:text-[1.6rem] [&_blockquote]:leading-[2.2rem] tablet:[&_blockquote]:leading-10 [&_pre]:text-[1.1rem] tablet:[&_pre]:text-[1.35rem] [&_pre]:leading-[1.8rem] tablet:[&_pre]:leading-[2.1rem] [&_pre]:rounded-[0.8rem] tablet:[&_pre]:rounded-[1.2rem] [&_pre]:p-3 tablet:[&_pre]:p-8 [&_pre]:my-6 tablet:[&_pre]:my-10 [&_pre]:overflow-x-auto [&_pre]:max-w-full [&_pre]:border [&_pre]:border-[hsla(240,6%,90%,0.08)] [&_code]:font-mono [&_p_code]:bg-[rgba(45,212,191,0.1)] [&_p_code]:text-[#2dd4bf] [&_p_code]:px-1.5 [&_p_code]:py-0.5 [&_p_code]:rounded-md [&_p_code]:text-[1.2rem] tablet:[&_p_code]:text-[1.4rem] [&_li_code]:bg-[rgba(45,212,191,0.1)] [&_li_code]:text-[#2dd4bf] [&_li_code]:px-1.5 [&_li_code]:py-0.5 [&_li_code]:rounded-md [&_li_code]:text-[1.2rem] tablet:[&_li_code]:text-[1.4rem]">
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
            <div className="w-full max-w-280 mx-auto px-4 tablet:px-0 overflow-x-hidden">
              {post && <Time dateTime={post.meta.publishDate} className="mb-0 order-0" />}
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
