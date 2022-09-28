import {createSlice} from '@reduxjs/toolkit'

interface UiSliceType {
    showSideBar: boolean
    showModal: boolean
}

const initialState:UiSliceType = {
    showSideBar: false,
    showModal: false
}

export const UiSlice = createSlice({
    name: 'ui',
    initialState,
    reducers: {
        toggleSideBar: (state) => {
            state.showSideBar = !state.showSideBar
        },
        toggleModal: (state) => {
            state.showModal = !state.showModal
        }
    }
})

export const {toggleSideBar,toggleModal} = UiSlice.actions
export default UiSlice.reducer