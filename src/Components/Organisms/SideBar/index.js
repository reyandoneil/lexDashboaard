import {
  LogoWrapper,
  ListMenuWrapper,
  Logo,
} from './SidebarElements';
import { lexLogo } from '../../../Assets';
import { NavButton } from '../../Molecules';
import {
  icon,
  sidebar_icon,
  schedule_icon,
  master_icon,
} from '../../../Assets';
const btn = [
  {
    id: 1,
    title: 'Dashboard',
    path: 'home',
    name: 'sidebar',
    icon: sidebar_icon,
  },
  {
    id: 2,
    title: 'Jamaah Registration',
    path: 'registration',
    name: 'sidebar',
    icon: icon,
  },
  {
    id: 1,
    title: 'Schedule',
    path: 'schedule',
    name: 'sidebar',
    icon: schedule_icon,
  },
  {
    id: 8,
    title: 'Master Data',
    path: 'master',
    name: 'master',
    icon: master_icon,
    mlb: [
      {
        id: 5,
        title: 'Product',
        path: 'master/product',
      },
      {
        id: 6,
        title: 'Hotel',
        path: 'master/hotel',
      },
    ],
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
