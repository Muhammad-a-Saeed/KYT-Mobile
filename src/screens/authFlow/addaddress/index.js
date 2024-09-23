import React, {useState} from 'react';
import {View, Text, StatusBar, Image} from 'react-native';

import {appIcons, colors, routes} from '../../../services';
import {
  AddButton,
  AddressCard,
  Alert,
  Background,
  Button,
  Header,
} from '../../../components';
import {styles} from './styles';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

const AddAddress = ({navigation}) => {
  const [showAlert, setShowAlert] = useState(false);

  const handleCloseAlert = () => {
    setShowAlert(false);
    navigation.navigate(routes.homeScreen);
  };

  const handlePress = () => {};
  return (
    <View style={[styles.container]}>
      <Background>
        {/* <StatusBar backgroundColor={colors.white} barStyle={'dark-content'} /> */}
        <Header leftIcon={true} titleleft={'Select Address'} />
        <KeyboardAwareScrollView
          keyboardShouldPersistTaps="always"
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.fg1}>
          <View style={styles.wrapper}>
            <View style={styles.pv30}>
              <AddButton onPress={() => navigation.navigate(routes.mapscreen)}>
                Add New Address
              </AddButton>
              <View style={styles.addrescard}>
                <AddressCard
                  Addresstype="Home"
                  Address="6103, Park Way, California, United State America."
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
            <Button onPress={() => setShowAlert(true)}>CONTINUE</Button>
          </View>
          <View style={styles.alertcontainer}>
            <Alert
              visible={showAlert}
              leftIcon={true}
              onClose={handleCloseAlert}
              title="Your Profile has been updated successfully"
              onPress={() => {
                navigation.navigate(routes.homeScreen);
              }}
            />
          </View>
        </KeyboardAwareScrollView>
      </Background>
    </View>
  );
};

export default AddAddress;
