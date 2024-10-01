import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StatusBar,
  Image,
  ScrollView,
  Pressable,
  ImageBackground,
  StyleSheet,
} from 'react-native';

import {
  appIcons,
  colors,
  fontFamily,
  heightPixel,
  routes,
  widthPixel,
} from '../../../services';
import {
  Button,
  Custumredeemreward,
  HomescreenAlert,
  RedeemCard,
  RewardAlert,
  StepIndicatorComponent,
  Vipalert,
} from '../../../components';
import {styles} from './styles';
import {TouchableOpacity} from 'react-native-gesture-handler';
import * as Progress from 'react-native-progress';
import {useNavigation} from '@react-navigation/native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
const HomeScreen = ({}) => {
  const navigation = useNavigation();
  const [isArrowUp, setIsArrowUp] = useState(false);
  const [showRewards, setShowRewards] = useState(false);
  const [Isselected, setSelected] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [showvipAlert, setShowvipAlert] = useState(false);
  const [rewardAlert, setrewardAlert] = useState(false);
  const [locAlert, setlocAlert] = useState(false);

  const toggleArrow = () => {
    setIsArrowUp(!isArrowUp);
    setShowRewards(!showRewards);
  };
  const toggleStarSelection = () => {
    setSelected(!Isselected);
    setShowvipAlert(true);
    setTimeout(() => {
      setShowvipAlert(false);
    }, 3000);
  };

  useEffect(() => {
    const shouldShowAlert = true;
    if (shouldShowAlert) {
      setShowAlert(true);
    }
  }, []);

  const handleCloseAlert = () => {
    setShowAlert(false);
  };
  const showrewardAlert = () => {
    setrewardAlert(true);
  };

  const hideAlert = () => {
    setrewardAlert(false);
    navigation.navigate(routes.starhistory);
  };
  const showlocAlert = () => {
    setlocAlert(true);
  };
  const localerthide = () => {
    setlocAlert(false);
    navigation.navigate(routes.locationscreen);
  };
const insets = useSafeAreaInsets();
  return (
    <View style={[styles.container, {marginTop: insets.top}]}>
      <StatusBar backgroundColor={colors.white} barStyle={'dark-content'} />

      <View>
        <HomescreenAlert
          visible={showAlert}
          onClose={handleCloseAlert}
          image={appIcons.stars}
          starCount="80"
          star={appIcons.staricon}
          message="Congratulations! You've downloaded the app and earned 80 stars."
          buttonText="OK"
        />
      </View>
      <View>
        <Vipalert
          visible={showvipAlert}
          onClose={() => setShowAlert(false)}
          backgroundImage={appIcons.vipalert}
          icon={appIcons.vip}
          text1="Congratulation"
          text2="You earned 1000 stars and achieved the VIP Status"
        />
      </View>
      <View>
        <RewardAlert
          visible={rewardAlert}
          onClose={hideAlert}
          backgroundImage={appIcons.redeemalert}
          icon={appIcons.gift}
          congratsText="Congratulations!"
          descriptionText="You achieved the 80-star level and this Complementary Bag is for you."
          onText={'Redeem'}
          onRedeem={() => console.log('Redeem Pressed')}
        />
      </View>
      <View>
        <RewardAlert
          visible={locAlert}
          onClose={localerthide}
          backgroundImage={appIcons.localert}
          icon={appIcons.loc}
          congratsText="Our family is growing!"
          descriptionText="The new KYT clinic is now open. We can't wait to welcome you to our newest location."
          onText={'Go'}
          // onRedeem={() => console.log('Redeem Pressed')}
        />
      </View>

      <View style={[styles.wrapper, {backgroundColor: colors.white}]}>
        <View style={styles.head}>
          <Text style={styles.wellcome}>Welcome</Text>
          <TouchableOpacity
            onPress={() => navigation.navigate(routes.notification)}>
            <Image source={appIcons.wellcomebell} style={styles.imageStyle} />
          </TouchableOpacity>
        </View>
        <View style={styles.main}>
          <TouchableOpacity
            style={styles.prousername}
            onPress={() => navigation.navigate(routes.profile)}>
            <Image source={appIcons.profileicon} style={styles.profileStyle} />
            <Text style={styles.username}>Sarah Martinez </Text>
          </TouchableOpacity>
          <View style={styles.lochistory}>
            <Pressable onPress={showlocAlert}>
              <Image source={appIcons.locatio} style={styles.locStyle} />
            </Pressable>
            <Pressable onPress={showrewardAlert}>
              <Image source={appIcons.history} style={styles.listStyle} />
            </Pressable>
          </View>
        </View>
        <View style={styles.view3}>
          <View style={styles.maincontainer}>
            <Pressable
              onPress={() => navigation.navigate(routes.referralscreen)}
              style={styles.view1}>
              <Pressable style={styles.view2}>
                <Text style={styles.t1}>Referral </Text>
                <Image source={appIcons.right} style={styles.rightStyle} />
              </Pressable>
              <View>
                <Text style={styles.t2}>( Bronze )</Text>
              </View>
            </Pressable>
            <View>
              <Progress.Bar
                progress={0.4}
                width={widthPixel(175)}
                borderColor={colors.theme}
                borderWidth={1}
                color={colors.theme}
              />
            </View>
          </View>
          <View>
            <Button
              onPress={() => navigation.navigate(routes.profileranking)}
              width={widthPixel(130)}
              height={40}
              backgroundColor={['#FFFFFF', '#FFFFFF', '#FFFFFF']}
              labelColor="#000000"
              borderColor={colors.theme}
              borderWidth={1.2}
              borderRadius={14}
              fontFamily={fontFamily.appTextRegular}>
              Ranking
            </Button>
          </View>
        </View>
      </View>

      <Pressable
        style={styles.mainscanbar}
        onPress={() => navigation.navigate(routes.scanqr)}>
        <Image source={appIcons.scanbar} style={styles.scanbar} />
      </Pressable>

      {Isselected ? (
        <ImageBackground
          source={appIcons.background2}
          style={styles.backdiv}
          imageStyle={{borderRadius: 50}}>
          <ScrollView contentContainerStyle={styles.scrollContainer}>
            <ImageBackground
              source={appIcons.background2}
              style={styles.frontdiv}
              imageStyle={{marginTop: -3}}>
              <View>
                <Pressable
                  onPress={toggleStarSelection}
                  style={styles.rewardoptmain}>
                  <View style={styles.starmain}>
                    <Text style={styles.star}>
                      {Isselected ? '1100' : '300'}
                    </Text>
                    <Image
                      source={
                        Isselected ? appIcons.stargreen : appIcons.staricon
                      }
                      style={styles.staricon}
                    />
                  </View>
                  <View style={styles.rewardopt}>
                    <Text style={styles.rewardtext}>Reward Option</Text>
                    <Pressable onPress={toggleArrow}>
                      <Image
                        source={
                          isArrowUp ? appIcons.arrowup : appIcons.arrowdown
                        }
                        style={styles.arrowdown}
                      />
                    </Pressable>
                  </View>
                </Pressable>
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
                  <View style={styles.stepindicator}>
                    <StepIndicatorComponent
                      stepStrokeCurrentColor={
                        Isselected ? '#815A16' : colors.theme
                      }
                      separatorFinishedColor={
                        Isselected ? '#815A16' : colors.theme
                      }
                      setpStrokeFinishedColor={
                        Isselected ? '#815A16' : colors.theme
                      }
                    />
                  </View>
                </ScrollView>

                <View style={styles.button}>
                  <Button
                    onPress={() => navigation.navigate(routes.earnstar)}
                    width={widthPixel(80)}
                    height={40}
                    backgroundColor={
                      Isselected
                        ? ['#FFFFFF', '#FFFFFF']
                        : ['#D1AA66', '#D1AA66']
                    }
                    labelColor="#000000"
                    borderRadius={14}
                    fontFamily={fontFamily.appTextItalic}>
                    Detail
                  </Button>
                  <Button
                    onPress={() => navigation.navigate(routes.redeemreward)}
                    width={widthPixel(100)}
                    height={40}
                    backgroundColor={
                      Isselected
                        ? ['#FFFFFF', '#FFFFFF']
                        : ['#D1AA66', '#D1AA66']
                    }
                    labelColor="#000000"
                    borderRadius={14}
                    fontFamily={fontFamily.appTextItalic}>
                    Redeem
                  </Button>
                </View>

                {showRewards && (
                  <View
                  // style={[styles.getreward, {backgroundColor: colors.gold}]}
                  >
                    <Text style={styles.topText}>
                      Reward you can get with stars
                    </Text>
                    {/* List of rewards */}
                    <Custumredeemreward
                      starCount={60}
                      backgroundColor={colors.theme1}
                      starBackgroundColor={colors.theme1}
                      shuffle={true}
                      rewardType="Reward description"
                      borderRadius={0}
                      elevation={false}
                      starIcon={appIcons.stargreen}
                    />
                    <Custumredeemreward
                      starCount={60}
                      shuffle={true}
                      backgroundColor={colors.theme1}
                      starBackgroundColor={colors.theme1}
                      rewardType="hey! biroo hoiw are youuuu."
                      starIcon={appIcons.stargreen}
                      borderRadius={0}
                      elevation={false}
                    />
                    <Custumredeemreward
                      starCount={60}
                      shuffle={true}
                      backgroundColor={colors.theme1}
                      starBackgroundColor={colors.theme1}
                      rewardType="hey! biroo hoiw are youuuu."
                      starIcon={appIcons.stargreen}
                      borderRadius={0}
                      elevation={false}
                    />
                    <Custumredeemreward
                      starCount={400}
                      shuffle={true}
                      backgroundColor={colors.theme1}
                      starBackgroundColor={colors.theme1}
                      rewardType="In-Office Whitening, Invisalign Whitening Tray, or Retainers."
                      starIcon={appIcons.stargreen}
                      borderRadius={0}
                      elevation={false}
                    />
                    <Custumredeemreward
                      starCount={60}
                      shuffle={true}
                      backgroundColor={colors.theme1}
                      starBackgroundColor={colors.theme1}
                      rewardType="hey! biroo hoiw are youuuu."
                      starIcon={appIcons.stargreen}
                      borderRadius={0}
                      elevation={false}
                    />
                    <Custumredeemreward
                      starCount={60}
                      shuffle={true}
                      backgroundColor={colors.theme1}
                      starBackgroundColor={colors.theme1}
                      rewardType="hey! biroo hoiw are youuuu."
                      starIcon={appIcons.stargreen}
                      borderRadius={0}
                      elevation={false}
                    />
                    <Custumredeemreward
                      starCount={60}
                      shuffle={true}
                      backgroundColor={colors.theme1}
                      starBackgroundColor={colors.theme1}
                      rewardType="hey! biroo hoiw are youuuu."
                      starIcon={appIcons.stargreen}
                      borderRadius={0}
                      elevation={false}
                    />
                    <Custumredeemreward
                      starCount={1000}
                      shuffle={true}
                      backgroundColor={colors.theme1}
                      starBackgroundColor={colors.theme1}
                      rewardType="hey! biroo hoiw are youuuu."
                      starIcon={appIcons.stargreen}
                      borderRadius={0}
                      elevation={false}
                    />
                  </View>
                )}
              </View>

              <View
                style={{
                  height: heightPixel(910),
                  alignItems: 'center',
                  gap: 20,
                  marginTop: 10,
                }}>
                <RedeemCard
                  backgroundImage={appIcons.card1}
                  title="Redeem Rewards"
                  description="$50 for you and $50 for your friend's who signed up and got an appointment"
                  titleColor={colors.mediumblack}
                  descriptionColor={colors.lightBlack}
                  buttonLabelColor={colors.white}
                  buttonText={'Redeem'}
                  boldText={'$100'}
                  subText={'Gift card'}
                  buttonBackgroundColor={['#205A5D', '#205A5D']}
                  onPress={() => navigation.navigate(routes.redeemreward)}
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
                {/* Add more RedeemCard components as needed */}
              </View>
            </ImageBackground>
          </ScrollView>
        </ImageBackground>
      ) : (
        // Use normal View when Isselected is false
        <View style={[styles.backdiv]}>
          <ScrollView contentContainerStyle={styles.scrollContainer}>
            <View
              style={[
                styles.frontdiv,
                // Isselected && {backgroundColor: '#D4AF37'},
              ]}>
              <View>
                <Pressable
                  onPress={toggleStarSelection}
                  style={styles.rewardoptmain}>
                  <View style={styles.starmain}>
                    <Text style={styles.star}>300</Text>
                    <Image source={appIcons.staricon} style={styles.staricon} />
                  </View>
                  <View style={styles.rewardopt}>
                    <Text style={styles.rewardtext}>Reward Option</Text>
                    <Pressable onPress={toggleArrow}>
                      <Image
                        source={
                          isArrowUp ? appIcons.arrowup : appIcons.arrowdown
                        }
                        style={styles.arrowdown}
                      />
                    </Pressable>
                  </View>
                </Pressable>
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
                  <View style={styles.stepindicator}>
                    <StepIndicatorComponent
                      stepStrokeCurrentColor={
                        Isselected ? '#815A16' : colors.theme
                      }
                      separatorFinishedColor={
                        Isselected ? '#815A16' : colors.theme
                      }
                      stepStrokeFinishedColor={
                        Isselected ? '#815A16' : colors.theme
                      }
                    />
                  </View>
                </ScrollView>

                <View style={styles.button}>
                  <Button
                    onPress={() => navigation.navigate(routes.earnstar)}
                    width={widthPixel(80)}
                    height={40}
                    backgroundColor={
                      Isselected
                        ? ['#FFFFFF', '#FFFFFF']
                        : ['#D1AA66', '#D1AA66']
                    }
                    labelColor="#000000"
                    borderRadius={14}
                    fontFamily={fontFamily.appTextItalic}>
                    Detail
                  </Button>
                  <Button
                    onPress={() => navigation.navigate(routes.redeemreward)}
                    width={widthPixel(100)}
                    height={40}
                    backgroundColor={
                      Isselected
                        ? ['#FFFFFF', '#FFFFFF']
                        : ['#D1AA66', '#D1AA66']
                    }
                    labelColor="#000000"
                    borderRadius={14}
                    fontFamily={fontFamily.appTextItalic}>
                    Redeem
                  </Button>
                </View>

                {showRewards && (
                  <View style={styles.getreward}>
                    <Text style={styles.topText}>
                      Reward you can get with stars
                    </Text>
                    <Custumredeemreward
                      starCount={60}
                      shuffle={true}
                      rewardType="Reward description"
                      starIcon={appIcons.staricon}
                      elevation={false}
                    />
                    <Custumredeemreward
                      starCount={60}
                      shuffle={true}
                      rewardType="hey! biroo hoiw are youuuu."
                      starIcon={appIcons.staricon}
                      borderRadius={0}
                      elevation={false}
                    />
                    <Custumredeemreward
                      starCount={60}
                      shuffle={true}
                      rewardType="hey! biroo hoiw are youuuu."
                      starIcon={appIcons.staricon}
                      borderRadius={0}
                      elevation={false}
                    />
                    <Custumredeemreward
                      starCount={400}
                      shuffle={true}
                      rewardType="In-Office Whitening, Invisalign Whitening Tray, or Retainers."
                      starIcon={appIcons.staricon}
                      borderRadius={0}
                      elevation={false}
                    />
                    <Custumredeemreward
                      starCount={60}
                      shuffle={true}
                      rewardType="hey! biroo hoiw are youuuu."
                      starIcon={appIcons.staricon}
                      borderRadius={0}
                      elevation={false}
                    />
                    <Custumredeemreward
                      starCount={60}
                      shuffle={true}
                      rewardType="hey! biroo hoiw are youuuu."
                      starIcon={appIcons.staricon}
                      borderRadius={0}
                      elevation={false}
                    />
                    <Custumredeemreward
                      starCount={60}
                      shuffle={true}
                      rewardType="hey! biroo hoiw are youuuu."
                      starIcon={appIcons.staricon}
                      borderRadius={0}
                      elevation={false}
                    />
                    <Custumredeemreward
                      starCount={1000}
                      shuffle={true}
                      rewardType="hey! biroo hoiw are youuuu."
                      starIcon={appIcons.staricon}
                      borderRadius={0}
                      elevation={false}
                    />
                  </View>
                )}
              </View>
              <View
                style={{
                  height: heightPixel(910),
                  alignItems: 'center',
                  gap: 20,
                  marginTop: 10,
                  paddingHorizontal: 20,
                }}>
                <RedeemCard
                  backgroundImage={appIcons.card1}
                  title="Redeem Rewards"
                  description="$50 for you and $50 for your friend's who signed up and got an appointment"
                  titleColor={colors.mediumblack}
                  descriptionColor={colors.lightBlack}
                  buttonLabelColor={colors.white}
                  buttonText={'Redeem'}
                  boldText={'$100'}
                  subText={'Gift card'}
                  buttonBackgroundColor={['#205A5D', '#205A5D']}
                  onPress={() => navigation.navigate(routes.redeemreward)}
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
                  onPress={() => navigation.navigate(routes.invitefriend)}
                  buttonBackgroundColor={['#E9BD5A', '#E9BD5A']}
                />
              </View>
            </View>
          </ScrollView>
        </View>
      )}
    </View>
  );
};

export default HomeScreen;
