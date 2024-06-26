import { FC, MouseEventHandler, useEffect, useState } from 'react';

import { labels } from '../../constants';
import { Todo, labelsType } from '../../types/todo';

import styles from './Modal.module.css';

interface Props {
  label: labelsType;
  description: string;
  dedline: string;
  onCloseModal: () => void;
  onSaveItem: (data: Omit<Todo, 'id'>) => void;
}

export const ModalContent: FC<Props> = ({
  label,
  description,
  dedline,
  onCloseModal,
  onSaveItem,
}) => {
  const [itemLabel, setItemLabel] = useState(() => label);
  const [text, setText] = useState(description);
  const [itemDedline, setItemDedline] = useState(dedline);
  const [isButtonDisabled, setIsDisabledButton] = useState(true);

  const handleLabelChange: React.ChangeEventHandler<HTMLSelectElement> = e => {
    setItemLabel(labels[e.target.value]);
  };

  const handleTextChange: React.ChangeEventHandler<HTMLTextAreaElement> = e => {
    setText(e.target.value);
  };

  const handleDedlineChange: React.ChangeEventHandler<HTMLInputElement> = e => {
    setItemDedline(e.target.value);
  };

  const handleSaveClick: MouseEventHandler<HTMLButtonElement> = event => {
    const formatedItemDedline = itemDedline.split('-').reverse().join('.');
    onSaveItem({
      description: text,
      timeStamp: Date.now(),
      label: itemLabel,
      dedline: formatedItemDedline,
    });
    onCloseModal();
  };

  const handleFocus: React.FocusEventHandler<HTMLTextAreaElement> = e => {
    e.target.scrollIntoView({ behavior: 'smooth', block: 'center' });
  };

  useEffect(() => {
    if (text.length && itemDedline.length) {
      setIsDisabledButton(false);
    } else {
      setIsDisabledButton(true);
    }
  }, [itemDedline.length, text.length]);

  return (
    <>
      <div className={styles.interactiveElementWrapper}>
        <div className={styles.fieldWrapper}>
          <label htmlFor="label" className={styles.label}>
            To-do label:
          </label>
          <select
            className={styles.interactiveElement}
            value={itemLabel}
            id="label"
            name="label"
            onChange={handleLabelChange}
          >
            <option value={labels.urgent}>Urgent</option>
            <option value={labels.current}>Current</option>
            <option value={labels.later}>Later</option>
          </select>
        </div>
        <div className={styles.fieldWrapper}>
          <label htmlFor="dateInput" className={styles.label}>
            Dedlile:
          </label>
          <input
            className={styles.interactiveElement}
            id="dateInput"
            type="date"
            value={itemDedline}
            min={dedline}
            onChange={handleDedlineChange}
          />
        </div>
      </div>
      <div className={styles.fieldWrapper}>
        <label htmlFor="textArea" className={styles.label}>
          Description:
        </label>
        <textarea
          id="textArea"
          className={styles.textArea}
          placeholder="Enter new todo item..."
          value={text}
          onChange={handleTextChange}
          onFocus={handleFocus}
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
    </>
  );
};
