import React from 'react'

import Modal from '../modal/Modal'
import ButtonContainer from '@mui/material/Button/Button'

import { DeleteModalTitle,DeleteModalText, DeleteCancelContainer, DeleteModalContainer } from './DeleteModal.styles'
import { useAppDispatch, useAppSelector } from '../hooks/storeHooks'
import { toggleModal } from '../../store/UiSlice'
import { AddToDiary } from '../../store/diarySlice'
import {useNavigate} from 'react-router-dom'
import { addDiaryForUser } from '../../utils/firebaseUtil'
const DeleteModal = () => {
const navigate = useNavigate()
    const {showModal} = useAppSelector(state => state.ui)
    const {diaryData,diaryTitle} = useAppSelector(state => state.diary)
    const {userDetails} = useAppSelector(state => state.auth)
    const dispatch = useAppDispatch()

const closeModalHandler = () => {
   dispatch(toggleModal())
}

const deleteDiaryHandler  = () => {

  const  filteredDiary = diaryData.filter(diary => diary.title !== diaryTitle)

  dispatch(AddToDiary(filteredDiary))
  if(userDetails){
    addDiaryForUser(userDetails.uid,filteredDiary)
  }
   
    dispatch(toggleModal())
    navigate('/')
}





  return (
      <Modal close={closeModalHandler} show={showModal} >
 <DeleteModalContainer>
    <DeleteModalTitle>Confirming deletion</DeleteModalTitle>
    <DeleteModalText>Are you sure you want to delete this diary</DeleteModalText>
    <DeleteCancelContainer>
        <ButtonContainer onClick={deleteDiaryHandler} variant='outlined' color='success' >Delete now</ButtonContainer >
        <ButtonContainer onClick={closeModalHandler} variant='outlined' color='error'>Cancel</ButtonContainer >
    </DeleteCancelContainer>
</DeleteModalContainer>
      </Modal>
   
  )
}

export default DeleteModal