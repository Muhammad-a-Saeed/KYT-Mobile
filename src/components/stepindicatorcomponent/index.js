import React, {useState} from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import StepIndicator from 'react-native-step-indicator'; // Import the StepIndicator
import {colors, widthPixel} from '../../services';
import {forHorizontalIOS} from '@react-navigation/stack/lib/typescript/src/TransitionConfigs/CardStyleInterpolators';

const StepIndicatorComponent = ({
  stepStrokeCurrentColor,
  setpStrokeFinishedColor,
  separatorFinishedColor,
  currentStepLabelColor,
}) => {
  const [currentPosition, setCurrentPosition] = useState(0);
  const labels = [
    '100',
    '200',
    '300',
    '400',
    '500',
    '600',
    '700',
    '800',
    '900',
    '1000',
  ];
  const customStyles = {
    stepIndicatorSize: 30,
    currentStepIndicatorSize: 30,
    separatorStrokeWidth: 2,
    currentStepStrokeWidth: 2,
    stepStrokeCurrentColor: stepStrokeCurrentColor || colors.theme,
    stepStrokeWidth: 2,
    stepStrokeFinishedColor: setpStrokeFinishedColor || colors.theme,
    stepStrokeUnFinishedColor: '#aaaaaa',
    separatorFinishedColor: separatorFinishedColor || colors.theme,
    separatorUnFinishedColor: '#aaaaaa',
    stepIndicatorFinishedColor: '#fff',
    stepIndicatorUnFinishedColor: '#ffffff',
    stepIndicatorCurrentColor: '#fff',
    stepIndicatorLabelFontSize: 13,
    currentStepIndicatorLabelFontSize: 13,
    stepIndicatorLabelCurrentColor: '#aaa',
    labelColor: '#999999',
    labelSize: 13,
    currentStepLabelColor: '#aaa',
  };

  const onPageChange = position => {
    setCurrentPosition(position);
  };

  return (
    <View style={styles.container}>
      <StepIndicator
        customStyles={customStyles}
        currentPosition={currentPosition}
        labels={labels}
        stepCount={labels.length}
        // direction="horizontal"
        onPress={onPageChange}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 5,
  },
});

export default StepIndicatorComponent;
