import React from 'react'
import RootPage from '..'
import DeleteModal from '../../components/deleteDiary/DeleteModal'
import SelectedDiaryComponent from '../../components/diary/SelectedDiaryComponent'
import SideBar from '../../components/sidebar/SideBar'
import { SelectedDiaryContainer } from './SelectedDiary.styles'
import {useParams} from 'react-router-dom'

const SelectedDiary = () => {
  const params = useParams()
  console.log(params)
  return (<>
   <RootPage>

<SelectedDiaryComponent/>

</RootPage> 
  <DeleteModal/>
  </>
 )
}

export default SelectedDiary