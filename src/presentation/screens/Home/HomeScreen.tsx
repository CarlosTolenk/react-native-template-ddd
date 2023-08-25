import React, {useEffect} from 'react';
import {Text, View} from 'react-native';

import {useHomeViewModel} from './HomeViewModel';

const HomeScreen = () => {
  const {value, getValue} = useHomeViewModel();

  useEffect(() => {
    getValue();
  }, [getValue]);

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home {value}</Text>
    </View>
  );
};

export default HomeScreen;
