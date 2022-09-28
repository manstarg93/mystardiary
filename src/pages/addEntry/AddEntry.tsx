import { FC } from "react";
import RootPage from "..";
import NewDiary from "../../components/diary/NewDiary";

interface IAddEntryProps{

}



const AddEntry:FC<IAddEntryProps> = () => {


    return (
        <RootPage>
            <NewDiary/>
        </RootPage>
        
    )
}

export default AddEntry