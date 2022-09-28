import styled from 'styled-components'
import { device } from '../../styles/mediaquery'
import { boxShadow, variables } from '../../styles/variables'


export const SelectedDiaryContainer = styled.div`
  
   

    border: solid 1px ${variables.darkGrey};
    box-shadow: ${boxShadow};

    @media ${device.laptop}{
      
    }
   
`

export const SelectedDiaryHeader = styled.div`
background-color: ${variables.darkGrey};
padding: 0 10px;
display: flex;
justify-content: space-between;
align-items: center;
`

export const SelectedDiaryHeaderText = styled.h4`
color: ${variables.lightBlue};
width: 100%;
`
export const SelectedDiaryTitleText = styled.h3`

`

export const EditDeleteContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;


svg{
    padding: 10px;
    fill: ${variables.lightBlue};

    &:hover{
        background-color: ${variables.lightBlue};
        fill: ${variables.blue};
        border-radius: 50px;
        
    }
}
`

export const SelectedDiaryBody = styled.div`
    padding: 15px;
    display: flex;
    flex-direction: column;
    gap: 20px;
`

export const SelectedDiaryText = styled.p`
    line-height: 1.5;
`

export const DeleteContainer = styled.div`
    
svg{
    fill: ${variables.orange};
    &:hover{
        fill: ${variables.white};
    }
}
    
`

export const EditContainer = styled.div`

svg{
    fill: ${variables.lightBlue};
    &:hover{
        fill: ${variables.white};
    }
}
`