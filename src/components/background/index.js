import React from 'react';
import {View, StyleSheet, StatusBar} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {colors} from '../../services';

const Background = ({children}) => {
  return (
    <View style={styles.container}>
      {/* <StatusBar backgroundColor={colors.white} barStyle="dark-content" /> */}

      <LinearGradient
        colors={['rgba(216,184,135,0.7)', 'rgba(252,252,251,0)']}
        locations={[0, 0.3]} // 70% stop similar to CSS
        start={{x: 0.29, y: 0.1}} // Approximation of 128 degrees
        end={{x: 1.2, y: 1}}
        style={styles.gradientTopLeft}
      />

      {/* Bottom-Right Gradient */}
      <LinearGradient
        colors={['rgba(216,184,135,0.7)', 'rgba(252,252,251,0)']}
        locations={[0, 0.7]} // 70% stop similar to CSS
        start={{x: 1, y: 1.2}} // Approximates the opposite direction of 128 degrees
        end={{x: 0.2, y: 0.22}}
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
    // zIndex: 1,
    position: 'absolute',
    top: 0,
    left: 0,
    width: '60%',
    height: '25%',
    // borderBottomRightRadius: 100,
  },
  gradientBottomRight: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    width: '60%',
    height: '25%',
    // borderTopLeftRadius: 100,
  },
  contentContainer: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    // paddingHorizontal: 20,
  },
});

export default Background;
