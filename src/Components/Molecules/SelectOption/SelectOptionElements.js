import styled from "styled-components";

export const InputTextFormWrapper = styled.div`
  width: 100%;
  margin-top: 10px;
  display: flex;
  flex-direction: column;
`;

export const Select = styled.select`
     color: black;
  font-size: 1.2rem;
  max-width: 100%;
  border-radius: 2px;
  border: none;
  border-width: 1px;
  border-style: solid;
  border-color: #e4e4e4;
  padding: 10px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  margin-top: 10px;

  &:focus {
    /* outline: none; */
    outline-color: rgba(53, 91, 192, 50%);
    /* border-color: red;
  border-width: 1px; */
  }
  &:valid {
    /* background: rgba(53, 91, 192, 20%); */
    box-shadow: none;
  }
  &:valid:focus {
    /* background: rgba(53, 91, 192, 20%); */
  }

  &:invalid {
    outline-color: rgba(255, 206, 206, 60%);
  }
  &:invalid:focus {
    outline-color: rgba(255, 206, 206, 60%);

    /* background-color: rgba(255, 206, 206, 30%); */
    box-shadow: none;
    color: gray;
  }
`

export const Option = styled.option` 
font-size:1.2rem ;
`

export const Space = styled.div` 
  margin-top:10px ;
`
