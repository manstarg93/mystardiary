import styled from 'styled-components'
import { device } from '../../styles/mediaquery'
import { variables } from '../../styles/variables'

interface styleProps {
    show: boolean
}

export const SidebarContainer = styled.div<styleProps>`
    z-index: 99;
    color: ${variables.white};
    background-color: ${variables.darkGrey};
    min-width: 250px;
    max-width: 250px;
    left: 0;
    padding: 10px;
    height: 100vh;
    transform: translateX(0);
    position: fixed;
    top: 0;
   
   display: ${props => props.show ? 'block' : 'none'};
 
    @media ${device.laptop}{
        display: block;
        height: 100%;
        min-height: 100vh;
        position: initial;
     
    }
`
export const SideBarBackDrop = styled.div<styleProps>`
     display: ${props => props.show ? 'block' : 'none'};
     position: fixed;
     top: 0;
     right: 0;
     left: 0;
     bottom: 0;
     z-index: 98;
     background-color: ${variables.black};
     opacity: .7;
    width: 100%;
 @media ${device.laptop}{
     display: none;
     
    
 }
`

export const NavContainer = styled.ul`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
  
    padding: 0;
`

export const NavItems = styled.li`
    padding: 20px;
    width: 80%;
    text-align: start;
    background-color: ${variables.gray};
    color: ${variables.white};
    font-weight: bold;
    cursor: pointer;
    border-radius: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 10px;
    &:hover{
        background-color: ${variables.lightBlue};
     
    }
`

export const NavIcon = styled.span`
    
`

export const NavText = styled.a`
    width: 100%;
    font-size: 16px;
`