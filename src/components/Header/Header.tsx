import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../../assets/Marcus.png';
import { useAppSelector } from '../../hooks/reduxs';
import { getAuthState } from '../../reducer/selectors/authSelector';
import InputSearch from '../InputSearch';
import UserProfile from '../UserProfile';
interface IHeaderProps {}

const Header: React.FunctionComponent<IHeaderProps> = (props) => {
    const [activeId, setActiveId] = React.useState(1);
    const [inputSearch, setInputSearch] = React.useState('');
    const navigate = useNavigate();
    const headerMenu = [
        {
            id: 1,
            name: 'home',
            href: '/',
        },
        {
            id: 2,
            name: 'movies',
            href: '/movies',
        },
    ];

    const renderMenu = () => {
        return headerMenu.map((item) => (
            <div
                key={item.id}
                className={`menu-item ${activeId === item.id ? 'active' : ''}`}
                onClick={() => onClickMenu(item.id, item.href)}
            >
                {item.name}
            </div>
        ));
    };
    const onClickMenu = (id: number, href: string) => {
        setActiveId(id);
        navigate(href);
    };

    const onChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setInputSearch(value);
    };

    return (
        <div className="header d-flex justify-content-between align-items-center">
            <div className="header-left d-flex justify-content-between align-items-center">
                <div className="header-logo">
                    <img
                        onClick={() => navigate('/')}
                        className="img-fluid"
                        width={150}
                        src={logo}
                        alt="logo"
                    />
                </div>
                <div className="header-menu d-flex justify-content-between align-items-center">
                    {renderMenu()}
                </div>
            </div>
            <div className="header-right d-flex justify-content-center align-items-center">
                <InputSearch
                    inputProps={{
                        value: inputSearch,
                        placeholder: 'Search....',
                        onChange: onChangeSearch,
                    }}
                />
                <UserProfile />
            </div>
        </div>
    );
};

export default Header;
