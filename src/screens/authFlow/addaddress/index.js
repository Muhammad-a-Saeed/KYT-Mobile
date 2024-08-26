import React from 'react'
import { View, Text, StatusBar, Image } from 'react-native'

import { appIcons, colors, routes } from '../../../services'
import { AddButton, AddressCard, Button, Header } from '../../../components';
import { styles } from './styles';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const AddAddress = ({ navigation }) => {
    const handlePress = () => {
      };
    return (
        <View style={[styles.container]} >
            <StatusBar backgroundColor={colors.white} barStyle={'dark-content'} />
            <Header leftIcon={true} titleleft={'Select Address'} />
            <KeyboardAwareScrollView
        keyboardShouldPersistTaps="always"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.fg1}>
            <View style={styles.wrapper}>
                <View style={styles.pv30}>
          <AddButton onPress={() => navigation.navigate(routes.mapscreen)}>Add New Address</AddButton>
          <View style={styles.addrescard}>
          <AddressCard
          Addresstype="Home"
        Address="6103, Park Way, California, United State America" 
        onPress={handlePress} 
      />
       <AddressCard
          Addresstype="Office"
        Address="6103, Park Way, California, United State America" 
        onPress={handlePress} 
      />
          </View>
        </View>
        </View>
        <View style={styles.pv30}>
          <Button onPress={() =>navigation.navigate()}>CONTINUE</Button>
        </View>
        </KeyboardAwareScrollView>
            </View>
    )
}

export default AddAddress