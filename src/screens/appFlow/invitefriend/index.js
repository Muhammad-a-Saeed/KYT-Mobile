import React from 'react';
import {
  View,
  Text,
  Image,
  Dimensions,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import {styles} from './styles';
import {appIcons, colors, routes, widthPixel} from '../../../services';
import {CustomInput} from '../../../components/custominput';
import {CustomLinks} from '../../../components';

const InviteFriend = ({navigation}) => {
  const {width} = Dimensions.get('window'); // Get screen width

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={colors.white} barStyle={'dark-content'} />
      <View style={styles.topCurveContainer}>
        <Image
          source={appIcons.topcurve} // Replace with the actual path to your top curve background image
          style={styles.topCurveImage}
        />
        <View style={styles.giftmain}>
          <Image
            source={appIcons.gifticon} // Replace with the actual path to your gift icon
            style={styles.giftIcon}
          />
        </View>
      </View>

      <View style={styles.content}>
        <Text style={styles.title}>Refer a Friend and Get $50</Text>
        <Text style={styles.description}>
          Gift your friends a $50 Amazon Gift Card when they schedule a teeth
          cleaning - available through your custom link - and score $50 for
          every friend who becomes a patient at KYT Dental Services.
        </Text>
      </View>
      <View style={styles.mainsquare}>
        <Image source={appIcons.square} style={styles.square} />
        <View style={styles.overlayContainer}>
          <Text style={styles.text}>XBYAHSN</Text>

          <View style={styles.verticalLine} />

          <Image source={appIcons.copy} style={styles.icon} />
        </View>
      </View>
      <TouchableOpacity
        style={styles.CustomInput}
        onPress={() => navigation.navigate(routes.contactscreen)}>
        <CustomInput
          style={styles.inputField}
          onPressIcon={() => navigation.navigate(routes.contactscreen)}
          placeholder="Search Contacts"
          width={widthPixel(340)}
          height={48}
          borderColor={colors.dividerColor}
          borderLeftWidth={1}
          borderRightWidth={1}
          borderTopWidth={1}
          marginHorizontal={-30}
          rightsearchbar={true}
        />
      </TouchableOpacity>
      <View style={styles.orContainer}>
        <Text style={styles.orText}>OR</Text>
      </View>
      <View style={styles.horizontalLine} />
      <View style={styles.links}>
        <CustomLinks icon={appIcons.whatsapp} label={'WhatsApp'} />
        <CustomLinks icon={appIcons.mesenger} label={'Messenger'} />
        <CustomLinks icon={appIcons.inbox} label={'Message'} />
        <CustomLinks icon={appIcons.instagram} label={'Instagram'} />
        <CustomLinks icon={appIcons.moreicon} label={'More'} />
      </View>
    </View>
  );
};

export default InviteFriend;
