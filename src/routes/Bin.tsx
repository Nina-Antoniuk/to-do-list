import { useSelector } from 'react-redux';

import { TodoList } from '../components/todo-list';
import { RootState } from '../redux/store';

export const Bin = () => {
  const deletedTodos = useSelector((state: RootState) => state.deletedTodos);

  return (
    <div className="container">
      <h1 className="title">List of deleted to-do</h1>
      <TodoList list={deletedTodos} listType={'removed'} />
    </div>
  );
};
