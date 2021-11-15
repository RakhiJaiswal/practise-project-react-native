import React from 'react';
import {
  NavigationContainer,
  createNavigationContainerRef,
} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Home from './src/screens/Home';
import {store, persistor} from './src/store';
import {Provider} from 'react-redux';
import ComponentScreens from './src/components';
import {PersistGate} from 'redux-persist/integration/react';
import PushNotificationIOS from '@react-native-community/push-notification-ios';
import PushNotification from 'react-native-push-notification';
import {Platform} from 'react-native';
import 'react-native-gesture-handler';

const Stack = createNativeStackNavigator();
export const navigationRef = createNavigationContainerRef();

const ComponentScreen = [...ComponentScreens];

const App = () => {
  PushNotification.configure({
    onRegister: function (token) {
      console.log('TOKEN:', token);
    },
    onNotification: function (notification) {
      console.log('NOTIFICATION:', notification);
      notification.finish(PushNotificationIOS.FetchResult.NoData);
    },

    permissions: {
      alert: true,
      badge: true,
      sound: true,
    },
    popInitialNotification: true,
    requestPermissions: Platform.OS === 'ios',
  });
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer ref={navigationRef}>
          <Stack.Navigator
            initialRouteName="Home"
            screenOptions={{headerBackTitle: 'Back'}}>
            <Stack.Screen name="Welcome" component={Home} />
            {ComponentScreen.map(screen => (
              <Stack.Screen
                name={screen.screenName}
                component={screen.componentName}
              />
            ))}
          </Stack.Navigator>
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
};

export default App;
