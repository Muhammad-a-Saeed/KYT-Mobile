import React from 'react';
import {StyleSheet, Image, Text, View, TouchableOpacity} from 'react-native';
import {
  appIcons,
  colors,
  fontFamily,
  heightPixel,
  widthPixel,
  wp,
} from '../../services';
import {useNavigation} from '@react-navigation/native';
import {responsiveFontSize} from 'react-native-responsive-dimensions';
import { CustomInput } from '../custominput';
const HeadSearchBar = ({title, leftIcon, mainLogo, hintLogo,titleleft,SearchBar}) => {
  const navigation = useNavigation();
  return (
    <View style={[styles.container]}>
     
        <View style={styles.rowCenter}>
          {leftIcon && (
            <TouchableOpacity style={[styles.goBack]}>
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <Image style={styles.iconStyle} source={appIcons.arrowback} />
              </TouchableOpacity>
            </TouchableOpacity>
          )}
        </View>
        <View style={styles.searchbar}>{ SearchBar &&
          <CustomInput
            // onChangeText={text => setEmail(text)}
            placeholder={'Search'}
            leftIcon={appIcons.Search}
            width='80%'
            backgroundColor={colors.greyLight1}
            borderRadius={4}
            height={50}
          />}</View>
       
      </View>
   
  );
};

const styles = StyleSheet.create({
  rowCenter: {
  },
  container: {
    // flex:1,
    height: heightPixel(100),
    width: '100%',
    // backgroundColor:"red",
    // alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection:'row'
    // backgroundColor:'red'
  },
  goBack: {
    height: heightPixel(30),
    width: widthPixel(30),
    backgroundColor: colors.white,
    borderRadius: 100,
    justifyContent: 'center',
    alignContent: 'center',
    marginHorizontal: 15,
    marginTop:20,
    elevation: 1,
    position:'absolute',
  },
  iconStyle: {
    width: widthPixel(25),
    height: widthPixel(25),
    resizeMode: 'contain',
  },
  searchbar:{
  width:'90%',
  marginTop:12,

// position:'absolute',
marginHorizontal:-30, 
},
  logo: {
    alignSelf: 'center',
    width: widthPixel(100),
    height: widthPixel(90),
    marginTop: -15,
    resizeMode: 'contain',
    position:'absolute'
    // backgroundColor:'red'
  },
 
});
export default HeadSearchBar;
