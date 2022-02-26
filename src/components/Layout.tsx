import { ReactNode } from 'react';
import Header from './Header';

interface LayoutProps {
  children: ReactNode;
}

function Layout({ children }: LayoutProps) {
  return (
    <>
      <Header />
      <div>
        <main className="container py-4">{children}</main>
      </div>
    </>
  );
}

export default Layout;
