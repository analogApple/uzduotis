import 'react-native-gesture-handler';
import React from 'react';
import {ThemeProvider} from 'styled-components';
import {defaultTheme} from './theme/theme';
import Navigation from './navigation/Navigation';

declare const global: {HermesInternal: null | {}};

const App = () => {
  return (
    <>
      <ThemeProvider theme={defaultTheme}>
        <Navigation />
      </ThemeProvider>
    </>
  );
};

export default App;
