import 'react-native-gesture-handler';
import React from 'react';
import Navigation from './navigation/Navigation';

declare const global: {HermesInternal: null | {}};

const App = () => {
  return (
    <>
      <Navigation />
    </>
  );
};

export default App;
