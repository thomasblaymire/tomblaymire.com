import { useNavigate, useParams } from 'react-router-dom';

import backIcon from '@/assets/icons/left.svg';
import linkIcon from '@/assets/icons/link.svg';
import { Button } from '@/components/button';
import { ErrorMessage } from '@/components/error-message';
import { Meta } from '@/components/meta';
import { FooterSection } from '@/components/sections/footer-section';
import { getProjectContentBySlug } from '@/content/projects';
import { getProjectBySlug, WorkExperienceItem } from '@/content/work';
import { Col, Grid, PageRow } from '@/styles/grid';

export function Project() {
  const navigate = useNavigate();
  const handleBack = () => navigate(-1);
  const { slug } = useParams();

  const project = slug ? getProjectBySlug(slug) : undefined;
  const projectContent = slug ? getProjectContentBySlug(slug) : undefined;

  const metaTitle = project ? `Project - ${project.name}` : 'Project';
  const metaDescription = project
    ? project.shortDescription || project.name
    : 'Project - Tom Blaymire';

  const isWorkExperience = (p: typeof project): p is WorkExperienceItem => {
    return p !== undefined && 'jobTitle' in p;
  };

  const renderProject = () => {
    if (!project || !projectContent) return null;

    const { name, link } = project;
    const Content = projectContent.Content;

    return (
      <div className="max-w-[70rem] mx-auto [&_h1]:text-[5rem] [&_h1]:leading-[4.5rem] [&_h1]:mt-12 [&_h1]:text-[rgb(244,244,245)] [&_h2]:text-[1.75rem] [&_h2]:leading-[1.75rem] [&_h2]:mt-32 [&_h2]:mb-4 [&_h2]:text-[#e4e4e7] [&_h2]:font-semibold [&_a]:text-[#2dd4bf] [&_a]:font-semibold [&_a]:underline [&_a]:decoration-[rgba(45,212,191,0.3)] [&_a]:transition-[color,text-decoration-color] [&_a]:duration-150 [&_p]:my-[2.5rem] [&_p]:text-[#a1a1aa] [&_p]:text-[1.65rem] [&_ul]:list-[initial] [&_ul]:pl-6 [&_li]:text-[#a1a1aa] [&_li]:list-[initial] [&_li]:text-[1.65rem] [&_li]:mb-2 [&_img]:rounded-[1.5rem] [&_img]:max-w-full [&_img]:h-auto [&_img]:my-[2.5rem]">
        <div className="flex mb-8 justify-between items-center">
          {isWorkExperience(project) && (
            <span className="text-[1.5rem] text-[rgb(161,161,170)]">
              {project.dateFrom} - {project.dateTo}
            </span>
          )}
          <a
            href={link}
            target="_blank"
            className="flex items-center font-medium text-[1.5rem] leading-8 text-[rgb(82,82,91)] dark:text-[rgb(161,161,170)] z-10 relative [&_img]:rounded-none [&_img]:m-0"
            rel="noreferrer"
          >
            <img src={linkIcon} alt="External link" className="w-6 h-6" />
          </a>
        </div>
        <h1>{name}</h1>
        {isWorkExperience(project) && (
          <p className="text-[rgb(45,212,191)] !mt-4 !text-[1.5rem]">
            {project.jobTitle}
          </p>
        )}
        <Content />
      </div>
    );
  };

  return (
    <>
      <Meta title={metaTitle} description={metaDescription} type="website" />
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
              {(!project || !projectContent) && (
                <ErrorMessage error={new Error('Project not found')} />
              )}
              {renderProject()}
            </div>
          </Col>
        </PageRow>
      </Grid>
      <FooterSection />
    </>
  );
}
