import {
  ProfileContainer,
  ProfilePicture,
  UserName,
  UserId,
  Info,
} from './ProfileElements';
import { avatar } from '../../../Assets';

function Profile() {
  return (
    <ProfileContainer>
      <ProfilePicture alt="profilePicture" src={avatar} />
      <UserName>Jane Doe</UserName>
      <UserId>AB21312</UserId>
      <Info>
        Berikut Informasi Data Profile anda. Pastikan data-data
        dibawah ini sudah benar, agar tidak terjadi kesalahan saat
        transaksi.
      </Info>
    </ProfileContainer>
  );
}

export default Profile;
