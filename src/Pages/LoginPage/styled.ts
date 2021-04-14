import styled from 'styled-components';

export const LoginPageUI = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const LoginPageFormContainerUI = styled.div`
  padding: 15px 30px;
  box-shadow: 0 2px 8px rgb(18 17 36 / 4%), 0 4px 32px rgb(18 17 36 / 8%);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  position: relative;

  & h3 {
    font-size: 18px;
    color: #1890ff;
  }
`;

export const LogoPageControlPanelUI = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: 13px;
  padding-bottom: 30px;
`;

export const LoginGoBackUI = styled.div`
  position: absolute;
  top: 60px;
  left: -20px;
`;
