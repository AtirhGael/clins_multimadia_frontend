import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Tab = createNativeStackNavigator();

function StackNavigator() {
    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name="login" component={LoginScreen} options={{
                    headerShown:false
                }} />
                <Tab.Screen name="register" component={RegisterScreen} options={{
                    headerShown:false
                }} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}

export default StackNavigator;