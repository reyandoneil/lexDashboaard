import styled from 'styled-components';

export const FormWrapper = styled.form`
  margin-bottom: 40px;
`;

export const Space = styled.div`
  margin-bottom: 20px;
`

export const LoginFormWrapper = styled.div`
  ${(props) => {
    if (props.ss === 'xs' || props.ss === 'sm') {
      return `
        width: 80%;
        `;
    } else {
      return `
            width: 50%;
        `;
    }
  }}
`;
