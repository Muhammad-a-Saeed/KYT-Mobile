import React from 'react';
import {View, Text, StatusBar} from 'react-native';
import {appIcons, colors} from '../../../services';
import {Appicon, Header} from '../../../components';
import {styles} from './styles';

const AppIcon = ({navigation}) => {
  return (
    <View style={[styles.container]}>
      <StatusBar backgroundColor={colors.white} barStyle={'dark-content'} />
      <Header leftIcon={true} titleleft={'App Icon'} />
      <View style={styles.wrapper}>
        <Appicon icon={appIcons.appicon1} />
        <Appicon icon={appIcons.appicon2} />
        <Appicon icon={appIcons.appicon3} />
        <Appicon icon={appIcons.appicon4} />
        <Appicon icon={appIcons.appicon5} />
        <Appicon icon={appIcons.appicon6} />
        <Appicon icon={appIcons.appicon7} />
        <Appicon icon={appIcons.appicon8} />
        <Appicon icon={appIcons.appicon9} />
        <Appicon icon={appIcons.appicon10} />
        <Appicon icon={appIcons.appicon11} />
        <Appicon icon={appIcons.appicon12} />
      </View>
    </View>
  );
};

export default AppIcon;
