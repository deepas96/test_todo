import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';
import List from './screens/List';
import AddTodo from './screens/AddTodo';

const Stack = createStackNavigator();


function Routes() {
    return (
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
          }}
        >
          <Stack.Screen name="TODO" component={List} />
          <Stack.Screen name="AddTodo" component={AddTodo} />
          {/* <Stack.Screen name="Signup" component={Signup} />
          <Stack.Screen name="Home" component={Tabbar} /> */}
  
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
  
  export default Routes;
  