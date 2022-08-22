import {
  LogoWrapper,
  ListMenuWrapper,
  Logo,
} from './SidebarElements';
import { lexLogo } from '../../../Assets';
import { NavButton } from '../../Molecules';
function SideBar() {
  return (
    <>
      <LogoWrapper>
        <Logo src={lexLogo} />
      </LogoWrapper>
      <ListMenuWrapper>
        <NavButton name={'sideBar'} />
        <NavButton name={'sideBar'} />
        <NavButton name={'sideBar'} />
      </ListMenuWrapper>
    </>
  );
}

export default SideBar;
