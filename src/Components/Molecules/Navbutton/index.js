import React, { useState } from 'react';
import {
  NavLinkWrapper,
  BtnWrapper,
  Container,
  NavIcon,
  NavLinkWrapperMm,
  DropdownWrapper,
} from './NavButtonElements';
import { arrow01, arrow02 } from '../../../Assets';
import PropsType from 'prop-types';

const NavButton = (props) => {

  const { path, name, title, icon, mlb } = props;
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
            {isDropdown ? (
              <NavIcon className="arrow" src={arrow01} />
            ) : (
              <NavIcon className="arrow2" src={arrow02} />
            )}
          </NavLinkWrapper>
          <DropdownWrapper isDropdown={isDropdown}>
            {isDropdown &&
              mlb.map((item) => {
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
