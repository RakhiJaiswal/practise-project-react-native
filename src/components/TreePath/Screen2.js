import React from 'react';
import {View, Text} from 'react-native';
import {navigationRef} from '../../../App';
const Screen2 = () => {
  console.log(navigationRef.getRootState(), 'navigationRef2222');
  return (
    <View>
      <Text>jhshgfjk 2</Text>
    </View>
  );
};

export default [{screenName: 'Screen2', componentName: Screen2}];
