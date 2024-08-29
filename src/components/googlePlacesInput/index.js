import React from 'react';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import {Image, StyleSheet, View} from 'react-native';
import { appIcons, colors, fontFamily, heightPixel, widthPixel } from '../../services';

const GooglePlacesInput = ({
  onSelect,
  region = {
    latitude: 48.85552283403529,
    longitude: 2.37035159021616,
    latitudeDelta: 5,
    longitudeDelta: 5,
  },
  textInputProps,
  TextInputComp,
  containerStyle,
  listViewStyle,
  ...otherProps
}) => {
  return (
    <GooglePlacesAutocomplete
      nearbyPlacesAPI="GooglePlacesSearch"
      renderLeftButton={() => ( <Image style={styles.iconStyle} source={appIcons.Search}/>)}
      renderDescription={row => row.description || row.formatted_address || row.name}
      keepResultsAfterBlur={false}
      listViewDisplayed={false}
      enablePoweredByContainer={false}
      isRowScrollable={true}
      // currentLocation={true}
      // currentLocationLabel="Current location"
      onFail={error => console.error(error)}
      placeholder={'Search'}
      textInputProps={{
        style: styles.textInput,
        selectionColor: colors.primary,
        placeholderTextColor: colors.textGray,
        ...textInputProps,
      }}
      fetchDetails={true}
      GooglePlacesSearchQuery={{
        rankby: 'distance',
      }}
      onPress={(data, details = null) => onSelect?.(data, details)}
      query={{
        key: 'AIzaSyD_D3iEbMUxwJJR9s6wZPAQ_nNGVN9tncs',
        location: `${region.latitude}, ${region.longitude}`,
      }}
      styles={{
        container: [styles.container, containerStyle],
        // textInput: styles.textInput,
        textInputContainer: styles.textInputContainer,
        listView: [styles.listView, listViewStyle],
        row: {},
        description: styles.listDescription,
      }}
      {...otherProps}
    />
  );
};

const styles = StyleSheet.create({
  container: {zIndex: 1},
  listView: {
    backgroundColor: colors.white,
    overflow: 'hidden',
    paddingRight: 10,
    shadowColor: colors.black,
    elevation: 1,
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  textInputContainer: {alignItems: 'center', height: 50,},
  textInput: {
    width: '90%',
    paddingLeft: 40,
    backgroundColor: colors.grey2,
    borderWidth: 1,
    borderRadius: 14,
    borderBottomWidth:1,
    borderBottomColor:colors.theme,borderRightColor:colors.grey2,borderLeftColor:colors.grey2,borderTopColor:colors.grey2,
    // borderColor: colors.grey2,
    marginBottom: 0,
    fontFamily: fontFamily.appTextRegular,
    color: colors.black,
  },
  // searchmain:{justifyContent:'center',alignItems:'center'},
  iconStyle: {position: 'absolute', zIndex: 2, marginLeft: 10,width:widthPixel(20),height:heightPixel(20),justifyContent:'center',alignItems:'center'},
  listDescription: {color: colors.black, fontFamily: fontFamily.regular},
  
  
});

export default GooglePlacesInput;
