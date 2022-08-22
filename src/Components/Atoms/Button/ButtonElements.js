import stl from 'styled-components';

export const ButtonWrapper = stl.button`
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

export const ButtonTitle = stl.span`
  ${(props) => {
    if (props.title === 'Sign in with google') {
      return `
            color: gray;
        `;
    } else {
      return `
        color: white;
        `;
    }
  }}
`;

export const Icon = stl.img`
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
