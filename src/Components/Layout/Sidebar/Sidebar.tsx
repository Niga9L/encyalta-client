import { Menu } from 'antd';
import React, { FC, useMemo } from 'react';
import { SidebarUI } from './styled';
import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
} from '@ant-design/icons';
import { routerPath } from '../../../Router/routerPath';
import { NavLink, useLocation } from 'react-router-dom';

export const Sidebar: FC = () => {
  const location = useLocation();

  const setDefaultKey = useMemo(() => {
    return location.pathname;
  }, [location]);

  return (
    <SidebarUI width={280}>
      <Menu defaultSelectedKeys={[setDefaultKey]} mode="inline">
        <Menu.Item key={routerPath.home} icon={<PieChartOutlined />}>
          <NavLink to={routerPath.home}>Главная</NavLink>
        </Menu.Item>
        <Menu.Item key={routerPath.news} icon={<DesktopOutlined />}>
          <NavLink to={routerPath.news}>Новости</NavLink>
        </Menu.Item>
        <Menu.Item key={routerPath.about} icon={<FileOutlined />}>
          <NavLink to={routerPath.about}>О проекте</NavLink>
        </Menu.Item>
      </Menu>
    </SidebarUI>
  );
};
