import * as React from 'react';
import Button from '../Buttons';

interface IInputSearchProps {
    inputProps?: React.DetailedHTMLProps<
        React.InputHTMLAttributes<HTMLInputElement>,
        HTMLInputElement
    >;
}

const InputSearch: React.FunctionComponent<IInputSearchProps> = (props) => {
    return (
        <div className="input-search">
            <input type="text" {...props.inputProps} />
        </div>
    );
};

export default InputSearch;
