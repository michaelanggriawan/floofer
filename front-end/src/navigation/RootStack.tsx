import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { RootParamList } from '../types/Navigation';
import Home from '../screens/Home';

let Stack = createStackNavigator<RootParamList>();

export default function RootStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
}
