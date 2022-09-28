import styled from 'styled-components'

interface ModalStyleProps {
    show: boolean
}


export const ModalContainer = styled.div<ModalStyleProps>`
    z-index: 999;
    display: ${props => props.show ? 'block' : 'none'};
   width: 100%;
    
`

export const ModalBackDrop = styled.div<ModalStyleProps>`
z-index: 998;
position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background-color: #000;
    opacity: .5;
    display: ${props => props.show ? 'block' : 'none'};
`