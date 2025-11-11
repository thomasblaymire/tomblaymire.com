import ReactMarkdown from 'react-markdown';
import { useNavigate, useParams } from 'react-router-dom';

import backIcon from '@/assets/icons/left.svg';
import linkIcon from '@/assets/icons/link.svg';
import { Button } from '@/components/button';
import { ErrorMessage } from '@/components/error-message';
import { Meta } from '@/components/meta';
import { FooterSection } from '@/components/sections/footer-section';
import { Time } from '@/components/time';
import { usePost } from '@/hooks/usePost';
import { Col, Grid, PageRow } from '@/styles/grid';

export function Project(): JSX.Element {
  const navigate = useNavigate();
  const handleBack = () => navigate(-1);
  const { slug } = useParams();
  const { post, error } = usePost(slug, 'work');

  const metaTitle = post ? `Project - ${post.fields.title}` : 'Project';
  const metaDescription = post ? `${post.fields.title}` : 'Project - Tom Blaymire';

  const fullPost = post as unknown as {
    fields: { heroImage?: { fields?: { file?: { url?: string } } } };
  };
  const metaImage = fullPost?.fields?.heroImage?.fields?.file?.url
    ? `https:${fullPost.fields.heroImage.fields.file.url}`
    : undefined;

  const renderPost = () => {
    if (post) {
      const { title, body, link, publishDate } = post.fields;
      return (
        <div className="max-w-[70rem] mx-auto [&_h1]:text-[5rem] [&_h1]:leading-[4.5rem] [&_h1]:mt-12 [&_h1]:text-[rgb(244,244,245)] [&_h2]:text-[1.75rem] [&_h2]:leading-[1.75rem] [&_h2]:mt-32 [&_h2]:mb-4 [&_h2]:text-[#e4e4e7] [&_h2]:font-semibold [&_a]:text-[#2dd4bf] [&_a]:font-semibold [&_a]:underline [&_a]:decoration-[rgba(45,212,191,0.3)] [&_a]:transition-[color,text-decoration-color] [&_a]:duration-150 [&_p]:my-[2.5rem] [&_p]:text-[#a1a1aa] [&_p]:text-[1.65rem] [&_ul]:list-[initial] [&_ul]:pl-6 [&_li]:text-[#a1a1aa] [&_li]:list-[initial] [&_li]:text-[1.65rem] [&_li]:mb-2 [&_img]:rounded-[1.5rem] [&_img]:max-w-full [&_img]:h-auto [&_img]:my-[2.5rem]">
          <div className="flex mb-8 justify-between items-center">
            <Time dateTime={publishDate} className="m-0" />
            <a
              href={link}
              target="_blank"
              className="flex items-center font-medium mt-6 text-[1.5rem] leading-8 text-[rgb(82,82,91)] dark:text-[rgb(161,161,170)] z-10 relative [&_img]:rounded-none [&_img]:m-0"
              rel="noreferrer"
            >
              <img src={linkIcon} alt={link} />
            </a>
          </div>
          <h1>{title}</h1>
          <ReactMarkdown>{body}</ReactMarkdown>
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
        type="website"
      />
      <Grid>
        <PageRow>
          <Col size={12}>
            <div className="flex items-start flex-wrap gap-8">
              <Button
                onClick={handleBack}
                className="flex bg-[rgb(39,39,42)] border border-[rgba(63,63,70,0.5)] p-[1.2rem] [&_img]:w-[2.3rem]"
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
