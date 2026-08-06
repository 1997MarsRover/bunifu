import { ReactNode } from 'react';
import Header from '../Header';
import Footer from '../Footer';

export default function ShopLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col bg-brand-light">
      <Header variant="solid" />
      <main className="flex-1 pt-[4.5rem]">{children}</main>
      <Footer compact />
    </div>
  );
}
