import { FC } from 'react';
import { Outlet } from 'react-router-dom';

import { Header } from '@/components/Header/Header';
import './index.css';
import { Footer } from '@/components/Footer/Footer';

export const App: FC = () => {
  return (
    <>
      <Header />
      <main className="container max-w-[1600px] min-h-[85vh] m-auto">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};
