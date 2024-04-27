import { configureStore } from '@reduxjs/toolkit';

import activeTodosSlice from './active-todos-slice';
import deletedTodosSlice from './deleted-todos-slice';

export const store = configureStore({
  reducer: {
    activeTodos: activeTodosSlice,
    deletedTodos: deletedTodosSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
