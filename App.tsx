import React from 'react';

import {ThemeProvider} from '@shopify/restyle';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import {Router} from './src/routes/Routes';
import {LoginScreen} from './src/screens/auth/LoginScreen/LoginScreen';
import {SignUpScreen} from './src/screens/auth/SignUpScreen/SignUpScreen';
import {theme} from './src/theme/theme';

function App(): React.JSX.Element {
  return (
    <SafeAreaProvider>
      <ThemeProvider theme={theme}>
        <Router />
      </ThemeProvider>
    </SafeAreaProvider>
  );
}

export default App;
