import React, {useState} from 'react';
import {Dimensions, ScrollView, StyleSheet, Text, View} from 'react-native';

const Swiper = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const colours = ['red', 'blue', 'pink'];
  const deviceWidth = Dimensions.get('window').width;
  return (
    <View>
      <ScrollView
        horizontal
        pagingEnabled
        onMomentumScrollEnd={event =>
          setActiveSlide(event.nativeEvent.contentOffset.x / deviceWidth)
        }
        showsHorizontalScrollIndicator={false}>
        {colours.map(item => (
          <View
            style={{
              backgroundColor: item,
              height: 100,
              width: Dimensions.get('window').width,
            }}>
            <Text> {item} </Text>
          </View>
        ))}
      </ScrollView>
      <View style={{flexDirection: 'row', alignSelf: 'center'}}>
        {colours.map((item, index) => (
          <View
            style={{
              backgroundColor: index === activeSlide ? 'black' : 'gray',
              height: 10,
              width: 10,
              margin: 10,
              borderRadius: 5,
            }}></View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({});
export default [{screenName: 'Swiper', componentName: Swiper}];
