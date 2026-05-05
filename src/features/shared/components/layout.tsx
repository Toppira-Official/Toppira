import type React from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from './header';

export const CommonLayout: React.FC = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};
