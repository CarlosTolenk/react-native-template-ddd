import React from 'react';
import {Button, Text, View} from 'react-native';

import {useHomeViewModel} from './HomeViewModel';

const HomeScreen = () => {
  const {logOut} = useHomeViewModel();

  const onHandlerLogOut = () => {
    logOut();
  };

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home</Text>
      <Button title="LogOut" onPress={onHandlerLogOut} />
    </View>
  );
};

export default HomeScreen;
