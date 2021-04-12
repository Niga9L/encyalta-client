import React, { FC } from 'react';
import { Header } from '../../Components/Layout/Header';
import { LayoutUI, PageUI } from './styled';
import { Sidebar } from '../../Components/Layout/Sidebar';
import { Content } from '../../Components/Layout/Content';

export const MainLayout: FC = () => {
  return (
    <LayoutUI>
      <Header />
      <PageUI>
        <Sidebar />
        <Content />
      </PageUI>
    </LayoutUI>
  );
};
