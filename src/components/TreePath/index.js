import {useNavigation} from '@react-navigation/core';
import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

const TreePath = ({}) => {
  const navigation = useNavigation();

  return (
    <View>
      <TouchableOpacity onPress={() => navigation.navigate('Screen1')}>
        <Text> go to screen1 </Text>
      </TouchableOpacity>
    </View>
  );
};
export default [{screenName: 'TreePath', componentName: TreePath}];
