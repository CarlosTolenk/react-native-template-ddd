import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer, NavigationProp} from '@react-navigation/native';

import {HOME, ScreenNames} from './routesPage';

// Screens
import {HomeScreen} from '../presentation/screens/Home';

export type RootStackParamList = Record<ScreenNames[number], undefined>;
export type StackNavigation = NavigationProp<RootStackParamList>;
const Stack = createNativeStackNavigator<RootStackParamList>();

const AppRouter = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name={HOME}
          component={HomeScreen}
          options={{headerShown: false, navigationBarHidden: true}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppRouter;
