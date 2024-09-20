import React from 'react';
import {View, StatusBar, ScrollView, Text} from 'react-native';
import {colors} from '../../../services';
import {Header} from '../../../components';
import {styles} from './styles';

const PrivacyPolicy = ({navigation}) => {
  return (
    <View style={[styles.container]}>
      <StatusBar backgroundColor={colors.white} barStyle={'dark-content'} />
      <Header leftIcon={true} titleleft={'Privacy & Policy'} />
      <ScrollView style={styles.wrapper}>
        <Text style={styles.sectionTitle}>1. Introduction</Text>
        <Text style={styles.text}>
          Welcome to the KYT Dental Rewards app. We are committed to protecting
          your privacy and ensuring the security of your personal information.
          This Privacy Policy outlines our practices regarding the collection,
          use, and protection of your data.
        </Text>

        <Text style={styles.sectionTitle}>2. Information We Collect</Text>
        <Text style={styles.text}>
          Personal Information: We collect personal information such as your
          name, contact details (email and phone number), and date of birth to
          create and manage your user account.{'\n\n'}
          Activity Data: We track your activities within the app, including
          dental visits, referrals, and reviews, to award stars and unlock
          rewards.{'\n\n'}
          Usage Data: We monitor how you use the app to improve functionality
          and provide personalized recommendations.
        </Text>

        <Text style={styles.sectionTitle}>3. How We Use Your Information</Text>
        <Text style={styles.text}>
          Account Management: To create and manage your user account.{'\n\n'}
          Rewards Program: To track your activities and award stars, unlocking
          rewards as you accumulate points.{'\n\n'}
          Personalization: To offer personalized messages, recommendations, and
          rewards based on your app usage and preferences.{'\n\n'}
          Improvement: To analyze usage patterns and improve app functionality
          and user experience.
        </Text>

        <Text style={styles.sectionTitle}>4. Data Sharing and Security</Text>
        <Text style={styles.text}>
          Third-Party Services: We may share your information with third-party
          service providers (e.g., payment processors, customer support)
          necessary for the app's operation. These parties are required to
          comply with strict data protection standards.{'\n\n'}
          Data Security: We implement encryption for data transmission and
          storage. Access to personal data is restricted to authorized personnel
          only, using robust authentication and access control measures. Regular
          security audits are conducted to identify and address vulnerabilities.
        </Text>

        <Text style={styles.sectionTitle}>5. User Rights</Text>
        <Text style={styles.text}>
          Consent: We obtain explicit consent from you before collecting and
          processing your personal data.{'\n\n'}
          Access and Control: You have the right to access, update, or delete
          your personal information at any time through the app’s settings.
          {'\n\n'}
          Anonymization: Where possible, we anonymize data to protect your
          identity during analytics.
        </Text>

        <Text style={styles.sectionTitle}>6. Data Retention</Text>
        <Text style={styles.text}>
          We retain your personal data only for as long as necessary to fulfill
          the purposes outlined in this policy, comply with legal obligations,
          or resolve disputes.
        </Text>

        <Text style={styles.sectionTitle}>7. Compliance with Laws</Text>
        <Text style={styles.text}>
          We adhere to relevant data protection regulations, including GDPR,
          CCPA, and HIPAA, to ensure the protection of your rights and legal
          compliance.
        </Text>

        <Text style={styles.sectionTitle}>
          8. Changes to this Privacy Policy
        </Text>
        <Text style={styles.text}>
          We may update this Privacy Policy from time to time. We will notify
          you of any significant changes by posting the new Privacy Policy in
          the app or through other communication channels.
        </Text>
      </ScrollView>
    </View>
  );
};

export default PrivacyPolicy;
