import React, {useState} from 'react';
import {View} from 'react-native';
import {routes} from '../../../services';
import {
  AddButton,
  AddressCard,
  Background,
  Button,
  Header,
} from '../../../components';
import {styles} from './styles';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

const AddAddress = ({navigation}) => {
  const [showAlert, setShowAlert] = useState(false);

  const handleCloseAlert = () => {
    navigation.navigate(routes.homeScreen);
  };

  const handlePress = () => {};
  return (
    <View style={[styles.container]}>
      <Background>
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
            <Button onPress={() => navigation.navigate(routes.profile)}>
              CONTINUE
            </Button>
          </View>
        </KeyboardAwareScrollView>
      </Background>
    </View>
  );
};

export default AddAddress;
