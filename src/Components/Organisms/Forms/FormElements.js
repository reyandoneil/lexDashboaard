import styled from "styled-components";

export const FormWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  z-index: 9;
  position: absolute;
  top: 0px;
  left: 0px;
`;

export const ContentForm = styled.div`
 ${(props) => {
    if (props.ss === "xl" || props.ss === "lg" || props.ss === "md") {
      return `
      width: 65%;
      margin-left:200px;
      margin-top:50px;
    `;
    }else {
      return`
      width: 80%;
      `
    }
  }}
  box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
    rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
  height: 80%;
  background-color: white;
  border-radius: 3px;
  display: flex;
  flex-direction: column;
  z-index: 2;
  padding: 20px;
`;

export const FormBackground = styled.div`
  top: 65px;
  left: 0px;
  height: 93%;
  width: 100%;
  background: rgba(0, 0, 0, 0);
  backdrop-filter: saturate(100%) blur(10px);
  position: absolute;
`;

export const ContentTitle = styled.div`
  background-color: #8567c9;
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom-color: lightgray;
  border-bottom-style: solid;
  border-bottom-width: 1px;
`;
export const Title = styled.span`
  font-size: 1.8rem;
  color: white;
  padding: 20px;
  font-weight: 600;
`;

export const InputFormWrapper = styled.form`
  ${(props) => {
    if (props.ss === "sm" || props.ss === "xs") {
      return `
        display: flex;
        flex-direction:column ;
      `;
    } else {
      return `
      display: flex;
      flex-direction: row;
      `;
    }
  }}
  width: 100%;
  height: 100%;
  margin-top: 35px;
  overflow-y: auto;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const Left = styled.div`
  ${(props) => {
    if (props.ss === "sm" || props.ss === "xs") {
      return `
      width: 100%;
      `;
    } else {
      return `
      width: 50%;
      `;
    }
  }}
`;
export const Right = styled.div`
  ${(props) => {
    if (props.ss === "sm" || props.ss === "xs") {
      return `
      width: 100%;
      `;
    } else {
      return `
      width: 50%;
      `;
    }
  }}
`;

export const Line = styled.div`
  margin-left: 25px;
  margin-right: 25px;
  border-left-color: lightgray;
  border-left-style: solid;
  height: 95%;
  border-left-width: 0.8px;
`;

export const SuggestWrapper = styled.div`
  padding: 5px;
  display: flex;
  flex-direction: column;
  width: 35%;
  height: fit-content;
  position: absolute;
  max-height: 150px;
  &::-webkit-scrollbar {
    display: none;
  }
  -webkit-overflow-scrolling: touch;
  overflow-y: auto;
  background-color: white;
`;

export const TextSuggest = styled.span`
  cursor: pointer;
  padding: 7px;
  font-size: 1rem;
`;
export const ListContainer = styled.div``;

export const ButtonWrapper = styled.div`
  display: flex;
  margin-top: 50px;
`;

export const Space = styled.div`
  margin-left: 20px;
`;

