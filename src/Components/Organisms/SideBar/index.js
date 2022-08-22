import {
  LogoWrapper,
  ListMenuWrapper,
  Logo,
} from './SidebarElements';
import { lexLogo } from '../../../Assets';
import { NavButton } from '../../Molecules';
import { icon } from '../../../Assets';
const btn = [
  {
    id: 1,
    title: 'Dashboard',
    path: 'home',
    name: 'sidebar',
    icon: icon,
  },
  {
    id: 2,
    title: 'DropdownMenu',
    path: 'dropdown',
    name: 'dropdown',
    icon: icon,
  },
  {
    id: 3,
    title: 'Dabus',
    path: 'dabus',
    name: 'sidebar',
    icon: icon,
  },
  {
    id: 4,
    title: 'Master segala master menu yang ada',
    path: 'master',
    name: 'sidebar',
    icon: icon,
  },
];
function SideBar() {
  return (
    <>
      <LogoWrapper>
        <Logo src={lexLogo} />
      </LogoWrapper>
      <ListMenuWrapper>
        {btn.map((item) => {
          return (
            <NavButton
              key={item.id}
              name={item.name}
              path={item.path}
              title={item.title}
              icon={item.icon}
            />
          );
        })}
      </ListMenuWrapper>
    </>
  );
}

export default SideBar;
