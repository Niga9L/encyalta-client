import React, { FC } from 'react';
import {
  LoginGoBackUI,
  LoginPageFormContainerUI,
  LoginPageUI,
  LogoPageControlPanelUI,
} from './styled';
import { Form, notification } from 'antd';
import { Logo } from '../../Components/Layout/Logo';
import { Input } from '../../Components/UI/Input';
import { Button, GoBackButton } from '../../Components/UI/Button';
import { api, endpoints } from '../../api';

type LoginFormTypes = {
  email: string;
  password: string;
};

export const LoginPage: FC = () => {
  const onValidate = async (values: LoginFormTypes) => {
    try {
      const response = await api.post(endpoints.login(), values);
      console.log(response);
    } catch (e) {
      notification.error({
        message: 'Ошибка входа',
        description:
          'Введенный вами e-mail или пароль не соответствуют, повторите попытку!',
      });
    }
  };

  return (
    <LoginPageUI>
      <LoginPageFormContainerUI>
        <Logo />
        <h3>Войдите, чтобы продолжить</h3>
        <LogoPageControlPanelUI>
          <Form
            initialValues={{
              email: '',
              password: '',
            }}
            onFinish={onValidate}
          >
            <Form.Item
              name="email"
              rules={[
                {
                  required: true,
                  message: 'Введите ваш e-mail!',
                },
                {
                  type: 'email',
                  message: 'E-mail не корректный',
                },
              ]}
            >
              <Input label={'Введите ваш e-mail:'} />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[
                {
                  required: true,
                  message: 'Введите ваш пароль!',
                },
              ]}
            >
              <Input label={'Введите ваш пароль:'} type={'password'} />
            </Form.Item>
            <Button text={'Войти'} htmlType={'submit'} />
          </Form>
          <Button text={'Восстановить пароль'} type={'default'} />
        </LogoPageControlPanelUI>
        <LoginGoBackUI>
          <GoBackButton />
        </LoginGoBackUI>
      </LoginPageFormContainerUI>
    </LoginPageUI>
  );
};
