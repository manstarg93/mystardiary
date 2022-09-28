
import {createSlice, PayloadAction} from '@reduxjs/toolkit'

interface IdataSlice {
loading: boolean,
diaryData: Array<{title: string, diaryDescription: string, diaryDate: string}> | [],
diaryTitle: string,
selectedDiary: {title: string, diaryDescription: string, diaryDate: string} | null
}

const initialState:IdataSlice = {
loading: false,
diaryData: [],
diaryTitle: '',
selectedDiary: null
}

export const DataSlice = createSlice({
    name: 'diary',
    initialState,
    reducers: {
        AddToDiary: (state, action: PayloadAction<{ title: string, diaryDescription: string, diaryDate: string}[]>) => 
          
        {
            
                state.diaryData = action.payload

        },
      
        clearDairy: (state) => {
            state.diaryData = []
        },
        getDiaryTitle: (state, action: PayloadAction<{title: string}>) => {
            state.diaryTitle = action.payload.title
        },
        getSelectedDiary: (state, action: PayloadAction<{title: string, diaryDescription: string, diaryDate: string}>) => {
            state.selectedDiary = action.payload
        }

        
    }
})


export const {AddToDiary,clearDairy,getDiaryTitle,getSelectedDiary} = DataSlice.actions
export default DataSlice.reducer