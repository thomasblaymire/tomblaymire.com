import { Helmet } from 'react-helmet';
import { useLocation } from 'react-router-dom';

import favicon from '@/assets/me.png';
import profileImage from '@/assets/profilealt.jpg';

interface MetaProps {
  title: string;
  description: string;
  image?: string;
  type?: 'website' | 'article';
  author?: string;
  publishedTime?: string;
  keywords?: string[];
}

export function Meta({
  title,
  description,
  image,
  type = 'website',
  author,
  publishedTime,
  keywords = [],
}: MetaProps) {
  const location = useLocation();
  const siteUrl = 'https://www.tomblaymire.com';
  const canonicalUrl = `${siteUrl}${location.pathname}`;
  const defaultImage = `${siteUrl}${profileImage}`;
  const ogImage = image || defaultImage;

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': type === 'article' ? 'Article' : 'WebSite',
    name: title,
    description: description,
    url: canonicalUrl,
    ...(type === 'article' && {
      author: {
        '@type': 'Person',
        name: author || 'Tom Blaymire',
        url: siteUrl,
      },
      datePublished: publishedTime,
      image: ogImage,
    }),
    ...(type === 'website' && {
      author: {
        '@type': 'Person',
        name: 'Tom Blaymire',
        url: siteUrl,
        jobTitle: 'Software Engineer',
        alumniOf: 'University of Leeds',
        sameAs: [
          'https://github.com/thomasblaymire',
          'https://twitter.com/thomas_blaymire',
          'https://www.linkedin.com/in/thomasblaymire/',
        ],
      },
    }),
  };

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      {keywords.length > 0 && <meta name="keywords" content={keywords.join(', ')} />}
      <link rel="canonical" href={canonicalUrl} />
      <link rel="icon" href={favicon} />

      <meta property="og:type" content={type} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content="Tom Blaymire" />
      <meta property="og:locale" content="en_GB" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={canonicalUrl} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:creator" content="@thomas_blaymire" />
      <meta name="twitter:site" content="@thomas_blaymire" />

      {type === 'article' && publishedTime && (
        <meta property="article:published_time" content={publishedTime} />
      )}
      {type === 'article' && author && (
        <meta property="article:author" content={author} />
      )}

      <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
    </Helmet>
  );
}
