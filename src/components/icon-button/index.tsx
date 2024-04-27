import { FC } from 'react';

import styles from './IconButton.module.css';

interface Props {
  iconPath: string;
  alt: string;
  onClick: () => void;
}

export const IconButton: FC<Props> = ({ iconPath, alt, onClick }) => {
  return (
    <button className={styles.iconButton} type="button" onClick={onClick}>
      <img src={iconPath} alt={alt} />
    </button>
  );
};
