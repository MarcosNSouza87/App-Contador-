import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import { AntDesign } from '@expo/vector-icons'; 

const Tab = createBottomTabNavigator();

import HomePage from '../pages/Home';
import ConfigPage from '../pages/Config';

const icons = {
    Home:{
        lib: AntDesign,
        name:'home',
    },
    Settings:{
        lib: AntDesign,
        name:'setting',
    },
}

export default function MainTab(){
    return(
        <Tab.Navigator 
            screenOptions={({ route }) => ({                    
                tabBarIcon: ({ color,size }) => {
                
                    const {lib:Icon,name} = icons[route.name];
                    return <Icon name={name} size={size} color={color}/>;
                },
            })}
            tabBarOptions={{
                style:{
                    backgroundColor: '#001c47',
                },
                activeTintColor: '#ff9500',
                inactiveTintColor: '#799ec3',
            }}      
        >
            <Tab.Screen name="Home" component={HomePage} options={{title:'Home',}}/>
            <Tab.Screen name="Settings" component={ConfigPage} options={{title:'Configurações',}}/>
        </Tab.Navigator>
    )

}