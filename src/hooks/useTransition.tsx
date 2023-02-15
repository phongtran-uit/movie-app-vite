import * as React from 'react';

interface IUseTransitionProps {
    children?: any;
    dep: any;
}

const UseTransition: React.FunctionComponent<IUseTransitionProps> = (props) => {
    const [isActive, setActive] = React.useState(true);
    React.useEffect(() => {
        setActive(false);
        const timeout = setTimeout(() => {
            setActive(true);
        }, 300);
        return () => {
            clearTimeout(timeout);
        };
    }, [props.dep]);

    return React.cloneElement(props.children, {
        className:
            props.children.props.className + `${isActive ? ` active` : ''}`,
    });
};

export default UseTransition;
