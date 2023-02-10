import UserLayout from '../layouts/UserLayout';
import { createBrowserRouter, RouteObject } from 'react-router-dom';
const routes: RouteObject[] = [
    {
        path: '/',
        element: <UserLayout />,
        children: [
            {
                path: '',
                element: <div>home</div>,
            },
        ],
    },
];

export const router = createBrowserRouter(routes);
