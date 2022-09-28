import styled from 'styled-components'
import { device } from '../../styles/mediaquery'
import { boxShadow, variables } from '../../styles/variables'


interface Iheaderprops {

}
export const HeaderContainer = styled.div<Iheaderprops>`
    margin-top: 0;
    height: 74px;
    background-color: ${variables.blue};
    color: ${variables.white};
    text-align: center;
    padding:5px;
   width: 100%;
   
    
    @media ${device.laptop}{
    
    }
`

export const HeaderContentContainer = styled.div`
    display: flex;
padding: 0 15px;
height: 100%;

justify-content: space-between;

align-items: center;
margin: 0 auto;

@media ${device.laptop}{
    
}
`

export const HeaderTitle = styled.p`
font-size: 1.4rem;
width: 100%;
cursor: pointer;

&:hover{
    color: ${variables.white}
}
`

export const SideBarToggleIconContainer = styled.div`
    cursor: pointer;

    @media ${device.laptop}{
     display: none;
    }

    svg{
        fill: ${variables.white};
    }
`

export const UserNameContainer = styled.p`
text-transform: capitalize;
padding: 10px;
background-color: ${variables.lightBlue};
box-shadow: ${boxShadow};
border-radius: 10px;
font-weight: bold;
&:hover{
    color: ${variables.white}
}
@media ${device.laptop}{
   
}
`