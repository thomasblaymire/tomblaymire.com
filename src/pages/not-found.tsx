import { Link } from 'react-router-dom';

import { Meta } from '@/components/meta';

export function NotFound() {
  return (
    <>
      <Meta
        title="Page Not Found - Tom Blaymire"
        description="Sorry, we could not find the page you are looking for."
      />
      <main className="min-h-screen flex items-center justify-center px-6">
        <div className="text-center max-w-[50rem]">
          <p className="text-[8rem] tablet:text-[12rem] font-bold text-[rgb(45,212,191)] leading-none mb-4">
            404
          </p>
          <h1 className="text-[2.4rem] tablet:text-[3.6rem] font-bold text-[rgb(0,0,0)] dark:text-[rgb(244,244,245)] leading-tight mb-6">
            Page not found
          </h1>
          <p className="text-[1.4rem] tablet:text-[1.6rem] text-[rgb(82,82,91)] dark:text-[rgb(161,161,170)] leading-relaxed mb-10">
            Sorry, we couldn&apos;t find the page you&apos;re looking for. It might have
            been moved, deleted, or perhaps the URL was mistyped.
          </p>
          <div className="flex flex-col tablet:flex-row gap-4 justify-center">
            <Link
              to="/"
              className="inline-flex items-center justify-center px-8 py-4 text-[1.4rem] font-semibold text-white bg-[rgb(45,212,191)] rounded-full hover:bg-[rgb(20,184,166)] transition-colors"
            >
              Go back home
            </Link>
            <Link
              to="/articles"
              className="inline-flex items-center justify-center px-8 py-4 text-[1.4rem] font-semibold text-[rgb(45,212,191)] border-2 border-[rgb(45,212,191)] rounded-full hover:bg-[rgba(45,212,191,0.1)] transition-colors"
            >
              Browse articles
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
