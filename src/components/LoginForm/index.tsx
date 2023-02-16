import { isEmpty } from 'lodash';
import * as React from 'react';
import { Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks/reduxs';
import { getAuthState } from '../../reducer/selectors/authSelector';
import { actLogin, ILoginData } from '../../reducer/slices/authSlice';
import Button from '../Buttons';

interface ILoginFormProps {
    closeDropdown: () => void;
    isLogging: boolean;
}

const LoginForm: React.FunctionComponent<ILoginFormProps> = (props) => {
    const { isLogging } = props;
    const dispatch = useAppDispatch();

    const navigate = useNavigate();
    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        !isLogging && dispatch(actLogin(loginData));
    };
    const [loginData, setLoginData] = React.useState({
        taiKhoan: '',
        matKhau: '',
    } as ILoginData);

    const onChangeData = (e: React.ChangeEvent<HTMLInputElement>) => {
        setLoginData({ ...loginData, [e.target.name]: e.target.value });
    };
    const goToRegisterPage = () => {
        props.closeDropdown();
        navigate('/register');
    };
    return (
        <>
            <Form onSubmit={onSubmit}>
                <Form.Control
                    placeholder="Username"
                    name="taiKhoan"
                    value={loginData.taiKhoan}
                    onChange={onChangeData}
                />
                <Form.Control
                    className="mt-3"
                    type="password"
                    name="matKhau"
                    value={loginData.matKhau}
                    placeholder="Password..."
                    onChange={onChangeData}
                />
                <Button
                    loading={isLogging}
                    class="w-100 mt-3"
                    type="submit"
                    variant="black-bg"
                >
                    Login
                </Button>
            </Form>
            <div className="text-end mt-3">
                Not have an account?{' '}
                <span className="register-btn" onClick={goToRegisterPage}>
                    Create one
                </span>
            </div>
        </>
    );
};

export default LoginForm;
