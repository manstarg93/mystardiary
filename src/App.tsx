import React, { Suspense, useEffect } from 'react';
import './App.css';
import {Route, Routes,Navigate } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from './components/hooks/storeHooks';
import { authUser, IAuthSlice } from './store/authSlice';
import { getDiaryInfo } from './utils/firebaseUtil';
import { AddToDiary } from './store/diarySlice';
import SideBar from './components/sidebar/SideBar';
import Loading from './components/loading/Loading.styles';

const HomePage = React.lazy(() => import('./pages/home/index'))
const AddEntryPage = React.lazy(() => import('./pages/addEntry/AddEntry'))
const AuthPage = React.lazy(() => import('./pages/authPage/AuthPage'))
const SelectedDiaryPage = React.lazy(() => import('./pages/selectedDiary/SelectedDiary'))
const EditPage = React.lazy(() => import('./pages/editPage/EditPage'))


function App() {
const dispatch = useAppDispatch()

  useEffect(() => {

    const userData:{ uid: string,
      displayName: string | null,
      email: string | null} = JSON.parse(localStorage.getItem('user') || '{}') 

    if(Object.keys(userData).length !== 0){
      dispatch(authUser(userData))
    }

    const updateDiary = async() => {

        await getDiaryInfo(userData.uid).then(response => {
         
          if(response){
     
            dispatch(AddToDiary(response.userDiary))
          }
      
       })

    }
  
  if(Object.keys(userData).length !== 0){
    updateDiary()

  }
    
  },[])
  return (
    <Suspense fallback={<Loading/>}>

   <Routes>
   
     <Route path='/' element={<HomePage/>}/>
     <Route path='/:title' element={<SelectedDiaryPage/>}/>
     <Route path='/:title/:title' element={<EditPage/>}/>
     <Route path='/addentry' element={<AddEntryPage/>}/>
     <Route path='/auth' element={<AuthPage/>}/>
    <Route path='*'  element={<Navigate to="/" replace />}/>
   
     
   </Routes>
   </Suspense>
  );
}

export default App;
