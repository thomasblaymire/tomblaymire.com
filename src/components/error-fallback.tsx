import type { FallbackProps } from 'react-error-boundary';

export function ErrorFallback({ error, resetErrorBoundary }: FallbackProps) {
  const errorMessage = error instanceof Error ? error.message : String(error);

  return (
    <main className="min-h-screen flex items-center justify-center px-6">
      <div className="text-center max-w-200">
        <p className="text-[8rem] tablet:text-[12rem] font-bold text-[rgb(239,68,68)] leading-none mb-4">
          500
        </p>
        <h1 className="text-[2.4rem] tablet:text-[3.6rem] font-bold text-[rgb(0,0,0)] dark:text-[rgb(244,244,245)] leading-tight mb-6">
          Something went wrong
        </h1>
        <p className="text-[1.4rem] tablet:text-[1.6rem] text-[rgb(82,82,91)] dark:text-[rgb(161,161,170)] leading-relaxed mb-6">
          We&apos;re sorry, but something unexpected happened. Our team has been notified
          and we&apos;re working to fix the issue.
        </p>
        {errorMessage && (
          <p className="text-[1.2rem] text-[rgb(113,113,122)] dark:text-[rgb(113,113,122)] mb-10 font-mono bg-[rgba(0,0,0,0.05)] dark:bg-[rgba(255,255,255,0.05)] p-4 rounded-lg">
            {errorMessage}
          </p>
        )}
        <div className="flex flex-col tablet:flex-row gap-4 justify-center">
          {resetErrorBoundary && (
            <button
              onClick={resetErrorBoundary}
              className="inline-flex items-center justify-center px-8 py-4 text-[1.4rem] font-semibold text-white bg-[rgb(239,68,68)] rounded-full hover:bg-[rgb(220,38,38)] transition-colors"
            >
              Try again
            </button>
          )}
          <a
            href="/"
            className="inline-flex items-center justify-center px-8 py-4 text-[1.4rem] font-semibold text-[rgb(239,68,68)] border-2 border-[rgb(239,68,68)] rounded-full hover:bg-[rgba(239,68,68,0.1)] transition-colors"
          >
            Go back home
          </a>
        </div>
      </div>
    </main>
  );
}
