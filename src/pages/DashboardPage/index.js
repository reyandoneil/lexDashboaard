import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../../Store/Action/UserAction';
import { Outlet, useNavigate } from 'react-router-dom';
import { SideBar } from '../../Components/Organisms';
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
} from './DashboardPageElements';

function Dashboard() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const ss = useSelector((state) => state?.globalReducer?.screenSize);

  const logoutHandler = () => {
    dispatch(logout()).then(() => navigate('/login'));
  };

  const profileHandler = () => {
    navigate('/dashboard/profile');
  };

  const [isProfileMenu, setIsProfileMenu] = useState(false);
  const openProfileMenu = () => {
    setIsProfileMenu(!isProfileMenu);
  };
  return (
    <Container>
      <SidebarContainer ss={ss}>
        <SideBar />
      </SidebarContainer>
      <ContentContainer>
        <TopMenuContainer ss={ss}>
          <AvatarIcon src={avatar_icon} onClick={openProfileMenu} />
          <Icon src={burger_icon} ss={ss} />
        </TopMenuContainer>
        {isProfileMenu && (
          <ProfileMenu ss={ss}>
            <ProfileMenuWrapper>
              <ButtonWrapper
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
        <Content>
          <Outlet />
        </Content>
      </ContentContainer>
    </Container>
  );
}

export default Dashboard;
