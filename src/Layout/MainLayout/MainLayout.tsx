import React, { FC } from 'react';
import { Header } from '../../Components/Layout/Header';
import { LayoutUI, PageUI } from './styled';
import { Sidebar } from '../../Components/Layout/Sidebar';
import { ContentPage } from '../../Components/Layout/Content';

export const MainLayout: FC = ({ children }) => {
  return (
    <LayoutUI>
      <Header />
      <PageUI>
        <Sidebar />
        <ContentPage>{children}</ContentPage>
      </PageUI>
    </LayoutUI>
  );
};
