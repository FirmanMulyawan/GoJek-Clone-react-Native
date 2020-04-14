import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {
  Home,
  NewsDetail,
  Orders,
  OrderDetail,
  ScanQRCode,
} from '../../containers/pages';
import GeoPosition from '../../containers/pages/GeoPosition/index';

const HomeStack = createStackNavigator();
function RootStack() {
  return (
    <NavigationContainer>
      <HomeStack.Navigator headerMode="none" initialRouteName="Home">
        <HomeStack.Screen name="Home" component={Home} />
        <HomeStack.Screen name="Orders" component={Orders} />
        <HomeStack.Screen name="OrderDetail" component={OrderDetail} />
        <HomeStack.Screen name="News Detail" component={NewsDetail} />
        <HomeStack.Screen name="Geo Position" component={GeoPosition} />
        <HomeStack.Screen name="Scan QR Code" component={ScanQRCode} />
      </HomeStack.Navigator>
    </NavigationContainer>
  );
}

export default RootStack;
