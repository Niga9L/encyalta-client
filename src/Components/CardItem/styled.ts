import styled from 'styled-components';

export const CardItemUI = styled.div`
  height: 450px;
  padding: 10px 0;
  border-radius: 10px;
  width: 100%;
  cursor: pointer;
  transition: all 0.5s;
  box-shadow: 0 2px 8px rgb(18 17 36 / 4%), 0 4px 32px rgb(18 17 36 / 8%);
  &:hover {
    box-shadow: 0 2px 8px rgb(18 17 36 / 10%), 0 4px 32px rgb(18 17 36 / 20%);
  }
`;

export const CardItemHead = styled.div`
  min-height: 30px;
  padding: 0 15px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const CardItemImg = styled.div`
  background: aquamarine;
  height: 300px;
`;

export const CardItemFooter = styled.div`
  min-height: 30px;
  padding: 10px 15px 0;
`;

export const ShortDescription = styled.h4`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const CardItemText = styled.div`
  overflow: hidden;
  height: 60px;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
`;
