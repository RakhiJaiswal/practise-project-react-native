import {useNavigation} from '@react-navigation/core';
import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import {ResponsiveSize} from '../../utils/ResponsiveSize';

const TreePath = ({}) => {
  const navigation = useNavigation();
  const arr = ['Project1', 'Project2', 'Project3', 'Project4'];
  let pathArr = [];

  const arrCal = item => {
    if (pathArr?.length === 0) {
      pathArr.push(item);
    } else {
      pathArr?.splice(0, 1, item);
    }
    navigation.navigate('Screen1', {pathArr});
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
export default [{screenName: 'TreePath', componentName: TreePath}];
