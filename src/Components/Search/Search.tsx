import React, { FC } from 'react';
import { SearchUI } from './styled';

const placeholder = 'Что вы хотите найти?';

export const Search: FC = () => {
  return <SearchUI placeholder={placeholder} enterButton allowClear />;
};
