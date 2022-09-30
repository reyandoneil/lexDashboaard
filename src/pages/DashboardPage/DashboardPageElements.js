import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  overflow: hidden;
`;

export const SidebarContainer = styled.div`
  ${(props) => {
    if (props.ss === 'xl') {
      return ` 
        width: 350px;
        max-height: 100%;
        z-index: 100;
      `;
    } else if (props.ss === 'lg') {
      return `
        width: 300px;
        max-height: 100%;
        z-index: 100;
        `;
    } else if (props.ss === 'xs' || props.ss === 'sm') {
      return `
        display:none;
        `;
    } else {
      return ` 
        max-width: 250px;
        max-height: 100%;
        z-index: 100;
      `;
    }
  }}
`;

export const ContentContainer = styled.div`
  width: 100%;
  height: 100%;
`;

export const ErrorMessageWrapper = styled.div`
  ${(props) => {
    if (props.ss === 'xs' || props.ss === 'sm') {
      return `
      width: 100%;
    `;
    } else {
      return `
      width: 30%;
      `;
    }
  }}
  color: white;
  background-color: #ff9c9c;
  height: 45px;
  position: fixed;
  top: 0;
  z-index: 3;
  display: flex;
  align-items: center;
  padding: 10px;
  font-size: 1rem;
`;

export const TopMenuContainer = styled.div`
  position: sticky;

  top: 0;
  right: 0;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  padding: 10px 20px 10px 20px;
  height: 45px;
  max-width: 100vw;
  background-color: white;
  display: flex;
  align-items: center;
  ${(props) => {
    if (props.ss === 'xs' || props.ss === 'sm') {
      return `
          justify-content: space-between;
            
        `;
    } else {
      return `
        justify-content: flex-end;
        `;
    }
  }}
`;

export const ContentMenuContainer = styled.div`
  height: 109px;
`;

export const Content = styled.div`
  ${(props) => {
    if (props.ss === 'xs' || props.ss === 'sm') {
      return `
        padding: 0 10px 20px 10px;
      `;
    } else {
      return `
        // padding: 0 30px 20px 30px;
      `;
    }
  }}
  height: 94%;
  width: 97%;
`;

export const AvatarIcon = styled.img`
  cursor: pointer;
  height: 35px;
  background-color: #fcc894;
  border-radius: 100px;
  margin-right: 20px;
`;

export const Icon = styled.img`
  cursor: pointer;
  ${(props) => {
    if (props.ss === 'xs' || props.ss === 'sm') {
      return `
            display: show;
            height: 20px;
        `;
    } else {
      return `
            display: none;
        `;
    }
  }}
`;

export const MobileMenu = styled.div`
  height: 100%;
  width: 100%;
`;

export const LogoutWrapper = styled.div`
  border-top-style: solid;
  border-top-width: 1px;
  border-top-color: lightgray;
  height: 40px;
  width: 100%;
  display: flex;
  align-items: center;
`;

export const ProfileMenuWrapper = styled.div`
  height: 120px;
  width: 100%;
`;

export const ProfileMenu = styled.div`
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  height: 160px;
  width: 150px;
  background-color: white;
  position: absolute;
  padding: 10px;
  ${(props) => {
    if (props.ss === 'xs' || props.ss === 'sm') {
      return `
        left: 0px;
          `;
    } else {
      return `
        right: 0px;
        `;
    }
  }}
`;

export const ButtonWrapper = styled.img`
  margin-left: 15px;
  height: 20px;
  cursor: pointer;
  :hover {
  }
`;
