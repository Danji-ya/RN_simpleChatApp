import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import { LoginScreen, ChatScreen } from './screens';


const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator        
        screenOptions={{
          headerShown: false
        }}
        initialRouteName={"Login"}
      >
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Chat" component={ChatScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;