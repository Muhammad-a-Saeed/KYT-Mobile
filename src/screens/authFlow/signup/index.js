import React, {useState} from 'react';
import {View, Text, StatusBar, Image} from 'react-native';
import {appIcons, colors, routes} from '../../../services';
import {Header, Button} from '../../../components';
import {CustomInput} from '../../../components/custominput';
import {styles} from './styles';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {TouchableOpacity} from 'react-native-gesture-handler';
const SignupScreen = ({navigation}) => {
  const [number, setNumber] = useState('');
  const [name, setName] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const nameValue =
    name.length > 0 && name.length < 4
      ? 'Name must be 4 characters long'
      : null;
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const socialArray = [
    {
      id: 1,
      title: 'Continue with FaceBook',
      icon: appIcons.facebook,
      onPress: () => facebookLogin(),
    },
    {
      id: 2,
      title: 'Continue with Google',
      icon: appIcons.google,
      onPress: () => appleLogin(),
    },
  ];
  return (
    <View style={[styles.container]}>
      <StatusBar backgroundColor={colors.background} barStyle="dark-content" />
      <Header leftIcon={true} mainLogo={true} />
      <KeyboardAwareScrollView
        keyboardShouldPersistTaps="always"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.fg1}>
        <View style={[styles.wrapper]}>
          <Text style={styles.title}>SIGN UP</Text>
          <View style={styles.custominput}>
            <CustomInput
              errorText={nameValue}
              onChangeText={text => setName(text)}
              placeholder={'Full Name'}
              leftIcon={appIcons.profile}
            />
            <CustomInput
              onChangeText={text => setEmail(text)}
              placeholder={'Email ID'}
              leftIcon={appIcons.attherate}
            />
            <CustomInput
              placeholder={'Password'}
              leftIcon={appIcons.lock}
              onChangeText={text => setPassword(text)}
            />
            <CustomInput
              placeholder={'Confirm Password'}
              leftIcon={appIcons.lock}
              onChangeText={text => setConfirmPassword(text)}
            />
          </View>
          <View style={styles.pv30}>
            <Button onPress={() => navigation.navigate(routes.accountsetup)}>
              SIGN UP
            </Button>
          </View>
          <View style={styles.texthead}>
            <Text
              onPress={() => navigation.navigate(routes.login)}
              style={styles.dontHaveText}>
              Already have an account?{' '}
              <Text style={styles.spanedit}>SIGN IN</Text>
            </Text>
            <Text style={styles.ortext}>OR</Text>
          </View>
          <View style={styles.rowEvenly}>
            {socialArray.map((item, index) => (
              <TouchableOpacity
                onPress={item.onPress}
                key={index}
                style={styles.socialView}>
                <Image source={item.icon} style={styles.socialIcon} />
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </KeyboardAwareScrollView>
    </View>
  );
};

export default SignupScreen;
