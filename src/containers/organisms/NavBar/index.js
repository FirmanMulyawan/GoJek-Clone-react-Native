/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {View} from 'react-native';
import NavbarIcon from '../../../components/molecules/NavbarIcon';
import {withNavigation} from '@react-navigation/compat';

class Navbar extends Component {
  render() {
    return (
      <View
        style={{
          height: 54,
          flexDirection: 'row',
          backgroundColor: 'white',
        }}>
        <NavbarIcon
          onPress={() => this.props.navigation.navigate('Home')}
          title="Home"
          img={require('../../../assets/icon/home-active.png')}
          active
        />
        <NavbarIcon
          onPress={() => this.props.navigation.navigate('Orders')}
          title="Orders"
          img={require('../../../assets/icon/order.png')}
        />
        <NavbarIcon
          onPress={() => this.props.navigation.navigate()}
          title="Help"
          img={require('../../../assets/icon/help.png')}
        />
        <NavbarIcon
          onPress={() => this.props.navigation.navigate()}
          title="Inbox"
          img={require('../../../assets/icon/inbox.png')}
          active={false}
        />
        <NavbarIcon
          onPress={() => this.props.navigation.navigate()}
          title="Account"
          img={require('../../../assets/icon/account.png')}
        />
      </View>
    );
  }
}

export default withNavigation(Navbar);
