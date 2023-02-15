import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../../store';

export const getMoviesState = createSelector(
    (state: RootState) => state.moviesState,
    (data) => data
);
