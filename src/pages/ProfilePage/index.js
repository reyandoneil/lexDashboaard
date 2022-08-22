import {
  ProfilePageContainer,
  ProfileLeft,
  ProfileRight,
  ProfileWrapper,
  Text,
  Title,
  TextWrapper,
} from './ProfilePageElements';
import { Profile, Table } from '../../Components/Organisms';
import { useSelector } from 'react-redux';

function ProfilePage() {
  const ss = useSelector((state) => state?.globalReducer?.screenSize);
  return (
    <ProfilePageContainer ss={ss}>
      <TextWrapper>
        <Text>OVERVIEW</Text>
        <Title>User Profile</Title>
      </TextWrapper>
      <ProfileWrapper ss={ss}>
        <ProfileLeft ss={ss}>
          <Profile />
        </ProfileLeft>
        <ProfileRight>
          <Table/>
        </ProfileRight>
      </ProfileWrapper>
    </ProfilePageContainer>
  );
}

export default ProfilePage;
