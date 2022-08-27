import {
  ProfilePageContainer,
  ProfileLeft,
  ProfileRight,
  ProfileWrapper,
  Text,
  Title,
  TextWrapper,
  ListBtn,
} from './ProfilePageElements';
import { Profile, AccountDetails, ProfileContent } from '../../Components/Organisms';
import { useSelector } from 'react-redux';
import { ListButton } from '../../Components/Molecules';

function ProfilePage() {
  const ss = useSelector((state) => state?.globalReducer?.screenSize);

  return (
    <ProfilePageContainer ss={ss}>
      <TextWrapper ss={ss}>
        <Text ss={ss}>OVERVIEW</Text>
        <Title>User Profile</Title>
      </TextWrapper>
      <>
        <ListBtn>
          <ListButton />
        </ListBtn>
      </>
      <ProfileWrapper ss={ss} id="profileWrapper">
        <ProfileLeft ss={ss} id="profileLeft">
          <Profile />
        </ProfileLeft>
        <ProfileRight ss={ss} id="profileRight">
          <AccountDetails />
        </ProfileRight>
      </ProfileWrapper>
      <ProfileContent/>
    </ProfilePageContainer>
  );
}

export default ProfilePage;
