import React, { FC } from 'react';
import { ButtonUI } from './styled';
import { ButtonPropsType } from './types';
import { ButtonProps } from 'antd';

export const Button: FC<ButtonPropsType & ButtonProps> = ({
  text,
  size = 'middle',
  type = 'primary',
  onClick,
  loading,
  htmlType,
}) => {
  return (
    <ButtonUI
      loading={loading}
      type={type}
      size={size}
      onClick={onClick}
      htmlType={htmlType}
    >
      {text}
    </ButtonUI>
  );
};
