import {createSlice,PayloadAction} from '@reduxjs/toolkit'

export interface IAuthSlice{
    userDetails: {
        uid: string,
        displayName: string | null,
        email: string | null
    } | null,

    isAuth: boolean
}

const initialState:IAuthSlice = {
    userDetails: null,
    isAuth: false
}

export const AuthSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
            authUser:(state, action:PayloadAction<{uid:string, displayName: string | null, email: string | null}> ) => {
                localStorage.setItem('user',JSON.stringify(action.payload))
                state.userDetails = action.payload;
                state.isAuth = true
            },
            logOutUser: (state) => {
                localStorage.removeItem('user')
                state.isAuth = false;
                state.userDetails = null
              
            }
    }
})

export const {authUser,logOutUser} = AuthSlice.actions
export default AuthSlice.reducer