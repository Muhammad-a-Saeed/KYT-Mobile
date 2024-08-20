import React, {useEffect, useState} from 'react';
import {View, StatusBar, Image, ImageBackground} from 'react-native';
import {styles} from './styles';
import { appIcons, routes} from '../../../services';
const Splash = ({navigation}) => {
  const [user, setUser] = useState(null);
  useEffect(() => {
    perfomeTimeconsumingTask();
  }, []);
  const perfomeTimeconsumingTask = async () => {
    return new Promise(resolve =>
      setTimeout(() => {
        navigation.navigate(user == null ? routes.onboarding : routes.splash);
      }, 3000),
    );
  };
  return (
    <View style={[styles.container]}>
      <ImageBackground
      source={appIcons.image}
      style={{width: 430, height:932,position:'absolute'}}>
       <StatusBar translucent backgroundColor="transparent"  barStyle="dark-content"/> 
       </ImageBackground>
      <Image
        source={appIcons.splash}
        style={{width: 220, height:220, alignItems:'center',justifyContent:'center'}}
      />
    </View>
  );
};

export default Splash;
