import {
    AnyAction,
    createAsyncThunk,
    createSlice,
    ThunkAction,
} from '@reduxjs/toolkit';
import { Dispatch } from 'react';
import { apiURL, EApiCategory } from '../../services';
import { RootState } from '../../store';

const initialState: any = {
    isLogin: false,
    data: {},
};

const authSlice = createSlice({
    name: 'authSlice',
    initialState,
    reducers: {
        login: (state, { payload }) => {
            console.log('run here', payload);
        },
        loginSuccess: (state) => {},
        loginFail: (state) => {},
    },
});
export const { login } = authSlice.actions;
const handleLogin = (
    data: any
): ThunkAction<void, RootState, unknown, AnyAction> => {
    return (dispatch) => {
        dispatch(login(data));
    };
};
export { handleLogin };
export default authSlice;
