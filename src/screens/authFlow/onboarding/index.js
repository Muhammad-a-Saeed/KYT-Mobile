import React, {useRef, useState} from 'react';
import {View, Text, StatusBar, FlatList, Image, Dimensions, ImageBackground} from 'react-native';
import {styles} from './styles';
import {colors, appIcons, routes} from '../../../services';
import Button from '../../../components/button';
const {width} = Dimensions.get('window');
const Onboarding = ({navigation}) => {
  const [currentIndex, setcurrentIndex] = useState(0);
  const listRef = useRef(null);
  const onboardingArray = [
    {
      id: 1,
      image: appIcons.coin,
      heading: 'Wellcome To KYT Rewards!',
      headingTwo:
        'Earn stars for visiting, referring friends, and leaving reviews. Unlock rewards as you go!',
    },
    {
      id: 2,
      image: appIcons.coin,
      heading: 'Get Started with KYT!',
      headingTwo:
        'Earn stars with each visit and referral. Explore rewards in our digital store!',
    },
    {
      id: 3,
      image: appIcons.coin,
      heading: 'Start Earning Stars Today!',
      headingTwo:
        'Visit your dentist, refer friends, and leave reviews to unlock exciting rewards!',
    },
  ];
  const renderItem = ({item}) => (

    <View style={styles.onboardingItem}>
      <View style={styles.onboardimg}>
      <Image source={item.image} style={styles.onboardingImage} />
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
      style={{width: 430, height:932,position:'absolute'}}>
       <StatusBar translucent backgroundColor="transparent"  barStyle="dark-content"/> 
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
      <View style={styles.pagination}>
        {onboardingArray.map((_, index) => (
          <View
            key={index}
            style={[styles.dot, currentIndex === index && styles.activeDot]}
          />
        ))}
      </View>
      <View style={styles.buttonView}>
        <Button onPress={() => navigation.navigate(routes.signin)}>
          Get Started
        </Button> 
      </View>
    </View>
  );
};

export default Onboarding;


