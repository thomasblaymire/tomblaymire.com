import { Link } from 'react-router-dom';

import { Button } from '@/components/button';
import { Time } from '@/components/time';
import { PostInterface } from '@/types/post';

interface PostProps {
  post: PostInterface;
}

export function Post(post: PostProps): JSX.Element {
  const { title, description, slug, publishDate } = post.post.fields;
  return (
    <article className="text-[1.5rem] relative flex justify-center flex-col items-start [&_h2]:text-[rgb(39,39,42)] dark:[&_h2]:text-[rgb(244,244,245)] [&_h2]:font-semibold [&_h2]:text-[1.75rem] [&_h2]:leading-[1.75rem] [&_p]:text-[rgb(82,82,91)] dark:[&_p]:text-[rgb(161,161,170)] [&_p]:leading-[2.4rem] [&_p]:text-[1.4rem] [&_p]:mt-4 [&_p]:z-10">
      <Link to={`/articles/${slug}`}>
        {publishDate ? <Time dateTime={publishDate} /> : null}
        <h2>
          <div className="left-auto right-auto rounded-[1rem] bg-[rgba(39,39,42,0.5)] transition-[cubic-bezier(0.4,0,0.2,1)] duration-150 absolute h-full opacity-0 z-0 tablet:left-[-1.5rem] tablet:right-[-1.5rem] tablet:top-0 hover:cursor-pointer hover:bg-[rgba(39,39,42,0.5)] hover:opacity-100 hover:rounded-[1rem] hover:scale-y-[1.2]" />
          <span className="z-10 relative">{title}</span>
          <span className="left-[-1.5rem] right-[-1.5rem] z-20 absolute rounded-[1rem]" />
        </h2>
        <p>{description}</p>
        <Button
          color="link"
          className="mt-6 text-[rgb(20,184,166)] flex items-center text-[1.5rem] font-extrabold p-0 [&_svg]:stroke-[rgb(20,184,166)] [&_svg]:w-[2.6rem] [&_svg]:h-[2.2rem]"
        >
          Read article
          <svg
            viewBox="0 0 16 16"
            fill="none"
            aria-hidden="true"
            className="ml-1 h-4 w-4 stroke-current"
          >
            <path
              d="M6.75 5.75 9.25 8l-2.5 2.25"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
          </svg>
        </Button>
      </Link>
    </article>
  );
}
