import React from 'react'
import { View, Text, StatusBar, Image } from 'react-native'

import { appIcons, colors, routes } from '../../../services'
import { AddButton, AddressCard, Button, Header } from '../../../components';
import { styles } from './styles';

const MapScreen = ({ navigation }) => {
    const handlePress = () => {
      };
    return (
        <View style={[styles.container]} >
            <StatusBar backgroundColor={colors.white} barStyle={'dark-content'} />
            <Header leftIcon={true} titleleft={'Select Address'} />
            <View style={styles.wrapper}>
               
        </View>
            </View>
    )
}

export default MapScreen