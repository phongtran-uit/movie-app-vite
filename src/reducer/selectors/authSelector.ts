import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../../store';

export const getAuthState = createSelector(
    (state: RootState) => state.authState,
    (data) => data
);
