import {View, Text, Button} from 'react-native';
import React from 'react';

const Member = ({navigation}) => {
  return (
    <View>
      <Text style={{color: 'black'}}>Member</Text>
      <Button
        title="Detail"
        onPress={() => navigation.navigate('MemberDetailScreen')}
      />
    </View>
  );
};

export default Member;
