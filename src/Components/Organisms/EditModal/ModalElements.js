import styled from 'styled-components';

export const ModalWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 90%;
  width: 100%;
  z-index: 9;
  position: absolute;
  top: 65px;
  left: 0px;
`;

export const ModalBackground = styled.div`
  height: 100%;
  width: 100%;
  background: rgba(0,0,0,0);
  backdrop-filter: saturate(100%) blur(10px);
  position: absolute;
`;

export const ModalContent = styled.div`
  box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
    rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
  height: 510px;
  width: 500px;
  background-color: white;
  border-radius: 3px;
  z-index: 2;
  padding: 20px ;
  border-radius: 10px ;
`;

export const ModalTitle = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem ;
  margin-bottom: 30px;
  color: #8567C9;
  font-weight: 600;
`;

export const EditForm = styled.form`
  height: fit-content ;
`;
export const InputWrapper = styled.div` 
  margin-bottom:2rem ;
`;
