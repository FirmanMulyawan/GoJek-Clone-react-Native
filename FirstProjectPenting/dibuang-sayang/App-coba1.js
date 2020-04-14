/* eslint-disable react-native/no-inline-styles */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  // SafeAreaView,
  StyleSheet,
  // ScrollView,
  View,
  Text,
  // StatusBar,
} from 'react-native';

// import {
//   Header,
//   LearnMoreLinks,
//   Colors,
//   DebugInstructions,
//   ReloadInstructions,
// } from 'react-native/Libraries/NewAppScreen';

const App: () => React$Node = () => {
  return (
    <View style={styles.parent}>
      <View
        style={{
          backgroundColor: '#EDF8EF',
          flex: 2,
          height: 50,
          marginHorizontal: 4,
          marginLeft: 8,
          borderRadius: 4,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        {/* <Text style={{textAlign: 'center'}}>Center</Text> */}
        <Text style={{textAlign: 'center'}}>Center</Text>
      </View>
      <View
        style={{
          backgroundColor: '#FFD1BA',
          flex: 2,
          height: 60,
          marginHorizontal: 4,
          borderRadius: 4,
        }}
      />
      <View
        style={{
          backgroundColor: '#CE7DA5',
          flex: 1,
          height: 70,
          marginHorizontal: 4,
          borderRadius: 4,
        }}
      />
      <View
        style={{
          backgroundColor: '#493657',
          // flex: 3,
          width: '100%',
          height: 80,
          // marginHorizontal: 4,
          // marginRight: 8,
          borderRadius: 4,
          flexDirection: 'row',
          padding: 10,
          marginTop: 20,
          position: 'relative',
        }}>
        {/* <View style={{backgrou ndColor: 'blue', flex: 1, marginHorizontal: 4}} /> */}
        {/* <View style={{backgroundColor: 'blue', flex: 1, marginHorizontal: 4}} /> */}
        {/* <View style={{backgroundColor: 'blue', flex: 1, marginHorizontal: 4}} /> */}
        <View
          style={{
            backgroundColor: 'blue',
            width: 20,
            height: 20,
            borderRadius: 100,
            position: 'absolute',
            right: -10,
            top: -10,
          }}
        />
      </View>
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
    // margin: 20,
    // marginHorizontal: 40,
    // alignItems: 'flex-end',
  },
});

export default App;
