import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity,
    Image,
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
export default class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
        }
    }
    render() {
        return (
            <View style={styles.container}>
                <ScrollView>
                    <View style={styles.mainView}>
                        <View style={styles.imgView}>
                            <Image  style={styles.imgStyles}
                                source={require('../assets/Logo.png')} />
                        </View>
                        <View style={styles.inputContainer}>
                            <Text style={styles.textStyles}>Name</Text>
                            <TextInput style={styles.inputs}
                                placeholder="Name"
                                keyboardType="email-address"
                                underlineColorAndroid='transparent'
                                placeholderTextColor="white"
                                onChangeText={(email) => this.setState({ email })} />
                        </View>
                        <View style={styles.inputContainer}>
                            <Text style={styles.textStyles}>Username</Text>
                            <TextInput style={styles.inputs}
                                placeholder="Email"
                                keyboardType="email-address"
                                underlineColorAndroid='transparent'
                                placeholderTextColor="white"
                                onChangeText={(email) => this.setState({ email })} />
                        </View>
                        <View style={styles.inputContainer}>
                            <Text style={styles.textStyles}>Password</Text>
                            <TextInput style={styles.inputs}
                                placeholder="Password"
                                keyboardType="email-address"
                                underlineColorAndroid='transparent'
                                placeholderTextColor="white"
                                onChangeText={(email) => this.setState({ email })} />
                        </View>
                        <View style={styles.inputContainer}>
                            <Text style={styles.textStyles}>Confirm Password</Text>
                            <TextInput style={styles.inputs}
                                placeholder="Confirm Password"
                                secureTextEntry={true}
                                underlineColorAndroid='transparent'
                                placeholderTextColor="white"
                                onChangeText={(password) => this.setState({ password })} />
                        </View>
                        <TouchableOpacity style={[styles.buttonContainer, styles.loginButton]}
                            onPress={() => this.props.navigation.navigate('LoginComponent')}>
                            <Text style={styles.loginText}>SIGN UP</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
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
    mainView:{
        justifyContent: 'center',
                        alignItems: 'center', marginTop: '25%'
    },
    imgView:{
        marginBottom: '10%' 
    },
    imgStyles:{
        height: 100, width: 100,
    },
    textStyles:{
        color: '#f8c31d'
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
    buttonContainer: {
        height: 45,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 20,
        width: 250,
        borderRadius: 30,
    },
    loginButton: {
        backgroundColor: '#f8c31d'
    },
    loginText: {
        color: 'white',
    }
});