import React from 'react';
import {useNavigation} from '@react-navigation/core';
import {View, Text, TouchableOpacity, FlatList} from 'react-native';
import {ResponsiveSize} from '../../utils/ResponsiveSize';

const Screen1 = ({route}) => {
  let pathArr = route?.params?.pathArr;

  const arr = ['Site1', 'Site2', 'Site3', 'Site4'];
  const navigation = useNavigation();

  const arrCal = item => {
    if (pathArr?.length === 1) {
      pathArr.push(item);
    } else {
      pathArr?.splice(1, 1, item);
    }
    navigation.navigate('Screen2', {pathArr});
  };
  return (
    <View>
      <FlatList
        data={arr}
        contentContainerStyle={{paddingLeft: ResponsiveSize(5)}}
        showsVerticalScrollIndicator={false}
        keyExtractor={index => index}
        renderItem={({item}) => {
          return (
            <TouchableOpacity
              onPress={() => {
                arrCal(item);
              }}
              style={{marginVertical: ResponsiveSize(10)}}>
              <Text>{item}</Text>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

export default [{screenName: 'Screen1', componentName: Screen1}];
