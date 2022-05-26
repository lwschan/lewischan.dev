import { ReactNode } from 'react';
import { Helmet } from 'react-helmet';
import Header from './Header';

interface LayoutProps {
  title: string;
  children: ReactNode;
}

function Layout({ title, children }: LayoutProps) {
  return (
    <>
      <Helmet>
        <title>{`${title} - lewischan.dev`}</title>
      </Helmet>
      <Header />
      <div>
        <main className="container py-4">{children}</main>
      </div>
    </>
  );
}

export default Layout;
