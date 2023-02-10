import { createSlice } from '@reduxjs/toolkit';

const initialState: any = {
    data: {},
};

const globalSlice = createSlice({
    name: 'globalSlice',
    initialState,
    reducers: {
        getData: (state, action) => {},
    },
});

export const { getData } = globalSlice.actions;
export default globalSlice;
