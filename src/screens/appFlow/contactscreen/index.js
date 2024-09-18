import React, {useState} from 'react';
import {
  View,
  Text,
  StatusBar,
  ScrollView,
  TouchableOpacity,
  FlatList,
} from 'react-native';

import {appIcons, colors, fontFamily, widthPixel} from '../../../services';
import {Button, ContactItem, Header} from '../../../components';
import {styles} from './styles';
import {CustomInput} from '../../../components/custominput';

const ContactScreen = ({navigation}) => {
  // const [selectedContacts, setSelectedContacts] = useState(0); // To track selected contacts
  const totalContacts = 17;
  const [contacts, setContacts] = useState([
    {id: '1', profileImage: appIcons.contactprofile, userName: 'John Doe'},
    {id: '2', profileImage: appIcons.contactprofile, userName: 'Jane Smith'},
    {id: '3', profileImage: appIcons.contactprofile, userName: 'Alice Johnson'},
    {id: '4', profileImage: appIcons.contactprofile, userName: 'Bob Martin'},
    {id: '5', profileImage: appIcons.contactprofile, userName: 'John Doe'},
    {id: '6', profileImage: appIcons.contactprofile, userName: 'Jane Smith'},
    {id: '7', profileImage: appIcons.contactprofile, userName: 'Alice Johnson'},
    {id: '8', profileImage: appIcons.contactprofile, userName: 'Bob Martin'},
    {id: '9', profileImage: appIcons.contactprofile, userName: 'John Doe'},
    {id: '10', profileImage: appIcons.contactprofile, userName: 'Jane Smith'},
    {id: '11', profileImage: appIcons.contactprofile, userName: 'John Doe'},
    {id: '12', profileImage: appIcons.contactprofile, userName: 'Jane Smith'},
    {
      id: '13',
      profileImage: appIcons.contactprofile,
      userName: 'Alice Johnson',
    },
    {id: '15', profileImage: appIcons.contactprofile, userName: 'Bob Martin'},
    {
      id: '16',
      profileImage: appIcons.contactprofile,
      userName: 'Alice Johnson',
    },
    {id: '17', profileImage: appIcons.contactprofile, userName: 'Bob Martin'},
  ]);

  const selectedContactsCount = contacts.filter(
    contact => contact.isSelected,
  ).length;

  // Toggle selection state for a contact
  const handleSelectionChange = id => {
    setContacts(prevContacts =>
      prevContacts.map(contact =>
        contact.id === id
          ? {...contact, isSelected: !contact.isSelected}
          : contact,
      ),
    );
  };
  const renderContactItem = ({item}) => (
    <ContactItem
      profileImage={item.profileImage}
      userName={item.userName}
      isSelected={item.isSelected} // Pass the selected state to ContactItem
      onSelectionChange={() => handleSelectionChange(item.id)} // Pass the toggle function
    />
  );
  return (
    <View style={[styles.container]}>
      <StatusBar backgroundColor={colors.white} barStyle={'dark-content'} />
      <Header leftIcon={true} titleleft={'Search Contact'} />
      <View style={styles.maincontainer}>
        <Text style={styles.centeredText}>Select Up To 20 Contacts</Text>

        <View style={styles.rowContainer}>
          <CustomInput
            style={styles.inputField}
            placeholder="Search Contacts"
            width={290}
            height={48}
            borderLeftWidth={1}
            borderRightWidth={1}
            borderTopWidth={1}
            marginHorizontal={-30}
          />
          <Button
            // onPress={() => navigation.navigate(routes.profileranking)}
            width={widthPixel(80)}
            height={45}
            fontSize={16}
            borderRadius={14}
            fontFamily={fontFamily.appTextItalic}>
            Invite
          </Button>
        </View>
        <View style={styles.FlatList}>
          <FlatList
            data={contacts}
            keyExtractor={item => item.id}
            renderItem={renderContactItem}
            contentContainerStyle={styles.listContainer}
          />
        </View>
        {selectedContactsCount > 0 && (
          <View style={styles.bottomContainer}>
            <Text style={styles.contactCountText}>
              {selectedContactsCount}/{totalContacts} Contacts Selected
            </Text>
            <View>
              <Button
                // onPress={() => navigation.navigate(routes.profileranking)}
                width={widthPixel(100)}
                height={40}
                fontSize={14}
                borderRadius={14}
                fontFamily={fontFamily.appTextItalic}>
                Send Invite
              </Button>
            </View>
          </View>
        )}
      </View>
    </View>
  );
};

export default ContactScreen;
