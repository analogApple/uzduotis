import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import IterativeScreen from '../screens/iterative/IterativeScreen';
import RecursiveScreen from '../screens/recursive/RecursiveScreen';

import {ENavKeys} from '../types/enums/ENavKeys';

const Stack = createStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={ENavKeys.Iterative}>
        <Stack.Screen name={ENavKeys.Recursive} component={RecursiveScreen} />
        <Stack.Screen name={ENavKeys.Iterative} component={IterativeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
