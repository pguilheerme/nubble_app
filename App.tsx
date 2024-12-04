import React from 'react';
import {SafeAreaView, View} from 'react-native';
import {Text} from './src/components/Text/Text';
import {ThemeProvider} from '@shopify/restyle';
import {theme} from './src/theme/theme';
import {Button} from './src/components/Button/Button';
import {Icon} from './src/components/Icon/Icon';
import {Box} from './src/components/Box/Box';
import {TextInput} from './src/components/TextInput/TextInput';
import {LoginScreen} from './src/screens/auth/LoginScreen/LoginScreen';

function App(): React.JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <LoginScreen />
    </ThemeProvider>
  );
}

export default App;
