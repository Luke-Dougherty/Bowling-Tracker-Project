import {createtackNavigator} from 'react-navigation-stack';
import Login from '../screens/login';

const screens = 
{
    Login: 
    {
        screen: Login,
        navigationOptions:
        {
            title: 'Login',
        }
    },
    register:
    {
        screen: Register,
        navigationOptions:
        {
            title: 'Register',
        }
    }
}

const HomeStack = creatStackNavigator(screens,
{
    defaultNavigationOptions:
    {
        headerTintolor: '#444',
        headerStyle: 
        {
            backgroundColor: '#eee', 
            height: 60
        }
    }
});