import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

import { getInitialDedline } from '../utils/getInitialDedline';
import { labels } from '../constants';
import { Todo } from '../types/todo';

const dedline = getInitialDedline();

const deletedTodos: Todo[] = [
  {
    id: uuidv4(),
    description: 'Some description',
    timeStamp: Date.now(),
    label: labels.deleted,
    dedline: dedline.split('-').reverse().join('.'),
  },
];

export const deletedTodosSlice = createSlice({
  name: 'active',
  initialState: deletedTodos,
  reducers: {
    addDeletedItem: (state, action: PayloadAction<Todo>) => {
      const newItem = action.payload;
      newItem.label = 'deleted';

      state.push(newItem);
    },
  },
});

export const { addDeletedItem } = deletedTodosSlice.actions;

export default deletedTodosSlice.reducer;
