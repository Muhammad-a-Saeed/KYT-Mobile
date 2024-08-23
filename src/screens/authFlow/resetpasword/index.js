import React, {useState} from 'react';
import {View, Text, StatusBar} from 'react-native';
import {colors, routes, appIcons} from '../../../services';
import {styles} from './styles';
import {Header, Button} from '../../../components';
import {CustomInput} from '../../../components/custominput';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
const Resetpasword = ({navigation}) => {
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  return (
    <View style={[styles.container]}>
      <StatusBar backgroundColor={colors.background} barStyle="dark-content" />
      <Header leftIcon={true} mainLogo={true} />
      <KeyboardAwareScrollView
        keyboardShouldPersistTaps="always"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.fg1}>
        <View style={[styles.wrapper]}>
          <View>
          <Text style={styles.title}>Reset Password</Text>
            <Text style={styles.etext}>Set your new password</Text>
         
          <View style={styles.custominput}>
          <CustomInput
            onChangeText={text => setPassword(text)}
            placeholder={'New Password'}
            rightIcon={true}
            leftIcon={appIcons.Lock}
          />
           <CustomInput
            onChangeText={text => setPassword(text)}
            placeholder={'Confirm Password'}
            rightIcon={true}
            leftIcon={appIcons.Lock}
          />
          </View>
          </View>
          <View style={styles.pv30}>
            <Button onPress={() => navigation.navigate()}>
              Continue
            </Button>
          </View>
        </View>
      </KeyboardAwareScrollView>
    </View>
  );
};

export default Resetpasword;
