import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Image,
    Alert
} from 'react-native';
export default class Signup extends Component {

    constructor(props) {
        super(props);
        state = {
            email: '',
            password: '',
        }
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.logView}>
                    <Image style={styles.imgStyles} source={require('../assets/companyLogo.png')} />
                </View>
                <TouchableOpacity style={styles.signUp} onPress={() => this.props.navigation.navigate('Register')}>
                    <Text style={styles.signUpText}>SIGN UP</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.signIn} onPress={() => this.props.navigation.navigate('LoginComponent')}>
                    <Text style={styles.loginText}>SIGN IN</Text>
                </TouchableOpacity>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#ff5a47',
        alignItems: 'center',
    },
    imgStyles: {
        height: 100, width: 200,
    },
    logView: {
        marginBottom: '30%'
    },
    signUp: {
        backgroundColor: 'white', height: 45,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
        width: 250,
        borderRadius: 20
    },
    signUpText: {
        color: 'black'
    },
    signIn: {
        backgroundColor: '#ecb613', height: 45,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
        width: 250,
        borderRadius: 20
    },
    loginButton: {
        backgroundColor: '#ecb613'
    },
    loginText: {
        color: 'white',
    }
});