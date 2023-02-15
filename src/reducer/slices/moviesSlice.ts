import {
    AnyAction,
    createSlice,
    PayloadAction,
    ThunkAction,
} from '@reduxjs/toolkit';
import { apiURL, EApiCategory } from '../../services';
import { RootState } from '../../store';

export interface IMovie {
    maPhim: number;
    tenPhim: string;
    biDanh: string;
    trailer: string;
    hinhAnh: string;
    moTa: string;
    maNhom: string;
    ngayKhoiChieu: Date;
    danhGia: number;
}

const initialState = {
    loading: true,
    movies: [] as IMovie[],
    err: '',
};

const moviesSlice = createSlice({
    name: 'moviesSlice',
    initialState,
    reducers: {
        getVideos: (state) => {
            state.loading = true;
        },
        getVideosSuccess: (state, { payload }: PayloadAction<IMovie[]>) => {
            state.loading = false;
            state.movies = payload;
        },
        getVideosFail: (state, { payload }: PayloadAction<any>) => {
            state.loading = false;
            state.err = payload;
        },
    },
});
export const { getVideos, getVideosFail, getVideosSuccess } =
    moviesSlice.actions;

const actGetVideos = (): ThunkAction<void, RootState, unknown, AnyAction> => {
    return async (dispatch) => {
        dispatch(getVideos());
        try {
            const moviesRes = await apiURL.get(
                `${EApiCategory.QLP}/LayDanhSachPhim?maNhom=GP03`
            );
            dispatch(getVideosSuccess(moviesRes.data));
        } catch (error) {
            console.log('err', error);
            dispatch(getVideosFail(error));
        }
    };
};
export { actGetVideos };
export default moviesSlice;
