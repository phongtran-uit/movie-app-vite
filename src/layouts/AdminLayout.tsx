import * as React from 'react';
import { Outlet } from 'react-router-dom';

interface IAdminLayoutProps {}

const AdminLayout: React.FunctionComponent<IAdminLayoutProps> = (props) => {
    return (
        <>
            admin
            <Outlet />
        </>
    );
};

export default AdminLayout;
