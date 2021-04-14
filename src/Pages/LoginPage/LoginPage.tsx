import React, { FC } from 'react';
import {
  LoginGoBackUI,
  LoginPageFormContainerUI,
  LoginPageUI,
  LogoPageControlPanelUI,
} from './styled';
import { Logo } from '../../Components/Layout/Logo';
import { Input } from '../../Components/UI/Input';
import { Button, GoBackButton } from '../../Components/UI/Button';

export const LoginPage: FC = () => {
  return (
    <LoginPageUI>
      <LoginPageFormContainerUI>
        <Logo />
        <h3>Войдите, чтобы продолжить</h3>
        <LogoPageControlPanelUI>
          <Input label={'Введите ваш e-mail:'} />
          <Input label={'Введите ваш пароль:'} type={'password'} />
          <Button text={'Войти'} />
          <Button text={'Восстановить пароль'} type={'default'} />
        </LogoPageControlPanelUI>
        <LoginGoBackUI>
          <GoBackButton />
        </LoginGoBackUI>
      </LoginPageFormContainerUI>
    </LoginPageUI>
  );
};
