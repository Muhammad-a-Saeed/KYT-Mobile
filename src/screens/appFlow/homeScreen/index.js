import React from 'react';
import {View, Text, StatusBar, Image, ScrollView} from 'react-native';

import {appIcons, colors, fontFamily, widthPixel} from '../../../services';
import {
  Button,
  Header,
  RedeemCard,
  StepIndicatorComponent,
} from '../../../components';
import {styles} from './styles';
import {TouchableOpacity} from 'react-native-gesture-handler';
import * as Progress from 'react-native-progress';
const HomeScreen = ({navigation}) => (
  <View style={[styles.container]}>
    <StatusBar backgroundColor={colors.white} barStyle={'dark-content'} />
    <Header wellcome={'Wellcome'} />
    <View style={[styles.wrapper, {backgroundColor: colors.white}]}>
      <View style={styles.main}>
        <TouchableOpacity style={styles.prousername}>
          <Image source={appIcons.profileicon} style={styles.profileStyle} />
          <Text style={styles.username}>Sarah Martinez </Text>
        </TouchableOpacity>
        <View style={styles.lochistory}>
          <Image source={appIcons.locatio} style={styles.locStyle} />
          <Image source={appIcons.history} style={styles.listStyle} />
        </View>
      </View>
      <View style={styles.view3}>
        <View style={styles.maincontainer}>
          <View style={styles.view1}>
            <View style={styles.view2}>
              <Text style={styles.t1}>Referral </Text>
              <Image source={appIcons.right} style={styles.rightStyle} />
            </View>
            <View>
              <Text style={styles.t2}>( Bronze )</Text>
            </View>
          </View>
          <View>
            <Progress.Bar
              progress={0.4}
              width={192}
              borderColor={colors.theme}
              borderWidth={1}
              color={colors.theme}
            />
          </View>
        </View>
        <View>
          <Button
            onPress={() => navigation.navigate(routes.homeScreen)}
            width={widthPixel(150)}
            height={40}
            backgroundColor={['#FFFFFF', '#FFFFFF', '#FFFFFF']}
            labelColor="#000000"
            borderColor={colors.theme}
            borderWidth={1}
            borderRadius={14}
            fontFamily={fontFamily.appTextRegular}>
            Ranking
          </Button>
        </View>
      </View>
    </View>
    <View style={styles.backdiv}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.frontdiv}>
          <View>
            <View style={styles.rewardoptmain}>
              <View style={styles.starmain}>
                <Text style={styles.star}>300</Text>
                <Image source={appIcons.staricon} style={styles.staricon} />
              </View>
              <View style={styles.rewardopt}>
                <Text style={styles.rewardtext}>Reward Option</Text>
                <Image source={appIcons.arrowdown} style={styles.arrowdown} />
              </View>
            </View>
          </View>

          <View style={styles.starlvl}>
            <View style={styles.startxt}>
              <Text style={styles.startxt1}>Star Level</Text>
            </View>
            <ScrollView
              style={{height: 60, marginHorizontal: -12, marginTop: 20}}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{width: 700}}>
              <StepIndicatorComponent />
            </ScrollView>

            <View style={styles.button}>
              <Button
                onPress={() => navigation.navigate(routes.homeScreen)}
                width={widthPixel(80)}
                height={40}
                backgroundColor={['#D1AA66', '#D1AA66']}
                labelColor="#000000"
                borderRadius={14}
                fontFamily={fontFamily.appTextItalic}>
                Detail
              </Button>
              <Button
                onPress={() => navigation.navigate(routes.homeScreen)}
                width={widthPixel(100)}
                height={40}
                backgroundColor={['#D1AA66', '#D1AA66']}
                labelColor="#000000"
                borderRadius={14}
                fontS
                fontFamily={fontFamily.appTextItalic}>
                Redeem
              </Button>
            </View>
            <View style={{alignItems: 'center', gap: 20, marginTop: 15}}>
              <RedeemCard
                backgroundImage={appIcons.card1}
                title="Redeem Rewards"
                description="$50 for you and $50 for your friend’s who signed up and got an appointment"
                titleColor={colors.mediumblack}
                descriptionColor={colors.lightBlack}
                buttonLabelColor={colors.white}
                buttonText={'Redeem'}
                buttonBackgroundColor={['#205A5D', '#205A5D']}
              />

              <RedeemCard
                backgroundImage={appIcons.card2}
                title="Gift your friend"
                description="Gift your friends a $50 Amazon Gift Card when they schedule a teeth cleaning- available
through your custom link."
                titleColor={colors.white}
                descriptionColor={colors.white}
                buttonLabelColor={colors.white}
                buttonText={'Gift now'}
                buttonBackgroundColor={['#205A5D', '#205A5D']}
              />

              <RedeemCard
                backgroundImage={appIcons.card3}
                title="Special Promotional"
                description="Refer 5 Friends with PPO Dental Insurance By 15/07/25 - Get $500 (2x The Rewards with an extra $250 Bonus!)"
                titleColor={colors.mediumblack}
                descriptionColor={colors.lightBlack}
                buttonLabelColor={colors.white}
                buttonText={'Invite now'}
                buttonBackgroundColor={['#E9BD5A', '#E9BD5A']}
              />
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  </View>
);

export default HomeScreen;
