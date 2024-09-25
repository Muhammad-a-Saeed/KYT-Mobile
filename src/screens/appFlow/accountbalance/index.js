import React from 'react';
import {View, Text, StatusBar, Image} from 'react-native';
import {appIcons, colors} from '../../../services';
import {Header} from '../../../components';
import {styles} from './styles';

const AccountBalance = ({navigation}) => {
  return (
    <View style={[styles.container]}>
      <StatusBar backgroundColor={colors.white} barStyle={'dark-content'} />
      <Header leftIcon={true} titleleft={'Account balance'} />
      <View style={styles.wrapper}>
        <View style={styles.imageContainer}>
          <Image source={appIcons.circle} style={styles.circle} />
          <Text style={styles.balanceText}>$500</Text>
        </View>
      </View>
    </View>
  );
};

export default AccountBalance;
