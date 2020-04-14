/* eslint-disable react-native/no-inline-styles */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

const App: () => React$Node = () => {
  return (
    <View style={styles.parent}>
      <View
        style={{
          backgroundColor: '#493657',
          width: '100%',
          height: 80,
          borderRadius: 4,
          flexDirection: 'row',
          padding: 10,
          marginBottom: 20,
          position: 'relative',
        }}>
        <View
          style={{
            backgroundColor: 'red',
            width: 20,
            height: 20,
            borderRadius: 100,
            position: 'absolute',
            right: -10,
            top: -10,
          }}
        />
      </View>
      <View
        style={[
          {
            backgroundColor: '#EDF8EF',
            marginLeft: 8,
            justifyContent: 'center',
            alignItems: 'center',
          },
          styles.box,
        ]}>
        <Text style={{textAlign: 'center'}}>Center</Text>
      </View>
      <View
        style={[
          {
            backgroundColor: '#FFD1BA',
          },
          styles.box,
        ]}
      />
      <View
        style={[
          {
            backgroundColor: '#CE7DA5',
          },
          styles.box,
        ]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  parent: {
    backgroundColor: 'white',
    flex: 1,
    flexWrap: 'wrap',
    flexDirection: 'row',
    paddingTop: 8,
    borderRadius: 4,
    paddingHorizontal: 14,
  },
  box: {
    flex: 1,
    height: 80,
    borderRadius: 4,
    marginHorizontal: 4,
  },
});

export default App;
