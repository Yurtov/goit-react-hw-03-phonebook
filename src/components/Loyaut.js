import styled from 'styled-components';

export const Layout = styled.main`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 40;
  color: #010101;
`;

export const BtnOpen = styled.button`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #4287f5;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  outline: none;
`;

export const Contacts = styled.div`
  margin-top: 25px;
  display: flex;
  gap: 20px;
  align-items: center;
`;

export const BtnClose = styled.button`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: #f70202;
  color: #fff;
  border: 1px solid rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 20px;
  right: 20px;
  cursor: pointer;
  outline: none;
`;

export const Title = styled.h2`
  font-size: 40px;
`;

export const SubTitle = styled.h2`
  font-size: 30px;
`;
