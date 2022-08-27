import styled from "styled-components";

export const ErrorMessageWrapper = styled.div`
    background-color: #FF9C9C;
    height: 100% ;
    max-width: 100% ;
    display: flex ;
    padding: 10px ;
    border-top-left-radius: 20px ;
    border-top-right-radius: 20px ;

`;

export const ErrorIcon = styled.img`
    height: 25px ;
`;
export const Message = styled.span`
    color: white ;

`;

export const ErrorIconWrapper = styled.div` 
    min-height: 100% ;
    width: 80px ;
    display: flex ;
    margin-left: 10px ;
    /* justify-content:center ; */
    align-items:center ;
`

export const MessageWrapper = styled.div`
    height: 100% ;
    width:100% ;
    display: flex ;
    justify-content: center ;
    flex-direction:column ;
    /* margin-left: 20px ; */
    font-size: 1.1rem ;

`

// export const Title = styled.span`
//     color: white ;
//     font-size: 1.5rem ;
// `