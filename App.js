import 'react-native-gesture-handler';
import React from 'react';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Input from "./components/input";
import Home from "./components/home";
import store from './redux/store';

const Stack = createStackNavigator();
export default function App() {
  return(
    <Provider store = {store}>
    <NavigationContainer>
        <Stack.Navigator initialRouteName="Home_Page">
            <Stack.Screen
                name ="Home_Page"
                component={Home}
                options ={{title:"Home"}}
            />
            <Stack.Screen
                name ="Input_Page"
                component={Input}
            />
        </Stack.Navigator>
    </NavigationContainer>
</Provider>
);
}