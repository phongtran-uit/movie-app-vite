import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import React from 'react';

const initialState = {
    isOpenModal: false,
    type: '',
    trailerData: '',
};
interface IModalPayload {
    type: string;
    data: any;
}

const globalSlice = createSlice({
    name: 'globalSlice',
    initialState,
    reducers: {
        openModal: (state, { payload }: PayloadAction<IModalPayload>) => {
            const { type } = payload;
            state.isOpenModal = true;
            state.type = type;
            switch (type) {
                case 'trailer':
                    state.trailerData = payload.data;
                    break;
                default:
                    break;
            }
        },
        closeModal: (state) => {
            state.isOpenModal = false;
            state.trailerData = '';
            state.type = '';
        },
        // openToast: (state, { payload: message }: PayloadAction<string>) => {
        //     state.toastMessage = message;
        //     switch (type) {
        //         case 'trailer':
        //             state.trailerData = payload.data;
        //             break;
        //         default:
        //             break;
        //     }
        // },
        // closeToast: (state) => {
        //     state.toastMessage = '';
        //     state.isOpenToast = false;
        // },
    },
});

export const { openModal, closeModal } = globalSlice.actions;
export default globalSlice;
