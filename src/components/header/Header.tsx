import { FC } from "react";
import { HeaderContainer, HeaderContentContainer, HeaderTitle, SideBarToggleIconContainer, UserNameContainer } from "./Header.styles";
import SideBarToggleIcon from '@mui/icons-material/Menu'
import {useNavigate} from 'react-router-dom'
import { useAppDispatch, useAppSelector } from "../hooks/storeHooks";
import { toggleSideBar } from "../../store/UiSlice";
interface HeaderProps {


}


const Header:FC<HeaderProps> = () => {
const navigate = useNavigate()
    const dispatch = useAppDispatch()
const {userDetails} = useAppSelector(state => state.auth)
    const toggleSideBarHandler = () => {
        dispatch(toggleSideBar())
    }

    const goHomeHandler = () => {
        navigate('/')
    }

    return(
        <HeaderContainer>

            <HeaderContentContainer>
            <SideBarToggleIconContainer onClick={toggleSideBarHandler}>
            <SideBarToggleIcon fontSize="large"/>
            </SideBarToggleIconContainer>
           
           <HeaderTitle onClick={goHomeHandler}>Star Diary</HeaderTitle>

        {userDetails?.displayName &&  <UserNameContainer>{userDetails?.displayName}</UserNameContainer>}
          
        
            </HeaderContentContainer>
          
        </HeaderContainer>
    )
}
export default Header