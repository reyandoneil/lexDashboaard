import styled from 'styled-components';

export const NavLinkWrapper = styled.button`
  cursor: pointer;
  border: none;
  background-color: white;
  padding: 5px;
  height: 50px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #6b6e75;
  display: block;
  max-width: 98%;
  white-space: nowrap;
  overflow: hidden !important;
  text-overflow: ellipsis;

  &:hover {
    background-color: #fcc894;
    color: white;
  }
  &.active {
    background-color: #fcc894;
  }
`;
