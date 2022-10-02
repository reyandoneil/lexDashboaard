import styled from "styled-components";

export const ProductContainer = styled.div`
${(props) => {
        if (props.ss === 'md' || props.ss === 'lg' || props.ss === 'xl') {
            return `
            display:none;
            `
        } else if (props.ss === 'xs') {
            return `
            height:75% ;
            `

        } else {
            return `
            height:80% ;
            `
        }
    }}
max-width:100% ;
  &::-webkit-scrollbar {
    display: none;
  }
  -webkit-overflow-scrolling: touch;
  overflow-y: scroll;
`

export const ListHeader = styled.div`
display: flex ;
flex-direction:row ;
background-color: #fcc894 ;
/* margin-bottom:20px ; */
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
&::-webkit-scrollbar {
    display: none;
  }
  -webkit-overflow-scrolling: touch;
  overflow-y: auto;

`;

export const NumberHeader = styled.div`
${(props) => {
        if (props.type === 'body') {
            return `
            font-size:1rem ;
        `
        } else {
            return `
            font-size:1rem ;
            justify-content: center ;
            border-right-style:solid ;
            border-right-color:white ;
            border-right-width:0.5px ;
            font-weight:600 ;
        `

        }
    }}
display: flex ;
padding:10px ;
min-width: 70px ;
justify-content: center ;
`;

export const ProductTitleHeader = styled.div`
${(props) => {
        if (props.type === 'body') {
            return `
        font-size:1rem ;
        padding:10px ;
        `
        } else if (props.type === 'mobile') {
            return `
        font-size:1.3rem ;
        padding:0px ;    
        font-weight:600 ;
            `
        }

        else {
            return `
        font-size:1rem ;
        justify-content: center ;
        border-right-style:solid ;
        border-right-color:white ;
        border-right-width:0.5px ;
        display:flex;
        justify-content: center ;
        font-weight:600 ;
        padding:10px ;
        `
        }
    }}
width: 100% ;
white-space: nowrap;
overflow: hidden !important;
text-overflow: ellipsis;
text-decoration: none;
`;

export const QuotaHeader = styled.div`
${(props) => {
        if (props.type === 'body') {
            return `
        font-size:1rem ;
        display:flex;
        justify-content: center ;
        padding:10px ;
        min-width: 100px;
        `
        } else if (props.type === 'mobile') {
            return `
        width:fit-content ;
        height:fit-content ;
        border-right-style:solid ;
        padding: 0px 10px 0px 10px;
        border-right-width:0.5px ;
        font-weight: 600;

        `
        } else {
            return `
        font-size:1rem ;
        justify-content: center ;
        border-right-style:solid ;
        border-right-color:white ;
        border-right-width:0.5px ;
        font-weight:600 ;
        display:flex;
        justify-content: center ;
        padding:10px ;
        min-width: 100px;
        `
        }
    }}
`;

export const TotalDaysHeader = styled.div`
${(props) => {
        if (props.type === 'body') {
            return `
        font-size:1rem ;
        padding:10px ;
        min-width: 100px;
        display: flex ;
        justify-content:center ;
        `
        } else if (props.type === 'mobile') {
            return `
        width:fit-content ;
        height:fit-content ;
        padding: 0px 10px 0px 10px;
        font-weight: 600;

        `
        } else {
            return `
        font-size:1rem ;
        justify-content: center ;
        border-right-style:solid ;
        border-right-color:white ;
        border-right-width:0.5px ;
        font-weight:600 ;
        padding:10px ;
        min-width: 100px;
        display: flex ;
        justify-content:center ;
        `
        }
    }}
`;

export const StatusHeader = styled.div`
${(props) => {
        if (props.type === 'body') {
            return `
        font-size:1rem ;
        justify-content: center ;

        `
        } else if (props.type === 'mobile') {
            return `
        justify-content:flex-end ;
        `
        } else {
            return `
        font-size:1rem ;
        border-right-style:solid ;
        border-right-color:white ;
        border-right-width:0.5px ;
        font-weight:600 ;
        justify-content: center ;
        `
        }
    }}
padding:10px ;
min-width: 150px;
display: flex ;
`;

export const ActionHeader = styled.div`
${(props) => {
        if (props.type === 'body') {
            return `
        font-size:1rem ;
        padding:10px ;
        width: 100%;
        display: flex ;
        justify-content:center ;
        `
        } else if (props.type === 'mobile') {
            return `
        max-width:100% ;
        display:flex;
        justify-content:flex-end ;
        padding-right: 10px;
            `
        }
        else {
            return `
        font-size:1rem ;
        justify-content: center ;
        border-right-style:solid ;
        border-right-color:white ;
        border-right-width:0.5px ;
        font-weight:600 ;
        padding:10px ;
        width: 100%;
        display: flex ;
        justify-content:center ;
        `
        }
    }}
`;

export const Mobile = styled.div`
    height: 180px ;
    max-width: 100% ;
    background-color:white;
    margin-bottom: 10px ;
    padding: 5px ;
`
export const Web = styled.div`
${(props) => {
        if (props.ss === 'sm' || props.ss === 'xs') {
            return `
        display:none ;
        `
        } else {
            return `
        `
        }
    }}
width:100% ;
`

export const Active = styled.div`
        padding: 0px 10px 0px 10px;
    border-radius: 20px ;
    width:fit-content ;
    height:fit-content ;
    background-color: #967FCC ;
    color:white ;
`

export const NonActive = styled.div`
    padding: 0px 10px 0px 10px;
    border-radius: 20px ;
    width:fit-content ;
    height:fit-content ;
    background-color: #FF9C9C ;
    color:white ;
    

`
export const TopMobileContent = styled.div`
    height: 30px ;
    width:100% ;
    display: flex ;
    justify-content:flex-end ;
    margin-bottom:20px ;
`

export const BottomMobileContent = styled.div`
    height: 80px ;
`

export const ActionButton = styled.button`
${(props) => {
    if(props.type === 'edit'){
        return`
        background-color: #967FCC ;    
        `
    }else if(props.type === 'delate'){
        return`
        background-color: #FF9C9C ;
        `
    }
}}
padding:5px ;
margin-left:10px;
color:white ;
cursor: pointer;
border: none;
border-radius:10px ;
width:80px ;
`

export const InfoWrapper = styled.div`
display: flex ;
height: 60% ;
`
export const MobileTitle = styled.span`
color: #967FCC ;
${(props) => {
        if (props.name === 'hari') {
            return `
            margin-left:10px;
        `
        }
    }}
`



