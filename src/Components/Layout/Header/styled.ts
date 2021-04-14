import styled from 'styled-components';
import Layout from 'antd/lib/layout';

const { Header } = Layout;

export const HeaderUI = styled(Header)`
  background: #fff;
  display: flex;
  position: fixed;
  justify-content: space-between;
  gap: 20px;
  align-items: center;
  width: 100%;
  box-shadow: 0 2px 8px 0 rgba(34, 60, 80, 0.2);
`;

export const HeaderSearchUI = styled.div`
  width: 500px;
  display: flex;
  align-items: center;
`;

export const HeaderPartUI = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;
