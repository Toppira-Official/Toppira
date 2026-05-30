import { Footer } from '@/features/shared/components/footer';
import {
  OrganizationJsonLd,
  WebSiteJsonLd,
} from '@/features/shared/components/json-ld';
import React from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from '~features/shared/components/header';

export const CommonLayout: React.FC = () => {
  return (
    <>
      <OrganizationJsonLd />
      <WebSiteJsonLd />
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};
