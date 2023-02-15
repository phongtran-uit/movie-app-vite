import React, { Suspense } from 'react';
import { RouterProvider } from 'react-router-dom';
import Loading from './components/Loading';
import { router } from './routes';

const App: React.FunctionComponent = () => {
    return (
        <>
            <Suspense fallback={<Loading />}>
                <RouterProvider router={router} />
            </Suspense>
        </>
    );
};

export default App;
