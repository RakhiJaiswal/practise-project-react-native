import React, {useState, useEffect, useRef} from 'react';
import {View, TouchableOpacity, Text, Pressable} from 'react-native';
import Slider from 'react-native-slider';
import Video from 'react-native-video';
import Icon from 'react-native-vector-icons/FontAwesome';
import IconA from 'react-native-vector-icons/Octicons';
import IconB from 'react-native-vector-icons/MaterialIcons';

Icon.loadFont();
IconA.loadFont();
IconB.loadFont();

const VideoPlayer = () => {
  const videoPlayer = useRef(null);
  const [duration, setDuration] = useState(0);
  const [paused, setPaused] = useState(false);
  const [muted, setMuted] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [volume, setVolume] = useState(10);
  const [isLoading, setIsLoading] = useState(true);
  const [replay, setReplay] = useState(false);
  const [showControls, setShowControls] = useState(false);
  let dd = duration;
  let d = (dd - (dd %= 60)) / 60 + (9 < dd ? ':' : ':0') + dd;
  let cc = currentTime;
  let c = (cc - (cc %= 60)) / 60 + (9 < cc ? ':' : ':0') + Math.round(cc);
  let count = 0;
  let Timer;

  const onProgress = data => {
    if (!isLoading) {
      setCurrentTime(data.currentTime);
      setReplay(false);
    }
  };

  const onLoad = data => {
    setDuration(Math.round(data.duration));
    setIsLoading(false);
  };

  useEffect(() => {
    showControls && setTimeout(() => setShowControls(false), 3000);
  }, [showControls]);

  return (
    <View style={{flex: 1, backgroundColor: 'yellow'}}>
      <Text>{isLoading && 'video loading'}</Text>

      <View style={{height: 20}} />
      <View>
        <Pressable
          onPress={() => {
            setShowControls(true);
          }}>
          <Video
            source={{
              uri: 'https://www.w3schools.com/html/mov_bbb.mp4',
              type: 'mp4',
            }}
            style={{width: '100%', height: 200}}
            controls={false}
            onError={e => console.log(e)}
            onBuffer={() => console.log('buffering')}
            fullscreenAutorotate={true}
            fullscreenOrientation="all"
            ref={videoPlayer}
            resizeMode="stretch"
            onProgress={onProgress}
            paused={paused}
            muted={muted}
            onLoad={onLoad}
            volume={volume}
            onEnd={() => setReplay(true)}
          />
        </Pressable>

        {showControls && (
          <View
            style={{
              position: 'absolute',
              height: 200,
              width: '100%',
              backgroundColor: 'black',
              justifyContent: 'flex-end',
              opacity: 0.6,
            }}>
            <View style={{flex: 2}} />
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
              }}>
              <TouchableOpacity
                onPress={() => {
                  count++;
                  if (count === 2) {
                    videoPlayer.current.seek(currentTime - 2);
                    clearTimeout(Timer);
                  } else {
                    Timer = setTimeout(() => {
                      count = 0;
                    }, 2000);
                  }
                }}>
                <IconB name="replay-5" size={28} color="#919AAD" />
              </TouchableOpacity>
              <TouchableOpacity
                style={{marginHorizontal: 100}}
                onPress={() => {
                  replay ? videoPlayer.current.seek(0) : setPaused(!paused);
                }}>
                {replay ? (
                  <IconB name="replay" size={18} color="#919AAD" />
                ) : paused ? (
                  <Icon name="play" size={20} color="#919AAD" />
                ) : (
                  <Icon name="pause" size={18} color="#919AAD" />
                )}
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  count++;
                  if (count === 2) {
                    videoPlayer.current.seek(currentTime + 2);
                    clearTimeout(Timer);
                  } else {
                    Timer = setTimeout(() => {
                      count = 0;
                    }, 2000);
                  }
                }}>
                <IconB name="forward-5" size={28} color="#919AAD" />
              </TouchableOpacity>
            </View>
            <View style={{flex: 1}} />
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <TouchableOpacity
                style={{
                  marginLeft: 10,
                  width: 30,
                  height: 30,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
                onPress={() => {
                  console.log('pressed', muted);
                  setMuted(!muted);
                  muted ? setVolume(0) : setVolume(10);
                }}>
                {muted ? (
                  <IconA name="unmute" size={18} color="#919AAD" />
                ) : (
                  <IconA name="mute" size={18} color="#919AAD" />
                )}
              </TouchableOpacity>

              <Slider
                style={{
                  width: 100,
                  marginHorizontal: 10,
                }}
                thumbStyle={{
                  width: 0,
                  backgroundColor: 'transparent',
                }}
                trackStyle={{height: 4, backgroundColor: '#919AAD'}}
                maximumValue={10}
                minimumValue={0}
                value={volume}
                minimumTrackTintColor={'red'}
                onValueChange={val => {
                  console.log(Math.floor(volume), muted);
                  setVolume(val);
                  volume === 0 ? setMuted(false) : setMuted(true);
                }}
              />
              <View style={{flex: 1}} />

              <Text style={{color: 'white', fontSize: 11, marginRight: 10}}>
                {/* {Math.round(currentTime)} / {duration} */}
                {c} / {d}
              </Text>
            </View>
            <Slider
              maximumValue={duration}
              minimumValue={0}
              value={currentTime}
              thumbStyle={{width: 0}}
              minimumTrackTintColor={'red'}
              style={{
                width: '100%',
                position: 'absolute',
                bottom: -18,
              }}
              onValueChange={value => videoPlayer.current.seek(value)}
            />
          </View>
        )}
      </View>
    </View>
  );
};

export default [{screenName: 'Video', componentName: VideoPlayer}];
