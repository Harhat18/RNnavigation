import {View, Text, Button} from 'react-native';
import React from 'react';

const MemberDetail = ({navigation}) => {
  return (
    <View>
      <Text style={{color: 'black'}}>MemberDetail</Text>
      <Button
        title="Member Update"
        onPress={() => navigation.navigate('MemberUpdateScreen')}
      />
    </View>
  );
};

export default MemberDetail;
