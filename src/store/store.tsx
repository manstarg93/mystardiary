import {configureStore} from '@reduxjs/toolkit'

import uiReducer from './UiSlice'
import diaryReducer from './diarySlice'
import authReducer from './authSlice'
export const store = configureStore({
    reducer: {
        ui: uiReducer,
        diary: diaryReducer,
        auth: authReducer
    }
})

export type Rootstate = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch