import styled from "styled-components";


export const ListHeader = styled.div`
display: flex ;
flex-direction:row ;
background-color: white ;
margin-bottom:20px ;
max-height: 80px ;
width: 100% ;
`;

export const ListWrapper = styled.div`
display: flex ;
flex-direction:row ;
background-color: white ;
border-bottom-style:solid ;
border-bottom-color:lightgray ;
border-bottom-width:0.5px ;
`;

export const NumberHeader = styled.div`
${(props) => {
        if (props.type === 'body') {
            return `
            font-size:1rem ;
        `
        } else {
            return `
            font-size:1.2rem ;
            justify-content: center ;
            border-right-style:solid ;
            border-right-color:lightgray ;
            border-right-width:0.5px ;
        `

        }
    }}
display: flex ;
padding:10px ;
width: 30px ;
justify-content: center ;
`;

export const ProductTitleHeader = styled.div`
${(props) => {
    if(props.type === 'body'){
        return`
        font-size:1rem ;
        `
    }else{
        return`
        font-size:1.2rem ;
        justify-content: center ;
        border-right-style:solid ;
        border-right-color:lightgray ;
        border-right-width:0.5px ;
        display:flex;
        justify-content: center ;

        `
    }
}}
padding:10px ;
min-width: 400px ;
`;

export const QuotaHeader = styled.div`
${(props) => {
    if(props.type === 'body'){
        return`
        font-size:1rem ;
        `
    }else{
        return`
        font-size:1.2rem ;
        justify-content: center ;
        border-right-style:solid ;
        border-right-color:lightgray ;
        border-right-width:0.5px ;
        
        `
    }
}}
display:flex;
justify-content: center ;
padding:10px ;
min-width: 100px
`;

export const TotalDaysHeader = styled.div`
padding:10px ;
font-size:1.2rem ;
justify-content: center ;
border-right-style:solid ;
border-right-color:lightgray ;
border-right-width:0.5px ;
`;

export const StatusHeader = styled.div`
padding:10px ;
font-size:1.2rem ;
justify-content: center ;
border-right-style:solid ;
border-right-color:lightgray ;
border-right-width:0.5px ;
`;

export const ActionHeader = styled.div`
padding:10px ;
font-size:1.2rem ;
justify-content: center ;
border-right-style:solid ;
border-right-color:lightgray ;
border-right-width:0.5px ;
`;





