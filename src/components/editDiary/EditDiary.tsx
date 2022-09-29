import React, { useState } from 'react'
import { ButtonWithIcon } from '../button/ButtonWithIcon'

import { TextArea } from '../form/InputComponent'
import CheckIcon from '@mui/icons-material/Check'
import { DiaryTitle, EditDiaryFormContainer, EditFeedBackMessageFormContainer, EditFormButttonContainer, EditFormButttonMessageContainer } from './EditDiary.styles'
import { useAppDispatch, useAppSelector } from '../hooks/storeHooks'
import {Navigate, useNavigate} from 'react-router-dom'
import { AddToDiary } from '../../store/diarySlice'
import { addDiaryForUser } from '../../utils/firebaseUtil'
const EditDiary = () => {


    const {diaryData,selectedDiary} = useAppSelector(state => state.diary)
    const {userDetails} = useAppSelector(state => state.auth)
const navigate = useNavigate()

 const dispatch = useAppDispatch()


    const [description, setDescription] = useState<string>(selectedDiary?.diaryDescription || '')


     const submitEditHandler = (event: React.FormEvent<HTMLFormElement>) => {
event.preventDefault()

if(selectedDiary){
    const date = new Date()
    const myUpdatedDiary = {
       
        title: selectedDiary.title,
        diaryDescription: description,
        diaryDate: new Date(date + 'Z').toLocaleString('en-US',{dateStyle: 'medium', timeStyle: 'short'})
    }
const diaryDataCopy = [...diaryData]

const diaryIndex = diaryDataCopy.findIndex(diary => diary.title.toLowerCase() === selectedDiary.title.toLowerCase())
diaryDataCopy.splice(diaryIndex,1,myUpdatedDiary)

        dispatch(AddToDiary(diaryDataCopy))
   
    if(userDetails){
        addDiaryForUser(userDetails.uid,diaryDataCopy)
      }
      navigate('/')
}


    }

    const getDescriptionHandler = (event:React.ChangeEvent<HTMLTextAreaElement> ) => {
    setDescription(event.target.value)
    }

    const goBackHandler  = () => {
navigate(-1)
    }
  return (<>
  {selectedDiary ? <EditDiaryFormContainer onSubmit={submitEditHandler}>
      
      <TextArea required name="entryDescription" label={selectedDiary.title} placeholder="Diary Title" type="text" value={description} rows={6} cols={50} changed={getDescriptionHandler}/>
   
      <EditFormButttonContainer>
      <ButtonWithIcon onClick={goBackHandler} color='blue'type='button'>Cancel</ButtonWithIcon>
          <ButtonWithIcon  Icon={<CheckIcon/>}  type='submit'>Update Diary</ButtonWithIcon>
          
          </EditFormButttonContainer> 


      </EditDiaryFormContainer> : <Navigate replace to={'/'}/> }
  </>
    
  )
}

export default EditDiary