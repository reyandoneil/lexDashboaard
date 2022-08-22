import React from 'react';
import { NavLinkWrapper } from './NavButtonElements';
import PropsType from 'prop-types';
import { useSelector } from 'react-redux';

const LinkButtons = (props) => {
  const { path, name } = props;
  switch (name) {
    case 'sideBar':
      return <NavLinkWrapper>Button</NavLinkWrapper>;

    default:
      <></>;
  }
};

LinkButtons.propType = {
  path: PropsType.string,
  text: PropsType.string,
  icon: PropsType.any,
  name: PropsType.string,
};

export default LinkButtons;
