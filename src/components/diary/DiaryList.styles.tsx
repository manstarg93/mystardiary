import styled from "styled-components";
import { boxShadow, variables } from "../../styles/variables";



export const DiaryListContainer= styled.div`
    cursor: pointer;
    margin: 15px auto;
    border-radius: 5px;
    box-shadow: ${boxShadow};
    background-color: ${variables.darkGrey};
    text-align: start;
    display: flex;
    padding: 15px;
    flex-direction: column;
    gap: 20px;
    &:hover{
        opacity: .8;
    }

`

export const DiaryListTitle  = styled.h4`
    color: ${variables.white};
    text-transform: capitalize;
 
`

export const DiaryListDescription = styled.p`
color: ${variables.white};
text-transform: capitalize;
`

export const DateHeader = styled.h4`
    
    color: ${variables.lightBlue};
  
`