import styled from "styled-components";
import { device } from "../../styles/mediaquery";




export const NewEntryContainer = styled.form`
 
    
    display: flex;
    flex-direction: column;
    gap: 20px;

    @media ${device.laptop}{

    }

    button{
        float: right;
    }
`

export const FeedBackMessageFormContainer = styled.div`
width: 100%;
float: left;
margin: 0 auto;
`
export const FormButttonContainer = styled.div`
    width: max-content;
`

export const FormButttonMessageContainer = styled.div`
    display: flex;
    flex-direction: column;
width: 100%;
gap: 20px;
justify-content: space-between;
align-content: center;

    @media ${device.laptop}{
   
    }
`


