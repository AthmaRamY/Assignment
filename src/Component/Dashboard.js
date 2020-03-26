//SplashScreen :=>  https://github.com/crazycodeboy/react-native-splash-screen
//QrCodeScxanner :=> https://aboutreact.com/react-native-scan-qr-code/

import React, { Component } from 'react';
import { View, Text, StyleSheet, ActivityIndicator, TouchableOpacity } from 'react-native';
// import SplashScreen from 'react-native-splash-screen'
export default class Dashboard extends Component {

    constructor() {
        super()
        this.state = {
            isLoading: false,
            text: '',
        }
    }
    componentDidMount() {
        // SplashScreen.hide();
    }
    static navigationOptions = ({ navigation }) => {
        navigation.title = "HomeComponent"
    }
    render() {
        //Spinner
        if (this.state.isLoading == true) {
            return (
                <View style={{ flex: 1, paddingTop: 50 }}>
                    <ActivityIndicator size="large" color="#0000ff" />
                </View>
            );
        }
        return (
            <View style={styles.mainView}>
                <TouchableOpacity style={{}} onPress={() => this.props.navigation.navigate('ScannerComponent')} >
                    <Text style={styles.textStyles}>QR Scanner</Text>
                </TouchableOpacity>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    mainView: {
        justifyContent: 'center',
        alignItems: 'center', backgroundColor: '#F75736', flex: 1
    },
    textStyles: {
        color: 'white', paddingHorizontal: '5%', paddingVertical: '2%', borderRadius: 30, backgroundColor: '#f8c31d'
    },
})