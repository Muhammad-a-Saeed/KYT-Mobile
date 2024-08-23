import React, {useEffect, useState} from 'react';
import {View, Text, StatusBar} from 'react-native';
import {colors, routes} from '../../../services';
import {styles} from './styles';
import {Header, Button} from '../../../components';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import OTPInputView from '@twotalltotems/react-native-otp-input';
const Otpscreen = ({navigation}) => {
  const [otp, setOtp] = useState('');
  const [seconds, setSeconds] = useState(60);
  const [resendEnabled, setResendEnabled] = useState(false);
  useEffect(() => {
    const timer = setInterval(() => {
      if (seconds === 0) {
        setSeconds(parseInt('00'));
        setResendEnabled(true);
      }
      else {
        setSeconds((prevSeconds) => prevSeconds - 1);
      }
    }, 1000);
    return () => clearInterval(timer);
  }, [seconds]);

const handleResend = () => {
  if (resendEnabled) {
    setSeconds(60);
    setResendEnabled(false);
  }
};

  return (
    <View style={[styles.container]}>
      <StatusBar backgroundColor={colors.background} barStyle="dark-content" />
      <Header leftIcon={true} mainLogo={true}/>
      <View style={styles.fg1}>
        <View style={[styles.wrapper]}>
          <View>
            <Text style={styles.etext}>
            Verify OTP
            </Text>
            <Text style={styles.otptext}>
              {' '}
              Enter 4 digit passsword
            </Text>
          </View>
          <View style={styles.otpContainerTopView}>
            <OTPInputView
              autoFocusOnLoad={false}
              selectionColor={colors.grey}
              onCodeChanged={code => {
                setOtp(code);
              }}
              style={[styles.otpContainer]}
              codeInputHighlightStyle={{
                borderColor: colors.grey,
                borderBottomColor:colors.theme,
                backgroundColor: colors.white,
              }}
              pinCount={4}
              codeInputFieldStyle={styles.otp}
            />
          </View>
          <View style={styles.texthead}>
            <Text
              onPress={() => navigation.navigate()}
              style={styles.dontHaveText}>
              Don’t get one time code ?{' '}
              </Text>
              <View style={styles.resend}>
              <Text style={[styles.otptimer, 
              {
                color: seconds > 0 ? colors.theme : colors.lightText,
              },
              ]}>
                {`${seconds < 10 ? '0' : ''}${seconds}`}
              </Text>
              <Text style={[styles.spanedit, 
                {
                  color: seconds === 0 ? colors.theme : colors.lightText, 
                },
              ]}
              onPress={handleResend}>
              Resend</Text>
              </View>
          </View>
          <View style={styles.pv30}>
            <Button onPress={() => navigation.navigate(routes.resetpasword)}>
              Continue
            </Button>
        </View>

          
          </View>
        
      </View>
    </View>
  );
};

export default Otpscreen;
