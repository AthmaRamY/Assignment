import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity,
    Image, ScrollView,
    Alert
} from 'react-native';
export default class LoginComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        }
    }
    onClickListener = (viewId) => {
        Alert.alert("Alert", "Button pressed " + viewId);
    }
    handleEmail = (email) => {
        this.setState({
            email: email
        })
    }
    handlePassword = (password) => {
        this.setState({
            password: password
        })
    }
    onLoginClick() {
        if (this.state.email === "" || this.state.email === null) {
            alert("Email cannot be empty")
        }
        else if (this.state.password === "" || this.state.password === null) {
            alert("Password cannot be empty")
        } else if (this.state.password.length == 0 || this.state.password.length < 4) {
            alert("Password should contain atleast 4 characters")
        }
        else if (this.state.email.length == 0 || this.state.email.length < 4) {
            alert("Email should contain atleast 4 characters")
        } else if ((this.state.email) == (this.state.password)) {
            alert("success")
            this.props.navigation.navigate('Dashboard');
        }
        else {
            alert("Username and password should be same")
        }
    }

    render() {
        return (
            <View style={styles.mainView}>
                <ScrollView >
                    <View style={styles.container}>
                        <View style={styles.imgView}>
                            <Image
                                style={styles.imgStyles}
                                source={require('../assets/Logo.png')} />
                        </View>
                        <View style={styles.inputContainer}>
                            <Text style={styles.textColor}>Username</Text>
                            <TextInput style={styles.inputs}
                                placeholder="Email"
                                keyboardType="email-address"
                                underlineColorAndroid='transparent'
                                placeholderTextColor="white"
                                value={this.state.email}
                                onChangeText={
                                    (email) => this.handleEmail(email)
                                } />
                        </View>
                        <View style={styles.inputContainer}>
                            <Text style={styles.textColor}>Password</Text>
                            <TextInput style={styles.inputs}
                                placeholder="Password"
                                secureTextEntry={true}
                                underlineColorAndroid='transparent'
                                placeholderTextColor="white"
                                value={this.state.password}
                                onChangeText={
                                    (password) => this.handlePassword(password)
                                } />
                        </View>
                        <TouchableOpacity style={styles.forgotButtonContainer}
                            onPress={() => this.onClickListener('restore_password')}>
                            <Text style={styles.forgotText}>Forgot your password?</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.buttonContainer, styles.loginButton]}
                            onPress={() => this.onLoginClick()}>
                            <Text style={styles.loginText}>LOG IN</Text>
                        </TouchableOpacity>
                        <Text style={styles.orStyles}>OR</Text>
                        <View style={styles.socialMediaView}>
                            <View style={styles.fbView}>
                                <Image
                                    style={styles.logoStyles} source={require('../assets/fb.png')} />
                                <Text style={styles.textStyles}>facebook</Text>
                            </View>
                            <View style={styles.googleview}>
                                <Image style={styles.logoStyles} source={require('../assets/google.png')} />
                                <Text style={styles.textStyles}>google+</Text>
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    mainView: {
        flex: 1, backgroundColor: '#ff5a47', justifyContent: 'center'
    },
    container: {
        flex: 1,
        alignItems: 'center', justifyContent: 'center', marginTop: '20%'
    },
    imgView: {
        marginBottom: '15%'
    },
    imgStyles: {
        height: 100, width: 100,
    },
    textColor: {
        color: '#f8c31d'
    },
    forgotText: {
        textAlign: 'right',
        color: '#f8c31d',
    },
    textStyles: {
        color: 'red', paddingHorizontal: '2%'
    },
    orStyles: {
        color: 'white', marginBottom: '5%'
    },
    logoStyles: {
        height: 20, width: 20,
    },
    inputContainer: {
        borderBottomColor: 'white',
        borderBottomWidth: 1,
        width: 300,
        marginBottom: 10,
        color: 'white'
    },
    inputs: {
        height: 35,
        borderBottomColor: '#FFFFFF',
        color: 'white',
    },
    socialMediaView: {
        width: '100%', flexDirection: 'row', alignItems: 'center',
        justifyContent: 'center'
    },
    fbView: {
        flexDirection: 'row', backgroundColor: 'white', borderRadius: 20,
        width: '30%', alignItems: 'center', justifyContent: 'center',
        paddingVertical: '2%', marginHorizontal: '2%',
    },
    googleview: {
        flexDirection: 'row', backgroundColor: 'white',
        borderRadius: 20, width: '30%', alignItems: 'center', justifyContent: 'center', paddingVertical: '2%'
    },
    buttonContainer: {
        height: 45,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
        width: 250,
        borderRadius: 30,
    },
    forgotButtonContainer: {
        marginBottom: 15,
        width: 300,
        justifyContent: 'flex-end',
    },
    loginButton: {
        backgroundColor: '#f8c31d'
    },
    loginText: {
        color: 'white',
    }
});