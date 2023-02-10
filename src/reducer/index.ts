import { combineReducers } from '@reduxjs/toolkit';
import globalSlice from './slices/globalSlice';
const rootReducer = combineReducers({
    globalState: globalSlice.reducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
