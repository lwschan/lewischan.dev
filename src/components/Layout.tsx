import { ReactNode } from 'react';
import Header from './Header';

interface LayoutProps {
  children: ReactNode;
}

function Layout({ children }: LayoutProps) {
  return (
    <div className="container py-8">
      <Header />
      <main>{children}</main>
    </div>
  );
}

export default Layout;
