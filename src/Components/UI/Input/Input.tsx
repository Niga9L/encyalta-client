import React, { FC, useMemo } from 'react';
import { InputUI } from './styled';
import { InputPropsType } from './types';
import { Input as InputAnt, InputProps } from 'antd';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';

export const Input: FC<InputPropsType & InputProps> = ({
  label,
  type,
  ...props
}) => {
  const inputWithType = useMemo(() => {
    switch (type) {
      case 'password': {
        return (
          <InputAnt.Password
            {...props}
            iconRender={(visible) =>
              visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
            }
          />
        );
      }
      default:
        return <InputAnt {...props} />;
    }
  }, [type, props]);

  return (
    <InputUI>
      {label && <h4>{label}</h4>}
      {inputWithType}
    </InputUI>
  );
};
