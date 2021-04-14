import { Badge } from 'antd';
import React, { FC } from 'react';
import { NotificationUI } from './styled';
import { NotificationPropsType } from './types';

export const Notification: FC<NotificationPropsType> = ({ count }) => {
  return (
    <Badge count={count}>
      <NotificationUI />
    </Badge>
  );
};
