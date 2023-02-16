import * as React from 'react';
import { Dropdown } from 'react-bootstrap';
import { useAppDispatch, useAppSelector } from '../../hooks/reduxs';
import { getAuthState } from '../../reducer/selectors/authSelector';
import { logOut } from '../../reducer/slices/authSlice';
import LoginForm from '../LoginForm';

interface IUserProfileProps {}

const UserProfile: React.FunctionComponent<IUserProfileProps> = (props) => {
    const { isLogged, data } = useAppSelector(getAuthState);
    const [dropdownState, setDropdownState] = React.useState(false);
    const dispatch = useAppDispatch();
    const onLogOut = () => {
        dispatch(logOut());
    };
    const toggleDropdown = (nextShow: boolean) => {
        setDropdownState(nextShow);
    };
    return (
        <Dropdown
            className="ms-3 avatar-dropdown"
            align={'end'}
            show={dropdownState}
            onToggle={(next) => toggleDropdown(next)}
        >
            <Dropdown.Toggle className="toggle-avatar">
                <i className="fa-solid fa-user"></i>
            </Dropdown.Toggle>
            {isLogged ? (
                <Dropdown.Menu>
                    <Dropdown.Header>Hi, {data.hoTen}</Dropdown.Header>
                    <Dropdown.Item>Profile</Dropdown.Item>
                    <Dropdown.Item>History</Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item onClick={onLogOut}>Log out</Dropdown.Item>
                </Dropdown.Menu>
            ) : (
                <Dropdown.Menu style={{ width: 500, padding: '1rem' }}>
                    <Dropdown.Header className="text-center">
                        Login
                    </Dropdown.Header>
                    <LoginForm closeDropdown={() => toggleDropdown(false)} />
                </Dropdown.Menu>
            )}
        </Dropdown>
    );
};

export default UserProfile;
