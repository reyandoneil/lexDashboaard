import {
  ProfileContainer,
  ProfilePicture,
  UserName,
  UserId,
  Info,
  TopWrapper,
  BottomWrapper,
  InfoText,
} from './ProfileElements';
import { avatar } from '../../../Assets';
import { useSelector } from 'react-redux';

function Profile() {
  const ss = useSelector((state) => state?.globalReducer?.screenSize);
  return (
    <ProfileContainer>
      <TopWrapper ss={ss}>
        <ProfilePicture alt="profilePicture" src={avatar} />
        <UserName>Jane Doe</UserName>
        <UserId>AB21312</UserId>
      </TopWrapper>
      <BottomWrapper>
        <Info>
          <InfoText>
            Berikut Informasi Data Profile anda. Pastikan data-data
            dibawah ini sudah benar, agar tidak terjadi kesalahan saat
            transaksi.
          </InfoText>
        </Info>
      </BottomWrapper>
    </ProfileContainer>
  );
}

export default Profile;
