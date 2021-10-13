import React from 'react';
import {Linking} from 'react-native';
import QRCodeScanner from 'react-native-qrcode-scanner';

const QrScanner = () => {
  const onSuccess = e => {
    Linking.openURL(e.data).catch(err =>
      console.error('An error occured', err),
    );
  };

  return (
    <QRCodeScanner
      onRead={onSuccess}
      showMarker={true}
      cameraType={'back'}
      markerStyle={{borderColor: 'blue', borderRadius: 20}}
      cameraStyle={{height: '100%', width: '100%'}}
    />
  );
};
export default [{screenName: 'QrScanner', componentName: QrScanner}];
