import { ReactNode } from 'react';
import Header from './Header';

interface LayoutProps {
  children: ReactNode;
}

function Layout({ children }: LayoutProps) {
  return (
    <>
      <Header />
      <div className="h-14" />
      <div className="bg-gray-50">
        <main className="container py-2">{children}</main>
      </div>
    </>
  );
}

export default Layout;
