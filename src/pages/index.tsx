import Layout from 'components/Layout';
import { Helmet } from 'react-helmet';

function IndexPage() {
  return (
    <Layout>
      <Helmet>
        <title>Home - lewischan.dev</title>
      </Helmet>
      <div className="mt-20 min-h-screen">
        <h1 className="font-mono font-bold text-4xl">Hello, I&apos;m Lewis!</h1>
      </div>
    </Layout>
  );
}

export default IndexPage;
