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
      icon: appIcons.google,
      onPress: () => googlelogin(),
    },
    {
      id: 2,
      title: 'Continue with Google',
      icon: appIcons.ios,
      onPress: () => appleLogin(),
    },
  ];
  return (
    <View style={[styles.container]}>
      <StatusBar backgroundColor={colors.background} barStyle="dark-content" />
      <Header  mainLogo={true} />
      <KeyboardAwareScrollView
        keyboardShouldPersistTaps="always"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.fg1}>
        <View style={[styles.wrapper]}>
          <Text style={styles.title}>Sign Up</Text>
        <Text style={[styles.title2]}>Create new account</Text>

          <View style={styles.custominput}>
            <CustomInput
              errorText={nameValue}
              onChangeText={text => setName(text)}
              placeholder={'Full Name'}
              leftIcon={appIcons.profileTab}
            />
            <CustomInput
              onChangeText={text => setEmail(text)}
              placeholder={'Email ID'}
              leftIcon={appIcons.Message}
            />
            <CustomInput
              placeholder={'New password'}
              leftIcon={appIcons.Lock}
              righteye={appIcons.hideeye}
              onChangeText={text => setPassword(text)}
            />
            <CustomInput
              placeholder={'Confirm Password'}
              leftIcon={appIcons.Lock}
              rightIcon={appIcons.Show}
              onChangeText={text => setConfirmPassword(text)}
            />
             <CustomInput
              placeholder={'Ref Code '}
              leftIcon={appIcons.dollar}
              onChangeText={text => setConfirmPassword(text)}
            />
          </View>
          <View style={styles.pv30}>
            <Button onPress={() => navigation.navigate(routes.profilesetup)}>
              CONTINUE
            </Button>
          </View>
          <View style={styles.ormain}>
          <View style={styles.line1}></View>
          <View>
        <Text style={styles.ortext}>OR LOGIN WITH</Text>
        </View>
        <View style={styles.line1}></View>

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

        <View style={styles.texthead}>
          <Text
            onPress={() => navigation.navigate(routes.signup)}
            style={styles.dontHaveText}>
            Already have an account? <Text style={styles.spanedit}>Sign In</Text>
          </Text>

        </View>
        </View>
      </KeyboardAwareScrollView>
    </View>
  );
};

export default SignupScreen;
