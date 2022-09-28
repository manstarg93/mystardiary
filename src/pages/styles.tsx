import styled  from "styled-components";
import { device } from "../styles/mediaquery";
import { variables } from "../styles/variables";

export const RootPageContainer = styled.div`
    
`

export const ContentContainer = styled.div`
    
    
   width: 100%;
    margin: 0 auto;

    @media ${device.laptop}{
        display: flex;
    justify-content: space-between;
    }
`

export const MainContent = styled.div`
    color: ${variables.white};
  
    margin: 30px;
    transition: all ease-in-out .3s;

    @media ${device.laptop}{
        width: 100%;
    }
`