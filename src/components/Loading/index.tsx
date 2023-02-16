import * as React from 'react';
import loadingGif from '../../assets/giphy.gif';

interface ILoadingProps {}

const Loading: React.FunctionComponent<ILoadingProps> = (props) => {
    return (
        <div className="loading-page">
            <img className="img-fluid" src={loadingGif} alt="loading" />
        </div>
    );
};

export default Loading;
