import styled from 'styled-components';

export const SideFormWrapper = styled.div`
  width: 100%;
  height: 100%;
  left: 0px;
  display: flex;
  flex-direction: row;
  position: fixed;
  top: 65px;
`;
export const TitleFormContainer = styled.div`
  height: 60px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #8567c9;
  margin-bottom: 2rem;
`;
export const Text = styled.span`
  font-size: 2rem;
  color: white;
`;

export const ContentSideFormWrapper = styled.div`
  ${(props) => {
    if (props.ss === 'sm' || props.ss === 'xs') {
      return `
      width: 100%;
    `;
    } else {
      return `
      width: 500px;
      `;
    }
  }}
  height: 100%;
  background-color: white;
  padding: 20px;
`;
export const SideFormBackground = styled.div`
  ${(props) => {
    if (props.ss === 'sm' || props.ss === 'xs') {
      return `
    display: none;
    `;
    }
  }}
  height: 100%;
  width: 100%;
  background-color: black;
  opacity: 15%;
`;

export const InputWrapper = styled.div`
  margin-bottom: 2rem;
`;

export const FormWrapper = styled.form`
  height: 100%;
`;
