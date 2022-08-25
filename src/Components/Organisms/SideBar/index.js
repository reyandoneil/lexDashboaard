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
    title: 'Dropdown Menu',
    path: 'dashboard',
    name: 'dropdown',
    icon: icon,
    mlb: [
      {
        id: 5,
        title: 'Dropdown 01',
        path: 'dropdown/dropdown01',
      },
      {
        id: 6,
        title: 'Dropdown 02',
        path: 'dropdown/dropdown02',
      },
      {
        id: 7,
        title: 'Dropdown 03',
        path: 'dropdown/dropdown03',
      },
    ],
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
              mlb={item?.mlb}
            />
          );
        })}
      </ListMenuWrapper>
    </>
  );
}

export default SideBar;
