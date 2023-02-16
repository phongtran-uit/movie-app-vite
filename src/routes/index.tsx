import { createBrowserRouter, RouteObject } from 'react-router-dom';
import React from 'react';
import Movies from '../pages/Movies';
import DetailMovie from '../pages/DetailMovie';
import Register from '../pages/Register';

const AdminLayout = React.lazy(() => import('../layouts/AdminLayout'));
const UserLayout = React.lazy(() => import('../layouts/UserLayout'));
const Homepage = React.lazy(() => import('../pages/HomePage'));

const routes: RouteObject[] = [
    {
        path: '/',
        element: <UserLayout />,
        children: [
            {
                path: '',
                element: <Homepage />,
            },
            {
                path: '/movies',
                element: <Movies />,
            },
            {
                path: '/movies/:id',
                element: <DetailMovie />,
            },
            {
                path: '/register',
                element: <Register />,
            },
        ],
    },
    {
        path: '/admin',
        element: <AdminLayout />,
        children: [
            {
                path: '',
                element: <div>admin components</div>,
            },
        ],
    },
];

export const router = createBrowserRouter(routes);
