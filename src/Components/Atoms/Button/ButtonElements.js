import styled from 'styled-components';

export const ButtonWrapper = styled.button`
  cursor: pointer;
  border: none;
  margin-bottom: 20px;
  ${(props) => {
    if (props.title === 'Sign in with google') {
      return `
        background-color: white;
        height: 45px;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 2px;
        margin-bottom: 25px;  
        border-width: 1px;
        border-style:solid;
        border-color: #E4E4E4;
        :hover{
          box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
        }
        `;
    } else {
      return `
        background-color: #fcc894;
        height: 45px;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 2px;
        :hover{
            background-color: #FC8E20
        }
      `;
    }
  }}
`;

export const ButtonTitle = styled.span`
  ${(props) => {
    if (props.title === 'Sign in with google') {
      return `
            color: gray;
        `;
    } else if (props.isActive === 'active') {
      return `
          color: balck;
        `;
    } else {
      return `
        color: white;
        `;
    }
  }}
`;

export const Icon = styled.img`
  ${(props) => {
    if (props.name === 'default') {
      return `
        height: 50%;    
        margin-left:20px;
    `;
    } else {
      return `
        height: 80%; 
      `;
    }
  }}
`;

export const ListButtonWrapper = styled.button`
  ${(props) => {
    if (props.isActive === 'active') {
      return `
        background-color: #fcc894;
      `;
    } else {
      return `
        background-color: #967FCC;
        :hover {
          background-color: #8567C9;
        }
      `;
    }
  }}
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  cursor: pointer;
  border: none;
  height: 25px;
  min-width: fit-content;
  padding: 5px 10px 5px 10px;
  margin-right: 20px;
  border-radius: 10px;
`;

export const ButtonAddWrapper = styled.button`
  cursor: pointer;
  border-radius: 30px;
  border: none;
  background-color: #967FCC;
  padding: 10px;
  height: fit-content;
  width: fit-content;
  display: flex;
  justify-content: center;
  align-items: center;
;
  :hover {
    background-color: #8567C9;;
  }
`;
