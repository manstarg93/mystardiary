
import { DateHeader, DiaryListContainer, DiaryListDescription, DiaryListTitle } from "./DiaryList.styles"

import {useNavigate} from 'react-router-dom'
import { useAppDispatch } from "../hooks/storeHooks";
import { getSelectedDiary } from "../../store/diarySlice";

interface DiarylistProps{
    content: {

        title: string;
        diaryDescription: string;
        diaryDate: string;
    }

   
}
const DiaryList:React.FC<DiarylistProps> = ({content}) => {
    const dispatch = useAppDispatch()
    const {title,diaryDescription,diaryDate} = content;
 
    const navigate = useNavigate()
    const goToDiaryHandler = () => {
        dispatch(getSelectedDiary(content))

        navigate(`/${title.split(' ').join('-')}`)
    }

    return(
        <DiaryListContainer onClick={goToDiaryHandler}>
            <DateHeader>{diaryDate}</DateHeader>
            <DiaryListTitle>{title}</DiaryListTitle>
            <DiaryListDescription>{diaryDescription.substring(0, 50)}</DiaryListDescription>
        </DiaryListContainer>
    )
}

export default DiaryList