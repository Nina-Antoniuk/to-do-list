import { FC, useState } from 'react';
import { createPortal } from 'react-dom';
import { useDispatch } from 'react-redux';

import { Todo, TodoListType } from '../../types/todo';
import { Modal, ModalContent } from '../modal';
import { IconButton } from '../icon-button';
import { deleteActiveItem, editActiveItem } from '../../redux/active-todos-slice';
import { addDeletedItem } from '../../redux/deleted-todos-slice';
import { getDateFromTimestamp } from '../../utils/getDateFromTimestamp';
import deleteIcon from '../../assets/delete.svg';
import editIcon from '../../assets/edit.svg';

import styles from './TodoItem.module.css';

export const TodoItem: FC<Todo & { listType: TodoListType }> = ({
  id,
  description,
  timeStamp,
  label,
  listType,
  dedline,
}) => {
  const [isPortalShown, setIsPortalShown] = useState(false);

  const dispatch = useDispatch();

  const date = getDateFromTimestamp(timeStamp);

  const handleEditItem = () => {
    setIsPortalShown(true);
  };

  const handleDeleteItem = () => {
    dispatch(deleteActiveItem({ id }));
    dispatch(addDeletedItem({ id, description, timeStamp, label, dedline }));
  };

  const handleButtonClick = () => {
    setIsPortalShown(state => !state);
  };

  const handleSave = (data: Omit<Todo, 'id'>) => {
    dispatch(editActiveItem({ ...data, id }));
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
      {isPortalShown &&
        createPortal(
          <Modal onCloseModal={handleButtonClick}>
            <ModalContent
              description={description}
              dedline={dedline.split('.').reverse().join('-')}
              label={label}
              onCloseModal={handleButtonClick}
              onSaveItem={handleSave}
            />
          </Modal>,
          document.body
        )}
    </li>
  );
};
