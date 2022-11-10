import styled from 'styled-components';

export const TopContent = styled.div`
  max-height: 60px;
  width: 97%;
  padding: 20px;
`;

export const Content = styled.div`
${props => {
  if(props.ss === 'xl') {
    return`
      width: 97%;
    `
  }else if(props.ss === 'lg'){
    return`
      width: 97%;
    `
  }
}}
  height: 75vh;
  padding: 20px;
  display:flex ;
`;

export const ListScheduleWrapper = styled.div` 
  height:100% ;
  width:40% ;
  `
export const  DetailScheduleWrapper = styled.div` 
  height:100% ;
  width:60% ;
  `
