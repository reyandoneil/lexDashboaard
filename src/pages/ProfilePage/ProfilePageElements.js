import styled from 'styled-components';

export const ProfilePageContainer = styled.div`
  &::-webkit-scrollbar {
    display: none;
  }
  display: flex;
  flex-direction: column;
  max-height: 100vh;
  max-width: 100vw;
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  margin-top: 30px;
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
  max-width: 100%;
  height: 100vh;
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
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  min-width: 350px;
  height: 80%;
  margin-bottom: 30px;
  background-color: white;
  border-radius: 5px;
  ${(props) => {
    if (props.ss === 'xs' || props.ss === 'sm') {
      return `
          max-width: 100%;
          margin-right: 0px;
          min-height: 70%;
          `;
    } else {
      return `
        margin-right: 30px;
        `;
    }
  }}
`;

export const ProfileRight = styled.div`
  padding: 20px;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  width: 100%;
  height: 80%;
  margin-bottom: 100px;
  background-color: white;
  border-radius: 5px;
  ${(props) => {
    if (props.ss === 'xs' || props.ss === 'sm') {
      return `
        width: 100%;
        min-height: 70%;
        `;
    }
  }}
`;
