interface ErrorMessageProps {
  error: Error;
}

export function ErrorMessage({ error, ...props }: ErrorMessageProps) {
  return (
    <div role="alert" {...props}>
      <span>There was an error: </span>
      <pre>{error.message}</pre>
    </div>
  );
}
