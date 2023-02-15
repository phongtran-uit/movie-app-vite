import * as React from 'react';

interface IButtonProps {
    children?: React.ReactNode;
    variant: ButtonVariant;
    class?: string;
    onClick?: () => void;
}

type ButtonVariant = 'black-bg' | 'orange-bg' | 'default';

const Button: React.FunctionComponent<IButtonProps> = (props) => {
    return (
        <button
            onClick={props.onClick}
            className={`custom-button ${props.variant} ${
                props.class ? props.class : ''
            }`}
        >
            {props.children}
        </button>
    );
};

export default Button;
