import { FC } from 'react';

import { Todo, TodoListType } from '../../types/todo';

import { TodoItem } from '../todo-item';

import styles from './TodoList.module.css';

interface Props {
  list: Todo[];
  listType: TodoListType;
}

export const TodoList: FC<Props> = ({ list, listType }) => {
  return (
    <ul className={`${styles.todoList} list`}>
      {list.map(item => (
        <TodoItem
          key={item.id}
          id={item.id}
          description={item.description}
          timeStamp={item.timeStamp}
          label={item.label}
          listType={listType}
          dedline={item.dedline}
        />
      ))}
    </ul>
  );
};
