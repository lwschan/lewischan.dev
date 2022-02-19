import { ReactNode } from 'react';
import Header from './Header';

interface LayoutProps {
  children: ReactNode;
}

function Layout({ children }: LayoutProps) {
  return (
    <div className="container py-4 lg:py-8">
      <Header />
      <main className="pt-8">{children}</main>
    </div>
  );
}

export default Layout;
