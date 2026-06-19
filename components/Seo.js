import Head from 'next/head';
import { siteMeta } from '@/data/siteData';

export default function Seo({
  title,
  description = siteMeta.description,
  path = '/',
  image = '/og-image.svg'
}) {
  const pageTitle = title ? `${title} | ${siteMeta.name}` : `${siteMeta.name} | ${siteMeta.title}`;
  const canonical = `${siteMeta.siteUrl}${path}`;
  const ogImage = `${siteMeta.siteUrl}${image}`;

  return (
    <Head>
      <title>{pageTitle}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={ogImage} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      <link rel="canonical" href={canonical} />
    </Head>
  );
}
