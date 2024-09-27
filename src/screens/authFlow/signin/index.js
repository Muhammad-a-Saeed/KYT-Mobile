import React, {useState} from 'react';
import {View, Text, Image, TouchableOpacity, Pressable} from 'react-native';
import {routes, appIcons} from '../../../services';
import {styles} from './styles';
import {Button, Background} from '../../../components';
import {CustomInput} from '../../../components/custominput';
import 'react-native-gesture-handler';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
const Signin = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isMarked, setIsMarked] = useState(false);

  const handleMark = () => {
    setIsMarked(!isMarked);
  };

  const socialArray = [
    {
      id: 1,
      icon: appIcons.google,
      // onPress: () => facebookLogin(),
    },
    {
      id: 2,
      icon: appIcons.ios,
      // onPress: () => appleLogin(),
    },
  ];
  return (
    <View style={[styles.container]}>
      <Background>
        <View style={styles.Header}>
          <Image style={styles.mainlogo} source={appIcons.mainlogo} />
        </View>
        <KeyboardAwareScrollView
          keyboardShouldPersistTaps="always"
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.fg1}>
          <View style={[styles.wrapper]}>
            <Text style={[styles.title]}>Sign In</Text>
            <Text style={[styles.title2]}>Enter your account detail</Text>
            <View>
              <View style={styles.custominput}>
                <CustomInput
                  onChangeText={text => setEmail(text)}
                  placeholder={'Email ID'}
                  leftIcon={appIcons.Message}
                />
                <CustomInput
                  onPressIcon={() => setShowPassword(!showPassword)}
                  secureTextEntry={!showPassword}
                  placeholder={'Password'}
                  leftIcon={appIcons.Lock}
                  rightIcon={true}
                />
              </View>
            </View>

            <View style={styles.forgetcontainer}>
              <Pressable style={styles.rightmain} onPress={handleMark}>
                <Image
                  source={
                    isMarked ? appIcons.tickrectangle : appIcons.rectangle
                  }
                  style={styles.rectangle}
                />
                <Text style={styles.remtext}>Remember me</Text>
              </Pressable>
              <View style={styles.forget}>
                <Text
                  style={styles.forgetText}
                  onPress={() => navigation.navigate(routes.forgetpasword)}>
                  Forget Password?
                </Text>
              </View>
            </View>

            <View style={styles.pv30}>
              <Button onPress={() => navigation.navigate(routes.homeScreen)}>
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
                Don’t have an account?{' '}
                <Text style={styles.spanedit}>Sign Up</Text>
              </Text>
            </View>
          </View>
        </KeyboardAwareScrollView>
      </Background>
    </View>
  );
};

export default Signin;
