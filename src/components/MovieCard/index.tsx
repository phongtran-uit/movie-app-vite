import * as React from 'react';
import { IMovie } from '../../reducer/slices/moviesSlice';
import m from 'moment';
import Button from '../Buttons';
import { useNavigate } from 'react-router-dom';

interface IMovieCardProps {
    movie: IMovie;
}

const MovieCard: React.FunctionComponent<IMovieCardProps> = (props) => {
    const { movie } = props;
    const navigate = useNavigate();
    const goToDetailPage = (id: string | number) => {
        navigate(`/movies/${id}`);
    };
    return (
        <div className="movie-card">
            <div className="card-img">
                <img
                    className="h-100 w-100 d-block"
                    src={movie.hinhAnh}
                    alt="picture"
                />
            </div>
            <div className="card-rating">
                <i className="fa-solid fa-star"></i> {movie.danhGia} / 10
            </div>
            <div className="card-overlay"></div>
            <div className="card-play-btn text-center">
                <i className="fa-regular fa-circle-play"></i>
            </div>
            <div className="card-content">
                <h2 className="title">{movie.tenPhim}</h2>
                <p className="infor">
                    Release:{' '}
                    {m(movie.ngayKhoiChieu).format('dddd, MMMM Do YYYY')}
                </p>
                <p className="description">
                    <b>Description</b>: {movie.moTa}
                </p>
            </div>
            <div className="card-bottom">
                <Button
                    class="card-btn-left"
                    variant="default"
                    onClick={() => goToDetailPage(movie.maPhim)}
                >
                    Detail
                </Button>
                <Button class="card-btn-right" variant="default">
                    Buy Ticket
                </Button>
            </div>
        </div>
    );
};

export default MovieCard;
