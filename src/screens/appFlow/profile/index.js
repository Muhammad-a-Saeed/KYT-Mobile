import React from 'react'
import { View, Text, StatusBar } from 'react-native'

import { colors } from '../../../services'
import { Header } from '../../../components';
import { styles } from './styles';

const Profile = ({ navigation }) => {

    return (
        <View style={[styles.container]} >
            <StatusBar backgroundColor={colors.white} barStyle={'dark-content'} />
            <Header title={'Profile'} />
            <View style={[styles.wrapper, { backgroundColor: colors.white }]}>
                <Text style={{ color: colors.black, fontSize: 20 }}>Profile Screen</Text>
            </View>
        </View>
    )
}

export default Profile