import React, {useEffect} from 'react';
import {Dimensions, View} from 'react-native';
import {Provider} from 'react-redux';

import {store} from './store';
import {AppRouter} from './router';

const AppConfig = () => {
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;
  useEffect(() => {}, []);

  return (
    <Provider store={store}>
      <View style={{height: windowHeight, width: windowWidth}}>
        <AppRouter />
      </View>
    </Provider>
  );
};

export default AppConfig;
