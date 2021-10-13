import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
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
    console.log('herenotify');
    PushNotification.localNotificationSchedule({
      channelId: 'channel-id123',
      message: 'My Notification Message',
      date: new Date(Date.now() + 1 * 10000),
      allowWhileIdle: true,
      repeatTime: 1,
      ignoreInForeground: false,
    });
  };

  return (
    <View>
      <TouchableOpacity onPress={() => notify()}>
        <Text>Remind me</Text>
      </TouchableOpacity>
    </View>
  );
};

export default [
  {screenName: 'LocalNotifications', componentName: LocalNotifications},
];
