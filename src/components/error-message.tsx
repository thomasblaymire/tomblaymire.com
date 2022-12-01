interface ErrorMessage {
  error: Error;
}

export function ErrorMessage({ error, ...props }: ErrorMessage) {
  return (
    <div role="alert" {...props}>
      <span>There was an error: </span>
      <pre>{error.message}</pre>
    </div>
  );
}
