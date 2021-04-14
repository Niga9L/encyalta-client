import React, { FC } from 'react';
import { LogoSpanUI, LogoTextUI, LogoUI, PointerUI } from './styled';
import { routerPath } from '../../../Router/routerPath';

export const Logo: FC = () => {
  return (
    <LogoUI to={routerPath.home}>
      <LogoTextUI>
        <LogoSpanUI>Я</LogoSpanUI>лтинская <PointerUI />
        <LogoSpanUI>Э</LogoSpanUI>нциклопедия
      </LogoTextUI>
    </LogoUI>
  );
};
