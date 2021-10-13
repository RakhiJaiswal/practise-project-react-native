import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {
  FlatList,
  Pressable,
  SafeAreaView,
  Text,
  View,
  StyleSheet,
} from 'react-native';
import {useSelector} from 'react-redux';

const Home = () => {
  const navigation = useNavigation();
  const components = [
    'QR Scanner',
    'Parallax Header',
    'Theme Colour Picker',
    'Swiper',
    'ParallaxWithHeader',
    'Video',
    'Open Direction',
    'Calendar',
    'Local Notifications',
    'ApiData',
    'Localisation',
    'Text To Speech',
    'Speech To Text',
  ];
  const color = useSelector(state => state.ThemeReducer.color);

  console.log(
    useSelector(state => state.ThemeReducer),
    'storeee',
  );

  const itemPressed = val => {
    switch (val) {
      case 'QR Scanner':
        navigation.navigate('QrScanner');
        break;
      case 'Parallax Header':
        navigation.navigate('ParallaxHeader');
        break;
      case 'Theme Colour Picker':
        navigation.navigate('ThemeColourPicker');
        break;
      case 'Swiper':
        navigation.navigate('Swiper');
        break;
      case 'ParallaxWithHeader':
        navigation.navigate('ParallaxWithHeader');
        break;
      case 'Video':
        navigation.navigate('Video');
        break;
      case 'Open Direction':
        navigation.navigate('OpenDirection');
        break;
      case 'Calendar':
        navigation.navigate('Calendar');
        break;
      case 'Local Notifications':
        navigation.navigate('LocalNotifications');
        break;
      case 'ApiData':
        navigation.navigate('ApiData');
        break;
      case 'Localisation':
        navigation.navigate('Localisation');
        break;
      case 'Text To Speech':
        navigation.navigate('TextToSpeech');
        break;
      case 'Speech To Text':
        navigation.navigate('SpeechToText');
        break;
    }
  };

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <FlatList
        data={components}
        showsVerticalScrollIndicator={false}
        keyExtractor={index => index}
        renderItem={({index, item}) => {
          return (
            <Pressable
              onPress={() => {
                itemPressed(item);
              }}>
              <View style={{...styles.itemView, borderBottomColor: color}}>
                <Text style={{...styles.itemText, color: color}}>
                  {index + 1}. {item}
                </Text>
              </View>
            </Pressable>
          );
        }}
      />
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  safeAreaView: {backgroundColor: 'white', flex: 1},
  itemView: {
    paddingVertical: 10,

    borderBottomWidth: 2,
    paddingHorizontal: 10,
  },
  itemText: {fontSize: 17},
});
