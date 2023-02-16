import { isEmpty } from 'lodash';
import * as React from 'react';
import Loading from '../../components/Loading';
import TrailerModal from '../../components/Modal/TrailerModal';
import { useAppDispatch, useAppSelector } from '../../hooks/reduxs';
import { getMoviesState } from '../../reducer/selectors/moviesSelectors';
import { actGetVideos } from '../../reducer/slices/moviesSlice';
import Banner from './components/Banner/Banner';

interface IHomepageProps {}

const Homepage: React.FunctionComponent<IHomepageProps> = (props) => {
    const dispatch = useAppDispatch();
    const { movies, loading } = useAppSelector(getMoviesState);

    React.useEffect(() => {
        dispatch(actGetVideos());
    }, []);

    if (isEmpty(movies) && loading) return <Loading />;

    return (
        <div className="homepage">
            <Banner movies={movies.slice(1, 10)} />
        </div>
    );
};

export default Homepage;
