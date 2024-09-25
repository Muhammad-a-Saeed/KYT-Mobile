import React, {useRef, useState} from 'react';
import {
  View,
  Text,
  Image,
  Pressable,
  TouchableOpacity,
  FlatList,
  StatusBar,
} from 'react-native';
import {colors, appIcons, routes} from '../../../services';
import * as Progress from 'react-native-progress';
import {
  Button,
  Header,
  HomescreenAlert,
  ReferrelAlert,
} from '../../../components';
import {styles} from './styles';

const ReferralScreen = ({navigation}) => {
  const [Alert, setAlert] = useState(false);
  const [medalIndex, setMedalIndex] = useState(0);
  const [currentMedal, setCurrentMedal] = useState('');
  const medals = [
    {name: 'Bronze', image: appIcons.bronze, referrals: '1/5'},
    {name: 'Silver', image: appIcons.silver, referrals: '3/5'},
    {name: 'Gold', image: appIcons.gold, referrals: '5/5'},
  ];
  const listRef = useRef(null);

  const handleNextMedal = () => {
    if (medalIndex < medals.length - 1) {
      setMedalIndex(medalIndex + 1);

      if (medalIndex + 1 === 1) {
        setCurrentMedal('Silver');
        setAlert(true);
      } else if (medalIndex + 1 === 2) {
        setCurrentMedal('Gold');
        setAlert(true);
      }
    }
  };

  const handlePrevMedal = () => {
    console.log('qwertyu', handlePrevMedal);
    if (medalIndex > 0) {
      setMedalIndex(medalIndex - 1);
    }
  };

  const renderItem = ({item}) => (
    <View style={styles.medalContainer}>
      <Image source={item.image} style={styles.medalImage} />
    </View>
  );

  const onScroll = event => {
    const newIndex = Math.round(event.nativeEvent.contentOffset.x / 350);
    setMedalIndex(newIndex);
  };
  const showAlert = () => {
    setAlert(true);
  };
  const alerthide = () => {
    setAlert(false);
    // navigation.navigate(routes.locationscreen);
  };

  return (
    <View style={styles.head}>
      <StatusBar backgroundColor={colors.white} barStyle={'dark-content'} />
      <Header leftIcon={true} titleleft={'Referrel'} />
      {currentMedal === 'Silver' && (
        <ReferrelAlert
          visible={Alert}
          onClose={alerthide}
          backgroundImage={appIcons.localert}
          icon={appIcons.silver}
          descriptionText="You achieved the"
          congratsText="Congratulations"
          medalText="Silver"
          onText={'Ok'}
        />
      )}

      {currentMedal === 'Gold' && (
        <HomescreenAlert
          visible={Alert}
          onClose={alerthide}
          image={appIcons.goldcard}
          starCount="50"
          star={appIcons.dollar}
          message="Congratulations! You've referred a friend and received a $50 gift card"
          buttonText="OK"
        />
      )}

      <View style={styles.container}>
        <Text style={styles.medalTitle}>{medals[medalIndex].name}</Text>
        <Text style={styles.subText}>
          Each Referral Earns You a $50 Gift Card
        </Text>

        <View style={styles.imageWrapper}>
          <TouchableOpacity
            style={styles.leftIndicator}
            onPress={handlePrevMedal}>
            <Image
              source={appIcons.rightmedal}
              style={styles.indicatorleftIcon}
            />
          </TouchableOpacity>

          <FlatList
            data={medals}
            renderItem={renderItem}
            keyExtractor={item => item.name}
            horizontal
            pagingEnabled
            ref={listRef}
            showsHorizontalScrollIndicator={false}
            onScroll={onScroll}
          />

          <Pressable style={styles.rightIndicator} onPress={handleNextMedal}>
            <Image source={appIcons.leftmedal} style={styles.indicatorIcon} />
          </Pressable>
        </View>

        <Text style={styles.centerText}>Number of People You Referred</Text>
        <Text style={styles.referralCount}>{medals[medalIndex].referrals}</Text>

        <Progress.Bar
          styleAttr="Horizontal"
          indeterminate={false}
          width={250}
          progress={medalIndex / (medals.length - 1)}
          color={colors.theme}
          style={styles.progressBar}
        />

        <View style={styles.pv30}>
          <Button onPress={() => navigation.navigate(routes.invitefriend)}>
            Invite Friends
          </Button>
        </View>
      </View>
    </View>
  );
};

export default ReferralScreen;
