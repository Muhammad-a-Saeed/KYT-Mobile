import React from 'react';
import {View, StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const Background = ({children}) => {
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['rgba(255, 213, 128, 0.7)', 'rgba(255, 223, 128, 0)']}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 1}}
        style={styles.gradientTopLeft}
      />
      <LinearGradient
        colors={['rgba(255, 223, 128, 0.7)', 'rgba(255, 223, 128, 0)']}
        start={{x: 1, y: 1}}
        end={{x: 0, y: 0}}
        style={styles.gradientBottomRight}
      />

      <View style={styles.contentContainer}>{children}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    // White background
  },
  gradientTopLeft: {
    position: 'absolute',
    // top: 0,
    left: 0,
    width: '30%',
    height: '30%',
    // borderBottomRightRadius: 100,
  },
  gradientBottomRight: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    width: '25%',
    height: '25%',
    borderTopLeftRadius: 100,
  },
  contentContainer: {
    // flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    // paddingHorizontal: 20,
  },
});

export default Background;
