import styled from "styled-components";

export const AlertWrapper = styled.div`
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

export const AlertBackground = styled.div`
  height: 100%;
  width: 100%;
  background: rgba(0,0,0,0);
  backdrop-filter: saturate(100%) blur(10px);
  position: absolute;
`;

export const AlertContent = styled.div`
  box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
    rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
  height: fit-content;
  width: 500px;
  background-color: white;
  border-radius: 3px;
  z-index: 2;
  padding: 20px;
  border-radius: 10px;
`;

export const AlertTitle = styled.span`
  font-size: 2rem;
  font-weight: 600;
  color: white;
`;

export const AlertTitleWrapper = styled.div`
  height: 20%;
  padding:5px ;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ff9c9c;;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  height: 10% ;
`;

export const ContentWrapper = styled.div`
  height:200px ;
`;

export const Mb = styled.div`
  width: 10%;
`;
