import { FC, useEffect, useState } from "react";
import RootPage from "..";
import Diary from "../../components/diary/Diary";

import { HomeComponent } from "./styles";

const Home:FC = () => {



    return(
        <RootPage>
 <HomeComponent>
        <Diary/>
</HomeComponent>
        </RootPage>
      
    )
}

export default Home