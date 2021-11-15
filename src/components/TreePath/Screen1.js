import React from 'react';
import {useNavigation} from '@react-navigation/core';
import {View, Text, TouchableOpacity} from 'react-native';
import {navigationRef} from '../../../App';

const Screen1 = () => {
  console.log(navigationRef.getRootState(), 'navigationRef2222');
  const navigation = useNavigation();
  return (
    <View>
      <TouchableOpacity onPress={() => navigation.navigate('Screen2')}>
        <Text> go to screen2 </Text>
      </TouchableOpacity>
    </View>
  );
};

export default [{screenName: 'Screen1', componentName: Screen1}];
