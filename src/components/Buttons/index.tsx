import * as React from 'react';
import loading from '../../assets/giphy.gif';
interface IButtonProps {
    type?: 'button' | 'submit' | 'reset' | undefined;
    children?: React.ReactNode;
    variant: ButtonVariant;
    class?: string;
    onClick?: () => void;
    loading?: boolean;
}

type ButtonVariant = 'black-bg' | 'orange-bg' | 'default';

const Button: React.FunctionComponent<IButtonProps> = (props) => {
    return (
        <button
            type={props.type}
            onClick={props.onClick}
            className={`custom-button ${props.variant} ${
                props.class ? props.class : ''
            }`}
        >
            {props.loading ? (
                <img width={20} src={loading} alt="loading" />
            ) : (
                props.children
            )}
        </button>
    );
};

export default Button;
