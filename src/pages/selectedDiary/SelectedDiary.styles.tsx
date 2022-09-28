import styled from "styled-components";

import { device } from "../../styles/mediaquery";


export const SelectedDiaryContainer = styled.div`

/* display: flex;
justify-content: space-between; */

`

export const SideBarComponent = styled.div`
    width: 20%;
`

export const MySelectedDiaryComponent = styled.div`
    
   
width: 100%;
    @media ${device.laptop}{
        width: 80%;
    }
`