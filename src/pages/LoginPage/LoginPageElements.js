import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: row;
`;

export const LeftContainer = styled.div`
  min-width: 40vw;
  height: 100%;
  background-color: #355BC0;
`;

export const RightContainer = styled.div`
  max-height: 100%;
  width: 100%;
  padding-left: 17%;
  padding-right: 17%;
  margin-top: 100px;
`;
