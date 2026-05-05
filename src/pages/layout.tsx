import { Footer } from '@/features/shared/components/footer';
import { useTheme } from '@/features/shared/store/theme';
import React from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from '~features/shared/components/header';

export const CommonLayout: React.FC = () => {
  const setTheme = useTheme((state) => state.setTheme);

  React.useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as 'dark' | 'light' | null;

    if (savedTheme) setTheme(savedTheme);
  }, []);

  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};
