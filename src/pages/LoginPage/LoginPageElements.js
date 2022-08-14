import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  max-width: 100vw;
  display: flex;
  flex-direction: row;
`;

export const LeftContainer = styled.div`
  ${(props) => {
    if (props.ss === 'sm' || props.ss === 'xs') {
      return `
        display: none;
    `;
    }
  }}
  width: 40vw;
  height: 100%;
  background-color: #FCC894;
`;

export const RightContainer = styled.div`
  ${(props) => {
    if (props.ss === 'sm' || props.ss === 'xs') {
      return `
        width:100vw;
    `;
    }else {
      return`
        width: 60vw;
      `

    }
  }}
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
