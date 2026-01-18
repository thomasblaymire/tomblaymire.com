import { Link } from 'react-router-dom';

import { PersonalProjectItem, WorkExperienceItem } from '@/content/work';

interface ProjectProps {
  project: WorkExperienceItem | PersonalProjectItem;
}

export function Project({ project }: ProjectProps): JSX.Element {
  const { image, name, shortDescription } = project;
  const slug = 'slug' in project ? project.slug : name.toLowerCase().replace(/\s+/g, '-');

  return (
    <Link
      to={`/projects/${slug}`}
      className="box-border p-4 px-2 rounded-[1rem] transition-all duration-[0.4s] ease-in-out tablet:p-4 hover:shadow-[rgb(0_0_0_/_10%)_-1px_10px_19px_0px] hover:bg-[rgba(39,39,42,0.5)]"
    >
      <li key={name}>
        <div className="bg-[rgb(39,39,42)] border border-[rgba(63,63,70,0.5)] rounded-[50px] justify-center items-center w-[5rem] h-[5rem] flex z-10 relative right-[4px] [&_img]:w-[45px] [&_img]:h-[45px] [&_img]:rounded-[50px]">
          <img alt={name} src={image} decoding="async" data-nimg="1" loading="lazy" />
        </div>
        <h2 className="text-[rgb(0,0,0)] dark:text-[rgb(244,244,245)]">
          <span>{name}</span>
        </h2>
        <p>{shortDescription}</p>
        <span className="mt-4 text-[rgb(20,184,166)] flex items-center text-[1.5rem] leading-[2.3rem]">
          View project
          <svg
            viewBox="0 0 16 16"
            fill="none"
            aria-hidden="true"
            className="-ml-5 -mt-1 w-10 h-10 stroke-[rgb(20,184,166)]"
          >
            <path
              d="M6.75 5.75 9.25 8l-2.5 2.25"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
          </svg>
        </span>
      </li>
    </Link>
  );
}
