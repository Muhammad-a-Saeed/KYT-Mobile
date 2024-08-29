import React, { useState } from 'react';
import {View, Text, StatusBar, Image} from 'react-native';

import {appIcons, colors, routes} from '../../../services';
import {Button } from '../../../components';
import {styles} from './styles';
import { CustomInput } from '../../../components/custominput';
import { TouchableOpacity } from 'react-native-gesture-handler';
import GooglePlacesInput from '../../../components/googlePlacesInput';

const MapScreen = ({navigation}) => {
     const [selectedAddress, setSelectedAddress] = useState('');
     const [showAddressDetails, setShowAddressDetails] = useState(false);

  return (
    <View style={[styles.container]}>
      <StatusBar backgroundColor={colors.white} barStyle={'dark-content'} />
      
      <GooglePlacesInput containerStyle={styles.searchInput} listViewStyle={styles.searchListView}  renderLeftButton={() => (
          <TouchableOpacity onPress={() => navigation.navigate()}>
            <Image style={styles.goback} source={appIcons.goback} />
          </TouchableOpacity>
        )}/>   
         <View>
      {!showAddressDetails && (
      <View style={styles.confirmloc}>
        
          <Text style={styles.confirmtext}>Confirm your Location</Text>
       
        <View style={styles.line1}></View>
        <View style={styles.pinlocation}>
          <View style={styles.pin}>
            <Image style={styles.pinstyle} source={appIcons.pin} />
          </View>
          <View style={styles.addresstittle}>
            <Text style={styles.titladdres}>Fountain Valley</Text>
            <Text style={styles.compaddress}>
              2640 Street, Fountain Valley, California, USA 
            </Text>
          </View>
        </View>
        <View style={styles.pv30}>
          <Button onPress={() => setShowAddressDetails(true)}>CONFIRM & ADD DETAILS</Button>
        </View>
      </View>
      )}
      {showAddressDetails && (
      <View style={styles.addressdetail}>
        <View style={styles.maintxt}>
            <View>
        <Text style={styles.text1}>Address Details</Text>
        </View>
        <View>
        <Text style={styles.text2}>Please Enter Your Complete Address detail</Text>
        </View>
        </View>
      <View style={styles.line1}></View>
      <Text style={styles.addrestypetxt}>Select Address Type</Text>
      <View style={styles.selectadress}>
      <TouchableOpacity
        style={[
          styles.home,
          selectedAddress === 'home' && styles.selected,
        ]}
        onPress={() => setSelectedAddress('home')}
      >
          <Image style={styles.homeicon} source={appIcons.homeicon} />
          <Text style={styles.hometxt}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity
        style={[
          styles.home,
          selectedAddress === 'office' && styles.selected,
        ]}
        onPress={() => setSelectedAddress('office')}
      >
          <Image style={styles.homeicon} source={appIcons.officeicon} />
          <Text style={styles.hometxt}>Office</Text>
        </TouchableOpacity>
        <TouchableOpacity
        style={[
          styles.home,
          selectedAddress === 'other' && styles.selected,
        ]}
        onPress={() => setSelectedAddress('other')}
      >
          <Image style={styles.homeicon} source={appIcons.location} />
          <Text style={styles.hometxt}>Other</Text>
        </TouchableOpacity>
        
      </View>
      <View style={styles.input}>
      <CustomInput
              placeholder={'Address'}
              leftIcon={appIcons.location}
            //   width='95%'
              borderColor={colors.grey}              
            
            />
      </View>
      <View style={styles.pv31}>
          <Button onPress={() => navigation.navigate(routes.profilesetup)}>SAVE ADDRESS</Button>
        </View>
     
    </View>
      )}
      </View>
    </View>
  );
};

export default MapScreen;
