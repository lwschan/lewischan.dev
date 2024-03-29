import { useStaticQuery, graphql } from 'gatsby';
import { Helmet } from 'react-helmet';
import { useLocation } from '@reach/router';

interface SEOProps {
  title: string;
  description?: string;
}

interface SiteQuery {
  site: {
    siteMetadata: {
      siteName: string;
      siteUrl: string;
      defaultDescription: string;
    };
  };
}

const query = graphql`
  query SEO {
    site {
      siteMetadata {
        siteName
        siteUrl
        defaultDescription
      }
    }
  }
`;

function SEO({ title, description }: SEOProps) {
  const { site } = useStaticQuery<SiteQuery>(query);
  const { pathname } = useLocation();

  const tags = {
    title: `${title} - ${site.siteMetadata.siteName}`,
    description: description ?? site.siteMetadata.defaultDescription,
    url: `${site.siteMetadata.siteUrl}${pathname}`,
  };

  return (
    <Helmet
      htmlAttributes={{
        lang: 'en',
      }}
    >
      {tags.title && <title>{tags.title}</title>}
      {tags.description && <meta name="description" content={tags.description} />}
      {tags.url && <meta property="og:url" content={tags.url} />}
      {tags.title && <meta property="og:title" content={tags.title} />}
      {tags.description && <meta property="og:description" content={tags.description} />}
    </Helmet>
  );
}

export default SEO;
