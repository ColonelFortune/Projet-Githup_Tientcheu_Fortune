import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from './HomeScreen';
import ProfileScreen from './ProfileScreen';
import ProfileScreen1 from './ProfileScreen1';
import ProfileScreen2 from './ProfileScreen2';
import ProfileScreen3 from './ProfileScreen3';
import ProfileScreen4 from './ProfileScreen4';
import ProfileScreenbet from './ProfileScreenbet';


const Tab = createBottomTabNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name="Home" component={HomeScreen} options={{
                    headerShown: false,
                }} />
                <Tab.Screen name="profile" component={ProfileScreen} options={{
                    headerShown: false,
                }} />
                <Tab.Screen name="Profile1" component={ProfileScreen1} options={{
                    headerShown: false,
                }} />
                 <Tab.Screen name="Profile2" component={ProfileScreen2} options={{
                    headerShown: false,
                }} />
                <Tab.Screen name="Profile3" component={ProfileScreen3} options={{
                    headerShown: false,
                }} />
                   <Tab.Screen name="Profile4" component={ProfileScreen4} options={{
                    headerShown: false,
                }} />
                <Tab.Screen name="Profilebet" component={ProfileScreenbet} options={{
                    headerShown: false,
                }} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}