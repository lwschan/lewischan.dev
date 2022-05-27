import Layout from 'components/Layout';

function Index() {
  return (
    <Layout title="Home">
      <div className="mt-20 min-h-screen">
        <h1 className="font-bold text-3xl">Hello, I&apos;m Lewis!</h1>
        <p className="mt-3 text-xl">Welcome to my blog where I talk about software engineering.</p>
      </div>
    </Layout>
  );
}

export default Index;
