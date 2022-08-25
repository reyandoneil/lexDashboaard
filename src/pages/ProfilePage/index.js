import {
  ProfilePageContainer,
  ProfileLeft,
  ProfileRight,
  ProfileWrapper,
  Text,
  Title,
  TextWrapper,
} from './ProfilePageElements';
import { Profile, AccountDetails } from '../../Components/Organisms';
import { useSelector } from 'react-redux';

function ProfilePage() {
  const ss = useSelector((state) => state?.globalReducer?.screenSize);
  return (
    <ProfilePageContainer ss={ss}>
      <TextWrapper ss={ss}>
        <Text>OVERVIEW</Text>
        <Title>User Profile</Title>
      </TextWrapper>
      <ProfileWrapper ss={ss} id="profileWrapper">
        <ProfileLeft ss={ss} id="profileLeft">
          <Profile />
        </ProfileLeft>
        <ProfileRight ss={ss} id="profileRight">
          <AccountDetails />
        </ProfileRight>
      </ProfileWrapper>
    </ProfilePageContainer>
  );
}

export default ProfilePage;
