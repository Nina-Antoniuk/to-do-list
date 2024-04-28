import { FC } from 'react';

import { labelsType } from '../../types/todo';

import styles from './Select.module.css';

interface Props {
  label: labelsType;
  labels: labelsType[];
  onChangeLabel: (label: labelsType) => void;
}

export const Select: FC<Props> = ({ labels, label, onChangeLabel }) => {
  const handleLabelChange: React.ChangeEventHandler<HTMLSelectElement> = e => {
    onChangeLabel(e.target.value as labelsType);
  };

  return (
    <select
      className={styles.select}
      value={label}
      id="label"
      name="label"
      onChange={handleLabelChange}
    >
      {labels.map(item => (
        <option value={item}>{item}</option>
      ))}
    </select>
  );
};
