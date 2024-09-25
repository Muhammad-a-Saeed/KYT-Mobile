import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  Modal,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';

import {appIcons, colors, routes} from '../../../services';
import {Background, Button, Header} from '../../../components';
import {styles} from './styles';
import {CustomInput} from '../../../components/custominput';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import ToggleSwitch from 'toggle-switch-react-native';
import CustomCalendar from '../../../components/calender';
import moment from 'moment';
const ProfileSetup = ({navigation, onCalendarPress}) => {
  const [image, setImage] = useState('');
  const [date, setDate] = useState(false);
  const [isCalendarVisible, setCalendarVisible] = useState(false);
  const [selected, setSelected] = useState('');
  const [markedDates, setMarkedDates] = useState({});
  const [selectedGender, setSelectedGender] = useState(null);
  const [profileOption, setProfileOption] = useState(null);
  const [isOnState, setisOnState] = useState(false);

  const handleSelectImage = async () => {};
  const toggleCalendar = () => {
    if (!isCalendarVisible) {
      const today = moment().format('YYYY-MM-DD');
      setMarkedDates({
        [today]: {
          selected: true,
          selectedColor: colors.theme,
          selectedTextColor: colors.white,
        },
      });
    }
    setCalendarVisible(!isCalendarVisible);
  };
  const handleDateSelect = selectedDate => {
    setDate(selectedDate);
    setCalendarVisible(false);
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
      <Background>
        {/* <StatusBar backgroundColor={colors.white} barStyle={'dark-content'} /> */}
        <Header title={'Setup Your Profile'} />
        <KeyboardAwareScrollView
          keyboardShouldPersistTaps="always"
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.fg1}>
          <View style={[styles.wrapper]}>
            <View onPress={handleSelectImage} style={styles.avatarContainer}>
              <Image
                style={styles.avatarContainer1}
                source={appIcons.profilepic}
              />
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
                onChangeText={text => setDate(text)}
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
                      selectedGender === 'Male'
                        ? appIcons.mark
                        : appIcons.unmark
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
              <Text style={[styles.seeprofiletext]}>
                Who can see your profile picture
              </Text>
              <View style={styles.mainprofiletext}>
                <TouchableOpacity
                  style={styles.selectoption}
                  onPress={() => SelectprofileOption('Only me')}>
                  <Image
                    source={
                      profileOption === 'Only me'
                        ? appIcons.mark
                        : appIcons.unmark
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

            <View style={styles.pv30}>
              <Button onPress={() => navigation.navigate(routes.addaddress)}>
                CONTINUE
              </Button>
            </View>
          </View>
        </KeyboardAwareScrollView>
        <View style={styles.centeredView}>
          <Modal
            animationType="slide"
            transparent={true}
            visible={isCalendarVisible}
            onRequestClose={closeCalendar}>
            <TouchableOpacity
              onPress={closeCalendar}
              style={styles.centeredView}>
              <View style={styles.modalview}>
                <SafeAreaView style={styles.calendermain}>
                  <CustomCalendar
                    onDayPress={day => {
                      setSelected(day.dateString);
                      setCalendarVisible(false);
                    }}
                    markedDates={markedDates}
                    onDateSelect={handleDateSelect}
                  />
                </SafeAreaView>
              </View>
            </TouchableOpacity>
          </Modal>
        </View>
      </Background>
    </View>
  );
};

export default ProfileSetup;
