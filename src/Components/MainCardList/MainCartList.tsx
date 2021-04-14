import React, { FC } from 'react';
import { MainCartListUI } from './styled';
import { CardItem } from '../CardItem';

export const MainCartList: FC = () => {
  return (
    <MainCartListUI>
      <CardItem />
      <CardItem />
      <CardItem />
      <CardItem />
      <CardItem />
      <CardItem />
      <CardItem />
      <CardItem />
      <CardItem />
    </MainCartListUI>
  );
};
