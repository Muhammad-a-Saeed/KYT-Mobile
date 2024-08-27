import React, {useRef, useState} from 'react';
import {
  View,
  Text,
  StatusBar,
  FlatList,
  Image,
  Dimensions,
  ImageBackground,
} from 'react-native';
import {styles} from './styles';
import {colors, appIcons, routes} from '../../../services';
import * as Progress from 'react-native-progress';
import Button from '../../../components/button';
import {Header} from '../../../components';
import {TouchableOpacity} from 'react-native-gesture-handler';
const {width} = Dimensions.get('window');
const Onboarding = ({navigation}) => {
  const [currentIndex, setcurrentIndex] = useState(0);
  const listRef = useRef(null);
  const onboardingArray = [
    {
      id: 1,
      image: appIcons.onboard1,
      heading: 'Wellcome!',
      headingTwo:
        'Earn stars for visiting, referring friends, and leaving reviews.!',
    },
    {
      id: 2,
      image2: appIcons.onboard2,
      heading: 'Get Started with KYT!',
      headingTwo:
        'Earn stars with each visit and referral. Explore rewards in our digital store!',
    },
    {
      id: 3,
      image: appIcons.onboard3,
      heading: 'Start Earning Stars Today!',
      headingTwo:
        'Visit your dentist, refer friends, and leave reviews to unlock exciting rewards!',
    },
  ];
  const renderItem = ({item}) => (
    <View style={styles.onboardingItem}>
      <Header mainLogo={true} />
      <View style={styles.onboardimg}>
        {item.image2 ? (
          <Image source={item.image2} style={styles.onboardingImage2} />
        ) : (
          <Image source={item.image} style={styles.onboardingImage} />
        )}
      </View>

      <View style={styles.maintextstyle}>
        <Text style={styles.onboardingHeading}>{item.heading}</Text>
        <Text style={styles.onboardingHeadingTwo}>{item.headingTwo}</Text>
      </View>
    </View>
  );

  const onScroll = event => {
    newIndex = Math.round(event.nativeEvent.contentOffset.x / 360);
    setcurrentIndex(newIndex);
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={appIcons.backgroundimg}
        style={{width: 430, height: 932, position: 'absolute'}}>
        <StatusBar
          translucent
          backgroundColor="transparent"
          barStyle="dark-content"
        />
      </ImageBackground>
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
          <Progress.Circle
            size={30}
            indeterminate={true}
            borderWidth={3}
            borderColor='green'

            style={styles.progressCircle}
          />
          {/* <Image source={appIcons.rightprogress} style={styles.rightprogress} /> */}
        </View>
      </View>
    </View>
  );
};

export default Onboarding;
