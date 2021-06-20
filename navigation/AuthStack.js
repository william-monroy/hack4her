import React, {
    useState,
    useEffect
} from 'react';
import {
    View
} from 'react-native';
import {
    createStackNavigator
} from '@react-navigation/stack';
import SignupScreen from '../screens/SignupScreen';
import LoginScreen from '../screens/LoginScreen';
import OnboardingScreen from '../screens/OnboardingScreen';

import FontAwesome from 'react-native-vector-icons/FontAwesome';

import {
    AsyncStorage
} from 'react-native';

const Stack = createStackNavigator();

const AuthStack = () => {

    const [isFirstLaunch, setIsFirstLaunch] = React.useState(null);
    let routeName;

    useEffect(() => {
        AsyncStorage.getItem('alreadyLaunched').then(value => {
            if (value === null) {
                AsyncStorage.setItem('alreadyLaunched', 'true');
                setIsFirstLaunch(true);
            } else {
                setIsFirstLaunch(false);
            }
        })
    }, [])

    if (isFirstLaunch === null) {
        return null;
      } else if (isFirstLaunch == true) {
        routeName = 'Onboarding';
      } else {
        reouteName = 'Login';
    }

    return (
        <Stack.Navigator initialRouteName={routeName}>
            <Stack.Screen 
                name='Onboarding'
                component={OnboardingScreen}
                options={{header: () => null}}
            />
            <Stack.Screen 
                name='Login'
                component={LoginScreen}
                options={{header: () => null}}
            />
            <Stack.Screen 
                name='Signup'
                component={SignupScreen}
                options={({navigation}) => ({
                    title: '',
                    headerStyle: {
                        backgroundColor: '#f9fafd',
                        shadowColor: '#f9fafd',
                        elevation: 0,
                    },
                    headerLeft: () => (
                        <View style={{marginLeft: 10}} >
                            <FontAwesome.Button 
                                name="long-arrow-left"
                                size={25}
                                backgroundColor="#f9fafd"
                                color ="#333"
                                onPress={() => navigation.navigate('Login')}
                            />
                        </View>
                    ),
                })}
            />
        </Stack.Navigator>
    );
};

export default AuthStack