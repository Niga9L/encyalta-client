import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const LogoTextUI = styled.h1`
  display: flex;
  align-items: center;
  margin-bottom: 0;
`;

export const LogoSpanUI = styled.span`
  color: #1890ff;
  font-size: 1.8rem;
  line-height: 61px;
  transition: all 0.2s;
`;

export const PointerUI = styled.div`
  height: 30px;
  width: 2px;
  border: 1px solid #1890ff;
  margin: 0 7px;
  transition: all 0.2s;
`;

export const LogoUI = styled(NavLink)`
  &:hover {
    & ${LogoSpanUI} {
      color: #40a9ff;
    }

    & ${PointerUI} {
      border: 1px solid #40a9ff;
    }
  }
`;
