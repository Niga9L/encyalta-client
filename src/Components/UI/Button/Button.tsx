import React, { FC } from 'react';
import { ButtonUI } from './styled';
import { ButtonPropsType } from './types';

export const Button: FC<ButtonPropsType> = ({
  text,
  size = 'middle',
  type = 'primary',
  onClick,
  loading,
}) => {
  return (
    <ButtonUI loading={loading} type={type} size={size} onClick={onClick}>
      {text}
    </ButtonUI>
  );
};
