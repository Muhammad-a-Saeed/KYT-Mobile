import React, {useState} from 'react';
import {View, Text, StatusBar, Image} from 'react-native';
import {appIcons, colors, routes} from '../../../services';
import {Background, Button} from '../../../components';
import {styles} from './styles';
import {CustomInput} from '../../../components/custominput';
import {TouchableOpacity} from 'react-native-gesture-handler';
import GooglePlacesInput from '../../../components/googlePlacesInput';
import {Marker} from 'react-native-maps';
import GoogleMap from '../../../components/googleMap';
const MapScreen = ({navigation}) => {
  const [titleaddres, setTitleAddress] = useState('Fountain Valley');
  const [compaddress, setCompAddress] = useState(
    '2640 Street, Fountain Valley, California, USA',
  );
  const [selectedAddress, setSelectedAddress] = useState('');
  const [showAddressDetails, setShowAddressDetails] = useState(false);

  const handleSelectLocation = (data, details) => {
    setTitleAddress(data.structured_formatting.main_text);
    setCompAddress(details.formatted_address);
  };
  const [markerPosition, setMarkerPosition] = useState({
    latitude: 31.54505,
    longitude: 74.340683,
  });

  const handleDragEnd = e => {
    setMarkerPosition({
      latitude: e.nativeEvent.coordinate.latitude,
      longitude: e.nativeEvent.coordinate.longitude,
    });
  };
  return (
    <View style={[styles.container]}>
      <Background>
        {/* <StatusBar backgroundColor={colors.white} barStyle={'dark-content'} /> */}
        <GoogleMap>
          <Marker
            coordinate={markerPosition}
            handleDragEnd={true}
            draggable={true}
            tracksViewChanges={false}
            style={styles.marker}>
            <View style={styles.marker1}>
              <Image source={appIcons.pin} style={styles.mapMarkerImage} />
            </View>
          </Marker>
        </GoogleMap>
        <GooglePlacesInput
          leftIcon={true}
          SearchBar={true}
          containerStyle={styles.searchInput}
          listViewStyle={styles.searchListView}
          onSelect={handleSelectLocation}
        />
        <View style={styles.maincurrloc}>
          <Image source={appIcons.currloc} style={styles.currloc} />
        </View>
        <View style={styles.overlayContainer}>
          {/* <View> */}
          {!showAddressDetails && (
            <View style={styles.confirmloc}>
              <Text style={styles.confirmtext}>Confirm your Location</Text>

              <View style={styles.line1}></View>
              <View style={styles.pinlocation}>
                <View style={styles.pin}>
                  <Image style={styles.pinstyle} source={appIcons.pin} />
                </View>
                <View style={styles.addresstittle}>
                  <Text style={styles.titladdres}>{titleaddres}</Text>
                  <Text style={styles.compaddress}>{compaddress}</Text>
                </View>
              </View>
              <View style={styles.pv30}>
                <Button onPress={() => setShowAddressDetails(true)}>
                  CONFIRM & ADD DETAILS
                </Button>
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
                  <Text style={styles.text2}>
                    Please Enter Your Complete Address detail
                  </Text>
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
                  onPress={() => setSelectedAddress('home')}>
                  <Image style={styles.homeicon} source={appIcons.homeicon} />
                  <Text style={styles.hometxt}>Home</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[
                    styles.home,
                    selectedAddress === 'office' && styles.selected,
                  ]}
                  onPress={() => setSelectedAddress('office')}>
                  <Image style={styles.homeicon} source={appIcons.officeicon} />
                  <Text style={styles.hometxt}>Office</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[
                    styles.home,
                    selectedAddress === 'other' && styles.selected,
                  ]}
                  onPress={() => setSelectedAddress('other')}>
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
                <Button
                  onPress={() => navigation.navigate(routes.profilesetup)}>
                  SAVE ADDRESS
                </Button>
              </View>
            </View>
          )}
        </View>
      </Background>
    </View>
  );
};

export default MapScreen;
