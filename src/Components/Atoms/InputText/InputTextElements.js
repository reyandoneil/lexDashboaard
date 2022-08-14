import styled from 'styled-components';

// export const ErrorMessage = styled.span`
//   width: 250px;
//   font-size: 10px;
//   color: red;
// `;

export const InputTexts = styled.input`
  color: gray;
  font-size: 0.8rem;
  width: 95%;
  border-radius: 2px;
  border: none;
  border-width: 1px;
  border-style: solid;
  border-color: #E4E4E4;
  padding: 10px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  margin-top:10px ;

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
`;