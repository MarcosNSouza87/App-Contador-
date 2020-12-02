import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import MainTab from './stacks/MainTab';
import Home from './pages/Home'

export default function Routes(){
    return(
        <>
        <StatusBar backgroundColor = '#001c47' />
        <NavigationContainer >
            <MainTab/>
        </NavigationContainer>
        </>
    );
}