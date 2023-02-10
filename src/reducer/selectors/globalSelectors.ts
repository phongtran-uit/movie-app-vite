import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../../store';

export const getGlobalData = createSelector(
    (state: RootState) => state.globalState,
    (data) => data
);
