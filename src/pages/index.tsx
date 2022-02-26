import Layout from 'components/Layout';
import { Helmet } from 'react-helmet';

function Index() {
  return (
    <Layout>
      <Helmet>
        <title>Home - lewischan.dev</title>
      </Helmet>
      <div className="mt-20 min-h-screen">
        <h1 className="font-bold text-3xl">Hello, I&apos;m Lewis!</h1>
        <p className="mt-3 text-xl">
          Welcome to my blog. I am a software engineer from Kuala Lumpur, Malaysia.
        </p>
      </div>
    </Layout>
  );
}

export default Index;
