import React, { FC } from 'react'
import Header from '../components/header/Header'
import SideBar from '../components/sidebar/SideBar'
import { ContentContainer, MainContent } from './styles'

interface RootpageProps{
    children: React.ReactNode
}

const RootPage:FC<RootpageProps> = ({children}) => {
  return (
   <>
   <Header />
   <ContentContainer>
   <SideBar/>
   <MainContent>
   {children}
   </MainContent>
  
   </ContentContainer>
   
   </>
  )
}

export default RootPage