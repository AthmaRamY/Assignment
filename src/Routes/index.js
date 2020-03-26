import { createStackNavigator, createAppContainer } from 'react-navigation';
import ScannerComponent from '../Component/scannerComponent';
import Dashboard from '../Component/Dashboard';
import LoginComponent from '../Component/login';
import Signup from '../Component/Signup';
import Register from '../Component/Register';


const Route = createStackNavigator(
    {

        ScannerComponent: ScannerComponent,
        // HomeComponent: HomeComponent,
        Dashboard: {
            screen: Dashboard,
            navigationOptions: {
                //  title: 'Login',
                //   headerStyle: {
                //     backgroundColor: '#F75736',
                //   },
                header: null,
                // headerTintColor:'white',
                // header:null

            },
        },
        LoginComponent: {
            screen: LoginComponent,
            navigationOptions: {
                //  title: 'Login',
                //   headerStyle: {
                //     backgroundColor: '#F75736',
                //   },
                header: null,
                // headerTintColor:'white',
                // header:null

            },
        },
        Signup: {
            screen: Signup,
            navigationOptions: {
                //title: 'Home',
                header: null
            },
        },//Register
        Register: {
            screen: Register,
            navigationOptions: {
                //title: 'Home',
                header: null
            },
        },


    },
    {
        initialRouteName: "Signup"
    },

);
const RouterConfig = createAppContainer(Route);

export default RouterConfig;