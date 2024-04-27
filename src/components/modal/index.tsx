import { FC, MouseEventHandler, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';

import closeIcon from '../../assets/close.svg';
import { addActiveItem, editActiveItem } from '../../redux/active-todos-slice';
import { labels } from '../../constants';

import { IconButton } from '../icon-button';

import styles from './Modal.module.css';

interface Props {
  // label, desc, dedline
  closeModal: () => void;
}

export const Modal: FC<Props> = ({ closeModal }) => {
  const [isButtonDisabled, setIsDisabledButton] = useState(true);
  const [label, setLabel] = useState(labels.current);
  const [text, setText] = useState('');
  const [dedline, setDedline] = useState('');

  const dispatch = useDispatch();

  const id = uuidv4();

  const handleOverflowClick: MouseEventHandler<HTMLDivElement> = event => {
    const target = event.target as HTMLDivElement;

    if (target.getAttribute('id') === 'overflow') {
      closeModal();
    }
  };

  const handleLabelChange: React.ChangeEventHandler<HTMLSelectElement> = e => {
    setLabel(labels[e.target.value]);
  };

  const handleTextChange: React.ChangeEventHandler<HTMLTextAreaElement> = e => {
    setText(e.target.value);
  };

  const handleDedlineChange: React.ChangeEventHandler<HTMLInputElement> = e => {
    console.log('handleDedlineChange', new Date(e.target.value), Date.now());
    //new Date(e.target.value) < Day.now() --> error
    setDedline(e.target.value);
  };

  const handleSaveClick: MouseEventHandler<HTMLButtonElement> = event => {
    if (text.length && dedline.length) {
      dispatch(addActiveItem({ id, description: text, timeStamp: Date.now(), label, dedline }));
      closeModal();
      return;
    }
  };

  useEffect(() => {
    if (text.length && dedline.length) {
      setIsDisabledButton(false);
    } else {
      setIsDisabledButton(true);
    }
  }, [text.length, dedline.length]);

  return (
    <div id="overflow" className={styles.modal} onClick={handleOverflowClick}>
      <div className={styles.modalContent}>
        <div className={styles.buttonWrapper}>
          <IconButton iconPath={closeIcon} alt="close icon" onClick={closeModal} />
        </div>
        <div className={styles.fieldWrapper}>
          <label htmlFor="label" className={styles.label}>
            Todo label:
          </label>
          <select value={label} id="label" name="label" onChange={handleLabelChange}>
            <option value={labels.urgent}>Urgent</option>
            <option value={labels.current}>Current</option>
            <option value={labels.later}>Later</option>
            <option value={labels.deleted} disabled>
              Deleted
            </option>
          </select>
        </div>
        <div className={styles.fieldWrapper}>
          <label htmlFor="textinput" className={styles.label}>
            Dedlile:
          </label>
          <input id="textInput" type="date" value={dedline} onChange={handleDedlineChange} />
        </div>
        <div className={`${styles.fieldWrapper} ${styles.textAreaWrapper}`}>
          <label htmlFor="textArea" className={styles.label}>
            Todo description:
          </label>
          <textarea
            id="textArea"
            className={styles.textArea}
            placeholder="Enter new todo item..."
            value={text}
            onChange={handleTextChange}
          />
        </div>
        <button
          className={styles.button}
          type="button"
          disabled={isButtonDisabled}
          onClick={handleSaveClick}
        >
          Save
        </button>
      </div>
    </div>
  );
};
