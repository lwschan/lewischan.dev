import React from 'react';
import SEO from 'components/SEO';
import Layout from 'components/Layout';

export default function Portfolio() {
  const message = 'to be continued...';

  return (
    <Layout>
      <SEO />
      {message}
    </Layout>
  );
}
