import React from 'react';
import {SafeAreaView, Text, TouchableOpacity} from 'react-native';
import PushNotification, {Importance} from 'react-native-push-notification';

const LocalNotifications = () => {
  PushNotification.createChannel(
    {
      channelId: 'channel-id123',
      channelName: 'My channel',
      channelDescription: 'A channel to categorise your notifications',
      playSound: false,
      soundName: 'default',
      importance: Importance.HIGH,
      vibrate: true,
    },
    created => console.log(`createChannel returned '${created}'`),
  );

  const notify = () => {
    PushNotification.localNotificationSchedule({
      channelId: 'channel-id123',
      message: 'Where are you going? Come back!',
      date: new Date(Date.now() + 1 * 10000),
      allowWhileIdle: true,
      repeatTime: 1,
      ignoreInForeground: false,
    });
  };

  return (
    <SafeAreaView>
      <TouchableOpacity onPress={() => notify()}>
        <Text>Click me</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default [
  {screenName: 'LocalNotifications', componentName: LocalNotifications},
];
