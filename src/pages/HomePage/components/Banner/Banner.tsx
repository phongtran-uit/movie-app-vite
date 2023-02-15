import moment from 'moment';
import * as React from 'react';
import { Col, Row } from 'react-bootstrap';
import Slider from 'react-slick';
import Button from '../../../../components/Buttons';
import MovieCard from '../../../../components/MovieCard';
import UseTransition from '../../../../hooks/useTransition';
import { IMovie } from '../../../../reducer/slices/moviesSlice';

interface IBannerProps {
    movies: IMovie[];
}

const Banner: React.FunctionComponent<IBannerProps> = (props) => {
    const [bannerImgIdx, setBannerImgIdx] = React.useState(0);
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        arrows: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        className: 'banner-slider',
        beforeChange: (current: any, next: any) => {
            setBannerImgIdx(next);
        },
    };
    const renderSlides = () => {
        return props.movies.map((item) => (
            <div className="slider-wrapper" key={item.maPhim}>
                <div className="d-flex ">
                    <div className="px-3">
                        <MovieCard movie={item} />
                    </div>

                    <div className="banner-movie-info px-3">
                        <h1 className="banner-title">
                            Welcome to <span>Marcus Cinema</span>
                        </h1>
                        <div className="movie-info">
                            <h2 className="movie-title">
                                <b>Movie name: </b>
                                {item.tenPhim}
                            </h2>
                            <p className="movie-description">
                                <b>Release: </b>
                                {moment(item.ngayKhoiChieu).format(
                                    'dddd, MMMM Do YYYY'
                                )}
                            </p>
                            <p className="movie-description">
                                <b>Description: </b>
                                {item.moTa}
                            </p>
                        </div>
                        <div className="text-center">
                            <Button class="trailer" variant="default">
                                Watch Trailer
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        ));
    };
    return (
        <div className="banner">
            <UseTransition dep={bannerImgIdx}>
                <div
                    className="banner-background"
                    style={{
                        backgroundImage: `url(${props.movies[bannerImgIdx]?.hinhAnh})`,
                    }}
                ></div>
            </UseTransition>

            <div className="carousel">
                <Slider {...settings}>{renderSlides()}</Slider>
            </div>
        </div>
    );
};

export default Banner;
