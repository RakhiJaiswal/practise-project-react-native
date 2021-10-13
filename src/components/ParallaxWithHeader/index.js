import React, {useState} from 'react';
import {Text, View, StyleSheet, FlatList} from 'react-native';
import Parallax from './Parallax';

const ParallaxWithHeader = () => {
  return (
    <View style={{flex: 1}}>
      <View
        style={{
          flex: 1,
          overflow: 'hidden',
          zIndex: 999,
          backgroundColor: 'white',
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
        }}>
        <Text> jgu</Text>
        <Text> jgu</Text>
        <Text> jgu</Text>
      </View>
      <View style={{flex: 1}}>
        <Parallax />
      </View>
    </View>
  );
};
export default [
  {screenName: 'ParallaxWithHeader', componentName: ParallaxWithHeader},
];
