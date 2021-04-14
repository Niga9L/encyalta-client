import React, { FC } from 'react';
import { MainLayout } from '../Layout/MainLayout';

// eslint-disable-next-line react/display-name,@typescript-eslint/explicit-module-boundary-types
// eslint-disable-next-line
export const withLayout = (Component: FC) => (props: any) => (
  <MainLayout>
    <Component {...props} />
  </MainLayout>
);
