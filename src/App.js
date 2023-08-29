import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Provider as PaperProvider, DefaultTheme } from 'react-native-paper'; // Impor PaperProvider dan DefaultTheme dari React Native Paper
import Routes from './routes/index';

const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: 'blue',
    accent: 'yellow',
  },
};

function App() {
  return (
    <PaperProvider theme={theme}>
      <NavigationContainer>
        <Routes />
      </NavigationContainer>
    </PaperProvider>
  );
}

export default App;
