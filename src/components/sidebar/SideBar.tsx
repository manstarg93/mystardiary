import { FC } from "react";
import { NavContainer, NavIcon, NavItems, NavText, SideBarBackDrop, SidebarContainer } from "./SideBar.styles";
import AddIcon from '@mui/icons-material/Add'
import TimeLineIcon from '@mui/icons-material/Timeline'
import LoginIcon from '@mui/icons-material/Login'
import LogOutIcon from '@mui/icons-material/Logout'
import Icons from "../icon/Icon";
import {useNavigate} from 'react-router-dom'
import { useAppDispatch, useAppSelector } from "../hooks/storeHooks";
import { toggleSideBar } from "../../store/UiSlice";
import { createUserFromAuth, getDiaryInfo, googleSignInWithPopOp, signOutOfGoogle } from "../../utils/firebaseUtil";
import { authUser, logOutUser } from "../../store/authSlice";
import { AddToDiary, clearDairy } from "../../store/diarySlice";
interface SideBarProps {

}




const SideBar:FC<SideBarProps> = () => {
    const {showSideBar} = useAppSelector(state => state.ui)
    const {isAuth,userDetails} = useAppSelector(state => state.auth)


    const dispatch = useAppDispatch()
    const navigate = useNavigate()

    const sideBarActionHandler = (navLink: string) => {
            navigate(navLink)
            if(window.innerWidth < 992){
                
                dispatch(toggleSideBar())
            }
            
    }

    const logInUserHandler = async() => {

     await googleSignInWithPopOp().then((res) => {
        // console.log(res)
        const userDetails = {
            uid: res.user.uid,
            displayName: res.user.displayName,
            email: res.user.email
        }
        createUserFromAuth(userDetails)
        dispatch(authUser(userDetails))
        getDiaryInfo(userDetails.uid).then(response => {
if(response){
    dispatch(AddToDiary(response.userDiary))
    if(window.innerWidth < 992){
                
        dispatch(toggleSideBar())
    }
}
           
           })
    }).catch(err => {
        console.log(err)
    })
   
    }

    const logOutUserHandler = async() => {
        await signOutOfGoogle().then(() => {
            dispatch(logOutUser())
            dispatch(clearDairy())
            if(window.innerWidth < 992){
                
                dispatch(toggleSideBar())
            }
        }).catch((err) => {

        })
        
    }


const closeSideBarHandler = () => {
    dispatch(toggleSideBar())
}
 
    return (
        <>
        <SidebarContainer show={showSideBar} >
            <NavContainer>
            <NavItems onClick={() => sideBarActionHandler('/')}> 
                    <Icons Icon={<TimeLineIcon/>}/>
                <NavText >Timeline</NavText>
                </NavItems>
                
                <NavItems onClick={() => sideBarActionHandler('/addentry')}> 
                <Icons Icon={<AddIcon/>}/>
                <NavText >New Diary</NavText>
                </NavItems>

                {userDetails !== null ? <NavItems onClick={logOutUserHandler}> 
                <Icons Icon={<LogOutIcon/>}/>
                <NavText>Log out</NavText>
                </NavItems> :  <NavItems onClick={logInUserHandler}> 
                <Icons Icon={<LoginIcon/>}/>
                <NavText>Login</NavText>
                </NavItems>}
               

            </NavContainer>
       
        </SidebarContainer>
        <SideBarBackDrop onClick={closeSideBarHandler} show={showSideBar}/>
        </>
        
    )
}

export default SideBar