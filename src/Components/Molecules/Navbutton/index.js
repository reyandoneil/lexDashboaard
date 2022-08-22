import React, { useState } from 'react';
import {
  NavLinkWrapper,
  BtnWrapper,
  Container,
  NavIcon,
  NavLinkWrapperMm,
  DropdownWrapper,
} from './NavButtonElements';
import { arrow01 } from '../../../Assets';
import PropsType from 'prop-types';
import { useSelector } from 'react-redux';

const NavButton = (props) => {
  const btn = [
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
  ];
  const { path, name, title, icon } = props;
  const [isDropdown, setDropdown] = useState(false);
  const dropdown = () => {
    setDropdown(!isDropdown);
  };
  switch (name) {
    case 'sidebar':
      return (
        <Container>
          <NavLinkWrapper to={path}>
            <NavIcon src={icon} />
            <BtnWrapper>{title}</BtnWrapper>
            
          </NavLinkWrapper>
        </Container>
      );
    case 'dropdown':
      return (
        <Container>
          <NavLinkWrapper to={path} onClick={dropdown}>
            <NavIcon src={icon} />
            <BtnWrapper>{title}</BtnWrapper>
            <NavIcon className="arrow" src={arrow01} />
            
          </NavLinkWrapper>
          <DropdownWrapper isDropdown={isDropdown}>
            {isDropdown &&
              btn.map((item) => {
                return (
                  <NavLinkWrapperMm key={item.id} to={item.path}>
                    <BtnWrapper className="dropdown">
                      {item.title}
                    </BtnWrapper>
                  </NavLinkWrapperMm>
                );
              })}
          </DropdownWrapper>
        </Container>
      );

    default:
      <></>;
  }
};

NavButton.propType = {
  path: PropsType.string,
  text: PropsType.string,
  icon: PropsType.any,
  name: PropsType.string,
};

export default NavButton;
