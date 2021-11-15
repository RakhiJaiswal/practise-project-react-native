import React from 'react';
import {View, Text, SafeAreaView, Pressable, StyleSheet} from 'react-native';
import {useSelector} from 'react-redux';
import {useDispatch} from 'react-redux';
import {LanguageAction} from '../../store/actions/ThemeAction';
import {ResponsiveSize} from '../../utils/ResponsiveSize';
import enData from './English.json';
import spData from './Spanish.json';

const Localisation = () => {
  const language = useSelector(state => state.ThemeReducer.language);
  const languageObj = language === 'English' ? enData : spData;
  const dispatch = useDispatch();

  return (
    <SafeAreaView style={styles.mainContainer}>
      <Text style={styles.chooseText}>Choose Language</Text>
      <View style={styles.languageView}>
        <Pressable
          // eslint-disable-next-line react-native/no-inline-styles
          style={{
            ...styles.option,
            backgroundColor: language === 'English' ? 'yellow' : 'transparent',
          }}
          onPress={() => dispatch(LanguageAction('English'))}>
          <Text> English</Text>
        </Pressable>
        <Pressable
          // eslint-disable-next-line react-native/no-inline-styles
          style={{
            ...styles.option,
            backgroundColor: language === 'Spanish' ? 'yellow' : 'transparent',
          }}
          onPress={() => dispatch(LanguageAction('Spanish'))}>
          <Text> Spanish</Text>
        </Pressable>
      </View>

      <Text>{languageObj.hi}</Text>
      <Text>{languageObj.press_me}</Text>
      <Text>{languageObj.selectedText}</Text>
    </SafeAreaView>
  );
};

export default [{screenName: 'Localisation', componentName: Localisation}];

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
  },
  chooseText: {
    fontSize: ResponsiveSize(20),
  },
  languageView: {
    padding: ResponsiveSize(5),
    flexDirection: 'row',
    backgroundColor: 'orange',
    borderRadius: ResponsiveSize(25),
    marginVertical: ResponsiveSize(30),
  },
  option: {padding: ResponsiveSize(10), borderRadius: ResponsiveSize(20)},
});
