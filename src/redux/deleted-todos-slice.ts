import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

import { labels } from '../constants';
import { Todo } from '../types/todo';

const deletedTodos: Todo[] = [
  {
    id: uuidv4(),
    description: 'Some description',
    timeStamp: Date.now(),
    label: labels.deleted,
    dedline: '',
  },
];

export const deletedTodosSlice = createSlice({
  name: 'active',
  initialState: deletedTodos,
  reducers: {
    addDeletedItem: (state, action: PayloadAction<Todo>) => {
      state.push(action.payload);
    },
  },
});

export const { addDeletedItem } = deletedTodosSlice.actions;

export default deletedTodosSlice.reducer;
