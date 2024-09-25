import React, {useState} from 'react';
import {View, Text, StatusBar} from 'react-native';

import {colors} from '../../../services';
import {Header} from '../../../components';
import {styles} from './styles';
import ToggleSwitch from 'toggle-switch-react-native';
import DropDownPicker from 'react-native-dropdown-picker';

const NotificationCard = ({title, description}) => {
  const [isOnState, setisOnState] = useState(false);
  // const [isEnabled, setIsEnabled] = useState(false);
  // const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  return (
    <View style={styles.cardContainer}>
      <View style={styles.cardContent}>
        <View style={styles.textContainer}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.description}>{description}</Text>
        </View>
        <View style={styles.ToggleSwitch}>
          <ToggleSwitch
            isOn={isOnState}
            onColor={colors.theme}
            offColor={colors.grey}
            size="small"
            onToggle={setisOnState}
          />
        </View>
      </View>
    </View>
  );
};

const SettingNotification = ({navigation}) => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    {label: '5 minutes', value: '5'},
    {label: '10 minutes', value: '10'},
    {label: '15 minutes', value: '15'},
    {label: '20 minutes', value: '20'},
  ]);
  return (
    <View style={[styles.container]}>
      <StatusBar backgroundColor={colors.white} barStyle={'dark-content'} />
      <Header leftIcon={true} titleleft={'Setting Notification'} />
      <View style={styles.wrapper}>
        <NotificationCard
          title="Sound"
          description="Enable all sounds notification"
        />
        <NotificationCard
          title="Enable lock screen notification"
          description="Receive notification all of the messages"
        />
        <NotificationCard
          title="Enable unread notification badge"
          description="Receive notification all of the messages"
        />
      </View>
      <View style={styles.enablenotification}>
        <Text style={styles.semiBoldText}>
          Enable unread notification badge
        </Text>

        <DropDownPicker
          open={open}
          value={value}
          items={items}
          setOpen={setOpen}
          setValue={setValue}
          setItems={setItems}
          style={styles.dropdown}
          placeholder="Select time"
          dropDownContainerStyle={styles.dropDownContainer}
        />
      </View>
    </View>
  );
};

export default SettingNotification;
