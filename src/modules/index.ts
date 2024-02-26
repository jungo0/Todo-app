import { configureStore } from '@reduxjs/toolkit';
import darkSlice from './darkSlice';
import todoSlice from './todoSlice';
const store = configureStore({
  reducer: {
    dark: darkSlice.reducer,
    todos: todoSlice.reducer,
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
