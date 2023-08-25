import React from 'react';
import {Text, View} from 'react-native';

import {IHttpClient} from '../../../modules/shared/domain/HttpClient';
import {useInjection} from '../../../container/iocProvider';

const HomeScreen = () => {
  const httpClient = useInjection<IHttpClient>('IHttpClient');

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home Screen {httpClient.get()}</Text>
    </View>
  );
};

export default HomeScreen;
