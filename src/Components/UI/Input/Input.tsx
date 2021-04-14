import React, { FC, useMemo } from 'react';
import { InputUI } from './styled';
import { InputPropsType } from './types';
import { Input as InputAnt } from 'antd';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';

export const Input: FC<InputPropsType> = ({ label, type, placeholder }) => {
  const inputWithType = useMemo(() => {
    switch (type) {
      case 'password': {
        return (
          <InputAnt.Password
            placeholder={placeholder}
            iconRender={(visible) =>
              visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
            }
          />
        );
      }
      default:
        return <InputAnt placeholder={placeholder} />;
    }
  }, [type]);

  return (
    <InputUI>
      {label && <h4>{label}</h4>}
      {inputWithType}
    </InputUI>
  );
};
