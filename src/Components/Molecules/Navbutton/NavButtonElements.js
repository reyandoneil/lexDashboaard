import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

// const slideRight = keyframes`
//   from {
//     -webkit-transform: translate3d(0, 100%, 0);
//     transform: translate3d(0, 100%, 0);
//     visibility: visible;
//   }

//   to {
//     -webkit-transform: translate3d(0, 0, 0);
//     transform: translate3d(0, 0, 0);
//   }
// `;

export const NavLinkWrapper = styled(NavLink)`
  cursor: pointer;
  border: none;
  background-color: white;
  padding: 10px;
  height: 30px;
  max-width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #6b6e75;
  white-space: nowrap;
  overflow: hidden !important;
  text-overflow: ellipsis;
  text-decoration: none;

  &:hover {
    background-color: #fcc894;
  }
  &.active {
    background-color: #fcc894;
  }
`;

export const NavLinkWrapperMm = styled(NavLink)`
  cursor: pointer;
  border: none;
  background-color: white;
  padding: 10px;
  height: 30px;
  max-width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #6b6e75;

  white-space: nowrap;
  overflow: hidden !important;
  text-overflow: ellipsis;
  text-decoration: none;

  &:hover {
    background-color: #fbdec2;
  }
  &.active {
    background-color: #fbdec2;
  }
`;

export const BtnWrapper = styled.div`
  font-size: 1.2rem;
  &:hover {
    color: white;
  }
  &.active {
    color: white;
  }
  ${(props) => {
    if (props.className === 'master') {
      return `
      margin-left: 30px;
    `;
    } else {
      return `
        margin-left: 10px;
      `;
    }
  }}
  margin-top: 8px;
  height: 100%;
  width: 100%;
  color: #6b6e75;
  display: block;
  max-width: 100%;
  white-space: nowrap;
  overflow: hidden !important;
  text-overflow: ellipsis;
  text-decoration: none;
`;
export const Container = styled.div``;

export const NavIcon = styled.img`
  ${(props) => {
    if (props.className === 'arrow' ) {
      return `
      height: 30%;
    `;
    } else if ( props.className === 'arrow2') {
      return `
      height: 20%;
      `
    } else {
      return `
      height: 90%;
      `;
    }
  }}
`;

export const DropdownWrapper = styled.div`
  ${(props) => {
  
    // if (props.isDropdown) {
    //   return `
    //   animation: ${slideRight} 0.2s forwards;
    // `;
    // }
  }}

  height: fit-content;
  width: 100%;
`;
