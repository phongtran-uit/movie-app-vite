import * as React from 'react';

interface ILoadingProps {}

const Loading: React.FunctionComponent<ILoadingProps> = (props) => {
    return (
        <div className="loading">
            <div className="container">
                <div className="ring"></div>
                <div className="ring"></div>
                <div className="ring"></div>
                <p>Loading...</p>
            </div>
        </div>
    );
};

export default Loading;
