import { Helmet } from 'react-helmet';

import favicon from '@/assets/me.png';

interface MetaProps {
  title: string;
  description: string;
}

export function Meta({ title, description }: MetaProps) {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="icon" href={favicon} />
    </Helmet>
  );
}
