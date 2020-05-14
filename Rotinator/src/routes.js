import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import Home from './screens/Home/index.js';
import AddRotina from './screens/AddRotina/index.js';
import AddEvento from './screens/AddEvento/index.js';

const AppStack = createStackNavigator();

export default function Routes() {
    return (
        <NavigationContainer>
            <AppStack.Navigator screenOptions={{ headerShown: false }}>
                <AppStack.Screen name="Home" component={Home} />
                <AppStack.Screen name="AddRotina" component={AddRotina} />
                <AppStack.Screen name="AddEvento" component={AddEvento} />
            </AppStack.Navigator>
        </NavigationContainer >
    );
} 