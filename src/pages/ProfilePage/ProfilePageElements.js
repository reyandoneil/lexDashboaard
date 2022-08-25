import styled from 'styled-components';

export const ProfilePageContainer = styled.div`
  &::-webkit-scrollbar {
    display: none;
  }
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  margin-top: 30px;
  ${(props) => {
    if (props.ss === 'xs' || props.ss === 'sm') {
      return `
      width: 100%;
      justify-content: center;
      align-items: center;
      `;
    } else {
      return `
     
      `;
    }
  }}
`;
export const Text = styled.span`
  font-size: 12px;
  color: #63737a;
`;
export const Title = styled.span`
  font-size: 24px;
  font-weight: 600;
  color: #63737a;
`;

export const ProfileWrapper = styled.div`
  display: flex;
  gap: 20px;
  max-width: 100%;
  height: 100%;
  ${(props) => {
    if (props.ss === 'xs' || props.ss === 'sm') {
      return `
      flex-direction: column;
      &::-webkit-scrollbar {
        display: none;
        }
      display: block;
      overflow: scroll;
      `;
    } else {
      return `
      overflow: scroll;
      &::-webkit-scrollbar {
        display: none;
        }
      `;
    }
  }}
`;

export const ProfileLeft = styled.div`
  border-radius: 10px;
  background-color: white;
  height: 100%;
  width: 40%;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  ${(props) => {
    if (props.ss === 'xs' || props.ss === 'sm') {
      return `
        width:100%;
        height: 70%;

      `;
    } else {
      return `
   
      `;
    }
  }}
`;

export const ProfileRight = styled.div`
  border-radius: 10px;
  width: 60%;
  background-color: white;
  height: 100%;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  ${(props) => {
    if (props.ss === 'xs' || props.ss === 'sm') {
      return `
        margin-top: 20px;
        width:100%;
        height: 70%;

      `;
    } else {
      return `
   
      `;
    }
  }}
`;
