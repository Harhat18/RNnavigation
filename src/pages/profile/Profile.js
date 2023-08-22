import {View, Text, Button} from 'react-native';
import React from 'react';

const Profile = ({navigation}) => {
  return (
    <View>
      <Text>Profile</Text>
      <Button
        title="Edit Profile"
        onPress={() => navigation.navigate('ProfileEditScreen')}
      />
    </View>
  );
};

export default Profile;
