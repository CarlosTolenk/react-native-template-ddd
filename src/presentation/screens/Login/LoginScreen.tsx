import React from 'react';
import {Button, Text, View} from 'react-native';
import {useLoginViewModel} from './LoginViewModel';

const LoginScreen = () => {
  const {login} = useLoginViewModel();

  const onHandlerLogIn = () => {
    login('carlos', 'password');
  };

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Login</Text>
      <Button title="LogIn" onPress={onHandlerLogIn} />
    </View>
  );
};

export default LoginScreen;
