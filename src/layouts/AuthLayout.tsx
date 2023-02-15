import { ReactJSXElement } from '@emotion/react/types/jsx-namespace';
import * as React from 'react';

interface IAuthLayoutProps {
    children: ReactJSXElement;
}

const AuthLayout: React.FunctionComponent<IAuthLayoutProps> = (props) => {
    return <>{props.children}</>;
};

export default AuthLayout;
