import React, { FC } from 'react';
import { ContentUI, PageUI } from './styled';

export const ContentPage: FC = ({ children }) => {
  return (
    <ContentUI>
      <PageUI>{children}</PageUI>
    </ContentUI>
  );
};
