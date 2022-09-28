import React from 'react'
import Bin from '@mui/icons-material/Delete'
import Icons from '../icon/Icon'
import { useAppDispatch } from '../hooks/storeHooks'
import { toggleModal } from '../../store/UiSlice'
import { getDiaryTitle } from '../../store/diarySlice'

interface IdeleteProps {
    title: string
}
const DeleteComponent:React.FC<IdeleteProps> = ({title}) => {
    const dispatch = useAppDispatch()
const deleteHandler = () => {
    dispatch(getDiaryTitle({title}))
dispatch(toggleModal())
}

  return (

       <Icons onClick={deleteHandler} Icon={<Bin />}/>

  )
}

export default DeleteComponent