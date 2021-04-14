import styled from 'styled-components';
import BellOutlined from '@ant-design/icons/BellOutlined';
import { NotificationPropsType } from './types';

export const NotificationUI = styled(BellOutlined)`
  color: ${(props: NotificationPropsType) => (props.count ? null : '#ffd453')};
  font-size: 23px;
  cursor: pointer;
`;
