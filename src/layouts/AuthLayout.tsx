import { ReactJSXElement } from '@emotion/react/types/jsx-namespace';
import * as React from 'react';
import { toast } from 'react-toastify';
import { useAppDispatch, useAppSelector } from '../hooks/reduxs';
import { getAuthState } from '../reducer/selectors/authSelector';
import { IUser, loginSuccess } from '../reducer/slices/authSlice';

interface IAuthLayoutProps {
    children: ReactJSXElement;
}

const AuthLayout: React.FunctionComponent<IAuthLayoutProps> = (props) => {
    const dispatch = useAppDispatch();
    React.useEffect(() => {
        const userDataJSON = localStorage.getItem('userData');
        if (userDataJSON) {
            const userFromLS = JSON.parse(userDataJSON) as IUser;
            dispatch(loginSuccess(userFromLS));
            toast.success(`Hi ${userFromLS.hoTen}, welcome back!`);
        }
    }, []);
    return <>{props.children}</>;
};

export default AuthLayout;
