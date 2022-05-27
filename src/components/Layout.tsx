import SEO from 'components/SEO';
import { ReactNode } from 'react';
import Header from './Header';

interface LayoutProps {
  title: string;
  description?: string;
  children: ReactNode;
}

function Layout({ title, description, children }: LayoutProps): JSX.Element {
  return (
    <>
      <SEO title={title} description={description} />
      <Header />
      <div>
        <main className="container py-4">{children}</main>
      </div>
    </>
  );
}

export default Layout;
