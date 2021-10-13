import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Modal,
  StyleSheet,
  SafeAreaView,
} from 'react-native';
import CalendarPicker from 'react-native-calendar-picker';
import Icon from 'react-native-vector-icons/AntDesign';
Icon.loadFont();

const Calendar = () => {
  let today = new Date();
  let dd = String(today.getDate()).padStart(2, '0');
  let mm = String(today.getMonth() + 1).padStart(2, '0');
  let yy = String(today.getFullYear()).padStart(2, '0');

  const [month, setMonth] = useState(mm);
  const [day, setDay] = useState(dd);
  const [year, setYear] = useState(yy);
  const [showModal, setShowModal] = useState(false);
  const [showValue, setShowValue] = useState(false);

  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={styles.view}>
        <Text>Enter Birth date </Text>
        <TextInput
          value={showValue && `${day}/${month}/${year}`}
          placeholder={'dd/mm/yyyy'}
          style={styles.textinput}
        />
        <TouchableOpacity
          onPress={() => {
            setShowModal(true);
          }}>
          <Icon name="calendar" size={20} />
        </TouchableOpacity>

        <Modal
          transparent={true}
          animationType="slide"
          visible={showModal}
          onRequestClose={() => setShowModal(false)}>
          <View style={styles.modalView}>
            <CalendarPicker
              startFromMonday={false}
              allowRangeSelection={false}
              todayBackgroundColor="pink"
              selectedDayColor="#7300e6"
              //showDayStragglers={true}
              dayShape="square"
              onMonthChange={e => setMonth(e._i.month)}
              onDateChange={e => {
                setDay(e._i.day);
                setYear(e._i.year);
              }}
              selectedDayTextStyle={{color: 'white'}}
            />
            <TouchableOpacity
              onPress={() => {
                setShowModal(false);
                setShowValue(true);
              }}
              style={styles.buttonView}>
              <Text style={styles.buttonText}> Close </Text>
            </TouchableOpacity>
          </View>
        </Modal>
      </View>
    </SafeAreaView>
  );
};

export default [{screenName: 'Calendar', componentName: Calendar}];

const styles = StyleSheet.create({
  mainContainer: {flex: 1, backgroundColor: 'white'},
  view: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    backgroundColor: 'white',
  },
  textinput: {
    marginLeft: 10,
    borderBottomColor: 'blue',
    borderBottomWidth: 1,
    padding: 10,
    marginRight: 10,
  },
  modalView: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  buttonView: {
    backgroundColor: '#7300e6',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {color: 'white', fontWeight: 'bold'},
});
