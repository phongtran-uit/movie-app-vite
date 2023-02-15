import * as React from 'react';
import { Button } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';

interface IUserLayoutProps {}

const UserLayout: React.FunctionComponent<IUserLayoutProps> = (props) => {
    return (
        <div className="user-layout">
            <Header />
            <main className="main-layout">
                <Outlet />
            </main>
            <Footer />
        </div>
    );
};

export default UserLayout;
