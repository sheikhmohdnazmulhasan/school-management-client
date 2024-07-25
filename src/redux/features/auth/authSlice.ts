import { createSlice } from "@reduxjs/toolkit";
import { TAuthState } from "../../../interface";
import { RootState } from "../../store";

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

export const useCurrentToken = ((state: RootState) => state.auth.token);
export const useCurrentUser = ((state: RootState) => state.auth.user);