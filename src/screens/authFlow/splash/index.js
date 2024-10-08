import React, {useEffect, useState} from 'react';
import {View, StatusBar, Image, ImageBackground} from 'react-native';
import {styles} from './styles';
import {appIcons, heightPixel, routes, widthPixel} from '../../../services';
const Splash = ({navigation}) => {
  const [user, setUser] = useState(null);
  useEffect(() => {
    perfomeTimeconsumingTask();
  }, []);
  const perfomeTimeconsumingTask = async () => {
    return new Promise(resolve =>
      setTimeout(() => {
        navigation.replace(user == null ? routes.onboarding : routes.splash);
      }, 3000),
    );
  };
  return (
    <View style={[styles.container]}>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="dark-content"
      />
      <ImageBackground
        source={appIcons.splashbackground}
        style={{
          flex: 1,
          width: widthPixel(450),
          height: '100%',
          position: 'absolute',
        }}
        resizeMode="stretch">
        <View style={styles.splash}>
          <Image source={appIcons.logo} style={{width: widthPixel(220), height: heightPixel(220)}} />
        </View>
      </ImageBackground>
    </View>
  );
};

export default Splash;
