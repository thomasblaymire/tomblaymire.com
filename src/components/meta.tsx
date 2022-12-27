import favicon from '@/assets/favicon.ico';

export function Meta({ title, description }: any) {
  return (
    <head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="icon" href={favicon} />
    </head>
  );
}
