import React, { useState } from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import {appIcons, colors, fontFamily, heightPixel, widthPixel,} from '../../services';
import LinearGradient from 'react-native-linear-gradient';
const AddressCard = props => {
  const {Address,Addresstype, onPress} = props;
  const [isMarked, setIsMarked] = useState(false);

  const handleMark = () => {
    setIsMarked(!isMarked);
  };
  return (
<View Styel={styles.topcontainer}>
            <View style={[styles.maincard, isMarked && styles.markedCard]}>
                <View style={styles.innercard}>
                    <View style={styles.stylesinnercard1}>
                    <Image source={appIcons.homeicon} style={styles.homeicon}/>
                    <Text style={styles.hometext}>{Addresstype}</Text>
                    </View>
                    <View style={styles.stylesinnercard2}>
                    <TouchableOpacity onPress={handleMark}>
            <Image
              source={
                isMarked
                  ? appIcons.tickrectangle
                  : appIcons.rectangle
              }
              style={styles.rectangle}
            />
          </TouchableOpacity>
                    </View>
                </View>
                <View>
                <Text style={styles.addresstext}>{Address}</Text>
                </View>

                <TouchableOpacity onPress={onPress}>
                <Text style={styles.viewtext}>view on map</Text>
                </TouchableOpacity>               
            </View>
          </View>
      
  );
};
const styles = StyleSheet.create({
  topcontainer:{
 
  },
  maincard: {
    width: widthPixel(350),
    height: heightPixel(150),
    borderWidth: 1,
    borderColor: colors.grey,
    borderRadius: 16,
    padding: 15,
  },
  markedCard:{borderColor:colors.theme},
  innercard: {
    flexDirection: 'row',
    justifyContent: 'space-between',

  },
  stylesinnercard1: {
    flexDirection: 'row',
    gap: 10,
  },
  homeicon: {
    width: widthPixel(22),
    height: heightPixel(22),
    resizeMode: 'center',
  },
  hometext: {
    width:'80%',
    fontFamily: fontFamily.appTextItalic,
    fontSize: 18,
    color: colors.lightBlack,
  },
  stylesinnercard2: {},
  rectangle: {
    width: widthPixel(20),
    height: heightPixel(20),
    resizeMode: 'center',
  },
  addresstext: {
    marginTop:10,
    width:'90%',
    fontFamily: fontFamily.appTextRegular,
    fontSize: 15,
    color: colors.lightText,
  },
  viewtext: {
    marginTop:10,
    width:'90%',
    fontFamily: fontFamily.appTextRegular,
    fontSize: 15,
    color: colors.theme,
  },
});

export default AddressCard;
