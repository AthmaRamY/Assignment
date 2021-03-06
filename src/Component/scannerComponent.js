//This is an example code to Scan QR code//
import React, { Component } from 'react';
//import react in our code.
import { Text, View, Linking, ActivityIndicator, TouchableHighlight, PermissionsAndroid, Platform, StyleSheet } from 'react-native';
// import all basic components
import { CameraKitCameraScreen, } from 'react-native-camera-kit';
//import CameraKitCameraScreen we are going to use.

import SplashScreen from 'react-native-splash-screen'

export default class ScannerComponent extends Component {
  static navigationOptions = ({ navigation }) => {
    navigation.title = "ScannerComponent"
  }
  componentDidMount() {
    // do stuff while splash screen is shown
    // After having done stuff (such as async tasks) hide the splash screen
    SplashScreen.hide();
    setTimeout(() => {
      presentState = this.state
      presentState.isLoading = false;
      this.setState(presentState);
    }, 3000);
  }
  constructor() {
    super();
    this.state = {
      //variable to hold the qr value
      qrvalue: '',
      opneScanner: false,
      isLoading: true,
      text: ''

    };
  }
  onOpenlink() {
    //Function to open URL, If scanned 
    Linking.openURL(this.state.qrvalue);
    //Linking used to open the URL in any browser that you have installed
  }
  onBarcodeScan(qrvalue) {
    //called after te successful scanning of QRCode/Barcode
    this.setState({ qrvalue: qrvalue });
    this.setState({ opneScanner: false });
  }
  onOpneScanner() {
    var that = this;
    //To Start Scanning
    if (Platform.OS === 'android') {
      async function requestCameraPermission() {
        try {
          const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.CAMERA, {
            'title': 'CameraExample App Camera Permission',
            'message': 'CameraExample App needs access to your camera '
          }
          )
          if (granted === PermissionsAndroid.RESULTS.GRANTED) {
            //If CAMERA Permission is granted
            that.setState({ qrvalue: '' });
            that.setState({ opneScanner: true });
          } else {
            alert("CAMERA permission denied");
          }
        } catch (err) {
          alert("Camera permission err", err);
          console.warn(err);
        }
      }
      //Calling the camera permission function
      requestCameraPermission();
    } else {
      that.setState({ qrvalue: '' });
      that.setState({ opneScanner: true });
    }
  }

  render() {

    if (this.state.isLoading == true) {
      return (
        <View style={{ flex: 1, paddingTop: 50 }}>
          <ActivityIndicator size="large" color="#0000ff" />
        </View>
      )
    }
    let displayModal;
    //If qrvalue is set then return this view
    if (!this.state.opneScanner) {
      return (
        <View style={styles.container}>
          <Text style={styles.heading}>React Native QR Code Example</Text>
          <Text style={styles.simpleText}>{this.state.qrvalue ? 'Scanned QR Code: ' + this.state.qrvalue : ''}</Text>
          {this.state.qrvalue.includes("http") ?
            <TouchableHighlight
              onPress={() => this.onOpenlink()}
              style={styles.button}>
              <Text style={{ color: '#FFFFFF', fontSize: 12 }}>Open Link</Text>
            </TouchableHighlight>
            : null
          }
          <TouchableHighlight
            onPress={() => this.onOpneScanner()}
            style={styles.button}>
            <Text style={{ color: '#FFFFFF', fontSize: 12 }}>
              Open QR Scanner
                </Text>
          </TouchableHighlight>
        </View>
      );
    }

    return (
      <View style={{ flex: 1 }}>
        <CameraKitCameraScreen
          showFrame={false}
          //Show/hide scan frame
          scanBarcode={true}
          //Can restrict for the QR Code only
          laserColor={'blue'}
          //Color can be of your choice
          frameColor={'yellow'}
          //If frame is visible then frame color
          colorForScannerFrame={'black'}
          //Scanner Frame color
          onReadCode={event =>
            this.onBarcodeScan(event.nativeEvent.codeStringValue)
          }
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F75736'
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#f8c31d',
    padding: 10,
    width: 200,
    borderRadius: 20
  },
  heading: {
    color: 'white',
    alignSelf: 'center',
    padding: 10,
  },
  simpleText: {
    color: 'black',
    fontSize: 20,
    alignSelf: 'center',
    padding: 10,
  }
});