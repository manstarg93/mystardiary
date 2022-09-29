import { FC, useEffect, useState } from "react";
import Icons from "../icon/Icon";
import { DeleteContainer, EditContainer, EditDeleteContainer, SelectedDiaryBody, SelectedDiaryContainer, SelectedDiaryHeader, SelectedDiaryHeaderText, SelectedDiaryText, SelectedDiaryTitleText } from "./SelectedDiaryComponent.styles";

import Edit from '@mui/icons-material/Edit'
import {useLocation,useNavigate,Navigate} from 'react-router-dom'
import DeleteComponent from "../deleteDiary/DeleteComponent";
import { useAppSelector } from "../hooks/storeHooks";
interface ISelectedDiary {

} 
const SelectedDiaryComponent:FC<ISelectedDiary> = () => {

const {selectedDiary} = useAppSelector(state => state.diary)





    // useEffect(() => {
    //     if(!location.state.content){
      
    //         <Navigate replace to={'/'}/>
    //     }
      
    // },[])


const navigate = useNavigate()
    const goToEditPageHandler = ( Selectedtitle: string) => {
        const mySelectedTitle = Selectedtitle.split(' ').join('-')
        

        navigate(`/${Selectedtitle}/${mySelectedTitle}`)
    }

return(
    <>
    {selectedDiary ? <SelectedDiaryContainer>
        <SelectedDiaryHeader>
            
            <SelectedDiaryHeaderText>{selectedDiary.diaryDate}</SelectedDiaryHeaderText>
            
            <EditDeleteContainer>
                <DeleteContainer>
                <DeleteComponent title={selectedDiary.title}/>
                </DeleteContainer>
               
             <EditContainer>
             <Icons onClick={() => goToEditPageHandler(selectedDiary.title)} Icon={<Edit/>}/>
                 </EditContainer>   
            </EditDeleteContainer>
        </SelectedDiaryHeader>

        <SelectedDiaryBody>
        <SelectedDiaryTitleText>{selectedDiary.title}</SelectedDiaryTitleText>
            <SelectedDiaryText>{selectedDiary.diaryDescription}</SelectedDiaryText>
        </SelectedDiaryBody>

    </SelectedDiaryContainer>: <Navigate replace to={'/'}/>}
    </>
    
)
}

export default SelectedDiaryComponent