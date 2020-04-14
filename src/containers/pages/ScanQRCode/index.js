/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {Text, View} from 'react-native';
// import {TouchableOpacity} from 'react-native-gesture-handler';
import {RNCamera} from 'react-native-camera';

const IconWithText = props => {
  return (
    <View>
      <View
        style={{
          width: 60,
          height: 60,
          backgroundColor: 'green',
          borderRadius: 30,
        }}
      />
      <Text style={{maxWidth: 70, textAlign: 'center', marginTop: 10}}>
        {props.title}
      </Text>
    </View>
  );
};

const IconAction = () => {
  return (
    <View
      style={{
        width: 35,
        height: 35,
        backgroundColor: 'white',
        borderRadius: 35,
      }}
    />
  );
};

class ScanQRCode extends Component {
  // takePicture = async () => {
  //   if (this.camera) {
  //     const options = {quality: 0.5, base64: true};
  //     const data = await this.camera.takePictureAsync(options);
  //     console.log(data.uri);
  //   }
  // };
  state = {
    barcode: 'More Options',
  };
  render() {
    return (
      <View style={{flex: 1}}>
        <View style={{flex: 1, backgroundColor: 'grey'}}>
          <RNCamera
            ref={ref => {
              this.camera = ref;
            }}
            style={{
              width: '100%',
              height: '100%',
              flex: 1,
              justifyContent: 'flex-end',
              alignItems: 'center',
            }}
            type={RNCamera.Constants.Type.back}
            flashMode={RNCamera.Constants.FlashMode.on}
            androidCameraPermissionOptions={{
              title: 'Permission to use camera',
              message: 'We need your permission to use your camera',
              buttonPositive: 'Ok',
              buttonNegative: 'Cancel',
            }}
            androidRecordAudioPermissionOptions={{
              title: 'Permission to use audio recording',
              message: 'We need your permission to use your audio',
              buttonPositive: 'Ok',
              buttonNegative: 'Cancel',
            }}
            onBarCodeRead={({data}) => {
              console.log(`hallo firman ${data}`);
              this.setState({
                barcode: data,
              });
            }}
          />
          <View
            style={{
              flexDirection: 'row',
              paddingHorizontal: 16,
              marginTop: 16,
              justifyContent: 'space-between',
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
            }}>
            <IconAction />
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                width: 80,
              }}>
              <IconAction />
              <IconAction />
            </View>
            {/* <View
              style={{flex: 0, flexDirection: 'row', justifyContent: 'center'}}>
              <TouchableOpacity
                onPress={this.takePicture.bind(this)}
                style={{
                  flex: 0,
                  backgroundColor: '#fff',
                  borderRadius: 5,
                  padding: 15,
                  paddingHorizontal: 20,
                  alignSelf: 'center',
                  margin: 20,
                }}>
                <Text style={{fontSize: 14}}> SNAP </Text>
              </TouchableOpacity>
            </View> */}
          </View>
        </View>
        <View style={{height: 200, backgroundColor: 'white', padding: 16}}>
          <View style={{alignItems: 'center', marginTop: 8, marginBottom: 18}}>
            <View
              style={{
                width: 40,
                height: 3,
                backgroundColor: '#e0e0e0',
                marginVertical: 1,
              }}
            />
            <View
              style={{
                width: 40,
                height: 3,
                backgroundColor: '#e0e0e0',
                marginVertical: 1,
              }}
            />
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <Text style={{fontSize: 24, fontWeight: 'bold', color: 'black'}}>
              {`${this.state.barcode}`}
            </Text>
            <Text style={{fontSize: 14, color: '#61a756', fontWeight: 'bold'}}>
              SHORTCUT
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'flex-start',
              marginTop: 14,
              width: '100%',
            }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'flex-start',
                width: 160,
                justifyContent: 'space-between',
                paddingRight: 12,
              }}>
              <IconWithText title="Phone Number" />
              <IconWithText title="GoPay Code" />
            </View>
            <View>
              <View style={{width: 1, height: 60, backgroundColor: 'grey'}} />
              <Text style={{flex: 1, paddingLeft: 12, marginTop: -50}}>
                Your recent GoPay.
              </Text>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

export default ScanQRCode;
