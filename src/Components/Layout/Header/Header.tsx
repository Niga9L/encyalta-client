import React, { FC } from 'react';
import { HeaderPartUI, HeaderSearchUI, HeaderUI } from './styled';
import { Logo } from '../Logo';
import { Search } from '../../Search';
import { Button } from '../../UI/Button';
import { Notification } from '../../UI/Notification';
import { NavLink } from 'react-router-dom';
import { routerPath } from '../../../Router/routerPath';

export const Header: FC = () => {
  return (
    <HeaderUI>
      <HeaderPartUI>
        <Logo />
        <HeaderSearchUI>
          <Search />
        </HeaderSearchUI>
      </HeaderPartUI>
      <HeaderPartUI>
        <Notification count={5} />
        <NavLink to={routerPath.login}>
          <Button text={'Войти'} />
        </NavLink>
      </HeaderPartUI>
    </HeaderUI>
  );
};
