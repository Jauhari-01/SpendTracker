// import { StatusBar } from 'expo-status-bar';
import * as React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NativeBaseProvider } from 'native-base';

// Redux
import { Provider } from 'react-redux';
import store from './src/store';

// components
import HomeScreen from './src/Component/HomeScreen';
import AddTransaction from './src/Component/AddTransaction';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NativeBaseProvider>
      <Provider store={store}>
        <NavigationContainer>

          <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'SPEND TRACKER' }} />
            <Stack.Screen name="Add" component={AddTransaction} options={{ title: 'ADD EXPENSEAdd Expense' }} />
          </Stack.Navigator>

        </NavigationContainer>
      </Provider>
    </NativeBaseProvider>
  );
}

export default App;
