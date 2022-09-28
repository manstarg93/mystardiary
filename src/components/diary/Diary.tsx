import React from 'react'
import AddIcon from '@mui/icons-material/Add'
import { ButtonWithIcon } from "../../components/button/ButtonWithIcon";
import {  useAppSelector } from "../../components/hooks/storeHooks";
import {useNavigate} from 'react-router-dom'
import DiaryList from "../../components/diary/DiaryList";
import { AddEntry, DiaryContainer, EntryPlaceholder } from './Diary.styles';



const Diary = () => {

    const {diaryData} = useAppSelector(state => state.diary)

    const navigate = useNavigate()

    const addEntryHandler = () => {
        navigate('/addentry')
}



  return (
    <DiaryContainer>
<EntryPlaceholder>Entries</EntryPlaceholder>
{diaryData ? diaryData.map(content => {
    return <DiaryList key={content.title} content={content} />
}) :  <p>Start adding your first diary</p>}
<AddEntry>
 <ButtonWithIcon onClick={addEntryHandler} Icon={<AddIcon/>}>Add Entry</ButtonWithIcon>
    </AddEntry>
    </DiaryContainer>
  )
}

export default Diary