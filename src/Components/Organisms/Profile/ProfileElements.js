import styled from 'styled-components';

export const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 100%;
  height: 80%;
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

`
export const UserId = styled.span`
  font-size: 1rem;
`

export const Info = styled.span`
  
`
