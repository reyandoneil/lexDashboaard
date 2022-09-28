import { useSelector, useDispatch } from 'react-redux';
import {
  logout,
  setProfileMenu,
} from '../../Store/Action/UserAction';
import { Outlet, useNavigate } from 'react-router-dom';
import { SideBar } from '../../Components/Organisms';
import OutsideHandler from '../../utils/OutsideHandler';
import {
  burger_icon,
  avatar_icon,
  logout_icon,
  profile_icon,
} from '../../Assets';
import {
  Container,
  SidebarContainer,
  ContentContainer,
  TopMenuContainer,
  Content,
  Icon,
  AvatarIcon,
  ProfileMenu,
  LogoutWrapper,
  ProfileMenuWrapper,
  ButtonWrapper,
  ErrorMessageWrapper,
} from './DashboardPageElements';

function Dashboard() {
  const { ref } = OutsideHandler('profile');
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const ss = useSelector((state) => state?.globalReducer?.screenSize);
  const isProfileMenu = useSelector(
    (state) => state?.userReducer.isProfileMenu
  );

  const logoutHandler = () => {
    dispatch(logout()).then(() => navigate('/login'));
    dispatch(setProfileMenu(false));
  };

  const profileHandler = () => {
    navigate('/dashboard/profile');
    dispatch(setProfileMenu(false));
  };

  const openProfileMenu = () => {
    dispatch(setProfileMenu(true));
  };
  return (
    <Container>
      <SidebarContainer ss={ss}>
        <SideBar />
      </SidebarContainer>
      <ContentContainer>
        <ErrorMessageWrapper ss={ss}>
          Ini Error Messagenya...
        </ErrorMessageWrapper>
        <TopMenuContainer ss={ss}>
          <AvatarIcon src={avatar_icon} onClick={openProfileMenu} />
          <Icon src={burger_icon} ss={ss} />
        </TopMenuContainer>
        {isProfileMenu && (
          <ProfileMenu ss={ss} ref={ref}>
            <ProfileMenuWrapper>
              <ButtonWrapper
                alt="profile menu"
                src={profile_icon}
                onClick={profileHandler}
              />
            </ProfileMenuWrapper>
            <LogoutWrapper>
              <ButtonWrapper
                src={logout_icon}
                onClick={logoutHandler}
              />
            </LogoutWrapper>
          </ProfileMenu>
        )}
        <Content ss={ss}>
          <Outlet />
        </Content>
      </ContentContainer>
    </Container>
  );
}

export default Dashboard;
