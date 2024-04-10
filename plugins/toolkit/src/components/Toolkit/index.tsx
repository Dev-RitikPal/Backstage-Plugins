import React from 'react';
import { store } from '../../redux/store';
import { Provider } from 'react-redux';
import Toolkit from './Toolkit';
const MainToolkit = () => {
  return (
    <Provider store={store}>
      <Toolkit mode="read" />
    </Provider>
  );
};

export default MainToolkit;
