import { Helmet } from 'react-helmet-async';
import { absoluteUrl, siteConfig } from '../config/seo';

type JsonLdProps = {
  data: Record<string, unknown> | Record<string, unknown>[];
};

function JsonLdScript({ data }: JsonLdProps) {
  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(data)}</script>
    </Helmet>
  );
}

export function OrganizationJsonLd() {
  return (
    <JsonLdScript
      data={{
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: siteConfig.name,
        url: siteConfig.url,
        logo: absoluteUrl('/favicon.jpg'),
        description: siteConfig.description,
        sameAs: [siteConfig.githubUrl, siteConfig.linkedinUrl],
      }}
    />
  );
}

export function WebSiteJsonLd() {
  return (
    <JsonLdScript
      data={{
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        name: siteConfig.name,
        url: siteConfig.url,
        description: siteConfig.description,
        publisher: {
          '@type': 'Organization',
          name: siteConfig.name,
          url: siteConfig.url,
        },
      }}
    />
  );
}
