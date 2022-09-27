import styled from 'styled-components';

export const ModalWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  z-index: 999;
  position: absolute;
  top: 0px;
  left: 0px;
`;

export const ModalBackground = styled.div`
  height: 100%;
  width: 100%;
  background-color: black;
  opacity: 45%;
  position: absolute;
`;

export const ModalContent = styled.div`
  box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
    rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
  height: 450px;
  width: 500px;
  background-color: white;
  border-radius: 3px;
  z-index: 2;
`;
