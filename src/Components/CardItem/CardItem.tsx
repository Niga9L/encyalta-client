import React, { FC } from 'react';
import {
  CardItemFooter,
  CardItemHead,
  CardItemImg,
  CardItemText,
  CardItemUI,
  ShortDescription,
} from './styled';

export const CardItem: FC = () => {
  return (
    <CardItemUI>
      <CardItemHead>Главное описание статьи</CardItemHead>
      <CardItemImg />
      <CardItemFooter>
        <ShortDescription>
          Краткое описание
          статьистатьистатьистатьистатьистатьистатьистатьистатьи
        </ShortDescription>
        <CardItemText>
          Кактой то текст Кактой то текст Кактой то текст Кактой то текст Кактой
          то текст Кактой то текст Кактой то текст Кактой то текстКактой то
          текст Кактой то текст Кактой то текст Кактой то текст Кактой то текст
          Кактой то текст Кактой то текст Кактой то текст
        </CardItemText>
      </CardItemFooter>
    </CardItemUI>
  );
};
