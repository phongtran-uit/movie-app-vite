import * as React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import TrailerModal from '../components/Modal/TrailerModal';

interface IUserLayoutProps {}

const UserLayout: React.FunctionComponent<IUserLayoutProps> = (props) => {
    return (
        <div className="user-layout">
            <Header />
            <main className="main-layout">
                <Outlet />
            </main>
            <Footer />
            <TrailerModal />
        </div>
    );
};

export default UserLayout;
