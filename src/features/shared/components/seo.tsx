import { Helmet } from 'react-helmet-async';
import {
  absoluteUrl,
  buildPageTitle,
  siteConfig,
  type PageSeo,
} from '../config/seo';

type SeoProps = PageSeo & {
  noIndex?: boolean;
  ogImage?: string;
  ogType?: 'website' | 'article';
};

export function Seo({
  title,
  description,
  path,
  keywords,
  noIndex = false,
  ogImage = siteConfig.defaultOgImage,
  ogType = 'website',
}: SeoProps) {
  const canonicalUrl = absoluteUrl(path);
  const pageTitle = buildPageTitle(title);
  const imageUrl = ogImage.startsWith('http') ? ogImage : absoluteUrl(ogImage);
  const robots = noIndex ? 'noindex, nofollow' : 'index, follow';

  return (
    <Helmet>
      <html lang="en" />
      <title>{pageTitle}</title>
      <meta name="description" content={description} />
      {keywords?.length ? (
        <meta name="keywords" content={keywords.join(', ')} />
      ) : null}
      <meta name="robots" content={robots} />
      <meta name="author" content={siteConfig.name} />
      <link rel="canonical" href={canonicalUrl} />

      <meta property="og:site_name" content={siteConfig.name} />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:locale" content={siteConfig.locale} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:image:alt" content={`${siteConfig.name} — ${siteConfig.tagline}`} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />
      {siteConfig.twitterHandle ? (
        <meta name="twitter:site" content={siteConfig.twitterHandle} />
      ) : null}

      {siteConfig.googleSiteVerification ? (
        <meta
          name="google-site-verification"
          content={siteConfig.googleSiteVerification}
        />
      ) : null}
    </Helmet>
  );
}
