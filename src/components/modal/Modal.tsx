import { FC, MouseEventHandler, ReactNode } from 'react';

import closeIcon from '../../assets/close.svg';

import { IconButton } from '../icon-button';

import styles from './Modal.module.css';

interface Props {
  children: ReactNode;
  onCloseModal: () => void;
}

export const Modal: FC<Props> = ({ children, onCloseModal }) => {
  const handleOverflowClick: MouseEventHandler<HTMLDivElement> = event => {
    const target = event.target as HTMLDivElement;

    if (target.getAttribute('id') === 'overflow') {
      onCloseModal();
    }
  };

  return (
    <div id="overflow" className={styles.modal} onClick={handleOverflowClick}>
      <div className={styles.modalContent}>
        <div className={styles.buttonWrapper}>
          <IconButton iconPath={closeIcon} alt="close icon" onClick={onCloseModal} />
        </div>
        {children}
      </div>
    </div>
  );
};
