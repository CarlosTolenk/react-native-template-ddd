import React, {useEffect} from 'react';
import {Button, Text, View} from 'react-native';

import {useHomeViewModel} from './HomeViewModel';

const HomeScreen = () => {
  const {value, getValue, logOut} = useHomeViewModel();

  useEffect(() => {
    getValue();
  }, [getValue]);

  const onHandlerLogOut = () => {
    logOut();
  };

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home {value}</Text>
      <Button title="LogOut" onPress={onHandlerLogOut} />
    </View>
  );
};

export default HomeScreen;
