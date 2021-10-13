import React, {useState} from 'react';
import {SafeAreaView, TextInput, Button, StyleSheet} from 'react-native';

import Tts from 'react-native-tts';

const TextToSpeech = () => {
  const [text, setText] = useState();

  Tts.setDefaultLanguage('en-GB');
  Tts.setDefaultVoice('com.apple.ttsbundle.Daniel-compact');

  return (
    <SafeAreaView style={styles.container}>
      <TextInput
        multiline
        value={text}
        placeholder={'enter text'}
        onChangeText={e => setText(e)}
        style={styles.textView}
      />
      <Button title="Listen" onPress={() => Tts.speak(text)} />
    </SafeAreaView>
  );
};

export default [{screenName: 'TextToSpeech', componentName: TextToSpeech}];

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: 'white'},
  textView: {
    borderWidth: 1,
    width: '50%',
    alignSelf: 'center',
    padding: 5,
    marginTop: 10,
  },
});
