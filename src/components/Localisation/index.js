import React from 'react';
import {View, Text, TouchableOpacity, SafeAreaView} from 'react-native';
import {useSelector} from 'react-redux';
import {useDispatch} from 'react-redux';
import {LanguageAction} from '../../store/actions/ThemeAction';
import enData from './English.json';
import spData from './Spanish.json';

const Localisation = () => {
  const language = useSelector(state => state.ThemeReducer.language);
  const languageObj = language === 'English' ? enData : spData;
  const dispatch = useDispatch();

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <Text>Choose Language </Text>
      <View style={{padding: 10, flexDirection: 'row'}}>
        <TouchableOpacity
          style={{backgroundColor: 'yellow', padding: 10}}
          onPress={() => dispatch(LanguageAction('English'))}>
          <Text> English</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{backgroundColor: 'pink', padding: 10}}
          onPress={() => dispatch(LanguageAction('Spanish'))}>
          <Text> Spanish</Text>
        </TouchableOpacity>
      </View>
      <Text>
        language Selected : {language} {`\n`}
      </Text>
      <Text>{languageObj.hi}</Text>
      <Text>{languageObj.press_me}</Text>
      <Text>{languageObj.selectedText}</Text>
    </SafeAreaView>
  );
};

export default [{screenName: 'Localisation', componentName: Localisation}];
