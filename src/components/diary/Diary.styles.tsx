import styled from "styled-components";
import { device } from "../../styles/mediaquery";
import { variables } from "../../styles/variables";



export const DiaryContainer = styled.div`
     color: ${variables.white};

`

export const EntryPlaceholder = styled.div`
   color: ${variables.lightBlue};
   font-weight: bold;
`
export const AddEntry = styled.div`
    position: sticky;
    bottom: 8%;
    margin-right: 20px;
    margin-top: 20px;

   width: max-content;
font-size: 16px;
   text-align: -webkit-right;
float: right;

 
`