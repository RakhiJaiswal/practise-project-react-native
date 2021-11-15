import React from 'react';
import {View, Text, StyleSheet, Pressable} from 'react-native';
import Video from 'react-native-video';
import {ResponsiveSize} from '../utils/ResponsiveSize';

const BackgroundVideo = () => {
  const videoPlayer = React.useRef(null);
  return (
    <View>
      <Video
        source={{
          uri: 'https://www.w3schools.com/html/mov_bbb.mp4',
          // type: 'mp4',
        }}
        style={styles.video}
        ref={videoPlayer}
        resizeMode="stretch"
        muted={true}
        repeat={true}
        rate={1.0}
        ignoreSilentSwitch={'obey'}
      />
      <View style={styles.container}>
        <Text style={styles.heading}>WELCOME TO THE CLUBHOUSE</Text>
        <Text style={styles.subText}>
          Mickey Mouse, Minny Mouse, Donald Duck, Goofy warms welcome you!!!{' '}
        </Text>
        <Pressable style={styles.loginView}>
          <Text style={styles.loginText}> Login </Text>
        </Pressable>
      </View>
    </View>
  );
};

export default [
  {screenName: 'BackgroundVideo', componentName: BackgroundVideo},
];

const styles = StyleSheet.create({
  video: {width: '100%', height: '100%'},
  container: {
    backgroundColor: 'black',
    opacity: 0.5,
    height: '100%',
    width: '100%',
    top: 0,
    position: 'absolute',
    justifyContent: 'center',
  },
  heading: {
    color: 'white',
    fontSize: ResponsiveSize(40),
    fontWeight: 'bold',
    textAlign: 'center',
  },
  subText: {
    color: 'white',
    fontSize: ResponsiveSize(20),
    textAlign: 'center',
  },
  loginView: {
    backgroundColor: 'white',
    borderRadius: ResponsiveSize(20),
    paddingVertical: ResponsiveSize(10),
    width: '30%',
    alignSelf: 'center',
    marginTop: ResponsiveSize(50),
  },
  loginText: {textAlign: 'center', fontWeight: 'bold'},
});
