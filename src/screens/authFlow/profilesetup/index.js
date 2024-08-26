import React, {useState} from 'react';
import {
  View,
  Text,
  StatusBar,
  Touchable,
  Image,
  Modal,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';

import {appIcons, colors, routes, } from '../../../services';
import {Alert, Button, Header} from '../../../components';
import {styles} from './styles';
import {CustomInput} from '../../../components/custominput';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import CustomCalendar from '../../../components/calender';
import ToggleSwitch from 'toggle-switch-react-native';

const ProfileSetup = ({navigation, onCalendarPress}) => {
  const [image, setImage] = useState('');
  const [date, setDate] = useState(false);
  const [isCalendarVisible, setCalendarVisible] = useState(false);
  const [selected, setSelected] = useState('');
  const [selectedGender, setSelectedGender] = useState(null);
  const [profileOption, setProfileOption] = useState(null);
  const [showAlert, setShowAlert] = useState(false);
  const[isOnState,setisOnState]=useState(false)

  const handleSelectImage = async () => {
    // const image = await imagePickerFromGallery();
    // if (image.assets.length > 0)
    //   setImage(image.assets[0]);
    // console.log("image.assest",image.assets[0])
  };
  const toggleCalendar = () => {
    setCalendarVisible(!isCalendarVisible);
  };
  const closeCalendar = () => {
    setCalendarVisible(false);
  };

  const handleGenderSelect = gender => {
    setSelectedGender(gender);
  };
  const SelectprofileOption = profile => {
    setProfileOption(profile);
  };






  return (
    <View style={[styles.container]}>
      <StatusBar backgroundColor={colors.white} barStyle={'dark-content'} />
      <Header title={'Setup Your Profile'} />
      <KeyboardAwareScrollView
        keyboardShouldPersistTaps="always"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.fg1}>
        <View style={[styles.wrapper]}>
          <View onPress={handleSelectImage} style={styles.avatarContainer}>
            <View style={[styles.image]}>
              <TouchableOpacity>
                <Image style={styles.cameraIcon} source={appIcons.camera} />
              </TouchableOpacity>
            </View>
          </View>
          {!isOnState ? (
  <Text style={[styles.title2]}>Sarah Mantize</Text>
) : (
  <Text style={[styles.title2]}>Anonymize User</Text>
)}
          <View style={styles.custominput} onPress={onCalendarPress}>
            <CustomInput
              // onChangeText={text => setDate(text)}
              placeholder={'Date OF Birth'}
              rightcalendar={true}
              editable={false}
              marginHorizontal={-40}
              onCalendarPress={toggleCalendar}
              value={selected}
            />
          </View>
          <View>
            <Text style={[styles.title]}>Gender</Text>
            <View style={styles.maingender}>
              <TouchableOpacity
                style={styles.selectgender}
                onPress={() => handleGenderSelect('Male')}>
                <Image
                  source={
                    selectedGender === 'Male' ? appIcons.mark : appIcons.unmark
                  }
                  style={styles.mark1}
                />
                <Text style={styles.gender}>Male</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.selectgender}
                onPress={() => handleGenderSelect('Female')}>
                <Image
                  source={
                    selectedGender === 'Female'
                      ? appIcons.mark
                      : appIcons.unmark
                  }
                  style={styles.mark1}
                />
                <Text style={styles.gender}>Female</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.line1}></View>

          <View style={styles.anonymizename}>
            <Text style={styles.textname}>Anonymize Name</Text>
            <ToggleSwitch
              isOn={isOnState}
              onColor={colors.theme}
              offColor={colors.grey}
              size="small"
              onToggle={setisOnState}
            />
          </View>
          <View>
            <Text style={[styles.seeprofiletext]}>Who can see your profile picture</Text>
            <View style={styles.mainprofiletext}>
              <TouchableOpacity
                style={styles.selectoption}
                onPress={() => SelectprofileOption('Only me')}>
                <Image
                  source={
                    profileOption === 'Only me' ? appIcons.mark : appIcons.unmark
                  }
                  style={styles.mark1}
                />
                <Text style={styles.seestyle}>Only me</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.selectgender}
                onPress={() => SelectprofileOption('Anyone')}>
                <Image
                  source={
                    profileOption === 'Anyone'
                      ? appIcons.mark
                      : appIcons.unmark
                  }
                  style={styles.mark1}
                />
                <Text style={styles.gender}>Anyone</Text>
              </TouchableOpacity>
            </View>
          </View>
          {/* <View style={styles.pv30}>
          <Button onPress={() => setShowAlert(true)}>CONTINUE</Button>
        </View> */}
        <View style={styles.pv30}>
          <Button onPress={() => navigation.navigate(routes.addaddress)}>CONTINUE</Button>
        </View>

        </View>
        <View style={styles.alertcontainer}>
          <Alert
            visible={showAlert}
            leftIcon={true}
            onClose={() => setShowAlert(false)}
            title="Your Profile has been updated successfully"
          />
        </View>
      </KeyboardAwareScrollView>
   
    </View>
  );
};

export default ProfileSetup;
