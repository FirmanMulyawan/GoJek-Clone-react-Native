/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-unused-vars */
import React, {Component} from 'react';
import {
  ScrollView,
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

// Component
import GopayFeature from '../../../components/molecules/GoPayFeature/index';
import MainFeature from '../../../components/molecules/MainFeature';
import GoNews from '../../../components/molecules/GoNews';
import GoInfo from '../../../components/molecules/GoInfo';
import GoBanner from '../../../components/molecules/GoBanner';
import SearchFeature from '../../../components/molecules/SearchFeature';
import ScrollableProducts from '../../organisms/ScrollableProducts';
import Navbar from '../../organisms/NavBar';
import HomeMainFeature from '../../organisms/HomeMainFeature';
import HomeGoPay from '../../organisms/HomeGoPay';

class Home extends Component {
  render() {
    return (
      <>
        <ScrollView style={{flex: 1, backgroundColor: 'white'}}>
          {/* ==================================== search bar ================================== */}
          <SearchFeature />
          {/* ================================== akhir search bar =============================== */}
          {/* ====================================== go pay ====================================== */}
          <HomeGoPay />
          {/* ====================================== akhir go pay ================================ */}
          {/* ====================================== main feature ================================ */}
          <HomeMainFeature />
          {/* ====================================== akhir main feature ========================== */}
          {/* ====================================== line ======================================== */}
          <View
            style={{
              height: 17,
              backgroundColor: '#f2f2f4',
              marginTop: 20,
            }}
          />
          {/* ====================================== akhir line ================================== */}
          {/* ====================================== section news ================================ */}
          <GoNews
            onPress={() => this.props.navigation.navigate('News Detail')}
          />
          {/* ====================================== akhir section news ========================= */}
          {/* ====================================== Internal Information Section ========================= */}
          <GoInfo />
          {/* ====================================== Akhir Internal Information Section ========================= */}
          {/* ====================================== go food benner section ================================ */}
          <GoBanner />
          {/* ====================================== akhir go food benner section ========================= */}
          {/* ====================================== Nearby Go-Food ======================================= */}
          <ScrollableProducts />
          {/* ====================================== akhir Nearby Go-Food ================================= */}
        </ScrollView>
        {/* ====================================== navbar ====================================== */}
        <Navbar />
        {/* ====================================== akhir navbar ================================ */}
      </>
    );
  }
}
export default Home;
