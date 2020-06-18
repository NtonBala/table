import React from 'react';

import { ComponentToPrint } from '../components';

import styles from './index.module.scss';
import data from '../helpers/data.json';

const App = () => {
  return (
    <div className={styles.app}>
      <ComponentToPrint data={data} />
    </div>
  );
}

export default App;
