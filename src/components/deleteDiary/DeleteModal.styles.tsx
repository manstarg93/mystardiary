import styled from 'styled-components'
import { device } from '../../styles/mediaquery'
import { boxShadow, variables } from '../../styles/variables'


export const DeleteModalContainer = styled.div`
    position: fixed;
    background-color: ${variables.darkGrey};
    padding: 15px;
   z-index: inherit;
   width: max-content;
   display: flex;
   flex-direction: column;
   justify-content: space-between;
   gap: 15px;

        top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
 
    box-shadow: ${boxShadow};
    border-radius: 20px;

    @media ${device.laptop}{
      
    }
`

export const DeleteModalTitle = styled.h4`
    color: ${variables.white};
    
`
export const DeleteModalText = styled.p`
    color: ${variables.white};
`

export const DeleteCancelContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 15px;
`