import React from 'react';
import {StyleSheet, Image, View, TouchableOpacity} from 'react-native';
import {
  appIcons,
  colors,
  fontFamily,
  heightPixel,
  widthPixel,
} from '../../services';
import {useNavigation} from '@react-navigation/native';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
const GooglePlacesInput = ({
  leftIcon,
  SearchBar,
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
  const navigation = useNavigation();
  return (
    <View style={[styles.container]}>
      <View style={styles.rowCenter}>
        {leftIcon && (
          <TouchableOpacity
            style={[styles.goBack]}
            onPress={() => navigation.goBack()}>
            <Image style={styles.goBack1} source={appIcons.arrowback} />
          </TouchableOpacity>
        )}
      </View>
      <View style={styles.searchbar}>
        {SearchBar && (
          <GooglePlacesAutocomplete
            nearbyPlacesAPI="GooglePlacesSearch"
            renderLeftButton={() => (
              <Image
                style={styles.iconStyle}
                source={appIcons.Search}
                width={2}
                height={52}
                backgroundColor={'reds'}
              />
            )}
            renderDescription={row =>
              row.description || row.formatted_address || row.name
            }
            keepResultsAfterBlur={false}
            listViewDisplayed={false}
            enablePoweredByContainer={false}
            isRowScrollable={true}
            //  currentLocation={true}
            //  currentLocationLabel="Current location"
            onFail={error => console.error(error)}
            placeholder={'Search'}
            textInputProps={{
              style: styles.textInput,
              selectionColor: colors.primary,
              placeholderTextColor: colors.grey,
              ...textInputProps,
            }}
            fetchDetails={true}
            GooglePlacesSearchQuery={{
              rankby: 'distance',
            }}
            onPress={(data, details = null) => onSelect?.(data, details)}
            query={{
              key: 'AIzaSyCmRaX3vJGZCta7rkszYLPV3xYAkhlYa3Y',
              location: `${region.latitude}, ${region.longitude}`,
            }}
            styles={{
              container: [styles.container1, containerStyle],
              textInput: styles.textInput,
              textInputContainer: styles.textInputContainer,
              listView: [styles.listView, listViewStyle],
              row: {},
              description: styles.listDescription,
            }}
            {...otherProps}
          />
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex:1,
    height: heightPixel(70),
    width: '100%',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  goBack: {
    height: heightPixel(30),
    width: widthPixel(30),
    backgroundColor: colors.white,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 15,
    top: 17,
    position: 'absolute',
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.15,
    shadowRadius: 1.0,
    elevation: 1,
  },
  goBack1: {
    width: widthPixel(25),
    height: widthPixel(25),
    resizeMode: 'contain',
  },
  iconStyle: {
    width: widthPixel(25),
    height: widthPixel(25),
    resizeMode: 'contain',
  },

  searchbar: {
    marginHorizontal: -20,
  },
  container1: {zIndex: 1},
  listView: {
    width: '95%',
    backgroundColor: colors.white,
    overflow: 'hidden',
    paddingRight: 10,
    shadowColor: colors.black,
    elevation: 1,
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  textInputContainer: {alignItems: 'center', height: 50},
  textInput: {
    width: '95%',
    paddingLeft: 40,
    backgroundColor: colors.grey2,
    borderWidth: 1,
    borderRadius: 14,
    borderBottomWidth: 1,
    borderBottomColor: colors.theme,
    borderRightColor: colors.grey2,
    borderLeftColor: colors.grey2,
    borderTopColor: colors.grey2,
    marginBottom: 0,
    fontFamily: fontFamily.appTextRegular,
    color: colors.black,
  },
  iconStyle: {
    position: 'absolute',
    zIndex: 2,
    marginLeft: 10,
    width: widthPixel(20),
    height: heightPixel(20),
    justifyContent: 'center',
    alignItems: 'center',
  },
  listDescription: {color: colors.black, fontFamily: fontFamily.regular},
});
export default GooglePlacesInput;
