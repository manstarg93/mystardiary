import { useAppDispatch, useAppSelector } from "./storeHooks"

import { AddToDiary } from "../../store/diarySlice"
import { addDiaryForUser } from "../../utils/firebaseUtil"



export const useAddUser = async(myDiaryData: {title: string, diaryDescription: string, diaryDate: string}) => {


    const {diaryData} = useAppSelector(state => state.diary)
    const {userDetails} = useAppSelector(state => state.auth)


    const dispatch = useAppDispatch()

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


   
}