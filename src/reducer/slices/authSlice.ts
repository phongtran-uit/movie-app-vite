import {
    AnyAction,
    createSlice,
    PayloadAction,
    ThunkAction,
} from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

import { apiURL, EApiCategory } from '../../services';
import { RootState } from '../../store';

const initialState = {
    isLogged: false,
    isLogging: false,
    data: {} as IUser,
    error: '',
};
export interface ILoginData {
    taiKhoan: string;
    matKhau: string;
}
export interface IUser {
    taiKhoan: string;
    hoTen: string;
    email: string;
    soDT: string;
    maNhom: string;
    maLoaiNguoiDung: string;
    accessToken: string;
}

const authSlice = createSlice({
    name: 'authSlice',
    initialState,
    reducers: {
        login: (state) => {
            state.isLogging = true;
        },
        loginSuccess: (state, { payload }: PayloadAction<IUser>) => {
            state.isLogging = false;
            state.isLogged = true;
            state.data = payload;
        },
        loginFail: (state, { payload }: PayloadAction<any>) => {
            state.isLogging = false;
            state.error = payload;
        },
        logOut: (state) => {
            localStorage.clear();
            state.data = {} as IUser;
            state.isLogged = false;
        },
    },
});
export const { login, loginSuccess, loginFail, logOut } = authSlice.actions;
const actLogin = (
    data: ILoginData
): ThunkAction<void, RootState, unknown, AnyAction> => {
    return async (dispatch) => {
        try {
            dispatch(login());
            const loginResponse = await apiURL.post(
                `${EApiCategory.QLND}/DangNhap`,
                data
            );
            localStorage.setItem(
                'userData',
                JSON.stringify(loginResponse.data)
            );
            dispatch(loginSuccess(loginResponse.data));
        } catch (error: any) {
            const message = error.response.data;
            toast.error(message);
            dispatch(loginFail(error.response.data));
        }
    };
};
export { actLogin };
export default authSlice;
