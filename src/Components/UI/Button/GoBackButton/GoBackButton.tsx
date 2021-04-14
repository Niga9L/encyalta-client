import React, { FC } from 'react';
import { Button } from 'antd';
import { LeftOutlined } from '@ant-design/icons';
import { useHistory } from 'react-router-dom';

export const GoBackButton: FC = () => {
  const history = useHistory();
  return (
    <Button
      type="default"
      shape="circle"
      icon={<LeftOutlined style={{ marginRight: '1px', marginTop: '6px' }} />}
      size={'large'}
      onClick={() => history.goBack()}
    />
  );
};
