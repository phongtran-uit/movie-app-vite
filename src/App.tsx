import React, { Suspense } from 'react';
import { RouterProvider } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Loading from './components/Loading';
import AuthLayout from './layouts/AuthLayout';
import { router } from './routes';

const App: React.FunctionComponent = () => {
    return (
        <>
            <AuthLayout>
                <Suspense fallback={<Loading />}>
                    <RouterProvider router={router} />
                </Suspense>
            </AuthLayout>
            <ToastContainer />
        </>
    );
};

export default App;
