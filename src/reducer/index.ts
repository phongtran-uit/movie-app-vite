import { combineReducers } from '@reduxjs/toolkit';
import authSlice from './slices/authSlice';
import globalSlice from './slices/globalSlice';
import moviesSlice from './slices/moviesSlice';
const rootReducer = combineReducers({
    globalState: globalSlice.reducer,
    authState: authSlice.reducer,
    moviesState: moviesSlice.reducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
