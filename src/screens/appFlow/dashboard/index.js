import React from 'react'
import { View, Text, StatusBar } from 'react-native'

import { colors } from '../../../services'
import { Header } from '../../../components';
import { styles } from './styles';

const Dashboard = ({ navigation }) => {

  return (
    <View style={[styles.container]} >
      <StatusBar backgroundColor={colors.white} barStyle={'dark-content'} />
      <Header title={'Dashboard'} />
      <View style={[styles.wrapper, { backgroundColor: colors.white }]}>
        <Text style={{ color: colors.black, fontSize: 20 }}>Dashboard Screen</Text>
      </View>
    </View>
  )
}

export default Dashboard