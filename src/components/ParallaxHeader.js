import React, {useState} from 'react';
import {Text, View, StyleSheet, FlatList} from 'react-native';
import ParallaxScrollView from 'react-native-parallax-scroll-view';

const ParallaxHeader = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  const data = [
    1, 2, 33, 3, 44, 5, 5, 66, 77, 88, 4, 35, 6, 7, 83, 356, 788, 54, 236,
  ];
  const days = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];
  const colour = ['purple', 'green', 'blue', 'black', 'pink', 'orange', 'red'];
  return (
    <ParallaxScrollView
      onScroll={(e: any) => setScrollPosition(e.nativeEvent.contentOffset.y)}
      showsVerticalScrollIndicator={false}
      nestedScrollEnabled={false}
      bounces={false}
      parallaxBackgroundScrollSpeed={3}
      parallaxForegroundScrollSpeed={3}
      backgroundColor="white"
      contentBackgroundColor="white"
      parallaxHeaderHeight={320}
      stickyHeaderHeight={80}
      fadeOutForeground={false}
      renderStickyHeader={() => (
        <View style={styles.headerView}>
          <FlatList
            contentContainerStyle={styles.container}
            showsHorizontalScrollIndicator={false}
            horizontal
            data={colour}
            keyExtractor={index => index}
            renderItem={({item}) => (
              <View style={{...styles.colorss, backgroundColor: item}} />
            )}
          />
        </View>
      )}
      renderForeground={() => (
        <View style={styles.foregroundView}>
          <View style={styles.stepsView}>
            <Text style={styles.stepsText}>Take happy steps!</Text>
          </View>
          <FlatList
            showsVerticalScrollIndicator={false}
            data={days}
            keyExtractor={index => index}
            renderItem={({item, index}) =>
              scrollPosition === 0 ? (
                <View style={styles.daysView}>
                  <View
                    style={{
                      ...styles.daysColour,
                      backgroundColor: colour[index],
                    }}
                  />
                  <Text style={styles.daysText}>{item}</Text>
                </View>
              ) : (
                <View />
              )
            }
          />
        </View>
      )}>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={data}
        keyExtractor={index => index}
        renderItem={({item, index}) => (
          <View style={styles.itemView}>
            <Text style={styles.itemText}>
              {item} do steps jsgdfjs sdjhf {index + 1}
            </Text>
          </View>
        )}
      />
    </ParallaxScrollView>
  );
};
export default [{screenName: 'ParallaxHeader', componentName: ParallaxHeader}];

const styles = StyleSheet.create({
  itemView: {
    margin: 10,
    borderRadius: 5,
    borderColor: 'gray',
    borderWidth: 1,
    paddingVertical: 5,
    paddingLeft: 10,
  },
  itemText: {color: 'blue'},
  daysText: {color: 'black'},
  daysColour: {
    height: 18,
    width: 18,
    borderRadius: 10,
    marginRight: 10,
  },
  daysView: {
    margin: 10,
    flexDirection: 'row',
  },
  stepsText: {color: 'white', fontWeight: 'bold', fontSize: 18},
  stepsView: {
    backgroundColor: 'red',
    borderRadius: 5,
    padding: 10,
  },
  foregroundView: {margin: 10},
  headerView: {
    padding: 20,
    alignItems: 'center',
  },
  container: {
    flexDirection: 'row',
  },
  colorss: {
    height: 18,
    width: 18,
    borderRadius: 10,
    marginRight: 10,
  },
});
