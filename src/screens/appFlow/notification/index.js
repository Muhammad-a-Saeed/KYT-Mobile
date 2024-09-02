import React from 'react'
import { View, Text, StatusBar } from 'react-native'

import { colors } from '../../../services'
import { Header } from '../../../components';
import { styles } from './styles';

const Notification = ({ navigation }) => {
    return (
        <View style={[styles.container]} >
            <StatusBar backgroundColor={colors.white} barStyle={'dark-content'} />
            <Header title={'Notification'} />
            <View style={[styles.wrapper, { backgroundColor: colors.white }]}>
                <Text style={{ color: colors.black, fontSize: 20 }}>Notification Screen</Text>
            </View>
        </View>
    )
}

export default Notification