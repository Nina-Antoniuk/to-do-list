import { FC } from 'react';
import { useDispatch } from 'react-redux';

import { Todo, TodoListType } from '../../types/todo';
import { deleteActiveItem } from '../../redux/active-todos-slice';
import { getDate } from '../../utils/getDate';
import editIcon from '../../assets/edit.svg';
import deleteIcon from '../../assets/delete.svg';

import { IconButton } from '../icon-button';

import styles from './TodoItem.module.css';
import { addDeletedItem } from '../../redux/deleted-todos-slice';

export const TodoItem: FC<Todo & { listType: TodoListType }> = ({
  id,
  description,
  timeStamp,
  label,
  listType,
  dedline,
}) => {
  const dispatch = useDispatch();

  const date = getDate(timeStamp);

  const handleEditItem = () => {};

  const handleDeleteItem = () => {
    console.log(id);

    dispatch(deleteActiveItem({ id }));
    dispatch(addDeletedItem({ id, description, timeStamp, label, dedline }));
  };

  return (
    <li className={styles.item}>
      <div className={styles[listType]}>
        <span className={styles[label]}>{label}</span>
        {listType === 'active' && (
          <>
            <IconButton iconPath={editIcon} alt="edit icon" onClick={handleEditItem} />
            <IconButton iconPath={deleteIcon} alt="delete icon" onClick={handleDeleteItem} />
          </>
        )}
      </div>
      <div className={styles.itemContent}>
        <p className={styles.description}>{description}</p>
        <p>
          Created at: <b>{date}</b>
        </p>
        <p>
          Dedline: <b>{dedline}</b>
        </p>
      </div>
    </li>
  );
};
