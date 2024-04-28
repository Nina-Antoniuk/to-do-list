import { FC, useState } from 'react';
import { useSelector } from 'react-redux';

import { labels } from '../../constants';
import { RootState } from '../../redux/store';
import { TodoList } from '../../components/todo-list';
import { Select } from '../../components/select';
import { IconButton } from '../../components/icon-button';
import searchIcon from '../../assets/search.svg';

import styles from './Filter.module.css';
import { labelsType } from '../../types/todo';

export const Filter: FC = () => {
  const activeTodos = useSelector((state: RootState) => state.activeTodos);
  const deletedTodos = useSelector((state: RootState) => state.deletedTodos);

  const initialList = [...activeTodos, ...deletedTodos];

  const [todoList, setTodoList] = useState(initialList);
  const [filterLabelValue, setFilterLabelValue] = useState(labels.all);

  const labelsArr = Object.values(labels);

  const handleChangeLabel = (label: labelsType) => {
    setFilterLabelValue(label);
  };

  const handleFilterButtonClick = () => {
    if (filterLabelValue === labels.all) {
      setTodoList(initialList);
    } else {
      const filtredItems = initialList.filter(item => item.label === filterLabelValue);
      setTodoList(filtredItems);
    }
  };

  return (
    <div className={styles.filterContainer}>
      <h1 className="title">Find to-do</h1>
      <div>
        <div className={styles.filterField}>
          <span>By label:</span>

          <Select label={filterLabelValue} labels={labelsArr} onChangeLabel={handleChangeLabel} />
          <IconButton iconPath={searchIcon} alt="search icon" onClick={handleFilterButtonClick} />
        </div>
      </div>
      {todoList.length ? (
        <TodoList list={todoList} listType="filter" />
      ) : (
        <p className="title">Nothing was found...</p>
      )}
    </div>
  );
};
