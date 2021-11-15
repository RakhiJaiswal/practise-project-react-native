import React from 'react';
import {SafeAreaView, Text, FlatList, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/core';

const Screen2 = ({route}) => {
  let pathArr = route?.params?.pathArr || [];
  const navigation = useNavigation();
  return (
    // eslint-disable-next-line react-native/no-inline-styles
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity onPress={() => navigation.navigate('TreePath')}>
          <Text style={{color: 'blue'}}> TreePath </Text>
        </TouchableOpacity>
        <FlatList
          data={pathArr}
          horizontal
          renderItem={({item, index}) => (
            <TouchableOpacity
              onPress={() =>
                index === 0 ? navigation.navigate('Screen1', {pathArr}) : {}
              }>
              <Text style={{color: index === 0 ? 'blue' : 'black'}}>
                {' '}
                > {item}{' '}
              </Text>
            </TouchableOpacity>
          )}
        />
      </View>
      <Text> sample text </Text>
    </SafeAreaView>
  );
};

export default [{screenName: 'Screen2', componentName: Screen2}];
