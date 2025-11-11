import { ErrorMessage } from '@/components/error-message';

interface FallbackError {
  error: Error;
}

export function ErrorFallback({ error }: FallbackError): JSX.Element {
  return (
    <div className="h-full flex flex-col justify-start items-center">
      <ErrorMessage error={error} />
    </div>
  );
}
