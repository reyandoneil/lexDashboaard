import styled from 'styled-components';

export const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 100%;
  height: 100%;
  padding: 20px;
`;

export const ProfilePicture = styled.img`
  object-fit: cover;
  width: 150px;
  height: 150px;
  border-radius: 100px;
  background-color: gray;
`;

export const UserName = styled.span`
  font-size: 2rem;

  font-weight: 600;
`;
export const UserId = styled.span`
  font-size: 1rem;
  color: #63737a;
`;

export const Info = styled.div`
  margin-top: 10px;
`;

export const TopWrapper = styled.div`
  height: 60%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const BottomWrapper = styled.div`
  height:f;
  margin-top: 10px;
  height: fit-content;
  border-top-style: solid;
  border-top-width: 1px;
  border-top-color: lightgray;
`;

export const InfoText = styled.span`
  color: #63737a;
`;
