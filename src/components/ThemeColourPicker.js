import React, {useState} from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import {ColorPicker, fromHsv} from 'react-native-color-picker';
import {useDispatch, useSelector} from 'react-redux';
import {ResetColorAction, SetColorAction} from '../store/actions/ThemeAction';

const ThemeColourPicker = () => {
  const [selectedColor, setSelectedColor] = useState(
    useSelector(state => state.ThemeReducer.color),
  );
  const dispatch = useDispatch();

  return (
    <View style={styles.mainView}>
      <ColorPicker
        onColorChange={color => setSelectedColor(fromHsv(color))}
        style={styles.container}
      />
      <View style={{flex: 1}} />
      <TouchableOpacity
        onPress={() => {
          dispatch(SetColorAction(selectedColor));
        }}
        style={styles.buttonView}>
        <Text style={styles.buttonText}>Set Theme </Text>
      </TouchableOpacity>
      <View style={{flex: 0.5}} />
      <TouchableOpacity
        onPress={() => {
          dispatch(ResetColorAction());
        }}
        style={styles.buttonView}>
        <Text style={styles.buttonText}> Reset Theme </Text>
      </TouchableOpacity>
      <View style={{flex: 1}} />
    </View>
  );
};

export default [
  {screenName: 'ThemeColourPicker', componentName: ThemeColourPicker},
];

const styles = StyleSheet.create({
  container: {height: '70%', width: '90%'},
  buttonView: {
    backgroundColor: 'white',
    paddingVertical: 5,
    borderRadius: 15,
    width: 150,
  },
  buttonText: {fontSize: 20, textAlign: 'center'},
  mainView: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
  },
});
