import styled from 'styled-components';

export const AccountDetailsContainer = styled.div`
  height: 100%;
  width: 100%;
`;

export const ListBtn = styled.div`
  height: 50px;
  max-width: 100%;
  padding: 0px 10px 0px 10px;
  display: flex;
  align-items: center;
  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: lightgray;
  &::-webkit-scrollbar {
        display: none;
        }
      /* display: block; */
      overflow: scroll;
`;

export const Content = styled.div`
    margin-top: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
`


