import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer, NavigationProp} from '@react-navigation/native';
import {HomeScreen} from '../../presentation/screens/Home';
import {HOME, ScreenNames} from './routesPage';
import {Text, View} from 'react-native';

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

    // <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
    //   <Text>Home Screen</Text>
    // </View>
  );
};

export default AppRouter;
