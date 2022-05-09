import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Redux
import { Provider } from 'react-redux';
import store from './src/store';

// components
import HomeScreen from './src/Component/HomeScreen';
import AddTransaction from './src/Component/AddTransaction';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>

        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Spend Tracker' }} />
          <Stack.Screen name="Add" component={AddTransaction} options={{ title: 'Add Expense' }} />
        </Stack.Navigator>

      </NavigationContainer>
    </Provider>
  );
}

export default App;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
