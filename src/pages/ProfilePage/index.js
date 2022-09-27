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
import {
  Profile,
  AccountDetails,
  ProfileContent,
} from '../../Components/Organisms';
import { useSelector } from 'react-redux';
import { ListButton } from '../../Components/Molecules';
import { useEffect, useState } from 'react';

function ProfilePage() {
  const ss = useSelector((state) => state?.globalReducer?.screenSize);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (ss === 'xs' || ss === 'sm') {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  }, [ss]);

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
        {!isMobile && (
          <>
            <ProfileLeft ss={ss} id="profileLeft">
              <Profile />
            </ProfileLeft>
            <ProfileRight ss={ss} id="profileRight">
              <AccountDetails />
            </ProfileRight>
          </>
        )}
        {isMobile && <ProfileContent />}
      </ProfileWrapper>
    </ProfilePageContainer>
  );
}

export default ProfilePage;
