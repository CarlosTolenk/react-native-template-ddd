import React from 'react';
import {Button, Text, View, TextInput} from 'react-native';
import {Formik} from 'formik';
import {useLoginViewModel} from './LoginViewModel';

type ILogin = {
  email: string;
  password: string;
};

const LoginScreen = () => {
  const {login} = useLoginViewModel();

  const onHandlerLogIn = (value: ILogin) => {
    console.log(value);
    login('carlos', 'password');
  };

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Login</Text>
      <Formik
        initialValues={{email: '', password: ''}}
        onSubmit={values => onHandlerLogIn(values as ILogin)}>
        {({handleChange, handleBlur, handleSubmit, values}) => (
          <View>
            <TextInput
              onChangeText={handleChange('email')}
              onBlur={handleBlur('email')}
              value={values.email}
            />
            <Button onPress={() => handleSubmit()} title="Submit" />
          </View>
        )}
      </Formik>
    </View>
  );
};

export default LoginScreen;
