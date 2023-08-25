import React from 'react';
import {Dimensions, View} from 'react-native';
import {Provider} from 'react-redux';

import {store} from './store';
import {AppRouter} from './router';

import {container} from './container/ioc';
import {ProviderInversify} from './container/iocProvider';

const AppConfig = () => {
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;

  return (
    <ProviderInversify container={container}>
      <Provider store={store}>
        <View style={{height: windowHeight, width: windowWidth}}>
          <AppRouter />
        </View>
      </Provider>
    </ProviderInversify>
  );
};

export default AppConfig;
