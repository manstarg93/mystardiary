import React, { FC, useState } from "react";
import { ButtonWithIcon } from "../button/ButtonWithIcon";
import { Input, TextArea } from "../form/InputComponent";
import { FeedBackMessageFormContainer, FormButttonContainer, FormButttonMessageContainer, NewEntryContainer } from "./NewDiary.styles";
import CheckIcon from '@mui/icons-material/Check'
import { useAppDispatch,useAppSelector } from "../hooks/storeHooks";
import { AddToDiary } from "../../store/diarySlice";
import { addDiaryForUser, getDiaryInfo } from "../../utils/firebaseUtil";

import {useNavigate} from 'react-router-dom'
import FeedbackMessage from "../feedbackMessage/FeedbackMessage";

interface INewEntry {

}


const NewEntry:FC<INewEntry> = () => {

    const [title, setTitle] = useState<string>('')
    const [description, setDescription] = useState<string>('')

    const [feedBackMessage, setFeedBackMessage] = useState<string>('')
    const [success, setSuccess] = useState<boolean >(false)

    const {diaryData} = useAppSelector(state => state.diary)
    const {userDetails} = useAppSelector(state => state.auth)

const navigate = useNavigate()
const dispatch = useAppDispatch()


////////// Functions////////////
    const getTitleHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(event.target.value)
    }

    const getDescriptionHandler = (event:React.ChangeEvent<HTMLTextAreaElement> ) => {
    setDescription(event.target.value)
    }

    const addUser = async(myDiaryData: {title: string, diaryDescription: string, diaryDate: string}) => {

            if(!diaryData){
              
                dispatch(AddToDiary([myDiaryData]))
                if(userDetails){
                    addDiaryForUser(userDetails.uid,[myDiaryData])
                  }
            }
            if(diaryData){
              const updatedDiary = [
                    ...diaryData,
                    myDiaryData
                ]
            
            dispatch(AddToDiary(updatedDiary))
            if(userDetails){
                addDiaryForUser(userDetails.uid,updatedDiary)
              }
         
            }
            navigate('/')
            setFeedback(true, `Diary added!`)
           
    }

    const setFeedback = (success: boolean, message: string) => {
        setSuccess(success)
        setFeedBackMessage(message)
    }
    
    const submitInputHandler = async(event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
       
        const date = new Date()
        
        const myDiaryData = {
           
            title: title,
            diaryDescription: description,
            diaryDate: new Date(date + 'Z').toLocaleString('en-US',{dateStyle: 'medium', timeStyle: 'short'})
        }

        if(!diaryData){
            addUser(myDiaryData)
        }

        if(diaryData){
            const existingDiary = diaryData.find((diary) => diary.title.toLowerCase() === title.toLowerCase())
            if(existingDiary){
                setFeedback(false, 'Diary title already created')
           
                return
            }
            
            addUser(myDiaryData)
                
               
            }
            setTitle('')
            setDescription('')
        }
        
    

  
    
    return (
        <NewEntryContainer onSubmit={submitInputHandler}>
           <Input required name="entryTitle" label="Title" placeholder="Diary Title" type="text" value={title} onChange={getTitleHandler}/>
        <TextArea required name="entryDescription" label="Diary Description" placeholder="Diary Title" type="text" value={description} rows={6} cols={50} changed={getDescriptionHandler}/>
        <FormButttonMessageContainer>
        <FormButttonContainer><ButtonWithIcon Icon={<CheckIcon/>} type='submit'>Submit Diary</ButtonWithIcon></FormButttonContainer> 
       <FeedBackMessageFormContainer><FeedbackMessage success={success} message={feedBackMessage}/></FeedBackMessageFormContainer> 
       
        </FormButttonMessageContainer>
     
       
       


        </NewEntryContainer>
    )
   
}

export default NewEntry