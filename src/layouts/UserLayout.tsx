import * as React from 'react';
import { Outlet } from 'react-router-dom';

interface IUserLayoutProps {}

const UserLayout: React.FunctionComponent<IUserLayoutProps> = (props) => {
    return (
        <>
            this is userlayout
            <Outlet />
        </>
    );
};

export default UserLayout;
