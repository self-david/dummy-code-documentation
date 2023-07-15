/* eslint-disable header/header */
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

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