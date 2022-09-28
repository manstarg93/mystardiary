import styled from 'styled-components'
import { device } from '../../styles/mediaquery'
import { variables } from '../../styles/variables'



export const EditDiaryFormContainer = styled.form`
 
    
    display: flex;
    flex-direction: column;
  
    gap: 15px;
    @media ${device.laptop}{

    }

    button{
        float: right;
    }
`

export const EditFeedBackMessageFormContainer = styled.div`
width: 100%;
float: left;
margin: 0 auto;
`
export const EditFormButttonContainer = styled.div`
    gap: 20px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
`

export const EditFormButttonMessageContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: max-content;
justify-content: space-between;
align-content: center;


    @media ${device.laptop}{
   
    }
`

export const DiaryTitle = styled.h3`
    font-weight: bold;
    color: ${variables.lightBlue};

    `