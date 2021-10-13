import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  Linking,
  Platform,
  SafeAreaView,
} from 'react-native';
import {useSelector} from 'react-redux';

const OpenDirection = () => {
  const [address, setAddress] = useState('');
  const url = Platform.select({
    ios: `maps:0,0?q=${address}`,
    android: `geo:0,0?q=${address}`,
  });
  return (
    <SafeAreaView style={styles.container}>
      <TextInput
        placeholder={'Enter location'}
        style={{
          ...styles.textInput,
          borderColor: useSelector(state => state.ThemeReducer.color),
        }}
        onChangeText={e => setAddress(e)}
      />
      <View style={styles.padder} />
      <TouchableOpacity
        onPress={() => {
          Linking.openURL(url);
        }}
        style={{
          ...styles.buttonView,
          backgroundColor: useSelector(state => state.ThemeReducer.color),
        }}
        disabled={address === '' ? true : false}>
        <Text style={styles.buttonText}>Find Direction</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default [{screenName: 'OpenDirection', componentName: OpenDirection}];

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    backgroundColor: 'white',
  },
  textInput: {
    width: '60%',
    borderBottomWidth: 1,
    padding: 10,
  },
  buttonView: {
    padding: 10,
    width: '40%',
    borderRadius: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  padder: {height: 30},
});
