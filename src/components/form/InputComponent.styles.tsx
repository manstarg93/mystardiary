import styled from "styled-components";
import { variables } from "../../styles/variables";

export const InputContainer = styled.div`
    
    width: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    gap: 10px;
  
`

export const InputLabel = styled.label`
    text-align: start;
    color: ${variables.lightBlue};
 
`

export const InputText = styled.input`
background-color: ${variables.darkGrey};
border: none;
    outline: none;
    border-radius: 10px;
    color: ${variables.white};
    padding: 20px;
    &:focus-visible{
        outline: none;
    }
`

export const TextAreaText = styled.textarea`
background-color: ${variables.darkGrey};
border: none;
padding: 20px;
border-radius: 10px;
color: ${variables.white};
    outline: none;

    &:focus-visible{
        outline: none;
    }

`