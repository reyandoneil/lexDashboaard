import styled from 'styled-components';

export const TopContent = styled.div`
  max-height: 80px;
  width: 100%;
  padding: 20px;
`;

export const Content = styled.div`
  ${props => {
  if(props.ss === 'xl') {
    return`
      width: 97%;
    `
  }else if(props.ss === 'lg'){
    return`
      width: 97%;
    `
  }
}}
  height: 75vh;
  padding: 20px;
  overflow-y: auto;
&::-webkit-scrollbar {
    display: none;
}
`;
