import React, { FC } from 'react';
import { ButtonUI } from './styled';
import { ButtonPropsType } from './types';

export const Button: FC<ButtonPropsType> = ({ text, size = 'middle' }) => {
  return (
    <ButtonUI type={'primary'} size={size}>
      {text}
    </ButtonUI>
  );
};
