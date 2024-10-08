import React, {useRef, useState} from 'react';
import {
  View,
  Text,
  StatusBar,
  FlatList,
  Image,
  Dimensions,
  Pressable,
  Platform,
} from 'react-native';
import {styles} from './styles';
import {appIcons, routes} from '../../../services';
import {Header} from '../../../components';
import {TouchableOpacity} from 'react-native-gesture-handler';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
const {width} = Dimensions.get('window');
const Onboarding = ({navigation}) => {
  const [currentIndex, setcurrentIndex] = useState(0);
  const listRef = useRef(null);
  const [buttonImage, setButtonImage] = useState(appIcons.Button1);

  const onboardingArray = [
    {
      id: 1,
      image: appIcons.onboard1,
      heading: 'Welcome!',
      headingTwo:
        'Collect Stars with each cleaning appointment and when you refer friends and family!',
    },
    {
      id: 2,
      image2: appIcons.onboard2,
      heading: 'Get Started with KYT Rewards!',
      headingTwo:
        'Earn stars with each visit and referral. Explore rewards in our digital store!',
    },
    {
      id: 3,
      image: appIcons.onboard3,
      heading: 'Earn Stars with each visit and referral!',
      headingTwo:
        'Visit your dentist, refer friends, and leave reviews to unlock exciting rewards!',
    },
  ];

  const handleProgressClick = () => {
    const newIndex = currentIndex + 1;

    if (newIndex < onboardingArray.length) {
      setcurrentIndex(newIndex);
      listRef.current.scrollToIndex({index: newIndex});

      if (newIndex === 1) {
        setButtonImage(appIcons.Button2);
      } else if (newIndex === 2) {
        setButtonImage(appIcons.Button3);
      }
    } else {
      navigation.navigate(routes.signup);
    }
  };

  const renderItem = ({item}) => (
    <>
    <View style={styles.onboardingItem}>
      <View style={styles.onboardimg}>
        {item.image2 ? (
          <Image source={item.image2} style={styles.onboardingImage2} />
        ) : (
          <Image source={item.image} style={styles.onboardingImage} />
        )}
      </View>
      
      <>
      <View style={styles.maintextstyle}>
        <Text style={styles.onboardingHeading}>{item.heading}</Text>
        <Text style={styles.onboardingHeadingTwo}>{item.headingTwo}</Text>
      </View>
      </>
      </View>
      </>
  );

  const onScroll = event => {
    newIndex = Math.round(event.nativeEvent.contentOffset.x / width);
    setcurrentIndex(newIndex);
    if (newIndex === 1) {
      setButtonImage(appIcons.Button2);
    } else if (newIndex === 2) {
      setButtonImage(appIcons.Button3);
    } else {
      setButtonImage(appIcons.Button1);
    }
  };
  const insets = useSafeAreaInsets();

  return (
    <View style={styles.container}>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="dark-content"
      />
      {/* <Header containerStyle={{ paddingTop: 200}} Logo={true} /> */}
      <FlatList
        data={onboardingArray}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={onScroll}
        scrollEventThrottle={16}
        ref={listRef}
      />

      <View style={styles.buttonView}>
        <TouchableOpacity style={styles.skiptxt}>
          <Text
            style={styles.skiptext}
            onPress={() => navigation.navigate(routes.signin)}>
            SKIP
          </Text>
        </TouchableOpacity>

        <View style={styles.progressContainer}>
          <Pressable
            onPress={handleProgressClick}
            style={styles.progressWrapper}>
            <Image source={buttonImage} style={styles.rightprogress} />
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default Onboarding;
