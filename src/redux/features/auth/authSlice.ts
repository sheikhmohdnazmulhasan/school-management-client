import { createSlice } from "@reduxjs/toolkit";
import { TAuthState } from "../../../interface";


const initialState: TAuthState = {
    user: null,
    token: null
}
const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setUser: (state, action) => {
            const { token, user } = action.payload;
            state.token = token;
            state.user = user;
        },
        logout: (state) => {
            state.token = null;
            state.user = null;
        }
    }
});

export const { setUser, logout } = authSlice.actions;
export default authSlice.reducer;