import { Link } from 'react-router-dom';

import { PersonalProjectItem } from '@/content/work';

interface ProjectProps {
  project: PersonalProjectItem;
}

export function Project({ project }: ProjectProps): JSX.Element {
  const { image, name, link, linkText, shortDescription } = project;
  return (
    <Link
      to={linkText}
      className="box-border p-4 px-2 rounded-[1rem] transition-all duration-[0.4s] ease-in-out tablet:p-4 hover:shadow-[rgb(0_0_0_/_10%)_-1px_10px_19px_0px] hover:bg-[rgba(39,39,42,0.5)]"
    >
      <li key={name}>
        <div className="bg-[rgb(39,39,42)] border border-[rgba(63,63,70,0.5)] rounded-full justify-center items-center w-[5rem] h-[5rem] flex z-10 right-[8px] relative [&_img]:w-[35px] [&_img]:h-[35px]">
          <img alt="" src={image} decoding="async" data-nimg="1" loading="lazy" />
        </div>
        <h2>
          <a href={link}>
            <span>{name}</span>
          </a>
        </h2>
        <p>{shortDescription}</p>
      </li>
    </Link>
  );
}
