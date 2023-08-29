import React, {useState} from 'react';
import {Button, Text, View, StyleSheet} from 'react-native';

import {Button as Buttton, Overlay, Icon} from '@rneui/themed';

import {useHomeViewModel} from './HomeViewModel';

const HomeScreen = () => {
  const {logOut} = useHomeViewModel();
  const [visible, setVisible] = useState(false);

  const toggleOverlay = () => {
    setVisible(!visible);
  };

  const onHandlerLogOut = () => {
    logOut();
  };

  return (
    <View>
      <Buttton
        title="Open Overlay"
        onPress={toggleOverlay}
        buttonStyle={styles.button}
      />
      <Button title="LogOut" onPress={onHandlerLogOut} />
      <Overlay isVisible={visible} onBackdropPress={toggleOverlay}>
        <Text style={styles.textPrimary}>Hello!</Text>
        <Text style={styles.textSecondary}>
          Welcome to React Native Elements
        </Text>
        <Buttton
          icon={
            <Icon
              name="wrench"
              type="font-awesome"
              color="white"
              size={25}
              iconStyle={{marginRight: 10}}
            />
          }
          title="Start Building"
          onPress={toggleOverlay}
        />
      </Overlay>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    margin: 10,
  },
  textPrimary: {
    marginVertical: 20,
    textAlign: 'center',
    fontSize: 20,
  },
  textSecondary: {
    marginBottom: 10,
    textAlign: 'center',
    fontSize: 17,
  },
});

export default HomeScreen;
