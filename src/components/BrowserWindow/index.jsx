// eslint-disable-next-line header/header
import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

export default function BrowserWindow({
  children,
  minHeight = 'auto',
  style,
  bodyStyle,
  title,
}) {
  return (
    <div className={styles.browserWindow} style={{...style, minHeight}}>
      <div className={clsx(styles.browserWindowHeader, 'text--truncate')}>
        {title}
      </div>

      <div className={styles.browserWindowBody} style={bodyStyle}>
        {children}
      </div>
    </div>
  );
}