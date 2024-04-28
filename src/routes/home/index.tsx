import { FC, useState } from 'react';
import { createPortal } from 'react-dom';
import { useSelector } from 'react-redux';

import { TodoList } from '../../components/todo-list';
import { Modal } from '../../components/modal';
import { RootState } from '../../redux/store';

import styles from './Home.module.css';

export const Home: FC = () => {
  const activeTodos = useSelector((state: RootState) => state.activeTodos);

  const [isPortalShown, setIsPortalShown] = useState(false);

  const handleButtonClick = () => {
    setIsPortalShown(state => !state);
  };

  return (
    <div className="container">
      <h1 className="title">Todo list</h1>
      <TodoList list={activeTodos} listType={'active'} />
      <div className={styles.buttonWrapper}>
        <button type="button" className={styles.button} onClick={handleButtonClick}>
          Add item
        </button>
      </div>
      {isPortalShown && createPortal(<Modal closeModal={handleButtonClick} />, document.body)}
    </div>
  );
};
