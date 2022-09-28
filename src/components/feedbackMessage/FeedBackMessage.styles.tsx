
import styled from "styled-components";
import { variables } from "../../styles/variables";

interface FeedbackMessageStyleProps{
    success: boolean,
    message: string
}

export const FeedBackMessageContainer = styled.div<FeedbackMessageStyleProps>`
  
    background-color: ${props => props.success ? variables.green : variables.red};
    display: ${props => props.message.length < 1 && 'none'};
   
    text-align: center;
    
  
`

export const FeedBackMessageText = styled.h5`
    color: ${variables.white};
    padding: 15px
`