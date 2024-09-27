import React, {useState} from 'react';
import {
  Text,
  StyleSheet,
  View,
  TextInput,
  Image,
  TouchableOpacity,
} from 'react-native';
import {
  colors,
  fontFamily,
  heightPixel,
  widthPixel,
  appIcons,
} from '../../services';
export const CustomInput = ({
  dropDownShow,
  leftIcon,
  righteye,
  onPressValue,
  dropdownArray,
  eyeValue,
  onPressIcon,
  inputstyle,
  rightloc,
  rightIcon,
  rightsearchbar,
  rightcalendar,
  width = '100%',
  height = heightPixel(60),
  borderRadius = widthPixel(14),
  borderColor = colors.greyLight1,
  backgroundColor = colors.lightgrey,
  borderWidth = 2,
  borderTopWidth = 0,
  borderLeftWidth = 0,
  borderRightWidth = 0,
  elevation = 0,
  value,
  marginHorizontal = 0,
  placeholder,
  keyboardType,
  editable,
  onChangeText,
  onCalendarPress,
}) => {
  const [isShow, setIsShow] = useState(false);

  const handleEye = () => {
    setIsShow(!isShow);
  };
  return (
    <View
      style={{
        ...styles.formInput,
        width: width,
        height: height,
        borderColor: borderColor,
      }}>
      <View
        style={{
          ...styles.input,
          borderRadius: borderRadius,
          borderWidth: borderWidth,
          height: height,
          backgroundColor: backgroundColor,
          elevation: elevation,
          borderColor: borderColor,
          borderTopWidth: borderTopWidth,
          borderLeftWidth: borderLeftWidth,
          borderRightWidth: borderRightWidth,
        }}>
        <Image source={leftIcon} style={styles.leftIcon} />

        <TouchableOpacity style={{flex: 1}} onPress={() => onPressIcon()}>
          <TextInput
            selectionColor={colors.black}
            style={{
              ...styles.inputTextStyle,
              marginHorizontal,
              backgroundColor,
              height,
              borderColor,
            }}
            value={value}
            placeholder={placeholder}
            placeholderTextColor={'#C7C7C7'}
            rightIcon={true}
            keyboardType={keyboardType}
            editable={editable}
            onChangeText={onChangeText}
          />
        </TouchableOpacity>
        {rightIcon && (
          <TouchableOpacity onPress={handleEye}>
            <Image
              source={isShow ? appIcons.hideeye : appIcons.Show}
              style={styles.eyeshow}
            />
          </TouchableOpacity>
        )}
        {rightsearchbar && (
          <TouchableOpacity>
            <Image source={appIcons.Search} style={styles.eyeshow} />
          </TouchableOpacity>
        )}
        {righteye && (
          <TouchableOpacity onPress={handleEye}>
            <Image
              source={isShow ? appIcons.hideeye : appIcons.Show}
              style={styles.eyeshow}
            />
          </TouchableOpacity>
        )}
        {rightloc && (
          <TouchableOpacity>
            <Image style={styles.rightarrow} source={appIcons.addres} />
          </TouchableOpacity>
        )}
        {rightcalendar && (
          <TouchableOpacity onPress={onCalendarPress}>
            <Image style={{...styles.rightarrow}} source={appIcons.Calendar} />
          </TouchableOpacity>
        )}
      </View>
      {dropDownShow && (
        <View style={styles.dropDownView}>
          {dropdownArray.map((item, index) => {
            return (
              <TouchableOpacity
                onPress={() => onPressValue(item.title)}
                key={index}>
                <Text style={styles.dropDownText}>{item.title}</Text>
              </TouchableOpacity>
            );
          })}
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  dropDownText: {
    fontSize: 30,
    color: colors.grey,
    paddingBottom: heightPixel(20),
  },
  dropDownView: {
    backgroundColor: 'red',
    position: 'absolute',
    bottom: -heightPixel(85),
    zIndex: 10,
    width: '100%',
    maxHeight: heightPixel(100),
    paddingVertical: heightPixel(10),
    marginTop: heightPixel(10),
    backgroundColor: '#F5F5F5',
    paddingHorizontal: widthPixel(16),
    borderWidth: 1,
    borderColor: '#C7C7C7',
  },
  leftIcon: {
    width: widthPixel(24),
    height: widthPixel(24),
    marginRight: widthPixel(8),
    resizeMode: 'contain',
  },
  eyeshow: {
    width: widthPixel(23),
    height: widthPixel(23),
    resizeMode: 'contain',
    tintColor: colors.showcolor,
  },

  inputTextStyle: {
    width: '90%',
    height: 50,
    fontSize: 14,
    fontFamily: fontFamily.appTextRegular,
    color: colors.lightBlack,
    paddingBottom: -20,
    // marginHorizontal:-30,
  },
  icon: {
    width: widthPixel(22),
    height: widthPixel(23),
    resizeMode: 'contain',
  },
  formInput: {
    // paddingBottom: heightPixel(20),
  },
  input: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: widthPixel(10),
    borderColor: colors.greyLight,
    borderTopWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0,
  },
  rightarrow: {
    width: widthPixel(24),
    height: widthPixel(24),
    resizeMode: 'contain',
  },
});
