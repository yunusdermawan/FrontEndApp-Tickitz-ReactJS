import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: 'users',
    initialState: {
        isAuth: false,
        token: '',
        data: {},
        role: ''
    },
    reducers: {
        login(state, actions) {
            return {
                ...state,
                isAuth: true,
                token: actions.payload,
                role: actions.payload
            }
        },
        logout(state, actions) {
            return {
                ...state,
                isAuth: false,
                token: '',
                data: {}
            }
        },
        addData(state, actions) {
            return {
                ...state,
                data: actions.payload
            }
        }
    }
})

export const { login, logout, addData } = userSlice.actions
export default userSlice.reducer