import React from 'react';
import {View, StatusBar, ScrollView} from 'react-native';

import {appIcons, colors} from '../../../services';
import {Customstarhistory, Head} from '../../../components';
import {styles} from './styles';

const StarHistory = ({navigation}) => {
  return (
    <View style={[styles.container]}>
      <StatusBar backgroundColor={colors.white} barStyle={'dark-content'} />
      <Head
        backgroundImage={appIcons.Header}
        leftArrowIcon={appIcons.goback}
        logo={appIcons.coin1}
        title="Redeem History"
      />
      <View style={styles.wrapper}>
        <ScrollView contentContainerStyle={styles.wrapper1}>
          <Customstarhistory
            icon={appIcons.redeem1}
            starIcon={appIcons.star}
            points={80}
            starType="Redeem"
            description="You have earned this reward!"
            date="14-7-24"
          />
          <Customstarhistory
            icon={appIcons.redeem2}
            starIcon={appIcons.staricon}
            points={200}
            starType="Earned"
            description="Start your Invisalign Journey"
            date="14-7-24"
          />
          <Customstarhistory
            icon={appIcons.redeem1}
            starIcon={appIcons.staricon}
            points={80}
            starType="Redeem"
            description="You have earned this reward!"
            date="14-7-24"
          />
          <Customstarhistory
            icon={appIcons.redeem2}
            starIcon={appIcons.staricon}
            points={80}
            starType="Earned"
            description="Start your Invisalign Journey"
            date="14-7-24"
          />
          <Customstarhistory
            icon={appIcons.redeem1}
            starIcon={appIcons.staricon}
            points={80}
            starType="Redeem"
            description="You have earned this reward!"
            date="14-7-24"
          />
          <Customstarhistory
            icon={appIcons.redeem2}
            starIcon={appIcons.staricon}
            points={80}
            starType="Earned"
            description="Start your Invisalign Journey"
            date="14-7-24"
          />
          {/* <Customstarhistory
            icon={appIcons.redeem1}
            starIcon={appIcons.staricon}
            points={80}
            starType="Redeem"
            description="You have earned this reward!"
            date="14-7-24"
          />
          <Customstarhistory
            icon={appIcons.redeem2}
            starIcon={appIcons.staricon}
            points={80}
            starType="Earned"
            description="Start your Invisalign Journey"
            date="14-7-24"
          />
          <Customstarhistory
            icon={appIcons.redeem1}
            starIcon={appIcons.staricon}
            points={80}
            starType="Redeem"
            description="You have earned this reward!"
            date="14-7-24"
          /> */}
        </ScrollView>
      </View>
    </View>
  );
};

export default StarHistory;
