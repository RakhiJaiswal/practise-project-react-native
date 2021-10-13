import React, {useEffect} from 'react';
import {View, Text, TouchableOpacity, StyleSheet, FlatList} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {CategoryAction, FetchApiRequest} from '../store/actions/FetchApiAction';

const ApiData = () => {
  const dispatch = useDispatch();
  const productsList = useSelector(state => state.fetchApiReducer.categoryData);
  const categoryArr = [
    'electronics',
    'jewelery',
    "men's clothing",
    "women's clothing",
  ];

  useEffect(() => {
    dispatch(FetchApiRequest());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <View style={styles.container}>
      <Text> Select Category </Text>
      <FlatList
        contentContainerStyle={styles.flatlistContainer}
        numColumns={2}
        data={categoryArr}
        renderItem={({item}) => (
          <TouchableOpacity
            onPress={() => {
              dispatch(CategoryAction(item));
            }}
            style={styles.categoryButton}>
            <Text>{item}</Text>
          </TouchableOpacity>
        )}
        keyExtractor={index => index}
      />

      <FlatList
        data={productsList}
        renderItem={({item, index}) => (
          <Text>
            {index + 1}. {item.title}
          </Text>
        )}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default [{screenName: 'ApiData', componentName: ApiData}];

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'pink',
    alignItems: 'center',
    paddingTop: 10,
  },
  flatlistContainer: {
    alignSelf: 'center',
    width: '100%',
  },
  categoryButton: {
    width: '45%',
    height: 100,
    backgroundColor: 'white',
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
