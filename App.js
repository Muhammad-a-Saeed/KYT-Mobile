import React from 'react';
import {MainNavigator} from './src/services/navigation';
import {Platform, SafeAreaView, Text, View} from 'react-native';
import { Provider } from 'react-redux';
import { store } from './src/redux/store';
const App = () => {

  const Wrapper = Platform.OS === "ios" ? View : SafeAreaView
  return (
      <Wrapper style={{flex: 1}}>
        <Provider store={store}>
        <MainNavigator />
        </Provider>
      </Wrapper>
  );
};

export default App;